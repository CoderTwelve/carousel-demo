export const CardOne = () => {
  return (
    <>
      <div
        className="w-[46px] h-1 rounded-[11px]"
        style={{
          background:
            "var(--Gradiant-gradiant---syntax, linear-gradient(180deg, #38C1A5 -0.01%, #0891D5 99.99%))",
        }}
      ></div>
      <p className="text-[#EDEDED] text-base font-bold mt-[28px] font-book leading-4">
        Introduction to programming
      </p>
      <button className="mt-4 flex py-1 px-2 text-[#FFF] text-[9px] rounded-[20px] border-[1px] border-[#676767] font-book leading-[110%]">
        Beginner
      </button>
      <p className="text-[#676767] font-normal text-xs mt-4 mb-[116px] font-book leading-[110%]">
        {`This course covers the most basic concepts in programming using Solidity as an example.`}
      </p>
      <div className="items-center whitespace-nowrap absolute bottom-4">
        <div className="inline-block items-center min-w-[87px] mr-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            className="inline-block"
          >
            <path
              d="M7 14C5.14346 14 3.36303 13.2625 2.05029 11.9497C0.737494 10.637 0 8.85649 0 7C0 5.14351 0.737494 3.36303 2.05029 2.05029C3.36298 0.737495 5.14351 0 7 0C8.85649 0 10.637 0.737495 11.9497 2.05029C13.2625 3.36298 14 5.14351 14 7C14 8.85649 13.2625 10.637 11.9497 11.9497C10.637 13.2625 8.85649 14 7 14ZM7 0.583346C5.29826 0.583346 3.66602 1.25942 2.46278 2.46273C1.25947 3.66615 0.583396 5.29821 0.583396 6.99995C0.583396 8.70169 1.25947 10.3339 2.46278 11.5372C3.6662 12.7405 5.29826 13.4166 7 13.4166C8.70174 13.4166 10.334 12.7405 11.5372 11.5372C12.7405 10.3337 13.4166 8.70169 13.4166 6.99995C13.4166 5.29821 12.7405 3.66597 11.5372 2.46273C10.3338 1.25942 8.70174 0.583346 7 0.583346Z"
              fill="#F2F2F2"
            />
            <path
              d="M11.3756 7.5838H6.70883C6.5478 7.5838 6.41724 7.45323 6.41724 7.2922V2.62549C6.41724 2.46445 6.5478 2.33379 6.70883 2.33379C6.86997 2.33379 7.00053 2.46445 7.00053 2.62549V7.00046H11.3755C11.5365 7.00046 11.6672 7.13102 11.6672 7.29215C11.6672 7.45319 11.5366 7.5838 11.3756 7.5838Z"
              fill="#F2F2F2"
            />
          </svg>
          <span className="text-[#F2F2F2] font-normal text-xs leading-3 ml-2 font-machina">
            36 Hour
          </span>
        </div>
        <div className="inline-block items-center gap-2 min-w-[109px] mr-[8.5px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            className="inline-block"
          >
            <path
              d="M7.57871 12.8638V2.04656C7.19864 0.856661 4.21415 0.919762 2.76941 1.10005V11.8186C6.08183 11.2105 7.35578 12.2621 7.57871 12.8638Z"
              stroke="#F2F2F2"
              strokeWidth="0.6"
            />
            <path
              d="M7.57779 12.8638V2.04656C7.95785 0.856661 10.9423 0.919762 12.3871 1.10005V11.8186C9.07466 11.2105 7.80071 12.2621 7.57779 12.8638Z"
              stroke="#F2F2F2"
              strokeWidth="0.6"
            />
            <path
              d="M2.75602 2.42983H1V13.6857L14.0904 13.9999V2.42983H12.3343"
              stroke="#F2F2F2"
              strokeWidth="0.6"
            />
            <path
              d="M7.56689 13.8968V12.6798"
              stroke="#F2F2F2"
              strokeWidth="0.6"
            />
          </svg>
          <span className="text-[#F2F2F2] font-normal text-xs leading-3 ml-2 font-machina">
            5 Course
          </span>
        </div>
        <div className="inline-block items-center justify-end rounded-[40px] bg-[#2A2A2A] px-4 py-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className="inline-block"
          >
            <path
              d="M10.5287 9.82826L16.9374 8.27026C17.5284 8.12659 17.9277 8.85856 17.4871 9.27776L12.8109 13.7262C12.7251 13.8079 12.6656 13.9133 12.6402 14.029L11.3676 19.8186C11.2267 20.4595 10.3038 20.4323 10.2008 19.7842L9.23218 13.6867C9.20918 13.5419 9.13346 13.4107 9.01958 13.3184L4.01681 9.26343C3.51572 8.85727 3.93024 8.05587 4.55128 8.23013L10.2279 9.82298C10.3261 9.85052 10.4297 9.85234 10.5287 9.82826Z"
              fill="#9EFA13"
            />
            <path
              d="M6.908 14.6474C6.97335 14.6969 7.0153 14.7713 7.02392 14.8528L7.4785 19.1507C7.51224 19.4697 7.08635 19.6082 6.92597 19.3305L2.86686 12.2999C2.70486 12.0193 3.04527 11.719 3.30347 11.9147L6.908 14.6474Z"
              fill="#9EFA13"
            />
          </svg>
          <span className="text-[#9EFA13] text-[10px] ml-2 font-book leading-[110%]">
            45% COMPLETED
          </span>
        </div>
      </div>
    </>
  );
};

