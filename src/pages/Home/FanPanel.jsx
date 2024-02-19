/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */

import styled from "styled-components";
import "aos/dist/aos.css";
import { MaticIcon } from "../../utils/svgs";
import { numberWithCommas } from "../../utils/functions";
import ThreeCircles from "../../components/ThreeCircles";
import { useEffect } from "react";

const FanPanel = ({ fans }) => {
  return (
    <div className="flex justify-between px-[9px]">
      {fans.map((data, i) => {
        return (
          <div
            key={i}
            className={`flex flex-col items-center ${
              i !== 1 ? "mt-10" : "mt-0"
            }`}
          >
            <div className="relative">
              <img src={data.logo} alt={""} />
              <div className="absolute left-0 top-0 bg-white rounded-full w-6 h-6 flex justify-center items-center text-sm font-semibold shadow-[0px_4px_4px_rgba(0,0,0,0.1)]">
                {data.rank}
              </div>
              <div className="absolute flex w-full justify-center top-[70px]">
                <ThreeCircles />
              </div>
            </div>
            <div className="flex items-center mt-4 text-sm font-semibold">
              <div className="text-[#8C44EE]">{MaticIcon}</div>
              <PriceTitleBox className="ml-1">
                {numberWithCommas(data.price)}
              </PriceTitleBox>
            </div>
            <Donation>{numberWithCommas(data.donations)} Donations</Donation>
          </div>
        );
      })}
    </div>
  );
};

const PriceTitleBox = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  /* identical to box height */

  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: -0.01em;

  color: #000000;
`;

const Donation = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  /* identical to box height */
  margin-top: 1px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: -0.01em;

  color: #808080;
`;

export default FanPanel;
