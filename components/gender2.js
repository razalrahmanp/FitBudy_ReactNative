import GenderContainer from "./gender-container";
import SmallButton from "./small-button";

const Gender2 = () => {
  return (
    <div className="relative bg-dark-1 w-[378px] h-[801px] overflow-hidden text-center text-3xs text-white font-integral-cf">
      <div className="absolute top-[80px] left-[34px] w-[302px] h-[74px]">
        <div className="absolute top-[42px] left-[31px] leading-[16px]">
          <p className="m-0">To give you a better experience we need</p>
          <p className="m-0">to know your gender</p>
        </div>
        <b className="absolute top-[0px] left-[0px] text-xl leading-[30px]">
          Tell us about yourself!
        </b>
      </div>
      <GenderContainer
        iconText="/mars.svg"
        iconSize="/venus1.svg"
        propBackgroundColor="#2c2c2e"
        propColor="#fff"
        propBackgroundColor1="#d0fd3e"
        propColor1="#000"
      />
      <SmallButton
        buttonText="Next"
        iconImageUrl="/chevronright.svg"
        showChevronRightIcon
        smallButtonPosition="absolute"
        smallButtonTop="718px"
        smallButtonLeft="224px"
        smallButtonCursor="unset"
        smallButtonBorder="unset"
        smallButtonWidth="unset"
        signUpColor="#000"
        signUpDisplay="inline-block"
      />
    </div>
  );
};

export default Gender2;
