import { useCallback } from "react";
import { useRouter } from "next/router";

const Height = () => {
  const router = useRouter();

  const onSmallButtonContainerClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onBackButtonClick = useCallback(() => {
    router.push("/weight");
  }, [router]);

  return (
    <div className="relative bg-dark-1 w-full h-[801px] overflow-hidden text-center text-3xs text-white font-body-regular">
      <div className="absolute top-[80px] left-[53px] w-[269px] h-[58px] font-integral-cf">
        <div className="absolute top-[42px] left-[0px] leading-[16px]">
          This helps us create your personalized plan
        </div>
        <b className="absolute top-[0px] left-[6px] text-xl leading-[30px]">
          What’s your height?
        </b>
      </div>
      <div className="absolute top-[714px] left-[32px] w-[312px] h-[54px] text-mid text-black">
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
      <div className="absolute top-[249px] left-[109px] w-[156px] h-[350px] text-24xl">
        <div className="absolute top-[79px] left-[38px] leading-[43px]">
          166
        </div>
        <div className="absolute top-[228px] left-[38px] leading-[43px]">
          168
        </div>
        <div className="absolute top-[34px] left-[50px] text-15xl leading-[34px] text-gray-100">
          165
        </div>
        <div className="absolute top-[282px] left-[49px] text-15xl leading-[34px] text-gray-100">
          169
        </div>
        <div className="absolute top-[0px] left-[55px] text-8xl leading-[27px] text-dark-3">
          164
        </div>
        <div className="absolute top-[323px] left-[55px] text-8xl leading-[27px] text-dark-3">
          170
        </div>
        <div className="absolute top-[133px] left-[0px] bg-primary w-[156px] h-[3px]" />
        <div className="absolute top-[214px] left-[0px] bg-primary w-[156px] h-[3px]" />
        <div className="absolute top-[179px] left-[130px] text-mid">cm</div>
        <div className="absolute top-[146px] left-[28px] text-39xl leading-[58px] font-semibold text-left">
          167
        </div>
      </div>
    </div>
  );
};

export default Height;
