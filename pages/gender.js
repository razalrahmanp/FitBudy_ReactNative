import { useCallback } from "react";
import { useRouter } from "next/router";

const Gender = () => {
  const router = useRouter();

  const onSmallButtonContainerClick = useCallback(() => {
    router.push("/age");
  }, [router]);

  return (
    <div className="relative bg-dark-1 w-full h-[801px] overflow-hidden text-center text-3xs text-black font-body-regular">
      <div className="absolute top-[80px] left-[34px] w-[302px] h-[74px] text-white font-integral-cf">
        <div className="absolute top-[42px] left-[31px] leading-[16px]">
          <p className="m-0">To give you a better experience we need</p>
          <p className="m-0">to know your gender</p>
        </div>
        <b className="absolute top-[0px] left-[0px] text-xl leading-[30px]">
          Tell us about yourself!
        </b>
      </div>
      <div className="absolute top-[262px] left-[117px] w-[140px] h-[324px] text-mini">
        <div className="absolute top-[0px] left-[0px] w-[140px] h-[140px]">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[50%] bg-primary" />
          <img
            className="absolute h-[34.29%] w-[34.29%] top-[25.71%] right-[32.86%] bottom-[40%] left-[32.86%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/mars1.svg"
          />
          <div className="absolute top-[73.57%] left-[35.71%] leading-[21px]">
            Male
          </div>
        </div>
        <div className="absolute top-[184px] left-[0px] w-[140px] h-[140px] text-white">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[50%] bg-dark-2" />
          <img
            className="absolute h-[34.29%] w-[34.29%] top-[25.71%] right-[32.86%] bottom-[40%] left-[32.86%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/venus.svg"
          />
          <div className="absolute top-[73.57%] left-[30%] leading-[21px]">
            Female
          </div>
        </div>
      </div>
      <div
        className="absolute top-[718px] left-[224px] rounded-29xl bg-primary flex flex-row py-[13px] pr-5 pl-7 items-center justify-center cursor-pointer text-mid"
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
    </div>
  );
};

export default Gender;
