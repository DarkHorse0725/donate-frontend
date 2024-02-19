/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */

import styled from "styled-components";
import "aos/dist/aos.css";
import 'react-modal-video/scss/modal-video.scss';

import FanPanel from "./FanPanel";
import { MaticIcon, PlayIcon } from "../../utils/svgs";
import { numberWithCommas } from "../../utils/functions";
import FanList from "./FanList";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Profile from "./Profile";
import Balance from "../../components/Balance";

import ModalVideo from 'react-modal-video'
import { useEffect } from "react";

const Home = () => {
  let fans = [
    {
      id: "@czbinance",
      rank: 1,
      logo: "/images/fans/czbinance.png",
      price: 564545,
      donations: 12745,
      name: "Changpeng Zhao",
    },
    {
      id: "@elonmusk",
      rank: 2,
      logo: "/images/fans/elonmusk.png",
      price: 323212,
      donations: 6568,
      name: "Elon Musk",
    },
    {
      id: "@ivanontech",
      rank: 3,
      logo: "/images/fans/ivanontech.png",
      price: 244756,
      donations: 5755,
      name: "Ivan on Tech",
    },
  ];

  let totalDonations = 0,
    totalRaised = 0;

  for (let i = 0; i < fans.length; i++) {
    totalDonations += fans[i].donations;
    totalRaised += fans[i].price;
  }

  let sortedFans = fans;

  for (let j = 0; j < fans.length; j++) {
    for (let k = j + 1; k < fans.length; k++) {
      if (sortedFans[j].donations < fans[k].donations) {
        let temp = fans[j];
        sortedFans[j] = sortedFans[k];
        sortedFans[k] = temp;
      }
    }
  }

  const [selectedFan, setSelectedFan] = useState(0);
  const [open, setOpen] = useState(false);
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  return (
    <StyledContainer>
      {!open ? (

        <ContentBox>
          <FanPanel
            fans={[sortedFans[1], sortedFans[0], sortedFans[2]]}
          ></FanPanel>
          <ModalVideo isOpen={videoModalOpen} videoId="L61p2uyiMSo" onClose={() => setVideoModalOpen(false)} />
          <VideoPanel className="mt-6">
            <div>
              <VideoSubText>Donations of all teams goes to:</VideoSubText>
              <div className="flex items-center mt-2">
                <div className="w-4 h-4 rounded-full bg-white mr-2 flex justify-center items-center">
                  <img src={"/images/logo.svg"} alt={""} />
                </div>
                <VideoMainTitle>World Wildlife Fund</VideoMainTitle>
              </div>
            </div>
            <div className="w-10 h-10 rounded-full bg-white flex justify-center items-center cursor-pointer" onClick={() => setVideoModalOpen(true)}>
              <div className="ml-[1px]">{PlayIcon}</div>
            </div>
          </VideoPanel>
          <TotalContent className="flex mt-8 mb-[22px]">
            <div className="flex-1 flex flex-col items-center">
              <TotalText>Total Donations</TotalText>
              <BalanceText className="mt-1">
                <Balance value={totalDonations} />
              </BalanceText>
            </div>
            <div className="w-[1px] bg-[#E6E6E6]" />
            <div className="flex-1 flex flex-col items-center">
              <TotalText>Total Raised</TotalText>
              <div className="flex items-center">
                <div className="mr-2 scale-125 text-[#8C44EE]">
                  {MaticIcon}
                </div>
                <BalanceText className="mt-1">
                  <Balance value={totalRaised} />
                </BalanceText>
              </div>
            </div>
          </TotalContent>
          <FanList
            fans={sortedFans}
            setOpen={setOpen}
            setSelectedFan={setSelectedFan}
          />
          <div className="mb-6" />
        </ContentBox>
      ) : (
        ""
      )}
      {open ? (
        // <AnimatePresence>
        // <motion.div
        //   initial={{ opacity: 0, scale: 0 }}
        //   animate={{ opacity: 1, scale: 1 }}
        //   exit={{ opacity: 0, scale: 0.5 }}
        //   transition={{ duration: 0.3 }}
        // >
        <div className="w-full left-0">
          <Profile data={sortedFans[selectedFan]} setOpen={setOpen} />
        </div>
        // </motion.div>
        // </AnimatePresence>
      ) : (
        ""
      )}
    </StyledContainer>
  );
};

const VideoPanel = styled.div`
  border-radius: 16px;
  background-image: url("/images/video.png");
  width: 100%;
  height: 88px;
  background-size: 100% 100%;
  padding: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledContainer = styled.div`
  width: 100%;
  max-width: 390px;
  margin: 0 auto;
  padding: 0 16px;
  position: relative;
`;

const ContentBox = styled.div`
  position: absolute;
  width: calc(100% - 32px);
`;

const VideoSubText = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  display: flex;
  align-items: center;
  letter-spacing: -0.01em;
  color: #ffffff;
`;

const VideoMainTitle = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  /* identical to box height */

  display: flex;
  align-items: center;
  letter-spacing: -0.01em;

  color: #ffffff;
`;

const TotalText = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  /* identical to box height */

  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: -0.01em;

  color: #808080;
`;

const BalanceText = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  /* identical to box height */
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: -0.01em;

  color: #000000;
`;

const TotalContent = styled.div`
  width: calc(100% + 32px) !important;
  margin-left: -16px;
`;

export default Home;
