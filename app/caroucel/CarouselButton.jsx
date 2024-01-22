const CarouselButton = ({ direction = "right", opacity = 1, onclick }) => {
  let background =
    direction === "right"
      ? "linear-gradient(270deg, #030303 0%, rgba(3, 3, 3, 0.80) 55.46%, rgba(3, 3, 3, 0.00) 92.9%)"
      : "linear-gradient(270deg,  rgba(3, 3, 3, 0.00) 0%, rgba(3, 3, 3, 0.80) 55.46%, #030303 100%)";
  let style =
    direction === "right"
      ? { background, opacity, right: 0 }
      : { background, opacity };
  let buttonStyle = direction === "right" ? { left: 18 } : { right: 18 };
  return (
    <div
      className="absolute h-[378px] w-[192px] top-[18px] z-10"
      style={{ ...style, transition: "opacity 0.5s" }}
    >
      <button
        className="w-12 h-12 flex justify-center items-center text-white rounded-full border-[1px] border-[#676767] hover:bg-[#303030] hover:border-[#303030] relative top-[178px]"
        style={buttonStyle}
        onClick={onclick}
      >
        {direction === "right" ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="13"
            height="18"
            viewBox="0 0 13 18"
            fill="none"
          >
            <path
              d="M1 1L12 9L1 17"
              stroke="white"
              strokeWidth="2"
              strokeLinejoin="bevel"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="13"
            height="18"
            viewBox="0 0 13 18"
            fill="none"
          >
            <path
              d="M12 1L1 9 L12 17"
              stroke="white"
              strokeWidth="2"
              strokeLinejoin="bevel"
            />
          </svg>
        )}
      </button>
    </div>
  );
};

export default CarouselButton;
