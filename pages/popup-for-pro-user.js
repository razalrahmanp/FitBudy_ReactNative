import Info from "../components/info";
import SmallCard from "../components/small-card";
import AppointmentForm from "../components/appointment-form";

const PopupForProUser = () => {
  return (
    <div className="relative bg-dark-1 w-full h-[812px] overflow-hidden text-left text-smi text-white font-body-regular">
      <div className="absolute h-[104.43%] w-full top-[0%] right-[0%] bottom-[-4.43%] left-[0%]">
        <div className="absolute h-[95.75%] w-full top-[0%] right-[0%] bottom-[4.25%] left-[0%]">
          <img
            className="absolute h-[41.63%] w-full top-[0%] right-[0%] bottom-[58.37%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/image21@2x.png"
          />
          <img
            className="absolute h-[68.47%] w-full top-[31.53%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/rectangle11.svg"
          />
        </div>
        <div className="absolute top-[calc(50%_-_55px)] left-[calc(50%_-_155.5px)] w-[192.5px] h-[29px]">
          <Info
            productCode="/play2.svg"
            durationText="60 min"
            infoPosition="absolute"
            infoTop="calc(50% - 14.5px)"
            infoLeft="calc(50% - 96.25px)"
          />
          <Info
            productCode="/flame1.svg"
            durationText="350 Cal"
            infoPosition="absolute"
            infoTop="calc(50% - 14.5px)"
            infoLeft="calc(50% + 7.25px)"
          />
        </div>
        <div className="absolute h-[31.6%] w-[82.93%] top-[33.96%] right-[8.53%] bottom-[34.43%] left-[8.53%]">
          <div className="absolute top-[12.31%] left-[0%] leading-[16px] text-primary">
            05 Workouts for Beginner
          </div>
          <div className="absolute top-[0%] left-[0%] text-xl leading-[25px] font-semibold">
            Lower Body Strenght
          </div>
          <div className="absolute w-full top-[52.99%] left-[0%] text-mini leading-[21px] inline-block">{`Want your body to be healthy. Join our program with directions according to body’s goals. Increasing physical strength is the goal of strenght training. Maintain body fitness by doing physical exercise at least 2-3 times a week. `}</div>
        </div>
        <SmallCard
          exerciseTitle="Simple Warm-Up"
          exerciseDuration="Exercises"
          imageDimensions="/image22.svg"
          exerciseDescription="/down.svg"
          smallCardPosition="absolute"
          smallCardWidth="311px"
          smallCardTop="588px"
          smallCardLeft="32px"
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
          smallCardWidth="311px"
          smallCardTop="680px"
          smallCardLeft="32px"
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
        <SmallCard
          exerciseDuration="0:30"
          smallCardPosition="absolute"
          smallCardWidth="311px"
          smallCardTop="772px"
          smallCardLeft="32px"
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
        <div className="absolute top-[0px] left-[0px] bg-background-blur-50 [backdrop-filter:blur(16px)] w-[375px] h-[812px]" />
      </div>
      <AppointmentForm />
    </div>
  );
};

export default PopupForProUser;
