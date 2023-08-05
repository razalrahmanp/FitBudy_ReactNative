import HomeContainer from "../components/home-container";
import SmallButton from "../components/small-button";
import AccountButtonIcon from "../components/account-button-icon";
import FormContainer1 from "../components/form-container1";

const SignUp2 = () => {
  return (
    <div className="relative bg-dark-1 w-full h-[801px] overflow-hidden text-left text-smi text-white font-body-regular">
      <HomeContainer />
      <div className="absolute top-[714px] left-[32px] w-[310px] h-[54px]">
        <SmallButton
          buttonText="Sign up"
          iconImageUrl="/chevronright.svg"
          showChevronRightIcon
          smallButtonPosition="absolute"
          smallButtonTop="2px"
          smallButtonLeft="169px"
          smallButtonCursor="unset"
          smallButtonBorder="unset"
          smallButtonWidth="unset"
          signUpColor="#000"
          signUpDisplay="inline-block"
        />
        <AccountButtonIcon
          dimensionCode="/account-button2.svg"
          accountButtonIconPosition="absolute"
          accountButtonIconTop="0px"
          accountButtonIconLeft="75px"
          accountButtonIconCursor="unset"
        />
        <AccountButtonIcon
          dimensionCode="/account-button3.svg"
          accountButtonIconPosition="absolute"
          accountButtonIconTop="0px"
          accountButtonIconLeft="0px"
          accountButtonIconCursor="unset"
        />
      </div>
      <div className="absolute top-[58px] left-[32px] w-[114px] h-[26px]">
        <div className="absolute top-[0px] left-[0px] leading-[16px] font-semibold">
          Login
        </div>
        <div className="absolute top-[0px] left-[67px] leading-[16px] font-semibold">
          Sign up
        </div>
        <div className="absolute top-[23px] left-[67px] bg-primary w-[47px] h-[3px]" />
      </div>
      <FormContainer1 />
    </div>
  );
};

export default SignUp2;
