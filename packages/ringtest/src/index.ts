import { Ring } from "@eunchurn/ring-ts";

const testRing = new Ring(20);
let i = 0;
setInterval(() => {
  testRing.push(i++);

  // console.log(testRing.toArray());
  // testRing.dequeue();
  console.log(testRing.toArray());
  const { isEmpty, count, isFull, size } = testRing;

  console.log({ isEmpty, count, isFull, size });
}, 1000);
