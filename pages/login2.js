import SmallButton from "../components/small-button";
import AccountButtonIcon from "../components/account-button-icon";
import FilteredCardForm from "../components/filtered-card-form";
import Property1ProfilePicture from "../components/property1-profile-picture";

const Login2 = () => {
  return (
    <div className="relative bg-dark-1 w-full h-[801px] overflow-hidden text-left text-17xl text-white font-integral-cf">
      <div className="absolute top-[0px] left-[0px] w-[375px] h-[460px]">
        <img
          className="absolute top-[0px] left-[0px] w-[375px] h-[460px] object-cover"
          alt=""
          src="/background4@2x.png"
        />
        <div className="absolute top-[295px] left-[32px] leading-[43px]">
          <p className="m-0">Welcome back,</p>
          <p className="m-0">
            <b>Sarah</b>
          </p>
        </div>
      </div>
      <div className="absolute top-[714px] left-[32px] w-[310px] h-[54px]">
        <SmallButton
          buttonText="Login"
          iconImageUrl="/chevronright.svg"
          showChevronRightIcon
          smallButtonPosition="absolute"
          smallButtonTop="2px"
          smallButtonLeft="185px"
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
          dimensionCode="/account-button1.svg"
          accountButtonIconPosition="absolute"
          accountButtonIconTop="0px"
          accountButtonIconLeft="0px"
          accountButtonIconCursor="unset"
        />
      </div>
      <FilteredCardForm />
      <div className="absolute top-[58px] left-[32px] w-[113px] h-[26px] text-smi font-body-regular">
        <div className="absolute top-[0px] left-[0px] leading-[16px] font-semibold">
          Login
        </div>
        <div className="absolute top-[0px] left-[67px] leading-[16px] font-semibold">
          Sign up
        </div>
        <div className="absolute top-[23px] left-[0px] bg-primary w-[35px] h-[3px]" />
      </div>
      <Property1ProfilePicture
        imageDimensions="/profile-picture1.svg"
        property1ProfilePicturePosition="absolute"
        property1ProfilePictureTop="43px"
        property1ProfilePictureLeft="286px"
      />
      <img
        className="absolute top-[47px] left-[290px] rounded-45xl w-[50px] h-[50px] object-cover"
        alt=""
        src="/59@2x.png"
      />
    </div>
  );
};

export default Login2;
