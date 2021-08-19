import { getNetworkIP, getIPAddresses } from "..";

describe("ipaddress", () => {
    it("getIPAddresses should return string array", () => {
        const IPs = getIPAddresses();
        expect(IPs.length).toBeGreaterThanOrEqual(0);
    });
    it("getNetwork should callback", () => {
        getNetworkIP((error, data) => {
            expect(data).toBeTruthy();
            expect(error).toBeFalsy();
        })
    })
});
