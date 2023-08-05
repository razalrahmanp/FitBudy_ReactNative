import SmallButton from "./small-button";
import Card1 from "./card1";

const AppointmentForm = () => {
  return (
    <div className="absolute top-[245px] left-[32px] w-[311px] h-[322px] text-left text-smi text-white font-body-regular">
      <div className="absolute top-[0px] left-[0px] rounded-2xl bg-dark-2 w-[311px] h-[322px]" />
      <div className="absolute top-[87.58%] left-[41.8%] leading-[16px]">
        Cancel
      </div>
      <SmallButton
        buttonText="Take Appointment"
        iconImageUrl="/chevronright.svg"
        showChevronRightIcon
        smallButtonPosition="absolute"
        smallButtonTop="208px"
        smallButtonLeft="32px"
        smallButtonCursor="unset"
        smallButtonBorder="unset"
        smallButtonWidth="247px"
        signUpColor="#000"
        signUpDisplay="inline-block"
      />
      <Card1
        exerciseImageSize="/image25@2x.png"
        exerciseTitle="Lower Body Strength"
        exerciseTime="05 Workouts  for Beginner"
        showProBadge={showProBadge1}
        card1Position="absolute"
        card1Width="100%"
        card1Height="54.66%"
        card1Top="0%"
        card1Right="0%"
        card1Bottom="45.34%"
        card1Left="0%"
        vectorBackgroundColor="#ff2424"
        subtitleColor="#d0fd3e"
        rectangleDivBackgroundColor="#ff2424"
      />
    </div>
  );
};

export default AppointmentForm;
