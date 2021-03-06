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
    MetadataRequest,
    MetadataRequestFromJSON,
    MetadataRequestToJSON,
    NetworkListResponse,
    NetworkListResponseFromJSON,
    NetworkListResponseToJSON,
    NetworkOptionsResponse,
    NetworkOptionsResponseFromJSON,
    NetworkOptionsResponseToJSON,
    NetworkRequest,
    NetworkRequestFromJSON,
    NetworkRequestToJSON,
    NetworkStatusResponse,
    NetworkStatusResponseFromJSON,
    NetworkStatusResponseToJSON,
} from '../models';
import * as runtime from '../runtime';

export interface NetworkListRequest {
    metadataRequest: MetadataRequest;
}

export interface NetworkOptionsRequest {
    networkRequest: NetworkRequest;
}

export interface NetworkStatusRequest {
    networkRequest: NetworkRequest;
}

/**
 * NetworkApi - controller interface for the server side implementation.
 *
 * @export
 * @interface NetworkApiController
 */
export class NetworkApiController<Req extends { body: any } = { body: any }> {
    /**
     *
     * @param service - The service that implements
     */
    constructor(private readonly service: NetworkApiService) {}

    /**
     * This endpoint returns a list of NetworkIdentifiers that the Rosetta server supports.
     * Get List of Available Networks
     *
     *  @param req - The request object, where the body is a MetadataRequest
     */
    networkList(req: Req): Promise<any> {
        return this.service.networkList(MetadataRequestFromJSON(req.body)).then(NetworkListResponseToJSON);
    }

    /**
     * This endpoint returns the version information and allowed network-specific types for a NetworkIdentifier. Any NetworkIdentifier returned by /network/list should be accessible here. Because options are retrievable in the context of a NetworkIdentifier, it is possible to define unique options for each network.
     * Get Network Options
     *
     *  @param req - The request object, where the body is a NetworkRequest
     */
    networkOptions(req: Req): Promise<any> {
        return this.service.networkOptions(NetworkRequestFromJSON(req.body)).then(NetworkOptionsResponseToJSON);
    }

    /**
     * This endpoint returns the current status of the network requested. Any NetworkIdentifier returned by /network/list should be accessible here.
     * Get Network Status
     *
     *  @param req - The request object, where the body is a NetworkRequest
     */
    networkStatus(req: Req): Promise<any> {
        return this.service.networkStatus(NetworkRequestFromJSON(req.body)).then(NetworkStatusResponseToJSON);
    }
}

/**
 * NetworkApi - service interface for the server side implementation.
 *
 *
 * @export
 * @interface NetworkApiService
 */
export interface NetworkApiService {
    /**
     * This endpoint returns a list of NetworkIdentifiers that the Rosetta server supports.
     * Get List of Available Networks
     *
     * requestParameters - the body of the RPC style request.
     */
    networkList(requestParameters: MetadataRequest): Promise<NetworkListResponse>;

    /**
     * This endpoint returns the version information and allowed network-specific types for a NetworkIdentifier. Any NetworkIdentifier returned by /network/list should be accessible here. Because options are retrievable in the context of a NetworkIdentifier, it is possible to define unique options for each network.
     * Get Network Options
     *
     * requestParameters - the body of the RPC style request.
     */
    networkOptions(requestParameters: NetworkRequest): Promise<NetworkOptionsResponse>;

    /**
     * This endpoint returns the current status of the network requested. Any NetworkIdentifier returned by /network/list should be accessible here.
     * Get Network Status
     *
     * requestParameters - the body of the RPC style request.
     */
    networkStatus(requestParameters: NetworkRequest): Promise<NetworkStatusResponse>;
}

/**
 * NetworkApi - interface
 *
 * @export
 * @interface NetworkApiInterface
 */
