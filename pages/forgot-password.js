import DarkKeyboard from "../components/dark-keyboard";
import DefaultButton from "../components/default-button";
import Property1Placeholder from "../components/property1-placeholder";

const ForgotPassword = () => {
  return (
    <div className="relative bg-dark-1 w-full h-[801px] overflow-hidden text-left text-5xl text-white font-integral-cf">
      <DarkKeyboard
        dimension="/delete-button1.svg"
        productDimensions="/shift1.svg"
        darkKeyboardPosition="absolute"
        darkKeyboardTop="521px"
        darkKeyboardLeft="0px"
      />
      <DefaultButton
        buttonText="Send"
        defaultButtonPosition="absolute"
        defaultButtonTop="439px"
        defaultButtonLeft="56px"
        defaultButtonWidth="263px"
        defaultButtonHeight="50px"
        defaultButtonRight="unset"
        defaultButtonBottom="unset"
        buttonTextLeft="calc(50% - 20.5px)"
        buttonTextColor="#000"
      />
      <Property1Placeholder
        inputPlaceholder="Email"
        property1PlaceholderPosition="absolute"
        property1PlaceholderTop="222px"
        property1PlaceholderLeft="32px"
        placeholderColor="#fff"
      />
      <div className="absolute top-[114px] left-[32px] w-[286px] h-[293px]">
        <b className="absolute top-[0px] left-[0px] leading-[30px]">
          Forgot Password?
        </b>
        <div className="absolute top-[46px] left-[2px] text-3xs leading-[16px]">
          <p className="m-0">Enter your informations below or</p>
          <p className="m-0">login with a other account</p>
        </div>
        <div className="absolute top-[277px] left-[97px] text-smi leading-[16px] font-semibold font-body-regular text-primary">
          Try another way
        </div>
      </div>
      <img
        className="absolute top-[56px] left-[24px] w-8 h-8"
        alt=""
        src="/circle-left1.svg"
      />
    </div>
  );
};

export default ForgotPassword;
