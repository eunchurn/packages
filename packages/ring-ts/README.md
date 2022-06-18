# [`@eunchurn/ring-ts`](https://github.com/eunchurn/packages/packages/698042)

![npm](https://img.shields.io/npm/dw/@eunchurn%2Fring-ts) [![npm version](https://badge.fury.io/js/@eunchurn%2Fring-ts.svg)](https://badge.fury.io/js/@eunchurn%2Fring-ts) [![GitHub version](https://badge.fury.io/gh/eunchurn%2Fpackages.svg)](https://badge.fury.io/gh/eunchurn%2Fpackages) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Ring buffer

## Usage

```typescript
import { Ring } from "@eunchurn/ring-ts";

const ring = new Ring(100);

ring.push(1);

console.log(ring.toArray());
// [1]

const { isEmpty, count, isFull, size } = testRing;
console.log({ isEmpty, count, isFull, size });

// { isEmpty: false, count: 1, isFull: false, size: 100 }

ring.dequeue();

console.log(ring.toArray());
// []

console.log({ isEmpty, count, isFull, size });

// { isEmpty: true, count: 0, isFull: false, size: 100 }
```
