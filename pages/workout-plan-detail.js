import Info from "../components/info";
import SmallCard from "../components/small-card";
import DefaultButton from "../components/default-button";

const WorkoutPlanDetail = () => {
  return (
    <div className="relative bg-dark-1 w-full h-[812px] overflow-hidden text-left text-smi text-white font-body-regular">
      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
        <img
          className="absolute h-[41.63%] w-full top-[0%] right-[0%] bottom-[58.37%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="/image14@2x.png"
        />
        <img
          className="absolute h-[68.47%] w-full top-[31.53%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/rectangle11.svg"
        />
      </div>
      <div className="absolute top-[calc(50%_-_37px)] left-[calc(50%_-_163.5px)] w-[192.5px] h-[29px]">
        <Info
          productCode="/play1.svg"
          durationText="60 min"
          infoPosition="absolute"
          infoTop="calc(50% - 14.5px)"
          infoLeft="calc(50% - 96.25px)"
        />
        <Info
          productCode="/flame.svg"
          durationText="350 Cal"
          infoPosition="absolute"
          infoTop="calc(50% - 14.5px)"
          infoLeft="calc(50% + 7.25px)"
        />
      </div>
      <div className="absolute h-[33%] w-[82.93%] top-[35.47%] right-[10.67%] bottom-[31.53%] left-[6.4%]">
        <div className="absolute top-[12.31%] left-[0%] leading-[16px] text-primary">
          04 Workouts for Beginner
        </div>
        <div className="absolute top-[0%] left-[0%] text-xl leading-[25px] font-semibold">
          Day 01 - Warm Up
        </div>
        <div className="absolute w-full top-[52.99%] left-[0%] text-mini leading-[21px] inline-block">{`Want your body to be healthy. Join our program with directions according to body’s goals. Increasing physical strength is the goal of strenght training. Maintain body fitness by doing physical exercise at least 2-3 times a week. `}</div>
      </div>
      <SmallCard
        exerciseTitle="Simple Warm-Up"
        exerciseDuration="Exercises"
        imageDimensions="/image15.svg"
        exerciseDescription="/down1.svg"
        smallCardPosition="absolute"
        smallCardWidth="327px"
        smallCardTop="588px"
        smallCardLeft="24px"
        simpleWarmUpMargin="0"
        simpleWarmUpPosition="unset"
        simpleWarmUpHeight="unset"
        simpleWarmUpWidth="unset"
        simpleWarmUpTop="unset"
        simpleWarmUpRight="unset"
        simpleWarmUpBottom="unset"
        simpleWarmUpLeft="unset"
        simpleWarmUpMaxWidth="unset"
        simpleWarmUpOverflow="unset"
        simpleWarmUpMaxHeight="unset"
        exercisesMargin="0"
        exercisesPosition="unset"
        exercisesWidth="unset"
        exercisesTop="unset"
        exercisesLeft="unset"
        exercisesFontSize="unset"
        exercisesLineHeight="unset"
        exercisesFontFamily="unset"
        exercisesColor="unset"
        exercisesTextAlign="unset"
        exercisesDisplay="unset"
      />
      <SmallCard
        exerciseDuration="0:30"
        smallCardPosition="absolute"
        smallCardWidth="327px"
        smallCardTop="680px"
        smallCardLeft="24px"
        simpleWarmUpMargin="unset"
        simpleWarmUpPosition="absolute"
        simpleWarmUpHeight="100%"
        simpleWarmUpWidth="25.08%"
        simpleWarmUpTop="0%"
        simpleWarmUpRight="74.92%"
        simpleWarmUpBottom="0%"
        simpleWarmUpLeft="0%"
        simpleWarmUpMaxWidth="100%"
        simpleWarmUpOverflow="hidden"
        simpleWarmUpMaxHeight="100%"
        exercisesMargin="unset"
        exercisesPosition="absolute"
        exercisesWidth="18.01%"
        exercisesTop="65.79%"
        exercisesLeft="30.23%"
        exercisesFontSize="13px"
        exercisesLineHeight="16px"
        exercisesFontFamily="'Open Sans'"
        exercisesColor="#d0fd3e"
        exercisesTextAlign="left"
        exercisesDisplay="inline-block"
      />
      <div className="absolute h-[23.28%] w-full top-[76.72%] right-[-0.13%] bottom-[0%] left-[0.13%]">
        <img
          className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/rectangle12.svg"
        />
        <DefaultButton
          buttonText="Start Workout"
          defaultButtonPosition="absolute"
          defaultButtonTop="57.14%"
          defaultButtonLeft="14.8%"
          defaultButtonWidth="70.13%"
          defaultButtonHeight="26.46%"
          defaultButtonRight="15.07%"
          defaultButtonBottom="16.4%"
          buttonTextLeft="calc(50% - 58.5px)"
          buttonTextColor="#000"
        />
      </div>
      <img
        className="absolute top-[56px] left-[24px] w-8 h-8"
        alt=""
        src="/circle-left2.svg"
      />
    </div>
  );
};

export default WorkoutPlanDetail;
