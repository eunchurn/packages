"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getIPAddresses = void 0;
var os_1 = __importDefault(require("os"));
var lodash_1 = require("lodash");
console.log(os_1.default);
var networkInterfaces = os_1.default.networkInterfaces();
function getIPAddresses() {
    var ip = [];
    for (var devName in networkInterfaces) {
        var iface = networkInterfaces[devName];
        if (iface === undefined)
            return ["0.0.0.0"];
        var ipaddress = lodash_1.compact(iface.map(function (alias) {
            if (alias.family === "IPv4" && alias.address !== "127.0.0.1" && !alias.internal) {
                return alias.address;
            }
            return null;
        }));
        if (lodash_1.isEmpty(ipaddress))
            continue;
        ip.push(ipaddress[0]);
    }
    if (lodash_1.isEmpty(ip))
        return ["0.0.0.0"];
    return ip;
}
exports.getIPAddresses = getIPAddresses;
//# sourceMappingURL=getIPAddresses.js.map