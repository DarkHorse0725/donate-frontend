import React from "react";
import styled from "styled-components";
import { Box } from "@mui/material";
import Tokenomics from "./Tokenomics";

const Footer = () => {
  return (
    <StyledContainer className={"flex flex-col items-center w-full"}>
      <Tokenomics />
      <Infos className={"font-bold font-sm mt-4"}>
        <Box>
          <a href={"https://t.me/funiculartoken"} target={"_blank"} rel="noreferrer">
            Telegram
          </a>
        </Box>
        <Box>Funicular Protocol has no whitepaper</Box>
        <Box>Funicular Protocol has no roadmap</Box>
        <Box>Funicular Protocol is deployed and on its journey</Box>
      </Infos>
      <Box mt={"-5px"}>
        <img src={"/images/footer/footerlogo.png"} alt={""} />
      </Box>
    </StyledContainer>
  );
};

const Infos = styled(Box)`
  > div {
    margin-top: 10px;
    text-align: center;
  }
  > div {
    cursor: pointer;
    transition: all 0.15s;
    :hover {
      transform: scale(1.2);
    }
  }
`;

const StyledContainer = styled(Box)`
  background: rgb(242, 239, 230);
  padding-left: 20px;
  padding-right: 20px;
`;

export default Footer;
