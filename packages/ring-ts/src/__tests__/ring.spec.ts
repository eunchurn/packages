import { Ring } from "../";

describe("ring buffer test", () => {
    let ring: Ring;
    beforeEach(() => {
        ring = new Ring(10);
    })
    it("push should be return undefined", () => {
        const res = ring.push(1);
        expect(res).toEqual(undefined);
    })
    it("push should change array", () => {
        ring.push(1);
        ring.push(2);
        expect(ring.toArray()).toEqual([1, 2]);
    })
    it("dequeue should change array", () => {
        ring.push(1);
        ring.push(2);
        ring.push(3);
        ring.dequeue();
        expect(ring.toArray()).toEqual([2, 3]);
    })
    it("size should be exact value", () => {
        const shortRing = new Ring(10);
        expect(shortRing.size).toEqual(10);
        const longRing = new Ring(1000);
        expect(longRing.size).toEqual(1000);
    })
    it("count should be exact value", () => {
        expect(ring.count).toEqual(0);
        ring.push(1);
        expect(ring.count).toEqual(1);
    })
    it("isEmpty should be exact value", () => {
        expect(ring.isEmpty).toEqual(true);
        ring.push(1);
        expect(ring.isEmpty).toEqual(false);
    })
    it("isFull should be exact value", () => {
        expect(ring.isFull).toEqual(false);
        for (let i = 0; i < 10; i++) {
            ring.push(i);
        }
        expect(ring.isFull).toEqual(true);
    })
})