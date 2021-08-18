import { ErrorRequestHandler, NextFunction, Request, Response } from 'express';
import { ModelError } from '../openapi';

export type AsyncHandler = (req: Request, res: Response) => Promise<unknown>;

/**
 * Server side utility methods.
 */
export class ServerUtils {
    public static asyncMiddleware =
        (fn: AsyncHandler) =>
        (req: Request, res: Response, next: NextFunction): void => {
            try {
                Promise.resolve(fn(req, res))
                    .then((response) => res.json(response))
                    .catch((e) => {
                        // next(e) should do the trick, but for some reason it doesn't on the agent???
                        return ServerUtils.errorHandler()(e, req, res, next);
                    });
            } catch (e) {
                // next(e) should do the trick, but for some reason it doesn't on the agent???
                return ServerUtils.errorHandler()(e, req, res, next);
            }
        };

    public static errorHandler(): ErrorRequestHandler {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        return (err, req, res, next) => {
            const defaultErrorObject: ModelError = {
                code: err.code || 0,
                message: err.message || 'Unknown Error',
                retriable: false,
            };
            return res.status(err.status || 500).json(err.body || defaultErrorObject);
        };
    }
}
