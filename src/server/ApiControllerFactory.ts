import {
    AccountApiController,
    BlockApiController,
    CallApiController,
    ConstructionApiController,
    EventsApiController,
    MempoolApiController,
    NetworkApiController,
    SearchApiController,
} from '../openapi';
import { ApiServiceFactory } from './ApiServiceFactory';

export interface ApiControllerFactory {
    account(): AccountApiController;
    block(): BlockApiController;
    events(): EventsApiController;
    construction(): ConstructionApiController;
    call(): CallApiController;
    mempool(): MempoolApiController;
    network(): NetworkApiController;
    search(): SearchApiController;
}

/**
 * Default implementation of the ApiControllerFactory.
 *
 * The implementation uses
 */
export class ApiControllerFactoryImpl implements ApiControllerFactory {
    constructor(private readonly apiServiceFactory: ApiServiceFactory) {}

    account(): AccountApiController {
        return new AccountApiController(this.apiServiceFactory.account());
    }

    block(): BlockApiController {
        return new BlockApiController(this.apiServiceFactory.block());
    }

    call(): CallApiController {
        return new CallApiController(this.apiServiceFactory.call());
    }

    construction(): ConstructionApiController {
        return new ConstructionApiController(this.apiServiceFactory.construction());
    }

    events(): EventsApiController {
        return new EventsApiController(this.apiServiceFactory.events());
    }

    mempool(): MempoolApiController {
        return new MempoolApiController(this.apiServiceFactory.mempool());
    }

    network(): NetworkApiController {
        return new NetworkApiController(this.apiServiceFactory.network());
    }

    search(): SearchApiController {
        return new SearchApiController(this.apiServiceFactory.search());
    }
}
