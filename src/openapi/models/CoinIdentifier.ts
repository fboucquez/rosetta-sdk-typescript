/* tslint:disable */
/**
 * CoinIdentifier uniquely identifies a Coin.
 * @export
 * @interface CoinIdentifier
 */
export interface CoinIdentifier {
    /**
     * Identifier should be populated with a globally unique identifier of a Coin. In Bitcoin, this identifier would be transaction_hash:index.
     * @type {string}
     * @memberof CoinIdentifier
     */
    identifier: string;
}

export function CoinIdentifierFromJSON(json: any): CoinIdentifier {
    return CoinIdentifierFromJSONTyped(json, false);
}

export function CoinIdentifierFromJSONTyped(json: any, ignoreDiscriminator: boolean): CoinIdentifier {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        identifier: json['identifier'],
    };
}

export function CoinIdentifierToJSON(value?: CoinIdentifier | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        identifier: value.identifier,
    };
}
