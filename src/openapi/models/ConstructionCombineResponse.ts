/* tslint:disable */
/**
 * ConstructionCombineResponse is returned by `/construction/combine`. The network payload will be sent directly to the `construction/submit` endpoint.
 * @export
 * @interface ConstructionCombineResponse
 */
export interface ConstructionCombineResponse {
    /**
     *
     * @type {string}
     * @memberof ConstructionCombineResponse
     */
    signed_transaction: string;
}

export function ConstructionCombineResponseFromJSON(json: any): ConstructionCombineResponse {
    return ConstructionCombineResponseFromJSONTyped(json, false);
}

export function ConstructionCombineResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConstructionCombineResponse {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        signed_transaction: json['signed_transaction'],
    };
}

export function ConstructionCombineResponseToJSON(value?: ConstructionCombineResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        signed_transaction: value.signed_transaction,
    };
}
