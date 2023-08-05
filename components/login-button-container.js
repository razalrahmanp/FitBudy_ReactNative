import SmallButton from "./small-button";
import AccountButton from "./account-button";
import AccountButtonIcon from "./account-button-icon";

const LoginButtonContainer = () => {
  return (
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
      <AccountButton />
      <AccountButtonIcon
        dimensionCode="/account-button1.svg"
        accountButtonIconPosition="absolute"
        accountButtonIconTop="0px"
        accountButtonIconLeft="0px"
        accountButtonIconCursor="unset"
      />
    </div>
  );
};

export default LoginButtonContainer;
