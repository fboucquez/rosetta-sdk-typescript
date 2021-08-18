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

import { exists } from '../runtime';
import { NetworkIdentifier, NetworkIdentifierFromJSON, NetworkIdentifierToJSON } from './';

/**
 * A NetworkRequest is utilized to retrieve some data specific exclusively to a NetworkIdentifier.
 * @export
 * @interface NetworkRequest
 */
export interface NetworkRequest {
    /**
     *
     * @type {NetworkIdentifier}
     * @memberof NetworkRequest
     */
    network_identifier: NetworkIdentifier;
    /**
     *
     * @type {object}
     * @memberof NetworkRequest
     */
    metadata?: object;
}

export function NetworkRequestFromJSON(json: any): NetworkRequest {
    return NetworkRequestFromJSONTyped(json, false);
}

export function NetworkRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): NetworkRequest {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        network_identifier: NetworkIdentifierFromJSON(json['network_identifier']),
        metadata: !exists(json, 'metadata') ? undefined : json['metadata'],
    };
}

export function NetworkRequestToJSON(value?: NetworkRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        network_identifier: NetworkIdentifierToJSON(value.network_identifier),
        metadata: value.metadata,
    };
}