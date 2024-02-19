/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { BrowserRouter, Route, Router } from "react-router-dom";
import { useWeb3Context } from "./hooks/web3Context";

import { Box } from "@mui/material";
import styled from "styled-components";
import Home from "./pages/Home";
import TopBar from "./components/TopBar/TopBar";

import "./App.css";
import "./web3modal.css";
import Notification from "./components/Notification";
import useProjectInfo from "./hooks/useProjectinfo";
import { CustomizeWeb3Modal } from "./utils/CustomWeb3modal";

function App() {
  const { connect, hasCachedProvider, closeModal } = useWeb3Context();

  const { notification, setNotification } = useProjectInfo();
  useEffect(() => {
    if (hasCachedProvider()) {
      // then user DOES have a wallet
      connect().then((msg) => {
        if (msg.type === "error") {
          setNotification(msg);
        }
      });
    } else {
      // then user DOES NOT have a wallet
    }
    // We want to ensure that we are storing the UTM parameters for later, even if the user follows links
    // eslint-disable-next-line react-hooks/exhaustive-deps
    CustomizeWeb3Modal(closeModal);
  }, []);

  return (
    <BrowserRouter>
      <Router
        path="/"
        element={
          <StyledContainer>
            <TopBar />
            <Home />
          </StyledContainer>
        }
      />

      <Notification data={notification} />
    </BrowserRouter>
  );
}

const StyledContainer = styled(Box)`
  position: relative;
  min-height: 100vh;
  width: 100vw;
  overflow-x: hidden;
`;

export default App;
