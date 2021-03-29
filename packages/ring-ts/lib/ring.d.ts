interface Ring {
    push(item: number): void;
    dequeue(): number | undefined;
    forEach(callback: (item: number | undefined) => void): void;
    toArray(): number[];
    /** Is empty
     * @readonly
     * @const {boolean}
     */
    isEmpty: boolean;
    /** Is full
     * @readonly
     * @const {boolean}
     */
    isFull: boolean;
    /** Elements count
     * @readonly
     * @const {number}
     */
    count: number;
    /** Array size
     * @readonly
     * @const {number}
     */
    size: number;
}
/**
 * Ring buffer
 * @constructor
 * @param {number} size ring buffer size
 * @this {Ring}
 * @method `dequeue()` remove last queue element
 * @method `toArray(): number[]` ring buffer to array
 * @method `forEach(callback: (item: number | undefined) => void): void`: Iterative calculation method
 * @author Eunchurn Park
 * @version 0.0.1
 */
export declare const Ring: new (size: number) => Ring;
export {};
//# sourceMappingURL=ring.d.ts.map