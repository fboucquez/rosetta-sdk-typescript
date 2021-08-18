/* tslint:disable */
/**
 * The transaction_identifier uniquely identifies a transaction in a particular network and block or in the mempool.
 * @export
 * @interface TransactionIdentifier
 */
export interface TransactionIdentifier {
    /**
     * Any transactions that are attributable only to a block (ex: a block event) should use the hash of the block as the identifier.
     * @type {string}
     * @memberof TransactionIdentifier
     */
    hash: string;
}

export function TransactionIdentifierFromJSON(json: any): TransactionIdentifier {
    return TransactionIdentifierFromJSONTyped(json, false);
}

export function TransactionIdentifierFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionIdentifier {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        hash: json['hash'],
    };
}

export function TransactionIdentifierToJSON(value?: TransactionIdentifier | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        hash: value.hash,
    };
}
