import { useCallback } from "react";
import { useRouter } from "next/router";

const Goal = () => {
  const router = useRouter();

  const onSmallButtonContainerClick = useCallback(() => {
    router.push("/activity-level");
  }, [router]);

  const onBackButtonClick = useCallback(() => {
    router.push("/height");
  }, [router]);

  const onSpinnerContainerClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='spinnerContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start" });
    }
  }, []);

  return (
    <div className="relative bg-dark-1 w-full h-[801px] overflow-hidden text-center text-mid text-white font-body-regular">
      <div className="absolute top-[714px] left-[32px] w-[312px] h-[54px] text-black">
        <div
          className="absolute top-[2px] left-[192px] rounded-29xl bg-primary flex flex-row py-[13px] pr-5 pl-7 items-center justify-center cursor-pointer"
          onClick={onSmallButtonContainerClick}
        >
          <div className="flex flex-row items-start justify-start gap-[8px]">
            <div className="relative font-semibold">Next</div>
            <img
              className="relative w-6 h-6 overflow-hidden shrink-0"
              alt=""
              src="/chevronright1.svg"
            />
          </div>
        </div>
        <img
          className="absolute top-[0px] left-[0px] w-[54px] h-[54px] cursor-pointer"
          alt=""
          src="/back-button.svg"
          onClick={onBackButtonClick}
        />
      </div>
      <div
        className="absolute top-[294px] left-[64px] w-[247px] h-[258px] cursor-pointer text-5xl"
        data-scroll-to="spinnerContainer"
        onClick={onSpinnerContainerClick}
      >
        <div className="absolute top-[34px] left-[54px] leading-[43px] font-semibold">
          Lose weight
        </div>
        <div className="absolute top-[181px] left-[17px] leading-[43px] font-semibold">
          Gain more flexible
        </div>
        <div className="absolute top-[0px] left-[66px] text-xl leading-[34px] text-gray-100">
          Gain Weight
        </div>
        <div className="absolute top-[224px] left-[52px] text-xl leading-[34px] text-gray-100">
          Learn the basic
        </div>
        <div className="absolute top-[87px] left-[0px] bg-primary w-[247px] h-[3px]" />
        <div className="absolute top-[168px] left-[0px] bg-primary w-[247px] h-[3px]" />
        <div className="absolute top-[114px] left-[61px] text-9xl leading-[30px] font-semibold">
          Get fitter
        </div>
      </div>
      <div className="absolute top-[80px] left-[53px] w-[269px] h-[58px] text-3xs font-integral-cf">
        <div className="absolute top-[42px] left-[0px] leading-[16px]">
          This helps us create your personalized plan
        </div>
        <b className="absolute top-[0px] left-[17px] text-xl leading-[30px]">
          What’s your goal?
        </b>
      </div>
    </div>
  );
};

export default Goal;
