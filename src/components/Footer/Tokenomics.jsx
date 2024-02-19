import React from "react";
import styled from "styled-components";
import { Box } from "@mui/material";
import useTokenInfo from "../../hooks/useTokenInfo";
import { numberWithCommas } from "../../utils/functions";

const Tokenomics = () => {
  const { burnAmount, totalSupply } = useTokenInfo();
  return (
    <StyledContainer>
      <Box className={"text-center font-lg"}>Tokenomics</Box>
      <Box className={"flex justify-between"}>
        <Box>
          <Box className={"tokenomics-font-lg font-bold"}>10% Tax</Box>
          <Box className={"font-sm font-bold"}>
            8% Yield Protocol
            <br />
            1% Liquidity
            <br />
            1% Script ETH
          </Box>
        </Box>
        <Box>
          <Box className={"tokenomics-font-lg font-bold"}>1,000,000 Funicular</Box>
          <Box className={"font-sm font-bold"}>
            {numberWithCommas(burnAmount.toFixed(0))} Burnt
            <br />
            {numberWithCommas((totalSupply - burnAmount).toFixed(0))} Available
          </Box>
        </Box>
        <Box>
          <Box className={"tokenomics-font-lg font-bold"}>Fair Launch</Box>
          <Box className={"font-sm font-bold"}>No Presale</Box>
        </Box>
      </Box>
    </StyledContainer>
  );
};

const StyledContainer = styled(Box)`
  margin-top: -20px;
  background: #dd6c6c;
  width: 100%;
  max-width: 836px;
  border-radius: 12px;
  padding: 20px 32px 45px 32px;
  > div:nth-child(2) {
    padding-left: 36px;
  }
  color: white;
  @media screen and (max-width: 800px) {
    padding-left: 20px;
    padding-right: 20px;
    > div:nth-child(2) {
      padding-left: 0px;
    }
  }
  @media screen and (max-width: 600px) {
    > div:nth-child(2) {
      flex-direction: column;
      align-items: center;
      > div {
        width: 100%;
        max-width: 250px;
        margin-top: 20px;
      }
    }
  }
`;

export default Tokenomics;
