/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from "react";

const defaultVal = {
  pending: false,
  setPending: () => {},
  notification: null,
  setNotification: () => {},
  curPage: 0,
  setCurPage: () => {},
};

export const ProjectInfoContext = React.createContext(defaultVal);

export default function useProjectInfo() {
  return React.useContext(ProjectInfoContext);
}

export function ProjectInfoProvider({ children }) {
  const [pending, setPending] = useState(false);
  const [notification, setNotification] = useState(null);
  const [curPage, setCurPage] = useState(0);

  return (
    <ProjectInfoContext.Provider
      value={{
        pending,
        setPending,
        notification,
        setNotification,
        curPage,
        setCurPage,
      }}
      children={children}
    />
  );
}
