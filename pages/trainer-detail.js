import TrainerBioContainer from "../components/trainer-bio-container";
import AccountButtonIcon from "../components/account-button-icon";
import DefaultButton from "../components/default-button";
import ReviewsCardContainer from "../components/reviews-card-container";

const TrainerDetail = () => {
  return (
    <div className="relative bg-dark-1 w-full h-[812px] overflow-hidden text-left text-smi text-primary font-body-regular">
      <div className="absolute h-[101.97%] w-full top-[0%] right-[0%] bottom-[-1.97%] left-[0%]">
        <img
          className="absolute h-[30.07%] w-full top-[0%] right-[0%] bottom-[69.93%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="/image30@2x.png"
        />
        <img
          className="absolute h-[73.79%] w-full top-[26.21%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/rectangle13.svg"
        />
      </div>
      <div className="absolute h-[5.79%] w-[37.33%] top-[30.67%] right-[56.27%] bottom-[63.55%] left-[6.4%]">
        <div className="absolute top-[65.96%] left-[0%] leading-[16px]">
          Functional Strength
        </div>
        <div className="absolute top-[0%] left-[0%] text-xl leading-[25px] font-semibold text-white">
          Jennifer James
        </div>
      </div>
      <TrainerBioContainer />
      <AccountButtonIcon
        dimensionCode="/call-button.svg"
        accountButtonIconPosition="absolute"
        accountButtonIconTop="249px"
        accountButtonIconLeft="297px"
        accountButtonIconCursor="unset"
      />
      <div className="absolute h-[6.16%] w-[70.13%] top-[89.9%] right-[14.93%] bottom-[3.94%] left-[14.93%]">
        <DefaultButton
          buttonText="Book an Appointment"
          defaultButtonPosition="absolute"
          defaultButtonTop="0%"
          defaultButtonLeft="0%"
          defaultButtonWidth="100%"
          defaultButtonHeight="100%"
          defaultButtonRight="0%"
          defaultButtonBottom="0%"
          buttonTextLeft="calc(50% - 90.5px)"
          buttonTextColor="#000"
        />
      </div>
      <ReviewsCardContainer />
      <img
        className="absolute top-[56px] left-[24px] w-8 h-8"
        alt=""
        src="/circle-left3.svg"
      />
      <img
        className="absolute top-[490px] left-[100px] rounded-45xl w-8 h-8 object-cover"
        alt=""
        src="/592@2x.png"
      />
      <img
        className="absolute top-[490px] left-[76px] rounded-45xl w-8 h-8 object-cover"
        alt=""
        src="/40@2x.png"
      />
      <img
        className="absolute top-[490px] left-[50px] rounded-45xl w-8 h-8 object-cover"
        alt=""
        src="/63@2x.png"
      />
      <img
        className="absolute top-[490px] left-[27px] rounded-45xl w-8 h-8 object-cover"
        alt=""
        src="/47@2x.png"
      />
    </div>
  );
};

export default TrainerDetail;
