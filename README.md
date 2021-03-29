[![Unit Test](https://github.com/eunchurn/ts-utils/actions/workflows/unit-test.yml/badge.svg)](https://github.com/eunchurn/ts-utils/actions/workflows/unit-test.yml)
# @eunchurn ts-utils

## Ring buffer

### Usage

```typescript
import { Ring } from "@eunchurn/ring-ts";

const ring = new Ring(100);

ring.push(1);

console.log(ring.toArray())
// [1]

const { isEmpty, count, isFull, size } = testRing;
console.log({ isEmpty, count, isFull, size });

// { isEmpty: false, count: 1, isFull: false, size: 100 }

ring.dequeue();

console.log(ring.toArray())
// []

console.log({ isEmpty, count, isFull, size });

// { isEmpty: true, count: 0, isFull: false, size: 100 }
```

