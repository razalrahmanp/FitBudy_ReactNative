import { useCallback } from "react";
import { useRouter } from "next/router";
import SmallButton from "../components/small-button";
import AccountButtonIcon from "../components/account-button-icon";
import HeightContainer from "../components/height-container";

const Height = () => {
  const router = useRouter();

  const onSmallButtonContainerClick = useCallback(() => {
    router.push("/goal");
  }, [router]);

  const onBackButtonClick = useCallback(() => {
    router.push("/weight");
  }, [router]);

  return (
    <div className="relative bg-dark-1 w-full h-[801px] overflow-hidden text-center text-3xs text-white font-integral-cf">
      <div className="absolute top-[80px] left-[53px] w-[269px] h-[58px]">
        <div className="absolute top-[42px] left-[0px] leading-[16px]">
          This helps us create your personalized plan
        </div>
        <b className="absolute top-[0px] left-[6px] text-xl leading-[30px]">
          What’s your height?
        </b>
      </div>
      <div className="absolute top-[714px] left-[32px] w-[312px] h-[54px]">
        <SmallButton
          buttonText="Next"
          iconImageUrl="/chevronright.svg"
          showChevronRightIcon
          smallButtonPosition="absolute"
          smallButtonTop="2px"
          smallButtonLeft="192px"
          smallButtonCursor="pointer"
          smallButtonBorder="unset"
          smallButtonWidth="unset"
          signUpColor="#000"
          signUpDisplay="inline-block"
          onSmallButtonContainerClick={onSmallButtonContainerClick}
        />
        <AccountButtonIcon
          dimensionCode="/back-button.svg"
          accountButtonIconPosition="absolute"
          accountButtonIconTop="0px"
          accountButtonIconLeft="0px"
          accountButtonIconCursor="pointer"
          onBackButtonClick={onBackButtonClick}
        />
      </div>
      <HeightContainer />
    </div>
  );
};

export default Height;
