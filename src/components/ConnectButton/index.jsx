import { useMediaQuery } from "@mui/material";
import Button from "../../components/Button";
import useProjectInfo from "../../hooks/useProjectinfo";
import { useWeb3Context, useAddress } from "../../hooks/web3Context";

const ConnectButton = () => {
  const { connect, disconnect } = useWeb3Context();
  const { setNotification } = useProjectInfo();
  const address = useAddress();

  function onConnect() {
    connect().then((msg) => {
      if (msg.type === "error") {
        setNotification(msg);
      }
    });
  }
  let ellipsis = address
    ? (address.slice(0, 7) + "..." + address.substring(address.length - 4)).toUpperCase()
    : "Connect Wallet";

  const md = useMediaQuery("(max-width : 700px)");
  return (
    <Button
      type={"connect"}
      width={md ? "180px" : "244px"}
      height={md ? "45px" : "62px"}
      fontSize={md ? "18px" : "24px"}
      borderRadius={"8px"}
      onClick={() => (address ? disconnect() : onConnect())}
    >
      {ellipsis}
    </Button>
  );
};

export default ConnectButton;
