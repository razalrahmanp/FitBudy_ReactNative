import { useCallback } from "react";
import { useRouter } from "next/router";
import SmallButton from "../components/small-button";
import AccountButtonIcon from "../components/account-button-icon";
import GoalContainer from "../components/goal-container";

const ActivityLevel = () => {
  const router = useRouter();

  const onSmallButtonContainerClick = useCallback(() => {
    router.push("/login");
  }, [router]);

  const onBackButtonClick = useCallback(() => {
    router.push("/goal");
  }, [router]);

  const onSpinnerContainerClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='spinnerContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start" });
    }
  }, []);

  return (
    <div className="relative bg-dark-1 w-full h-[801px] overflow-hidden text-center text-3xs text-white font-integral-cf">
      <div className="absolute top-[714px] left-[32px] w-[318px] h-[54px]">
        <SmallButton
          buttonText="Start"
          iconImageUrl="/chevronright.svg"
          showChevronRightIcon
          smallButtonPosition="absolute"
          smallButtonTop="2px"
          smallButtonLeft="198px"
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
      <GoalContainer
        goal="Beginner"
        exerciseGoal="Advance"
        fitnessLevel="Rookie"
        workoutProgramName="True Beast"
        fitnessProgramName="Intermediate"
        propLeft="68px"
        propLeft1="71px"
        propLeft2="92px"
        propLeft3="73px"
        propLeft4="35px"
        onSpinnerContainerClick={onSpinnerContainerClick}
      />
      <div className="absolute top-[80px] left-[43px] w-[289px] h-[88px]">
        <div className="absolute top-[72px] left-[10px] leading-[16px]">
          This helps us create your personalized plan
        </div>
        <b className="absolute top-[0px] left-[0px] text-xl leading-[30px]">
          <p className="m-0">Your regular physical</p>
          <p className="m-0">activity level?</p>
        </b>
      </div>
    </div>
  );
};

export default ActivityLevel;
