/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */

import Balance from "../../components/Balance";
import Button from "../../components/Button";
import styled from "styled-components";
import { CopyToClipboard } from "react-copy-to-clipboard";
import FloatingComponent from "react-floating-component";
import {
  BackIcon,
  CopyIcon,
  MaticIcon,
  MoonPayIcon,
  PlayIcon,
} from "../../utils/svgs";
import { useEffect, useState } from "react";

const Profile = ({ data, setOpen }) => {
  const [copied, setCopied] = useState(false);
  const [textCopiedFlg, setTextCopiedFlg] = useState(false);
  useEffect(() => {
    if (copied) {
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    }
  }, [copied]);

  return (
    <div className="mt-6 flex flex-col h-[calc(100vh-80px)]">
      <div className="relative w-full">
        <div
          className="absolute right-0 cursor-pointer transition hover:opacity-70 text-[#FFAD61]"
          onClick={() => setOpen(false)}
        >
          {BackIcon}
        </div>
        <FloatingComponent>
          <LiveAnimate
            during={1.5}
            className="absolute bg-[#AA80FF] w-8 h-8 top-0 left-[75px] rounded-full"
          />
        </FloatingComponent>

        <FloatingComponent>
          <LiveAnimate
            during={1}
            className="absolute bg-[#FFAD61] w-4 h-4 top-2 right-[83px] rounded-full"
          />
        </FloatingComponent>
        <FloatingComponent>
          <LiveAnimate
            during={3}
            className="absolute bg-[#99FFAA] w-4 h-4 top-16 left-[27px] rounded-full"
          />
        </FloatingComponent>
        <FloatingComponent>
          <LiveAnimate
            during={2}
            className="absolute bg-[#FF6699] w-10 h-10 top-10 right-[27px] rounded-full"
          />
        </FloatingComponent>
        <div className="relative w-fit mx-auto">
          <img src={data.logo} alt={""} className="w-24 h-24" />
          <div className="absolute w-full flex justify-center top-[72px]">
            <div className="w-10 h-10 bg-white rounded-full flex justify-center items-center shadow-[0px_4px_4px_rgba(0,0,0,0.1)]">
              <img src={"/images/wwf.png"} alt={""} />
            </div>
          </div>
        </div>
        <div className="w-fit mx-auto mt-6 text-center">
          <div className="flex items-center">
            <ProfileName className="mr-1">{data.name}</ProfileName>
            <img src={"/icons/check.svg"} alt={""} />
          </div>
          <UserId className="mt-1">{data.id}</UserId>
        </div>
        <div className="flex w-full mt-8 mb-[22px]">
          <div className="flex-1 flex flex-col items-center ml-[-17px] pt-[2px]">
            <TotalValue>Total Donations</TotalValue>
            <div className="text-2xl font-semibold mt-1">
              <Balance value={data.donations} />
            </div>
          </div>
          <div className="w-[1px] bg-[#E6E6E6]" />
          <div className="flex-1 flex flex-col items-center mr-[-10px] pt-[2px]">
            <TotalValue>Total Raised</TotalValue>
            <div className="flex items-center">
              <div className="mr-2 scale-125 text-[#8C44EE]">{MaticIcon}</div>
              <div className="text-2xl font-semibold mt-1">
                <Balance value={data.price} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[80px]">
        {textCopiedFlg === false && (
          <div className="flex items-center w-fit mx-auto text-sm text-[#808080] font-medium">
            Send &nbsp;<div className="text-[#808080]">{MaticIcon}</div> &nbsp;
            MATIC to this address:
          </div>
        )}
        {textCopiedFlg === true && (
          <div className="flex items-center w-fit mx-auto">
            <div>
              <img src={`images/icons/invited.svg`} alt="" />
            </div>
            <InvitedCopiedText>
              Copied! Invite opponents before next step
            </InvitedCopiedText>
          </div>
        )}

        {copied === true && (
          <CopiedAlert>
            <div>
              <img src={`images/icons/Path.svg`} alt="" />
            </div>
            <CopiedTitle>Address Copied</CopiedTitle>
          </CopiedAlert>
        )}
        {copied === false && (
          <div className="flex mt-[14px]">
            <div className="flex-1 h-16 overflow-hidden text-ellipsis leading-none p-6 my-auto text-sm font-medium rounded-l-[32px] border border-[#E6E6E6] ">
              0xA4dEcb6dBA9D91Af6A6C66B4655eA52968ad991F
            </div>
            <CopyToClipboard
              text={`0xA4dEcb6dBA9D91Af6A6C66B4655eA52968ad991F`}
              onCopy={() => {
                setTextCopiedFlg(true);
                setCopied(true);
              }}
            >
              <div className="w-16 h-16 flex justify-center items-center bg-[#008DF2] pr-2 cursor-pointer rounded-r-[32px]">
                {CopyIcon}
              </div>
            </CopyToClipboard>
          </div>
        )}
        <div className="flex items-center mt-3 px-4">
          <div className="flex-1 h-[1px] bg-[#E6E6E6]" />
          <div className="mx-6 text-sm font-medium text-[#808080]">or</div>
          <div className="flex-1 h-[1px] bg-[#E6E6E6]" />
        </div>
        <div className="mt-4 mb-6 w-[358px]">
          <Button
            type={"secondary"}
            className="w-full rounded-[32px] bg-black text-white font-semibold"
          >
            <div className="flex items-center ml-[-43px]">
              <div>{MoonPayIcon}</div>
              <DonateCash className="ml-[22px]">Donate with Moonpay</DonateCash>
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
};

const ProfileName = styled.div`
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
  padding-left: 18px;
  margin-top: -1px;
  color: #000000;
`;

const UserId = styled.div`
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
  justify-content: center;
`;

const TotalValue = styled.div`
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

const DonateCash = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 17px;
  line-height: 21px;
  display: flex;
  align-items: center;
  letter-spacing: -0.01em;
  color: #ffffff;
`;

const LiveAnimate = styled.div`
  display: block;

  -webkit-animation: fadeInFromNone
    ${(props) => (props.during ? props.during : 1)}s infinite alternate ease-out;
  -moz-animation: fadeInFromNone
    ${(props) => (props.during ? props.during : 1)}s infinite alternate ease-out;
  -o-animation: fadeInFromNone ${(props) => (props.during ? props.during : 1)}s
    infinite alternate ease-out;
  animation: fadeInFromNone ${(props) => (props.during ? props.during : 1)}s
    infinite alternate ease-out;
  @-webkit-keyframes fadeInFromNone {
    0% {
      display: none;
      opacity: 0;
    }
    100% {
      display: block;
      opacity: 1;
    }
  }

  @-moz-keyframes fadeInFromNone {
    0% {
      display: none;
      opacity: 0;
    }
    100% {
      display: block;
      opacity: 1;
    }
  }

  @-o-keyframes fadeInFromNone {
    0% {
      display: none;
      opacity: 0;
    }
    100% {
      display: block;
      opacity: 1;
    }
  }

  @keyframes fadeInFromNone {
    0% {
      display: none;
      opacity: 0;
    }
    100% {
      display: block;
      opacity: 1;
    }
  }
`;

const CopiedAlert = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 14px;
  width: 358px;
  height: 64px;
  align-items: center;
  background: #3dcc79;

  border-radius: 32px;
  -webkit-animation: fadeInFromNone 1s infinite alternate ease-out;
  -moz-animation: fadeInFromNone 1s infinite alternate ease-out;
  -o-animation: fadeInFromNone 1s infinite alternate ease-out;
  animation: fadeInFromNone 1s infinite alternate ease-out;
  @-webkit-keyframes fadeInFromNone {
    0% {
      display: none;
      opacity: 0;
    }
    100% {
      display: block;
      opacity: 1;
    }
  }

  @-moz-keyframes fadeInFromNone {
    0% {
      display: none;
      opacity: 0;
    }
    100% {
      display: block;
      opacity: 1;
    }
  }

  @-o-keyframes fadeInFromNone {
    0% {
      display: none;
      opacity: 0;
    }
    100% {
      display: block;
      opacity: 1;
    }
  }

  @keyframes fadeInFromNone {
    0% {
      display: none;
      opacity: 0;
    }
    100% {
      display: block;
      opacity: 1;
    }
  }
`;
const CopiedTitle = styled.div`
  font-weight: 500;
  font-size: 17px;
  line-height: 21px;
  display: flex;
  margin-left: 16px;
  align-items: center;
  letter-spacing: -0.01em;
  color: #ffffff;
`;

const InvitedCopiedText = styled.div`
  font-family: "Inter";
  margin-left: 8px;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  /* identical to box height */

  display: flex;
  align-items: center;
  letter-spacing: -0.01em;

  color: #808080;
`;

export default Profile;
