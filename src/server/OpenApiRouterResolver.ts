import { Request, RequestHandler } from 'express';
import { ApiControllerFactory } from './ApiControllerFactory';
import { ServerUtils } from './ServerUtils';

/**
 * Information provided by the open api validator when resolving the router.
 */
export interface OpenApiRoute {
    basePath: string;
    expressRoute: string;
    openApiRoute: string;
    method: string;
    pathParams: unknown[];
}

/**
 *
 * It handles the Rosetta specific requests delegating the request to the right api controller method.
 */
export class OpenApiRouterResolver {
    constructor(private readonly apiControllerFactory: ApiControllerFactory) {}

    public static camelize(str: string): string {
        return str
            .trim()
            .replace(/^\w|[A-Z]|\b\w/g, function (word, index) {
                return index === 0 ? word.toLowerCase() : word.toUpperCase();
            })
            .replace(/\s+/g, '');
    }

    public resolver(route: OpenApiRoute): RequestHandler {
        const { serviceMethodName, serviceClassName, method } = this.resolveServiceMethod(route.openApiRoute);
        return ServerUtils.asyncMiddleware(async (req) => {
            const response = await method(req);
            if (!response) {
                throw new Error(`Response is required. Have you implemented ${serviceClassName}.${serviceMethodName}()?`);
            }
            return response;
        });
    }

    public resolveServiceMethod(openApiRoute: string): {
        serviceMethodName: string;
        serviceClassName: string;
        method: (req: Request) => Promise<unknown>;
    } {
        const { serviceName, serviceMethodName } = OpenApiRouterResolver.resolveServiceAndMethodNames(openApiRoute);
        const serviceFactoryName = this.apiControllerFactory.constructor.name;
        const factoryMethod = (this.apiControllerFactory as any)[serviceName].bind(this.apiControllerFactory);
        if (!factoryMethod) {
            throw new Error(`There is no factory method name ${serviceName}. Have you implemented ${serviceFactoryName}.${serviceName}`);
        }
        const service = factoryMethod();
        if (!service) {
            throw new Error(
                `There is no service method name ${serviceName}. Is ${serviceFactoryName}.${serviceName} returning an ${serviceName}ApiService implementation?`,
            );
        }
        const method = service[serviceMethodName].bind(service);
        return { serviceMethodName: serviceMethodName, serviceClassName: service.constructor.name, method };
    }

    public static resolveServiceAndMethodNames(openApiRoute: string): { serviceName: string; serviceMethodName: string } {
        const serviceSplit = openApiRoute.split('/').join(' ').trim();
        const serviceName = serviceSplit.split(' ')[0];
        const serviceMethodName = OpenApiRouterResolver.camelize(serviceSplit);
        return { serviceName, serviceMethodName };
    }
}
