import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

interface CounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  counterClass?: string;
}

const Counter: React.FC<CounterProps> = ({
  end,
  duration = 6,
  suffix = "%",
  counterClass,
}) => {
  const { ref, inView } = useInView({
    triggerOnce: false, // Sadece bir kere çalışsın
    threshold: 0.5, // %50si görünür olunca başlasın
  });

  return (
    <div ref={ref}>
      {inView ? (
        <CountUp
          start={0}
          end={end}
          duration={duration}
          suffix={suffix}
          className={counterClass}
        />
      ) : (
        "0" + suffix
      )}
    </div>
  );
};

export default Counter;
