import fetch from 'cross-fetch';
import {
    AccountApi,
    AccountApiInterface,
    BlockApi,
    BlockApiInterface,
    CallApi,
    CallApiInterface,
    Configuration,
    ConstructionApi,
    ConstructionApiInterface,
    EventsApi,
    EventsApiInterface,
    FetchAPI,
    MempoolApi,
    MempoolApiInterface,
    Middleware,
    NetworkApi,
    NetworkApiInterface,
    SearchApi,
    SearchApiInterface,
} from '../';

/**
 * Params used to create a client factory.
 */
interface RestClientFactoryParams {
    /**
     * The rest url of the Rosetta service. E.g: http://localhost:8080/
     */
    url: string;

    /**
     * Optional fetch api.
     */
    fetchApi?: FetchAPI;

    /**
     * Middleware for pre/post request customizations.
     */
    middleware?: Middleware[];
}

/**
 * Main class used to create Rosetta rest clients.
 *
 * These rest client would most likely be used for Rosetta e2e testing as this sdk brings server side dependencies (e.g. express) you may not want in a Rosetta client.
 *
 */
export class RosettaRestClientFactory {
    private readonly configuration: Configuration;

    /**
     * Constructor
     *
     * @param configs the config used to tune the client, including url, custom fetch implementation and middleware.
     */
    constructor(configs: RestClientFactoryParams) {
        const fetchApi = configs.fetchApi || (typeof window !== 'undefined' && window.fetch.bind(window)) || fetch;

        this.configuration = new Configuration({
            basePath: configs.url,
            fetchApi: fetchApi as FetchAPI,
            middleware: configs.middleware || [],
        });
    }

    account(): AccountApiInterface {
        return new AccountApi(this.configuration);
    }

    block(): BlockApiInterface {
        return new BlockApi(this.configuration);
    }

    events(): EventsApiInterface {
        return new EventsApi(this.configuration);
    }

    construction(): ConstructionApiInterface {
        return new ConstructionApi(this.configuration);
    }

    call(): CallApiInterface {
        return new CallApi(this.configuration);
    }

    mempool(): MempoolApiInterface {
        return new MempoolApi(this.configuration);
    }

    network(): NetworkApiInterface {
        return new NetworkApi(this.configuration);
    }

    search(): SearchApiInterface {
        return new SearchApi(this.configuration);
    }
}
