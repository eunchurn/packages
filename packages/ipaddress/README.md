# `@eunchurn/ipaddress`

![npm](https://img.shields.io/npm/dw/@eunchurn%2Fipaddress) [![npm version](https://badge.fury.io/js/@eunchurn%2Fipaddress.svg)](https://badge.fury.io/js/@eunchurn%2Fipaddress) [![GitHub version](https://badge.fury.io/gh/eunchurn%2Fpackages.svg)](https://badge.fury.io/gh/eunchurn%2Fpackages) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Getting public IP address

## Installation

```sh
yarn add @eunchurn/ipaddress
```

## Usage

### `function getIPAddresses()`

실제 물리적 네트워크 인터페이스의 IP주소를 가져옴 (sync)

```ts
import { getIPAddresses } from "@eunchurn/ipaddress";

const ipAddress = getIPAddresses(); // IP Address
```

### `function getNetworkIP(callback: (error: Error | undefined, data: string) => void)`

`www.google.com`을 연결하는 인터페이스의 IP주소를 가져옴: 이더넷 혹은 Wi-Fi 연결을 동시에 사용하거나, 여러 네트워크 인터페이스가 열려있는 경우 실제 네트워크 주소를 가져옴.

```ts
import { getNetworkIP } from "@eunchurn/ipaddress";

getNetworkIP((error, data) => {
  console.log(data); // IP Address
});
```
