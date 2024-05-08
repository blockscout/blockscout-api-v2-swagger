## blockscout-typescript-fetch

An OpenAPI SDK generated with [typescript-fetch](https://openapi-generator.tech/docs/generators/typescript-fetch).

```npm install blockscout-typescript-fetch```

## Known Issues

### Pagination

The pagination support is lacking in the SDK due to it missing from the ```swagger.yaml```. It is confirmed that the pagination works as expected if the ```next_page_params``` are passed correctly. You can see this in the [Blockscout](https://github.com/blockscout/blockscout) codebase.

Will update in the future. PRs welcome.

### Swagger Definition

The following endpoints are not in the SDK due to the ```swagger.yaml``` being incorrectly defined when using the generator.

- /transactions/{transaction_hash}/state-changes
- /smart-contracts/{address_hash}/methods-read
- /smart-contracts/{address_hash}/methods-read-proxy
- /smart-contracts/{address_hash}/methods-write
- /smart-contracts/{address_hash}/methods-write-proxy
- /smart-contracts/{address_hash}/query-read-method

## SDK Information

This generator creates TypeScript/JavaScript client that utilizes [Fetch API](https://fetch.spec.whatwg.org/). The generated Node module can be used in the following environments:

Environment
* Node.js
* Webpack
* Browserify

Language level
* ES5 - you must have a Promises/A+ library installed
* ES6

Module system
* CommonJS
* ES6 module system

It can be used in both TypeScript and JavaScript. In TypeScript, the definition will be automatically resolved via `package.json`. ([Reference](https://www.typescriptlang.org/docs/handbook/declaration-files/consumption.html))

