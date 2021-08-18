import express, { Express } from 'express';
import * as OpenApiValidator from 'express-openapi-validator';
import { Server } from 'net';
import { join } from 'path';
import * as swagger from 'swagger-ui-express';
import { fileExistsSync } from 'tsconfig-paths/lib/filesystem';
import api from '../../api.json';
import { ApiControllerFactoryImpl, ApiServiceFactory, OpenApiRoute, OpenApiRouterResolver, ServerUtils } from './';

/**
 * Params that allow you running the Rosetta server. The only require param is apiServiceFactory.
 */
export interface RosettaServerParams {
    apiServiceFactory: ApiServiceFactory;
    openApiValidateRequests: boolean;
    openApiValidateResponses: boolean;
    openApiServeDocs: boolean;
    openApiServeSpec: boolean;
    welcomeMessage: string;
    ignorePaths: string[];
    appSetupCallback: (app: Express) => void;
}

/**
 * Default rosetta server params.
 */
const defaultServerParams: Partial<RosettaServerParams> = {
    openApiValidateRequests: true,
    openApiValidateResponses: true,
    openApiServeDocs: true,
    openApiServeSpec: true,
    welcomeMessage: 'Welcome to the Rosetta Server',
    ignorePaths: ['/robots.txt'],
};

const apiSpec = join(__dirname, '../../api.json');
if (!fileExistsSync(apiSpec)) {
    throw new Error(`${apiSpec} does not exist!`);
}

/**
 * Main class of this SDK. A Rosetta implementation should initialize this object and start the server.
 *
 */
export class RosettaServer {
    // The Rosetta api this SDK supports.
    public static ROSETTA_API_VERSION = api.info.version;

    private openApiRouterResolver: OpenApiRouterResolver;
    private app: Express;
    private server: Server | undefined;
    constructor(private readonly params: { apiServiceFactory: ApiServiceFactory } & Partial<RosettaServerParams>) {
        const resolvedParams = { ...defaultServerParams, ...params };
        if (!resolvedParams.apiServiceFactory) {
            throw new Error('apiServiceFactory must be provided!!');
        }

        this.openApiRouterResolver = new OpenApiRouterResolver(new ApiControllerFactoryImpl(resolvedParams.apiServiceFactory));
        const app = express();
        resolvedParams.appSetupCallback?.(app);
        app.use(express.json());
        app.use(express.urlencoded({ extended: false }));
        app.get('/', (req, res) => res.send(resolvedParams.welcomeMessage));
        if (resolvedParams.openApiServeSpec) app.get('/openapi', (req, res) => res.json(api));
        if (resolvedParams.openApiServeDocs) app.use('/api-docs', swagger.serve, swagger.setup(api));
        app.use(ServerUtils.errorHandler());
        app.use(
            OpenApiValidator.middleware({
                operationHandlers: {
                    basePath: __dirname,
                    resolver: (modulePath: string, route: OpenApiRoute): express.RequestHandler => {
                        return this.openApiRouterResolver.resolver(route);
                    },
                },
                ignorePaths: (path: string) => {
                    return resolvedParams.ignorePaths?.includes(path);
                },
                apiSpec: apiSpec,
                validateRequests: resolvedParams.openApiValidateRequests,
                validateResponses: resolvedParams.openApiValidateResponses,
            }),
        );
        this.app = app;
    }
    start(port: number): Promise<void> {
        if (this.server) {
            throw new Error('Server has already started!!!');
        }
        return new Promise<void>((resolve) => {
            this.server = this.app.listen({ port: port }, () => {
                console.log(`🚀 Rosetta server ready and listening at ==> http://localhost:${port}`);
                resolve();
            });
        });
    }

    stop(): Promise<void> {
        if (!this.server) {
            return Promise.resolve();
        }
        return new Promise<void>((resolve) => {
            this.server?.close(() => {
                this.server = undefined;
                resolve();
            });
        });
    }
}
