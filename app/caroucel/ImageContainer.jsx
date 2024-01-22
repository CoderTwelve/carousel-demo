import { useLayoutEffect, useRef } from "react";
import CardContainer from "./cards/CardContainer";
import { CardOne, CardTwo, CardThree, CardFour } from "./cards/Cards";

const ImageContainer = ({ x = 0, callback }) => {
  const ref = useRef(null);

  useLayoutEffect(() => {
    callback(416 * 4 + 52 * 3 - ref.current.offsetWidth);
  }, []);

  return (
    <div className="mt-[40px] w-full pt-1 overflow-x-hidden relative" ref={ref}>
      <div
        className="relative flex gap-[52px]"
        style={{
          transform: `translateX(${x}px)`,
          transition: "transform 0.5s",
        }}
      >
        <CardContainer img={"1"}>
          <CardOne />
        </CardContainer>
        <CardContainer img={"2"}>
          <CardTwo />
        </CardContainer>
        <CardContainer img={"3"}>
          <CardThree />
        </CardContainer>
        <CardContainer img={"4"}>
          <CardFour />
        </CardContainer>
      </div>
    </div>
  );
};

export default ImageContainer;
