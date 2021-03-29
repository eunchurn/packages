"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ring = void 0;
/**
 * Ring buffer
 * @constructor
 * @param {number} size ring buffer size
 * @this {Ring}
 * @method `dequeue()` remove last queue element
 * @method `toArray(): number[]` ring buffer to array
 * @method `forEach(callback: (item: number | undefined) => void): void`: Iterative calculation method
 * @author Eunchurn Park
 * @version 0.0.6
 */
exports.Ring = function (size) {
    if (!(this instanceof exports.Ring)) {
        return new exports.Ring(size);
    }
    var _list = new Array(size);
    var _start = 0;
    var _count = 0;
    // const self = this;
    Object.defineProperties(this, {
        isFull: {
            get: function () {
                return _count === size;
            },
        },
        isEmpty: {
            get: function () {
                return _count === 0;
            },
        },
        count: {
            get: function () {
                return _count;
            },
        },
        size: {
            get: function () {
                return size;
            },
        },
    });
    /** @member {function} */
    function push(item) {
        var end = (_start + _count) % size;
        _list[end] = item;
        if (_count === size) {
            _start = (_start + 1) % size;
        }
        else {
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
        if (this.isEmpty)
            return undefined;
        var item = _list[_start];
        _list[_start] = undefined;
        _start = (_start + 1) % size;
        --_count;
        return item;
    };
    this.forEach = function (cb) {
        if (!cb)
            return;
        for (var i = _start, count = _count; count > 0; i = (i + 1) % size, --count) {
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
};
