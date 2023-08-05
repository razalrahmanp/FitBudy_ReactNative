import DarkKeyboard from "../components/dark-keyboard";
import DefaultButton from "../components/default-button";
import OtpContainer from "../components/otp-container";

const Verification = () => {
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
        buttonText="Verify"
        defaultButtonPosition="absolute"
        defaultButtonTop="439px"
        defaultButtonLeft="56px"
        defaultButtonWidth="263px"
        defaultButtonHeight="50px"
        defaultButtonRight="unset"
        defaultButtonBottom="unset"
        buttonTextLeft="calc(50% - 24.5px)"
        buttonTextColor="#000"
      />
      <b className="absolute top-[114px] left-[32px] leading-[30px]">
        Verification
      </b>
      <div className="absolute top-[160px] left-[34px] text-3xs leading-[16px] inline-block w-[200px]">
        Check your email. We’ve sent you the PIN at your email.
      </div>
      <div className="absolute top-[391px] left-[106px] text-smi leading-[16px] font-semibold font-body-regular text-primary">
        Did you receive any code?
      </div>
      <OtpContainer />
      <img
        className="absolute top-[56px] left-[24px] w-8 h-8"
        alt=""
        src="/circle-left1.svg"
      />
    </div>
  );
};

export default Verification;
