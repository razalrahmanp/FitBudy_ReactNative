import { useMemo } from "react";

const GoalContainer = ({
  goal,
  exerciseGoal,
  fitnessLevel,
  workoutProgramName,
  fitnessProgramName,
  propLeft,
  propLeft1,
  propLeft2,
  propLeft3,
  propLeft4,
  onSpinnerContainerClick,
}) => {
  const loseWeightStyle = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  const gainMoreFlexibleStyle = useMemo(() => {
    return {
      left: propLeft1,
    };
  }, [propLeft1]);

  const gainWeightStyle = useMemo(() => {
    return {
      left: propLeft2,
    };
  }, [propLeft2]);

  const learnTheBasicStyle = useMemo(() => {
    return {
      left: propLeft3,
    };
  }, [propLeft3]);

  const getFitterStyle = useMemo(() => {
    return {
      left: propLeft4,
    };
  }, [propLeft4]);

  return (
    <div
      className="absolute top-[294px] left-[64px] w-[247px] h-[258px] cursor-pointer text-center text-5xl text-white font-body-regular"
      data-scroll-to="spinnerContainer"
      onClick={onSpinnerContainerClick}
    >
      <div
        className="absolute top-[34px] left-[54px] leading-[43px] font-semibold"
        style={loseWeightStyle}
      >
        {goal}
      </div>
      <div
        className="absolute top-[181px] left-[17px] leading-[43px] font-semibold"
        style={gainMoreFlexibleStyle}
      >
        {exerciseGoal}
      </div>
      <div
        className="absolute top-[0px] left-[66px] text-xl leading-[34px] text-gray"
        style={gainWeightStyle}
      >
        {fitnessLevel}
      </div>
      <div
        className="absolute top-[224px] left-[52px] text-xl leading-[34px] text-gray"
        style={learnTheBasicStyle}
      >
        {workoutProgramName}
      </div>
      <div className="absolute top-[87px] left-[0px] bg-primary w-[247px] h-[3px]" />
      <div className="absolute top-[168px] left-[0px] bg-primary w-[247px] h-[3px]" />
      <div
        className="absolute top-[114px] left-[61px] text-9xl leading-[30px] font-semibold"
        style={getFitterStyle}
      >
        {fitnessProgramName}
      </div>
    </div>
  );
};

export default GoalContainer;
