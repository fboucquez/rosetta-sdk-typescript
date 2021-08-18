/* tslint:disable */
/**
 * CallResponse contains the result of a `/call` invocation.
 * @export
 * @interface CallResponse
 */
export interface CallResponse {
    /**
     * Result contains the result of the `/call` invocation. This result will not be inspected or interpreted by Rosetta tooling and is left to the caller to decode.
     * @type {object}
     * @memberof CallResponse
     */
    result: object;
    /**
     * Idempotent indicates that if `/call` is invoked with the same CallRequest again, at any point in time, it will return the same CallResponse. Integrators may cache the CallResponse if this is set to true to avoid making unnecessary calls to the Rosetta implementation. For this reason, implementers should be very conservative about returning true here or they could cause issues for the caller.
     * @type {boolean}
     * @memberof CallResponse
     */
    idempotent: boolean;
}

export function CallResponseFromJSON(json: any): CallResponse {
    return CallResponseFromJSONTyped(json, false);
}

export function CallResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CallResponse {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        result: json['result'],
        idempotent: json['idempotent'],
    };
}

export function CallResponseToJSON(value?: CallResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        result: value.result,
        idempotent: value.idempotent,
    };
}
