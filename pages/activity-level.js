import { useCallback } from "react";
import { useRouter } from "next/router";

const ActivityLevel = () => {
  const router = useRouter();

  const onSmallButtonContainerClick = useCallback(() => {
    router.push("/login");
  }, [router]);

  const onBackButtonClick = useCallback(() => {
    router.push("/");
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
      <div className="absolute top-[714px] left-[32px] w-[318px] h-[54px] text-black">
        <div
          className="absolute top-[2px] left-[198px] rounded-29xl bg-primary flex flex-row py-[13px] pr-5 pl-7 items-center justify-center cursor-pointer"
          onClick={onSmallButtonContainerClick}
        >
          <div className="flex flex-row items-start justify-start gap-[8px]">
            <div className="relative font-semibold">Start</div>
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
        <div className="absolute top-[34px] left-[68px] leading-[43px] font-semibold">
          Beginner
        </div>
        <div className="absolute top-[181px] left-[71px] leading-[43px] font-semibold">
          Advance
        </div>
        <div className="absolute top-[0px] left-[92px] text-xl leading-[34px] text-gray-100">
          Rookie
        </div>
        <div className="absolute top-[224px] left-[73px] text-xl leading-[34px] text-gray-100">
          True Beast
        </div>
        <div className="absolute top-[87px] left-[0px] bg-primary w-[247px] h-[3px]" />
        <div className="absolute top-[168px] left-[0px] bg-primary w-[247px] h-[3px]" />
        <div className="absolute top-[116px] left-[35px] text-9xl leading-[30px] font-semibold">
          Intermediate
        </div>
      </div>
      <div className="absolute top-[80px] left-[43px] w-[289px] h-[88px] text-3xs font-integral-cf">
        <div className="absolute top-[72px] left-[10px] leading-[16px]">
          This helps us create your personalized plan
        </div>
        <b className="absolute top-[0px] left-[0px] text-xl leading-[30px]">
          <p className="m-0">Your regular physical</p>
          <p className="m-0">activity level?</p>
        </b>
      </div>
    </div>
  );
};

export default ActivityLevel;