export const CardTwo = () => {
  const infoArr = [
    { start: "Signup", end: "4/15 - 6/15" },
    { start: "Event", end: "6/15 - 7/15" },
    { start: "Grant size", end: "200k" },
  ];
  return (
    <>
      <p className="text-[#F2F2F2] text-[16px] font-bold font-book leading-4">
        Moonshot 2023 Summer Hackathon
      </p>
      <div className="flex mt-4 gap-4">
        <div className="inline-flex px-2 py-1 rounded-[20px] border-[#676767] border-[1px] text-[#fff] text-[9px] font-book leading-[110%]">
          ALL Tracks
        </div>
        <div className="inline-flex px-2 py-1 rounded-[20px] border-[#676767] border-[1px] text-[#fff] text-[9px] font-book leading-[110%]">
          Solidity
        </div>
        <div className="inline-flex px-2 py-1 rounded-[20px] border-[#676767] border-[1px] text-[#fff] text-[9px] font-book leading-[110%]">
          ZK
        </div>
      </div>
      <div className="mt-[65px] flex flex-col gap-4">
        {infoArr.map((item, index) => (
          <div key={index}>
            <div className="flex justify-between items-center">
              <span className="text-[#676767] text-[12px] font-book leading-[110%]">
                {item.start}
              </span>
              <span className="text-[#EDEDED] text-[14px] font-machina font-light leading-[14px]">
                {item.end}
              </span>
            </div>
            <div className="bg-[#282828] h-[1px] mt-1"></div>
          </div>
        ))}
      </div>
    </>
  );
};

export const CardThree = () => {
  return (
    <>
      <div
        className="w-[46px] h-1 rounded-[11px]"
        style={{
          background:
            "var(--Gradiant-gradiant---learning-track, linear-gradient(180deg, #D9E313 0%, #3CBC34 100%))",
        }}
      ></div>
      <p className="text-[#EDEDED] text-base font-bold mt-[28px] font-book leading-4">
        Web 3.0 Programming Basics
      </p>
      <button className="mt-4 flex py-1 px-2 text-[#FFF] text-[9px] rounded-[20px] border-[1px] border-[#676767] font-book leading-[110%]">
        Beginner
      </button>
      <p className="text-[#676767] font-normal text-xs mt-4 font-book leading-[110%]">
        {`Basic concepts in programming of Solidity. Topics include: variables, functions, flow control, error handling, data structure.`}
      </p>
      <div className="mt-[50px] flex items-center mb-4">
        <div className="flex items-center gap-2 min-w-[87px] mr-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
          >
            <path
              d="M7 14C5.14346 14 3.36303 13.2625 2.05029 11.9497C0.737494 10.637 0 8.85649 0 7C0 5.14351 0.737494 3.36303 2.05029 2.05029C3.36298 0.737495 5.14351 0 7 0C8.85649 0 10.637 0.737495 11.9497 2.05029C13.2625 3.36298 14 5.14351 14 7C14 8.85649 13.2625 10.637 11.9497 11.9497C10.637 13.2625 8.85649 14 7 14ZM7 0.583346C5.29826 0.583346 3.66602 1.25942 2.46278 2.46273C1.25947 3.66615 0.583396 5.29821 0.583396 6.99995C0.583396 8.70169 1.25947 10.3339 2.46278 11.5372C3.6662 12.7405 5.29826 13.4166 7 13.4166C8.70174 13.4166 10.334 12.7405 11.5372 11.5372C12.7405 10.3337 13.4166 8.70169 13.4166 6.99995C13.4166 5.29821 12.7405 3.66597 11.5372 2.46273C10.3338 1.25942 8.70174 0.583346 7 0.583346Z"
              fill="#F2F2F2"
            />
            <path
              d="M11.3756 7.5838H6.70883C6.5478 7.5838 6.41724 7.45323 6.41724 7.2922V2.62549C6.41724 2.46445 6.5478 2.33379 6.70883 2.33379C6.86997 2.33379 7.00053 2.46445 7.00053 2.62549V7.00046H11.3755C11.5365 7.00046 11.6672 7.13102 11.6672 7.29215C11.6672 7.45319 11.5366 7.5838 11.3756 7.5838Z"
              fill="#F2F2F2"
            />
          </svg>
          <span className="text-[#F2F2F2] font-normal text-xs leading-3 font-machina">
            36 Hour
          </span>
        </div>
        <div className="flex items-center gap-2 min-w-[109px] mr-[8.5px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
          >
            <path
              d="M7.57871 12.8638V2.04656C7.19864 0.856661 4.21415 0.919762 2.76941 1.10005V11.8186C6.08183 11.2105 7.35578 12.2621 7.57871 12.8638Z"
              stroke="#F2F2F2"
              strokeWidth="0.6"
            />
            <path
              d="M7.57779 12.8638V2.04656C7.95785 0.856661 10.9423 0.919762 12.3871 1.10005V11.8186C9.07466 11.2105 7.80071 12.2621 7.57779 12.8638Z"
              stroke="#F2F2F2"
              strokeWidth="0.6"
            />
            <path
              d="M2.75602 2.42983H1V13.6857L14.0904 13.9999V2.42983H12.3343"
              stroke="#F2F2F2"
              strokeWidth="0.6"
            />
            <path
              d="M7.56689 13.8968V12.6798"
              stroke="#F2F2F2"
              strokeWidth="0.6"
            />
          </svg>
          <span className="text-[#F2F2F2] font-normal text-xs leading-3 font-machina">
            5 Course
          </span>
        </div>
      </div>
    </>
  );
};

