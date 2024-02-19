import React from "react";
import styled from "styled-components";
import { Box } from "@mui/material";

const Waves = ({ waveColor, height = "2rem", duration = "5s" }) => {
  return (
    <StyledContainer height={height} duration={duration}>
      <svg
        className="hero-waves"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 24 150 28 "
        preserveAspectRatio="none"
      >
        <defs>
          <path
            id="wave-path"
            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
          />
        </defs>

        <g className="wave3">
          <use xlinkHref="#wave-path" x="50" y="9" fill={`${waveColor}`} />
        </g>
      </svg>
    </StyledContainer>
  );
};

const StyledContainer = styled(Box)`
  .hero-waves {
    width: 100%;
    height: ${({ height }) => height};

    position: absolute;
    bottom: 0;
    left: 0;
  }

  .wave3 use {
    animation: move-forever3 ${({ duration }) => duration} linear infinite;
    /* animation-delay: -2s; */
  }
  @keyframes move-forever3 {
    0% {
      transform: translate(-90px, 0%);
    }

    100% {
      transform: translate(85px, 0%);
    }
  }
`;

export default Waves;
