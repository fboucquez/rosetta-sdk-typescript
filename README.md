<p align="center">
  <a href="https://www.rosetta-api.org">
    <img width="90%" alt="Rosetta" src="https://www.rosetta-api.org/img/rosetta_header.png">
  </a>
</p>
<h3 align="center">
   Rosetta SDK
</h3>
<p align="center">
Typescript SDK to create and interact with Rosetta API implementations (WORK IN PROGRESS!)
</p>

[![Version](https://img.shields.io/npm/v/rosetta-sdk-typescript.svg)](https://npmjs.org/package/rosetta-sdk-typescript)
[![Downloads/week](https://img.shields.io/npm/dw/rosetta-sdk-typescript.svg)](https://npmjs.org/package/rosetta-sdk-typescript)
[![License](https://img.shields.io/npm/l/rosetta-sdk-typescript.svg)](https://github.com/fboucquez/rosetta-sdk-typescript/blob/master/package.json)
[![Build Status](https://travis-ci.com/fboucquez/rosetta-sdk-typescript.svg?branch=main)](https://travis-ci.com/fboucquez/rosetta-sdk-typescript)
[![Coverage Status](https://coveralls.io/repos/github/fboucquez/rosetta-sdk-typescript/badge.svg?branch=main)](https://coveralls.io/github/fboucquez/rosetta-sdk-typescript?branch=main)
[![Api Doc](https://img.shields.io/badge/api-doc-blue.svg)](https://fboucquez.github.io/rosetta-sdk-typescript/)

## Overview
The `rosetta-sdk-typescript` provides an easy to use and extend Express server ready to serve your Rosetta typescript implementation for your blockchain.

Much of the code in this repository is generated from the [rosetta-specifications](https://github.com/coinbase/rosetta-specifications).

## Documentation
Before diving into the SDK, we recommend taking a look at the Rosetta API Docs:

* [Overview](https://www.rosetta-api.org/docs/welcome.html)
* [Data API](https://www.rosetta-api.org/docs/data_api_introduction.html)
* [Construction API](https://www.rosetta-api.org/docs/construction_api_introduction.html)

## Packages
* [OpenApi](src/openapi): Auto-generated Rosetta types, including api clients and server service extension points. Don't modify this code!
* [Client](src/client): Low-level communication with any Rosetta server. Main class is `RosettaRestClientFactory`.
* [Server](src/server): Simplified Rosetta API server development. Main class is `RosettaServer`. This SDK uses and [Express](https://expressjs.com/) server integrated with [express-openapi-validator](https://github.com/cdimascio/express-openapi-validator).

This current SDK implementation is not complete, most GO's sdk [packages](https://github.com/coinbase/rosetta-sdk-go/blob/master/README.md#packages) should be implemented in typescript.

## Usage

Install this package:

```
npm install rosetta-sdk-typescript@alpha
```

The following script shows how to create a Rosetta Express server:

```typescript
import { RosettaServer } from './server';

// The factory you need to provide that creates the services connecting to your blockchain client/node
const apiServiceFactory = new MyBlockchainApiServiceFactory(); 

new RosettaServer({ apiServiceFactory }).start(8080).catch((e) => {
    console.error(e);
});
```

The following script shows how to create a Rosetta network client:

```typescript
import { RosettaRestClientFactory } from 'rosetta-sdk-typescript';

const restClientFactory = new RosettaRestClientFactory({
    url: 'http://localhost:8080',
});

const networkClient = restClientFactory.network();
const networkList = await networkClient.networkList({
    metadataRequest: {},
});
console.log(JSON.stringify(networkList, null, 2));
```

## Development
* `npm install` to install dependencies
* `npm run gen` to generate types and helpers
* `npm test` to run tests
* `npm style:fix` to pretty, index, and lint the source code (including generated code)

## License
This project is available open source under the terms of the [Apache 2.0 License](https://opensource.org/licenses/Apache-2.0).

© 2021 Fernando Boucquez
