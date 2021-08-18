import { expect } from 'chai';
import { RosettaServer } from '../../src';

describe('RosettaServer Tests', () => {
    it('ROSETTA_API_VERSION', async () => {
        expect(RosettaServer.ROSETTA_API_VERSION).eq('1.4.10');
    });
});
