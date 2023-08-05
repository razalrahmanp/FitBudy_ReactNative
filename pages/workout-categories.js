import Card1 from "../components/card1";
import NavigationBarIcon from "../components/navigation-bar-icon";

const WorkoutCategories = () => {
  return (
    <div className="relative bg-dark-1 w-full h-[812px] overflow-hidden text-left text-xl text-white font-body-regular">
      <div className="absolute h-[3.08%] w-[51.2%] top-[7.39%] right-[24.8%] bottom-[89.53%] left-[24%]">
        <div className="absolute top-[0%] left-[0%] leading-[25px] font-semibold">
          Workout Categories
        </div>
      </div>
      <div className="absolute h-[3.45%] w-[87.2%] top-[14.41%] right-[6.4%] bottom-[82.14%] left-[6.4%] text-smi">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-13xl bg-dark-2" />
        <div className="absolute h-full w-[31.7%] top-[0%] right-[68.3%] bottom-[0%] left-[0%] rounded-3xl bg-primary" />
        <div className="absolute top-[17.86%] left-[7.34%] leading-[16px] text-black">
          Beginner
        </div>
        <div className="absolute top-[17.86%] left-[37.92%] leading-[16px]">
          Intermediate
        </div>
        <div className="absolute top-[17.86%] left-[75.84%] leading-[16px]">
          Advance
        </div>
      </div>
      <div className="absolute h-[84.73%] w-[87.2%] top-[21.8%] right-[6.4%] bottom-[-6.53%] left-[6.4%]">
        <Card1
          exerciseImageSize="/image17@2x.png"
          exerciseTitle="Drill Essentials"
          exerciseTime="06 Workouts  for Beginner"
          showProBadge={showProBadge1}
          card1Position="absolute"
          card1Width="100%"
          card1Height="23.26%"
          card1Top="76.74%"
          card1Right="0%"
          card1Bottom="0%"
          card1Left="0%"
          vectorBackgroundColor="#d0fd3e"
          subtitleColor="#fff"
          rectangleDivBackgroundColor="#f6a800"
        />
        <Card1
          exerciseImageSize="/image18@2x.png"
          exerciseTitle="Lower Body Strength"
          exerciseTime="05 Workouts  for Beginner"
          showProBadge={showProBadge1}
          card1Position="absolute"
          card1Width="100%"
          card1Height="23.26%"
          card1Top="51.16%"
          card1Right="0%"
          card1Bottom="25.58%"
          card1Left="0%"
          vectorBackgroundColor="#ff2424"
          subtitleColor="#d0fd3e"
          rectangleDivBackgroundColor="#ff2424"
        />
        <Card1
          exerciseImageSize="/image19@2x.png"
          exerciseTitle="Full Body Goal Crusher"
          exerciseTime="07 Workouts  for Beginner"
          showProBadge={showProBadge1}
          card1Position="absolute"
          card1Width="100%"
          card1Height="23.26%"
          card1Top="25.58%"
          card1Right="0%"
          card1Bottom="51.16%"
          card1Left="0%"
          vectorBackgroundColor="#ff2424"
          subtitleColor="#d0fd3e"
          rectangleDivBackgroundColor="#ff2424"
        />
        <Card1
          exerciseImageSize="/image20@2x.png"
          exerciseTitle="Wake Up Call"
          exerciseTime="04 Workouts  for Beginner"
          showProBadge={showProBadge1}
          card1Position="absolute"
          card1Width="100%"
          card1Height="23.26%"
          card1Top="0%"
          card1Right="0%"
          card1Bottom="76.74%"
          card1Left="0%"
          vectorBackgroundColor="#d0fd3e"
          subtitleColor="#d0fd3e"
          rectangleDivBackgroundColor="#f6a800"
        />
      </div>
      <NavigationBarIcon
        imageDimensions="/navigation-bar2.svg"
        navigationBarIconPosition="absolute"
        navigationBarIconWidth="100%"
        navigationBarIconHeight="11.39%"
        navigationBarIconTop="88.61%"
        navigationBarIconRight="0%"
        navigationBarIconBottom="0%"
        navigationBarIconLeft="0%"
        navigationBarIconMaxWidth="100%"
        navigationBarIconOverflow="hidden"
        navigationBarIconMaxHeight="100%"
      />
      <img
        className="absolute top-[744px] left-[291px] rounded-45xl w-9 h-9 object-cover"
        alt=""
        src="/591@2x.png"
      />
    </div>
  );
};

export default WorkoutCategories;
