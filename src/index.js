import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { GlobalProvider } from "./context/GlobalContext";
import { Web3ContextProvider } from "./hooks/web3Context";
import { ProjectInfoProvider } from "./hooks/useProjectinfo";
import { RefreshContextProvider } from "./context/RefreshContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalProvider>
      <Web3ContextProvider>
        <RefreshContextProvider>
          <ProjectInfoProvider>
            <App />
          </ProjectInfoProvider>
        </RefreshContextProvider>
      </Web3ContextProvider>
    </GlobalProvider>
  </React.StrictMode>
);
