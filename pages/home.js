import Card1 from "../components/card1";
import CardWithTitle from "../components/card-with-title";
import NavigationBarIcon from "../components/navigation-bar-icon";

const Home = () => {
  return (
    <div className="relative bg-dark-1 w-full h-[812px] overflow-hidden text-left text-smi text-white font-body-regular">
      <div className="absolute h-[53.45%] w-[174.4%] top-[57.64%] right-[-80.8%] bottom-[-11.08%] left-[6.4%]">
        <Card1
          exerciseImageSize="/image9@2x.png"
          exerciseTitle="Warm up"
          exerciseTime="01 Workout"
          showProBadge={showProBadge1}
          card1Position="absolute"
          card1Width="27.52%"
          card1Height="47.24%"
          card1Top="52.76%"
          card1Right="42.51%"
          card1Bottom="0%"
          card1Left="29.97%"
          vectorBackgroundColor="#d0fd3e"
          subtitleColor="#fff"
          rectangleDivBackgroundColor="#f6a800"
        />
        <Card1
          exerciseImageSize="/image10@2x.png"
          exerciseTitle="Warm up"
          exerciseTime="01 Workout"
          showProBadge={showProBadge1}
          card1Position="absolute"
          card1Width="27.52%"
          card1Height="47.24%"
          card1Top="52.76%"
          card1Right="72.48%"
          card1Bottom="0%"
          card1Left="0%"
          vectorBackgroundColor="#d0fd3e"
          subtitleColor="#fff"
          rectangleDivBackgroundColor="#f6a800"
        />
        <Card1
          exerciseImageSize="/image11@2x.png"
          exerciseTitle="Learn the Basic of Training"
          exerciseTime="06 Workouts  for Beginner"
          showProBadge={showProBadge1}
          card1Position="absolute"
          card1Width="48.78%"
          card1Height="36.87%"
          card1Top="0%"
          card1Right="0%"
          card1Bottom="63.13%"
          card1Left="51.22%"
          vectorBackgroundColor="#d0fd3e"
          subtitleColor="#fff"
          rectangleDivBackgroundColor="#f6a800"
        />
        <Card1
          exerciseImageSize="/image12@2x.png"
          exerciseTitle="Learn the Basic of Training"
          exerciseTime="06 Workouts  for Beginner"
          showProBadge={showProBadge1}
          card1Position="absolute"
          card1Width="48.78%"
          card1Height="36.87%"
          card1Top="0%"
          card1Right="51.22%"
          card1Bottom="63.13%"
          card1Left="0%"
          vectorBackgroundColor="#d0fd3e"
          subtitleColor="#d0fd3e"
          rectangleDivBackgroundColor="#f6a800"
        />
      </div>
      <div className="absolute h-[3.45%] w-[87.2%] top-[52.22%] right-[6.4%] bottom-[44.33%] left-[6.4%]">
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
      <CardWithTitle
        imageDimensions="/image13@2x.png"
        showProBadge={false}
        cardWithTitlePosition="absolute"
        cardWithTitleWidth="327px"
        cardWithTitleTop="160px"
        cardWithTitleLeft="24px"
        subtitleColor="#d0fd3e"
        textLinkLeft="78.09%"
        showProBadge1={false}
      />
      <div className="absolute h-[76.72%] w-[87.2%] top-[7.39%] right-[6.4%] bottom-[15.89%] left-[6.4%] text-mid">
        <div className="absolute top-[52.81%] left-[0%] font-semibold">
          Workout Categories
        </div>
        <div className="absolute top-[96.31%] left-[0%] font-semibold">
          New Workouts
        </div>
        <div className="absolute top-[53.45%] left-[87.77%] text-smi leading-[16px] text-primary text-right">
          See All
        </div>
        <div className="absolute top-[0%] left-[0%] text-13xl leading-[43px] font-integral-cf">
          <span>Hello</span>
          <span className="font-light font-inter">{` `}</span>
          <b>Sarah,</b>
        </div>
        <div className="absolute top-[7.54%] left-[0%] text-mini leading-[21px]">
          Good morning.
        </div>
      </div>
      <NavigationBarIcon
        imageDimensions="/navigation-bar1.svg"
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

export default Home;
