import { useEffect, useState } from "react";
import styled from "styled-components";
import { ClockIcon } from "../../utils/svgs";

function TopBar() {
  const [seconds, setSeconds] = useState(59);
  const [minutes, setMinutes] = useState(4);
  const [hours, setHours] = useState(0);

  useEffect(() => {

    if (seconds < 0) {
      if (minutes === 0) {
        if (hours !== 0) {
          setSeconds(59);
          setMinutes(59);
          setHours(hours - 1);
        } else {
          setSeconds(0);
          setMinutes(0);
        }
      } else {
        setMinutes(minutes - 1);
        setSeconds(59);
      }
    }

    setTimeout(() => {
      setSeconds(seconds - 1)
    }, 1000);

  }, [minutes, seconds, hours]);

  const formatTime = (time) => {
    if (time < 10) return "0" + time;
    return time;
  };
  return (
    <StyledContainer>
      <div className="bg-[#E52E2E] text-white rounded-md flex items-center px-2 py-1">
        <LiveAnimate className="transition-opacity w-1 h-1 rounded-full bg-white" />
        <div className="text-xs font-semibold ml-1">LIVE</div>
      </div>
      <div className="flex">
        <div className="text-sm font-medium text-[#808080] mr-2 w-[62px]">
          {formatTime(hours)}:{formatTime(minutes)}:{formatTime(seconds)}
        </div>
        {ClockIcon}
      </div>
      <TitleBox>
        TeamEffort
      </TitleBox>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  display: flex;
  height: 56px;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  width: 100%;
  max-width: 390px;
  margin: 0 auto;
  position: relative;
`;

const TitleBox = styled.div`
  position: absolute;
  left: 150px;
  top: 17px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 17px;
  line-height: 21px;
  /* identical to box height */

  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: -0.01em;

  color: #000000;
`;

const LiveAnimate = styled.div`

  display: block;

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

`

export default TopBar;
