"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var __1 = require("../");
describe("ring buffer test", function () {
    var ring;
    beforeEach(function () {
        ring = new __1.Ring(10);
    });
    it("push should be return undefined", function () {
        var res = ring.push(1);
        expect(res).toEqual(undefined);
    });
    it("push should change array", function () {
        ring.push(1);
        ring.push(2);
        expect(ring.toArray()).toEqual([1, 2]);
    });
    it("dequeue should change array", function () {
        ring.push(1);
        ring.push(2);
        ring.push(3);
        ring.dequeue();
        expect(ring.toArray()).toEqual([2, 3]);
    });
    it("size should be exact value", function () {
        var shortRing = new __1.Ring(10);
        expect(shortRing.size).toEqual(10);
        var longRing = new __1.Ring(1000);
        expect(longRing.size).toEqual(1000);
    });
    it("count should be exact value", function () {
        expect(ring.count).toEqual(0);
        ring.push(1);
        expect(ring.count).toEqual(1);
    });
    it("isEmpty should be exact value", function () {
        expect(ring.isEmpty).toEqual(true);
        ring.push(1);
        expect(ring.isEmpty).toEqual(false);
    });
    it("isFull should be exact value", function () {
        expect(ring.isFull).toEqual(false);
        for (var i = 0; i < 10; i++) {
            ring.push(i);
        }
        expect(ring.isFull).toEqual(true);
    });
});
