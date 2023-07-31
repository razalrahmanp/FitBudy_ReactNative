import { useCallback } from "react";
import { useRouter } from "next/router";

const Age = () => {
  const router = useRouter();

  const onSmallButtonContainerClick = useCallback(() => {
    router.push("/weight");
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
          className="absolute top-[0px] left-[0px] w-[54px] h-[54px]"
          alt=""
          src="/back-button.svg"
        />
      </div>
      <div
        className="absolute top-[249px] left-[131px] w-[113px] h-[350px] cursor-pointer text-24xl"
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
        <div className="absolute top-[34px] left-[38px] text-15xl leading-[34px] text-gray-100">
          34
        </div>
        <div className="absolute top-[282px] left-[37px] text-15xl leading-[34px] text-gray-100">
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
      <div className="absolute top-[80px] left-[53px] w-[269px] h-[58px] text-3xs font-integral-cf">
        <div className="absolute top-[42px] left-[0px] leading-[16px]">
          This helps us create your personalized plan
        </div>
        <b className="absolute top-[0px] left-[23px] text-xl leading-[30px]">
          How old are you ?
        </b>
      </div>
    </div>
  );
};

export default Age;
