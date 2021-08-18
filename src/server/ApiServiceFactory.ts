import {
    AccountApiService,
    BlockApiService,
    CallApiService,
    ConstructionApiService,
    EventsApiService,
    MempoolApiService,
    NetworkApiService,
    SearchApiService,
} from '../openapi';

/**
 * Main extension point of this Rosetta Typescript sdk.
 *
 * Each blockchain implementation would need provide a service factory class where each service is also implemented.
 *
 * This SDK handles the rest server, controller, request/response processing, and exception handling.
 */
export interface ApiServiceFactory {
    account(): AccountApiService;
    block(): BlockApiService;
    events(): EventsApiService;
    construction(): ConstructionApiService;
    call(): CallApiService;
    mempool(): MempoolApiService;
    network(): NetworkApiService;
    search(): SearchApiService;
}
