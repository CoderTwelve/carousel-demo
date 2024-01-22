import { Children } from "react";

const CardContainer = ({ img, children }) => {
  return (
    <div className="flex-1 flex relative" id={"h" + img}>
      <div
        // id={"h" + img}
        className={
          img !== "4"
            ? "flex-1 min-w-[416px] mb-14 pl-10 pr-10 flex-col pt-9 hover:translate-x-1 hover:-translate-y-1 hover:z-10 transition-transform relative"
            : "flex-1 min-w-[416px] mb-14 relative card-container  hover:translate-x-1 hover:-translate-y-1 hover:z-10 transition-transform"
        }
        style={{
          backgroundImage: "url(" + `./caroucelImgs/${img}.png` + ")",
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
        }}
      >
        {Children.map(children, (child) => child)}
      </div>
    </div>
  );
};

export default CardContainer;
