import { expect } from 'chai';
import 'mocha';
import { OpenApiRouterResolver } from '../../src';

describe('OpenApiRouterResolver Tests', () => {
    it('camelize', async () => {
        expect(OpenApiRouterResolver.camelize('/account/network')).eq('/Account/Network');
        expect(OpenApiRouterResolver.camelize(' account network')).eq('accountNetwork');
        expect(OpenApiRouterResolver.camelize('account network')).eq('accountNetwork');
        expect(OpenApiRouterResolver.camelize('Account Network')).eq('accountNetwork');
    });

    it('resolveServiceAndMethodNames', async () => {
        expect(OpenApiRouterResolver.resolveServiceAndMethodNames('/network/list')).deep.eq({
            serviceName: 'network',
            serviceMethodName: 'networkList',
        });
    });
});
