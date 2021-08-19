"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNetworkIP = void 0;
var lodash_1 = require("lodash");
var net_1 = __importDefault(require("net"));
function getNetworkIP(callback) {
    var socket = net_1.default.createConnection(80, "www.google.com");
    socket.on("connect", function () {
        var socketAddress = socket.address();
        if (lodash_1.isEmpty(socketAddress))
            return;
        var address = socketAddress.address;
        callback(undefined, address);
        socket.end();
    });
    socket.on("error", function (e) {
        callback(e, "error");
    });
}
exports.getNetworkIP = getNetworkIP;
//# sourceMappingURL=getNetworkIP.js.map