export const CardFour = () => {
  return (
    <>
      <div
        className="absolute left-4 top-1/2 -translate-y-1/2 w-[380px]"
        style={{
          height: "calc(100% - 40px)",
          backgroundImage: "url(./caroucelImgs/5.png)",
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div
        className="w-[46px] h-1 rounded-[11px] ml-[30px] mt-[30px]"
        style={{
          background: "linear-gradient(180deg, #E0AD38 -0.01%, #EB3E1C 93.39%)",
        }}
      ></div>
      <p className="ml-[30px] mt-[147px] text-[#EDEDED] text-[16px] font-bold font-book leading-4">
        What is Bitcoin
      </p>
      <div className="flex items-center gap-2 min-w-[52px] mr-2 mt-[52px] ml-[259px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
        >
          <path
            d="M7 14C5.14346 14 3.36303 13.2625 2.05029 11.9497C0.737494 10.637 0 8.85649 0 7C0 5.14351 0.737494 3.36303 2.05029 2.05029C3.36298 0.737495 5.14351 0 7 0C8.85649 0 10.637 0.737495 11.9497 2.05029C13.2625 3.36298 14 5.14351 14 7C14 8.85649 13.2625 10.637 11.9497 11.9497C10.637 13.2625 8.85649 14 7 14ZM7 0.583346C5.29826 0.583346 3.66602 1.25942 2.46278 2.46273C1.25947 3.66615 0.583396 5.29821 0.583396 6.99995C0.583396 8.70169 1.25947 10.3339 2.46278 11.5372C3.6662 12.7405 5.29826 13.4166 7 13.4166C8.70174 13.4166 10.334 12.7405 11.5372 11.5372C12.7405 10.3337 13.4166 8.70169 13.4166 6.99995C13.4166 5.29821 12.7405 3.66597 11.5372 2.46273C10.3338 1.25942 8.70174 0.583346 7 0.583346Z"
            fill="#F2F2F2"
          />
          <path
            d="M11.3756 7.5838H6.70883C6.5478 7.5838 6.41724 7.45323 6.41724 7.2922V2.62549C6.41724 2.46445 6.5478 2.33379 6.70883 2.33379C6.86997 2.33379 7.00053 2.46445 7.00053 2.62549V7.00046H11.3755C11.5365 7.00046 11.6672 7.13102 11.6672 7.29215C11.6672 7.45319 11.5366 7.5838 11.3756 7.5838Z"
            fill="#F2F2F2"
          />
        </svg>
        <p className="text-[#F2F2F2] font-normal text-xs leading-3 font-machina">
          36 Hour
        </p>
      </div>
    </>
  );
};
