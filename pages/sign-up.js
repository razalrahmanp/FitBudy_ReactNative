import HomeContainer from "../components/home-container";
import SmallButton from "../components/small-button";
import AccountButtonIcon from "../components/account-button-icon";
import Property1Placeholder from "../components/property1-placeholder";

const SignUp = () => {
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
      <div className="absolute top-[414px] left-[32px] w-[311px] h-[220px]">
        <Property1Placeholder
          inputPlaceholder="Email"
          property1PlaceholderPosition="absolute"
          property1PlaceholderTop="0px"
          property1PlaceholderLeft="0px"
          placeholderColor="#fff"
        />
        <Property1Placeholder
          inputPlaceholder="Password"
          property1PlaceholderPosition="absolute"
          property1PlaceholderTop="80px"
          property1PlaceholderLeft="0px"
          placeholderColor="#fff"
        />
        <Property1Placeholder
          inputPlaceholder="Password again"
          property1PlaceholderPosition="absolute"
          property1PlaceholderTop="160px"
          property1PlaceholderLeft="0px"
          placeholderColor="#fff"
        />
      </div>
    </div>
  );
};

export default SignUp;
