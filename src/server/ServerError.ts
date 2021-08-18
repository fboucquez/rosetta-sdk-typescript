import { ModelError } from '../openapi';

/**
 * Generic server error that contains the response status and body to be sent in the http response.
 */
export class ServerError extends Error {
    constructor(message: string, public readonly status: number, public readonly code: string, public readonly body?: unknown) {
        super(message);
    }

    /**
     * It creates a ServerError that Rosseta's error payload.
     *
     * @param modelError the exception to be raised.
     */
    public static rosettaError(modelError: ModelError): ServerError {
        return new ServerError(modelError.message, 500, modelError.message, modelError);
    }
}