export interface NetworkApiInterface {
    /**
     * This endpoint returns a list of NetworkIdentifiers that the Rosetta server supports.
     * @summary Get List of Available Networks
     * @param {MetadataRequest} metadataRequest
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NetworkApiInterface
     */
    networkListRaw(requestParameters: NetworkListRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<NetworkListResponse>>;

    /**
     * This endpoint returns a list of NetworkIdentifiers that the Rosetta server supports.
     * Get List of Available Networks
     */
    networkList(requestParameters: NetworkListRequest, initOverrides?: RequestInit): Promise<NetworkListResponse>;

    /**
     * This endpoint returns the version information and allowed network-specific types for a NetworkIdentifier. Any NetworkIdentifier returned by /network/list should be accessible here. Because options are retrievable in the context of a NetworkIdentifier, it is possible to define unique options for each network.
     * @summary Get Network Options
     * @param {NetworkRequest} networkRequest
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NetworkApiInterface
     */
    networkOptionsRaw(
        requestParameters: NetworkOptionsRequest,
        initOverrides?: RequestInit,
    ): Promise<runtime.ApiResponse<NetworkOptionsResponse>>;

    /**
     * This endpoint returns the version information and allowed network-specific types for a NetworkIdentifier. Any NetworkIdentifier returned by /network/list should be accessible here. Because options are retrievable in the context of a NetworkIdentifier, it is possible to define unique options for each network.
     * Get Network Options
     */
    networkOptions(requestParameters: NetworkOptionsRequest, initOverrides?: RequestInit): Promise<NetworkOptionsResponse>;

    /**
     * This endpoint returns the current status of the network requested. Any NetworkIdentifier returned by /network/list should be accessible here.
     * @summary Get Network Status
     * @param {NetworkRequest} networkRequest
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NetworkApiInterface
     */
    networkStatusRaw(
        requestParameters: NetworkStatusRequest,
        initOverrides?: RequestInit,
    ): Promise<runtime.ApiResponse<NetworkStatusResponse>>;

    /**
     * This endpoint returns the current status of the network requested. Any NetworkIdentifier returned by /network/list should be accessible here.
     * Get Network Status
     */
    networkStatus(requestParameters: NetworkStatusRequest, initOverrides?: RequestInit): Promise<NetworkStatusResponse>;
}

/**
 *
 */
export class NetworkApi extends runtime.BaseAPI implements NetworkApiInterface {
    /**
     * This endpoint returns a list of NetworkIdentifiers that the Rosetta server supports.
     * Get List of Available Networks
     */
    async networkListRaw(
        requestParameters: NetworkListRequest,
        initOverrides?: RequestInit,
    ): Promise<runtime.ApiResponse<NetworkListResponse>> {
        if (requestParameters.metadataRequest === null || requestParameters.metadataRequest === undefined) {
            throw new runtime.RequiredError(
                'metadataRequest',
                'Required parameter requestParameters.metadataRequest was null or undefined when calling networkList.',
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request(
            {
                path: `/network/list`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: MetadataRequestToJSON(requestParameters.metadataRequest),
            },
            initOverrides,
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => NetworkListResponseFromJSON(jsonValue));
    }

    /**
     * This endpoint returns a list of NetworkIdentifiers that the Rosetta server supports.
     * Get List of Available Networks
     */
    async networkList(requestParameters: NetworkListRequest, initOverrides?: RequestInit): Promise<NetworkListResponse> {
        const response = await this.networkListRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * This endpoint returns the version information and allowed network-specific types for a NetworkIdentifier. Any NetworkIdentifier returned by /network/list should be accessible here. Because options are retrievable in the context of a NetworkIdentifier, it is possible to define unique options for each network.
     * Get Network Options
     */
    async networkOptionsRaw(
        requestParameters: NetworkOptionsRequest,
        initOverrides?: RequestInit,
    ): Promise<runtime.ApiResponse<NetworkOptionsResponse>> {
        if (requestParameters.networkRequest === null || requestParameters.networkRequest === undefined) {
            throw new runtime.RequiredError(
                'networkRequest',
                'Required parameter requestParameters.networkRequest was null or undefined when calling networkOptions.',
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request(
            {
                path: `/network/options`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: NetworkRequestToJSON(requestParameters.networkRequest),
            },
            initOverrides,
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => NetworkOptionsResponseFromJSON(jsonValue));
    }

    /**
     * This endpoint returns the version information and allowed network-specific types for a NetworkIdentifier. Any NetworkIdentifier returned by /network/list should be accessible here. Because options are retrievable in the context of a NetworkIdentifier, it is possible to define unique options for each network.
     * Get Network Options
     */
    async networkOptions(requestParameters: NetworkOptionsRequest, initOverrides?: RequestInit): Promise<NetworkOptionsResponse> {
        const response = await this.networkOptionsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * This endpoint returns the current status of the network requested. Any NetworkIdentifier returned by /network/list should be accessible here.
     * Get Network Status
     */
    async networkStatusRaw(
        requestParameters: NetworkStatusRequest,
        initOverrides?: RequestInit,
    ): Promise<runtime.ApiResponse<NetworkStatusResponse>> {
        if (requestParameters.networkRequest === null || requestParameters.networkRequest === undefined) {
            throw new runtime.RequiredError(
                'networkRequest',
                'Required parameter requestParameters.networkRequest was null or undefined when calling networkStatus.',
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request(
            {
                path: `/network/status`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: NetworkRequestToJSON(requestParameters.networkRequest),
            },
            initOverrides,
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => NetworkStatusResponseFromJSON(jsonValue));
    }

    /**
     * This endpoint returns the current status of the network requested. Any NetworkIdentifier returned by /network/list should be accessible here.
     * Get Network Status
     */
    async networkStatus(requestParameters: NetworkStatusRequest, initOverrides?: RequestInit): Promise<NetworkStatusResponse> {
        const response = await this.networkStatusRaw(requestParameters, initOverrides);
        return await response.value();
    }
}
