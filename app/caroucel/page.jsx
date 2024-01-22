"use client";
import { useEffect, useState } from "react";
import "./page.css";
import ImageContainer from "./ImageContainer";
import CarouselButton from "./CarouselButton";

const Carousel = () => {
  const [direction, setDirection] = useState("right");
  const [deltaX, setDeltaX] = useState(0);
  const [x, setX] = useState(0);

  useEffect(() => {
    if (direction === "right") {
      setX(0);
    } else {
      setX(0 - deltaX);
    }
  }, [direction]);

  return (
    <div className="bg-black pl-[124px] pr-[124px]">
      <CarouselButton
        direction="left"
        opacity={direction === "right" ? 0 : 1}
        onclick={() => setDirection("right")}
      />
      <p className="text-[#F1F1F1] pt-[18px] font-bold text-xl font-poster tracking-[0.4px]">
        &lt; / Trending Now &gt;
      </p>
      <ImageContainer x={x} callback={setDeltaX} />
      <CarouselButton
        direction="right"
        opacity={direction === "left" ? 0 : 1}
        onclick={() => setDirection("left")}
      />
    </div>
  );
};

export default Carousel;
