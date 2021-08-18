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

import { CallRequest, CallRequestFromJSON, CallRequestToJSON, CallResponse, CallResponseFromJSON, CallResponseToJSON } from '../models';
import * as runtime from '../runtime';

export interface CallOperationRequest {
    callRequest: CallRequest;
}

/**
 * CallApi - controller interface for the server side implementation.
 *
 * @export
 * @interface CallApiController
 */
export class CallApiController<Req extends { body: any } = { body: any }> {
    /**
     *
     * @param service - The service that implements
     */
    constructor(private readonly service: CallApiService) {}

    /**
     * Call invokes an arbitrary, network-specific procedure call with network-specific parameters. The guidance for what this endpoint should or could do is purposely left vague. In Ethereum, this could be used to invoke `eth_call` to implement an entire Rosetta API interface for some smart contract that is not parsed by the implementation creator (like a DEX). This endpoint could also be used to provide access to data that does not map to any Rosetta models instead of requiring an integrator to use some network-specific SDK and call some network-specific endpoint (like surfacing staking parameters). Call is NOT a replacement for implementing Rosetta API endpoints or mapping network-specific data to Rosetta models. Rather, it enables developers to build additional Rosetta API interfaces for things they care about without introducing complexity into a base-level Rosetta implementation. Simply put, imagine that the average integrator will use layered Rosetta API implementations that each surfaces unique data.
     * Make a Network-Specific Procedure Call
     *
     *  @param req - The request object, where the body is a CallRequest
     */
    call(req: Req): Promise<any> {
        return this.service.call(CallRequestFromJSON(req.body)).then(CallResponseToJSON);
    }
}

/**
 * CallApi - service interface for the server side implementation.
 *
 *
 * @export
 * @interface CallApiService
 */
export interface CallApiService {
    /**
     * Call invokes an arbitrary, network-specific procedure call with network-specific parameters. The guidance for what this endpoint should or could do is purposely left vague. In Ethereum, this could be used to invoke `eth_call` to implement an entire Rosetta API interface for some smart contract that is not parsed by the implementation creator (like a DEX). This endpoint could also be used to provide access to data that does not map to any Rosetta models instead of requiring an integrator to use some network-specific SDK and call some network-specific endpoint (like surfacing staking parameters). Call is NOT a replacement for implementing Rosetta API endpoints or mapping network-specific data to Rosetta models. Rather, it enables developers to build additional Rosetta API interfaces for things they care about without introducing complexity into a base-level Rosetta implementation. Simply put, imagine that the average integrator will use layered Rosetta API implementations that each surfaces unique data.
     * Make a Network-Specific Procedure Call
     *
     * requestParameters - the body of the RPC style request.
     */
    call(requestParameters: CallRequest): Promise<CallResponse>;
}

/**
 * CallApi - interface
 *
 * @export
 * @interface CallApiInterface
 */
export interface CallApiInterface {
    /**
     * Call invokes an arbitrary, network-specific procedure call with network-specific parameters. The guidance for what this endpoint should or could do is purposely left vague. In Ethereum, this could be used to invoke `eth_call` to implement an entire Rosetta API interface for some smart contract that is not parsed by the implementation creator (like a DEX). This endpoint could also be used to provide access to data that does not map to any Rosetta models instead of requiring an integrator to use some network-specific SDK and call some network-specific endpoint (like surfacing staking parameters). Call is NOT a replacement for implementing Rosetta API endpoints or mapping network-specific data to Rosetta models. Rather, it enables developers to build additional Rosetta API interfaces for things they care about without introducing complexity into a base-level Rosetta implementation. Simply put, imagine that the average integrator will use layered Rosetta API implementations that each surfaces unique data.
     * @summary Make a Network-Specific Procedure Call
     * @param {CallRequest} callRequest
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CallApiInterface
     */
    callRaw(requestParameters: CallOperationRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<CallResponse>>;

    /**
     * Call invokes an arbitrary, network-specific procedure call with network-specific parameters. The guidance for what this endpoint should or could do is purposely left vague. In Ethereum, this could be used to invoke `eth_call` to implement an entire Rosetta API interface for some smart contract that is not parsed by the implementation creator (like a DEX). This endpoint could also be used to provide access to data that does not map to any Rosetta models instead of requiring an integrator to use some network-specific SDK and call some network-specific endpoint (like surfacing staking parameters). Call is NOT a replacement for implementing Rosetta API endpoints or mapping network-specific data to Rosetta models. Rather, it enables developers to build additional Rosetta API interfaces for things they care about without introducing complexity into a base-level Rosetta implementation. Simply put, imagine that the average integrator will use layered Rosetta API implementations that each surfaces unique data.
     * Make a Network-Specific Procedure Call
     */
    call(requestParameters: CallOperationRequest, initOverrides?: RequestInit): Promise<CallResponse>;
}

/**
 *
 */
export class CallApi extends runtime.BaseAPI implements CallApiInterface {
    /**
     * Call invokes an arbitrary, network-specific procedure call with network-specific parameters. The guidance for what this endpoint should or could do is purposely left vague. In Ethereum, this could be used to invoke `eth_call` to implement an entire Rosetta API interface for some smart contract that is not parsed by the implementation creator (like a DEX). This endpoint could also be used to provide access to data that does not map to any Rosetta models instead of requiring an integrator to use some network-specific SDK and call some network-specific endpoint (like surfacing staking parameters). Call is NOT a replacement for implementing Rosetta API endpoints or mapping network-specific data to Rosetta models. Rather, it enables developers to build additional Rosetta API interfaces for things they care about without introducing complexity into a base-level Rosetta implementation. Simply put, imagine that the average integrator will use layered Rosetta API implementations that each surfaces unique data.
     * Make a Network-Specific Procedure Call
     */
    async callRaw(requestParameters: CallOperationRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<CallResponse>> {
        if (requestParameters.callRequest === null || requestParameters.callRequest === undefined) {
            throw new runtime.RequiredError(
                'callRequest',
                'Required parameter requestParameters.callRequest was null or undefined when calling call.',
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request(
            {
                path: `/call`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: CallRequestToJSON(requestParameters.callRequest),
            },
            initOverrides,
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => CallResponseFromJSON(jsonValue));
    }

    /**
     * Call invokes an arbitrary, network-specific procedure call with network-specific parameters. The guidance for what this endpoint should or could do is purposely left vague. In Ethereum, this could be used to invoke `eth_call` to implement an entire Rosetta API interface for some smart contract that is not parsed by the implementation creator (like a DEX). This endpoint could also be used to provide access to data that does not map to any Rosetta models instead of requiring an integrator to use some network-specific SDK and call some network-specific endpoint (like surfacing staking parameters). Call is NOT a replacement for implementing Rosetta API endpoints or mapping network-specific data to Rosetta models. Rather, it enables developers to build additional Rosetta API interfaces for things they care about without introducing complexity into a base-level Rosetta implementation. Simply put, imagine that the average integrator will use layered Rosetta API implementations that each surfaces unique data.
     * Make a Network-Specific Procedure Call
     */
    async call(requestParameters: CallOperationRequest, initOverrides?: RequestInit): Promise<CallResponse> {
        const response = await this.callRaw(requestParameters, initOverrides);
        return await response.value();
    }
}