import { Aptos, AptosConfig, Network } from "@aptos-labs/ts-sdk"
import {formatUnits } from "viem"

const config = new AptosConfig({
  network: Network.TESTNET
});

const client = new Aptos(config);

console.log(formatUnits(BigInt(await client.getAccountAPTAmount({
  accountAddress: "0x1"
})), 8).toString(), "APT");