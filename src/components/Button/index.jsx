import React from "react";
import styled from "styled-components";
import { Box } from "@mui/material";

const Button = ({ type, children, disabled, onClick, className }) => {
  return (
    <>
      {type === "primary" ? (
        <PrimaryButton type={type} disabled={disabled} onClick={onClick} className={className}>
          {children}
        </PrimaryButton>
      ) : type === "secondary" ? (
        <SecondaryButton type={type} disabled={disabled} onClick={onClick} className={className}>
          <Box>{children}</Box>
        </SecondaryButton>
      ) : (
        ""
      )}
    </>
  );
};

const BaseButton = styled.button`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  width: 149px;
  height: 63px;
  border-radius: 10px;
  font-family: "Inter";
  cursor: pointer;
  transition: all 0.3s;
  :disabled {
    opacity: 0.8;
    cursor: not-allowed;
  }
`;

const PrimaryButton = styled(BaseButton)`
  border: 1px solid #008df2;
  :hover:not([disabled]) {
    background: white !important;
    color: #008df2 !important;
  }
`;

const SecondaryButton = styled(BaseButton)`
  border: 1px solid black;
  // :hover:not([disabled]) {
  //   background: white !important;
  //   color: black !important;
  // }
`;
export default Button;
