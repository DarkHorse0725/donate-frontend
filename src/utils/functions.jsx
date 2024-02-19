import { Box, Skeleton } from "@mui/material";

export async function switchNetwork(id, setNotification) {
  if (id !== 1 && id !== 56) return;
  if (window.ethereum) {
    try {
      // check if the chain to connect to is installed
      await window.ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: id === 56 ? "0x38" : "0x1" }], // chainId must be in hexadecimal numbers
      });
    } catch (error) {
      // This error code indicates that the chain has not been added to MetaMask
      // if it is not, then install it into the user MetaMask
      if (error.code === 4902) {
        try {
          await window.ethereum.request({
            method: "wallet_addEthereumChain",
            params: [
              {
                chainId: id === 56 ? "0x38" : "0x1",
                rpcUrl:
                  id === 56
                    ? "https://data-seed-prebsc-1-s1.binance.org:8545/"
                    : "https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161",
              },
            ],
          });
        } catch (addError) {
          figureError(error, setNotification);
        }
      }
      figureError(error, setNotification);
    }
  } else {
    // if no window.ethereum then MetaMask is not installed
    setNotification({
      type: "error",
      title: "MetaMask is not installed",
      detail: "Please consider installing it: https://metamask.io/download.html",
    });
  }
}

export const figureError = (error, setNotification) => {
  if (error.code === "UNPREDICTABLE_GAS_LIMIT") {
    const list = error.message.split(",");
    for (let i = 0; i < list.length; i++) {
      if (list[i].includes("message") && !list[i].includes("Internal JSON-RPC error")) {
        if (list[i].includes("insufficient funds")) {
          setNotification({
            type: "error",
            title: "Error",
            detail: "Insufficient Funds",
          });
          break;
        }
        let msg = String(list[i]).replaceAll('"', "");
        msg.replaceAll('"\\"', "");
        msg.replaceAll("message:", "");
        msg.replaceAll("}", "");

        setNotification({
          type: "error",
          title: msg.split(":")[1].toUpperCase(),
          detail: msg.split(":").splice(2).join(": "),
        });
        break;
      }
    }
  } else {
    let msg = error.data?.message ?? error.message.split("(")[0];
    if (msg.includes("insufficient funds")) {
      msg = "Insufficient Funds";
    }
    setNotification({ type: "error", title: "Error", detail: msg });
  }
};

export function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export const priceFormat = (str) => {
  const strlist = Number(str).toFixed(14).split(".");
  let c = 0;
  let value = "";
  if (strlist.length > 1) {
    while (strlist[1][c++] === "0");
    const temp = strlist[1].slice(0, c + 4);
    value = strlist[1].substring(temp.length - 5, temp.length - 1);
  }
  return { count: c - 1, value };
};

export const BigNumberFormat = (str) => {
  if (Number(str) >= 1000000000)
    return { num: str / 1000000000, text: "bn", decimals: 9, str: Number(str) };
  else if (Number(str) >= 1000000)
    return { num: str / 1000000, text: "m", decimals: 6, str: Number(str) };
  else if (Number(str) >= 1000)
    return { num: str / 1000, text: "k", decimals: 3, str: Number(str) };
  else return { num: Number(str), text: "", decimals: 0, str: Number(str) };
};

export const getEllipsis = (address) => {
  return address.slice(0, 6) + "..." + address.substring(address.length - 4);
};
export const makeSkeletonComponent = (value, width) => {
  return value !== undefined ? <Box>{value}</Box> : <Skeleton width={width} height={"100%"} />;
};
export const formatZeros = (number) => {
  if (number > 9) return number;
  else return "" + number;
};
