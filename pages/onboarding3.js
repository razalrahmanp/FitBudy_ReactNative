import { useCallback } from "react";
import { useRouter } from "next/router";
import SmallButton from "../components/small-button";

const Onboarding3 = () => {
  const router = useRouter();

  const onSmallButtonClick = useCallback(() => {
    router.push("/gender1");
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
        <SmallButton
          buttonText="Start Now"
          iconImageUrl="/chevronright1.svg"
          showChevronRightIcon
          smallButtonPosition="unset"
          smallButtonTop="unset"
          smallButtonLeft="unset"
          smallButtonCursor="pointer"
          smallButtonBorder="none"
          smallButtonWidth="185px"
          signUpColor="#000"
          signUpDisplay="inline-block"
          onSmallButtonContainerClick={onSmallButtonClick}
        />
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
