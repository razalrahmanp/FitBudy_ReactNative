import { useCallback } from "react";

const AgeContainer = () => {
  const onSpinnerContainerClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='spinnerContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start" });
    }
  }, []);

  return (
    <div
      className="absolute top-[249px] left-[131px] w-[113px] h-[350px] cursor-pointer text-center text-24xl text-white font-body-regular"
      data-scroll-to="spinnerContainer"
      onClick={onSpinnerContainerClick}
    >
      <div className="absolute top-[146px] left-[19px] text-39xl leading-[58px] font-semibold text-left inline-block w-[76px] h-[51px]">
        36
      </div>
      <div className="absolute top-[79px] left-[30px] leading-[43px] inline-block w-[54px] h-[43.2px]">
        35
      </div>
      <div className="absolute top-[228px] left-[31px] leading-[43px] inline-block w-[52.2px] h-[43.2px]">
        37
      </div>
      <div className="absolute top-[34px] left-[38px] text-15xl leading-[34px] text-gray">
        34
      </div>
      <div className="absolute top-[282px] left-[37px] text-15xl leading-[34px] text-gray">
        38
      </div>
      <div className="absolute top-[0px] left-[41px] text-8xl leading-[27px] text-dark-3">
        33
      </div>
      <div className="absolute top-[323px] left-[41px] text-8xl leading-[27px] text-dark-3">
        39
      </div>
      <div className="absolute top-[133.2px] left-[0px] bg-primary w-[113px] h-[3px]" />
      <div className="absolute top-[214.2px] left-[0px] bg-primary w-[113px] h-[3px]" />
    </div>
  );
};

export default AgeContainer;
