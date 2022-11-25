'use strict';

const supertokensProviders = require('..');
const assert = require('assert').strict;

assert.strictEqual(supertokensProviders(), 'Hello from supertokensProviders');
console.info("supertokensProviders tests passed");
