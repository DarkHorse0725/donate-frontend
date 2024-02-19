/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */

import styled from "styled-components";
import "aos/dist/aos.css";
import { MaticIcon } from "../../utils/svgs";
import { numberWithCommas } from "../../utils/functions";
import Button from "../../components/Button";

const FanList = ({ fans, setOpen, setSelectedFan }) => {
  return (
    <FanListBox>
      {fans.map((data, i) => {
        return (
          <div
            key={i}
            className={`flex items-center justify-between h-[88px] ${
              i !== fans.length - 1 ? "border-b border-[#E6E6E6]" : ""
            }`}
          >
            <div className="flex items-center font-medium">
              <NoText className="text-[#808080] w-4">{i + 1}</NoText>
              <div className="ml-2 mr-4">
                <img src={data.logo} alt={""} className="w-10 h-10" />
              </div>
              <div>
                <DataName>{data.name}</DataName>
                <div className="flex items-center mt-2">
                  <img className="ml-[-1px]" src={"/images/Teammate avatars.svg"} alt="" />
                  <DonationText>
                    {numberWithCommas(data.donations)} ·{" "}
                  </DonationText>
                  <div className="flex items-center ml-1">
                    <div className="text-[#8C44EE]">{MaticIcon}</div>
                    <PriceText className="ml-1">
                      {numberWithCommas(data.price)}
                    </PriceText>
                  </div>
                </div>
              </div>
            </div>
            <Button
              type={"primary"}
              className="bg-[#008DF2] rounded-[40px] text-white text-sm w-[61px] h-8 font-semibold"
              onClick={() => {
                setOpen(true);
                setSelectedFan(i);
              }}
            >
              Join
            </Button>
          </div>
        );
      })}
    </FanListBox>
  );
};

const FanListBox = styled.div`
  padding-top: 1px;
`

const DataName = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  /* identical to box height */

  display: flex;
  align-items: center;
  letter-spacing: -0.01em;

  color: #000000;
`;

const DonationText = styled.div`
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  display: flex;
  align-items: center;
  letter-spacing: -0.01em;

  color: #808080;
`;

const PriceText = styled.div`
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  display: flex;
  align-items: center;
  letter-spacing: -0.01em;
  color: #000000;
`;

const NoText = styled.div`
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  display: flex;
  align-items: center;
  letter-spacing: -0.01em;
  color: #808080;
`;

export default FanList;
