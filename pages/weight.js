import { useCallback } from "react";
import { useRouter } from "next/router";

const Weight = () => {
  const router = useRouter();

  const onSmallButtonContainerClick = useCallback(() => {
    router.push("/height");
  }, [router]);

  const onBackButtonClick = useCallback(() => {
    router.push("/age");
  }, [router]);

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
      <div className="absolute top-[319px] left-[5px] w-[365px] h-[166px]">
        <div className="absolute top-[166px] left-[181px] bg-primary w-[92px] h-[3px] [transform:_rotate(-90deg)] [transform-origin:0_0]" />
        <div className="absolute top-[152px] left-[194px] bg-primary w-[29px] h-[3px] [transform:_rotate(-90deg)] [transform-origin:0_0]" />
        <div className="absolute top-[152px] left-[258px] bg-primary w-[29px] h-[3px] [transform:_rotate(-90deg)] [transform-origin:0_0] opacity-[0.9]" />
        <div className="absolute top-[152px] left-[323px] bg-primary w-[29px] h-[3px] [transform:_rotate(-90deg)] [transform-origin:0_0] opacity-[0.4]" />
        <div className="absolute top-[152px] left-[207px] bg-primary w-[29px] h-[3px] [transform:_rotate(-90deg)] [transform-origin:0_0]" />
        <div className="absolute top-[152px] left-[271px] bg-primary w-[29px] h-[3px] [transform:_rotate(-90deg)] [transform-origin:0_0] opacity-[0.8]" />
        <div className="absolute top-[152px] left-[336px] bg-primary w-[29px] h-[3px] [transform:_rotate(-90deg)] [transform-origin:0_0] opacity-[0.3]" />
        <div className="absolute top-[152px] left-[220px] bg-primary w-[29px] h-[3px] [transform:_rotate(-90deg)] [transform-origin:0_0]" />
        <div className="absolute top-[152px] left-[284px] bg-primary w-[29px] h-[3px] [transform:_rotate(-90deg)] [transform-origin:0_0] opacity-[0.7]" />
        <div className="absolute top-[152px] left-[349px] bg-primary w-[29px] h-[3px] [transform:_rotate(-90deg)] [transform-origin:0_0] opacity-[0.2]" />
        <div className="absolute top-[152px] left-[233px] bg-primary w-[29px] h-[3px] [transform:_rotate(-90deg)] [transform-origin:0_0]" />
        <div className="absolute top-[152px] left-[297px] bg-primary w-[29px] h-[3px] [transform:_rotate(-90deg)] [transform-origin:0_0] opacity-[0.6]" />
        <div className="absolute top-[152px] left-[362px] bg-primary w-[29px] h-[3px] [transform:_rotate(-90deg)] [transform-origin:0_0] opacity-[0.1]" />
        <div className="absolute top-[156px] left-[246px] bg-primary w-[49px] h-[3px] [transform:_rotate(-90deg)] [transform-origin:0_0]" />
        <div className="absolute top-[156px] left-[310px] bg-primary w-[49px] h-[3px] [transform:_rotate(-90deg)] [transform-origin:0_0] opacity-[0.5]" />
        <div className="absolute top-[151.63px] left-[171px] bg-primary w-[28.75px] h-[3px] [transform:_rotate(-90deg)] [transform-origin:0_0]" />
        <div className="absolute top-[151.63px] left-[107px] bg-primary w-[28.75px] h-[3px] [transform:_rotate(-90deg)] [transform-origin:0_0] opacity-[0.9]" />
        <div className="absolute top-[151.63px] left-[42px] bg-primary w-[28.75px] h-[3px] [transform:_rotate(-90deg)] [transform-origin:0_0] opacity-[0.4]" />
        <div className="absolute top-[151.63px] left-[158px] bg-primary w-[28.75px] h-[3px] [transform:_rotate(-90deg)] [transform-origin:0_0]" />
        <div className="absolute top-[151.63px] left-[94px] bg-primary w-[28.75px] h-[3px] [transform:_rotate(-90deg)] [transform-origin:0_0] opacity-[0.8]" />
        <div className="absolute top-[151.63px] left-[29px] bg-primary w-[28.75px] h-[3px] [transform:_rotate(-90deg)] [transform-origin:0_0] opacity-[0.3]" />
        <div className="absolute top-[151.63px] left-[145px] bg-primary w-[28.75px] h-[3px] [transform:_rotate(-90deg)] [transform-origin:0_0]" />
        <div className="absolute top-[151.63px] left-[81px] bg-primary w-[28.75px] h-[3px] [transform:_rotate(-90deg)] [transform-origin:0_0] opacity-[0.7]" />
        <div className="absolute top-[151.63px] left-[16px] bg-primary w-[28.75px] h-[3px] [transform:_rotate(-90deg)] [transform-origin:0_0] opacity-[0.2]" />
        <div className="absolute top-[151.63px] left-[132px] bg-primary w-[28.75px] h-[3px] [transform:_rotate(-90deg)] [transform-origin:0_0]" />
        <div className="absolute top-[151.63px] left-[68px] bg-primary w-[28.75px] h-[3px] [transform:_rotate(-90deg)] [transform-origin:0_0] opacity-[0.6]" />
        <div className="absolute top-[151.63px] left-[3px] bg-primary w-[28.75px] h-[3px] [transform:_rotate(-90deg)] [transform-origin:0_0] opacity-[0.1]" />
        <div className="absolute top-[155.94px] left-[119px] bg-primary w-[48.88px] h-[3px] [transform:_rotate(-90deg)] [transform-origin:0_0]" />
        <div className="absolute top-[155.94px] left-[55px] bg-primary w-[48.88px] h-[3px] [transform:_rotate(-90deg)] [transform-origin:0_0] opacity-[0.5]" />
        <div className="absolute top-[34px] left-[224px]">kg</div>
        <div className="absolute top-[0px] left-[141px] text-[64px] leading-[64px] font-semibold text-left">
          54
        </div>
      </div>
      <div className="absolute top-[80px] left-[56px] w-[262px] h-[58px] text-3xs font-integral-cf">
        <div className="absolute top-[42px] left-[29px] leading-[16px]">{`You can always change this later  `}</div>
        <b className="absolute top-[0px] left-[0px] text-xl leading-[30px]">
          What’s your weight?
        </b>
      </div>
    </div>
  );
};

export default Weight;
