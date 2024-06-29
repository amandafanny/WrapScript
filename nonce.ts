import { account, publicClient } from "./config";

const transactionCount = await publicClient.getTransactionCount({
  address: account.address,
});
console.log("transactionCount", account.address, transactionCount);
