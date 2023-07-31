import { useCallback } from "react";
import { useRouter } from "next/router";

const Onboarding3 = () => {
  const router = useRouter();

  const onSmallButtonClick = useCallback(() => {
    router.push("/gender");
  }, [router]);

  return (
    <div className="relative bg-dark-1 w-full h-[738px] overflow-hidden flex flex-col items-center justify-start gap-[56px] text-center text-5xl text-white font-integral-cf">
      <div className="w-[375px] overflow-hidden flex flex-col items-center justify-start gap-[53px]">
        <div className="w-[375px] h-[585px] flex flex-col items-center justify-start gap-[62px]">
          <img
            className="relative w-[375px] h-[460px] object-cover"
            alt=""
            src="/background2@2x.png"
          />
          <div className="relative">
            <p className="m-0 leading-[30px]">Action is the</p>
            <p className="m-0">
              <b className="leading-[32px]">key to all success</b>
            </p>
          </div>
        </div>
        <button
          className="cursor-pointer [border:none] py-[13px] pr-5 pl-7 bg-primary rounded-29xl w-[185px] flex flex-row box-border items-center justify-center"
          onClick={onSmallButtonClick}
        >
          <div className="flex flex-row items-start justify-start gap-[8px]">
            <div className="relative text-mid font-semibold font-body-regular text-black text-center">
              Start Now
            </div>
            <img
              className="relative w-6 h-6 overflow-hidden shrink-0"
              alt=""
              src="/chevronright2.svg"
            />
          </div>
        </button>
      </div>
      <div className="w-[88px] h-1 flex flex-row items-center justify-start gap-[10px]">
        <div className="relative bg-dark-3 w-4 h-1" />
        <div className="relative bg-dark-3 w-4 h-1" />
        <div className="relative bg-primary w-9 h-1" />
      </div>
    </div>
  );
};

export default Onboarding3;
