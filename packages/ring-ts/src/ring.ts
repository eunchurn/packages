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

export const Ring = function (this: Ring, size: number) {
  if (!(this instanceof Ring)) {
    return new Ring(size);
  }

  let _list: number[] | undefined[] = new Array(size);
  let _start = 0;
  let _count = 0;
  let self = this;
  Object.defineProperties(this, {
    isFull: {
      get() {
        return _count === size;
      },
    },
    isEmpty: {
      get() {
        return _count === 0;
      },
    },
    count: {
      get() {
        return _count;
      },
    },
    size: {
      get() {
        return size;
      },
    },
  });
  /** @member {function} */
  function push(item: number) {
    var end = (_start + _count) % size;
    _list[end] = item;
    if (_count === size) {
      _start = (_start + 1) % size;
    } else {
      ++_count;
    }
    return undefined;
  }

  this.push = function () {
    for (var i = 0; i < arguments.length; i++) {
      push(arguments[i]);
    }
  };

  this.dequeue = function () {
    if (this.isEmpty) return undefined;

    const item = _list[_start];
    _list[_start] = undefined;
    _start = (_start + 1) % size;
    --_count;

    return item;
  };
  this.forEach = function (cb) {
    if (!cb) return;

    for (
      var i = _start, count = _count;
      count > 0;
      i = (i + 1) % size, --count
    ) {
      cb(_list[i]);
    }
  };

  this.toArray = function () {
    var arr = new Array(_count);
    var i = 0;
    this.forEach(function (item) {
      arr[i++] = item;
    });

    return arr;
  };
} as any as { new(size: number): Ring };
