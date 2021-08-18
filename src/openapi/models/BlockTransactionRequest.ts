/* tslint:disable */
/* eslint-disable */
/**
 * Rosetta
 * Build Once. Integrate Your Blockchain Everywhere.
 *
 * The version of the OpenAPI document: 1.4.10
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import {
    BlockIdentifier,
    BlockIdentifierFromJSON,
    BlockIdentifierToJSON,
    NetworkIdentifier,
    NetworkIdentifierFromJSON,
    NetworkIdentifierToJSON,
    TransactionIdentifier,
    TransactionIdentifierFromJSON,
    TransactionIdentifierToJSON,
} from './';

/**
 * A BlockTransactionRequest is used to fetch a Transaction included in a block that is not returned in a BlockResponse.
 * @export
 * @interface BlockTransactionRequest
 */
export interface BlockTransactionRequest {
    /**
     *
     * @type {NetworkIdentifier}
     * @memberof BlockTransactionRequest
     */
    network_identifier: NetworkIdentifier;
    /**
     *
     * @type {BlockIdentifier}
     * @memberof BlockTransactionRequest
     */
    block_identifier: BlockIdentifier;
    /**
     *
     * @type {TransactionIdentifier}
     * @memberof BlockTransactionRequest
     */
    transaction_identifier: TransactionIdentifier;
}

export function BlockTransactionRequestFromJSON(json: any): BlockTransactionRequest {
    return BlockTransactionRequestFromJSONTyped(json, false);
}

export function BlockTransactionRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): BlockTransactionRequest {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        network_identifier: NetworkIdentifierFromJSON(json['network_identifier']),
        block_identifier: BlockIdentifierFromJSON(json['block_identifier']),
        transaction_identifier: TransactionIdentifierFromJSON(json['transaction_identifier']),
    };
}

export function BlockTransactionRequestToJSON(value?: BlockTransactionRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        network_identifier: NetworkIdentifierToJSON(value.network_identifier),
        block_identifier: BlockIdentifierToJSON(value.block_identifier),
        transaction_identifier: TransactionIdentifierToJSON(value.transaction_identifier),
    };
}