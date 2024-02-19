import { useRef, useEffect } from "react";
import CountUp from "react-countup";

const Balance = ({ value, prefix = "", decimals, suffix = "", separator = "," }) => {
  const previousValue = useRef(0);

  useEffect(() => {
    previousValue.current = value;
  }, [value]);
  return (
    <CountUp
      start={previousValue.current}
      end={value}
      decimals={decimals}
      separator={separator}
      prefix={prefix}
      suffix={suffix}
    />
  );
};

export default Balance;
