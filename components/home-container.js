const HomeContainer = () => {
  return (
    <div className="absolute top-[0px] left-[0px] w-[375px] h-96 text-left text-3xs text-white font-integral-cf">
      <img
        className="absolute top-[0px] left-[0px] w-[375px] h-96 object-cover"
        alt=""
        src="/background5@2x.png"
      />
      <div className="absolute top-[269px] left-[34px] leading-[16px]">
        <p className="m-0">Enter your informations below or</p>
        <p className="m-0">login with a other account</p>
      </div>
      <div className="absolute top-[214px] left-[32px] text-13xl leading-[43px]">
        <span>Hello</span>
        <span className="font-light font-inter">{` `}</span>
        <b>rookies,</b>
      </div>
    </div>
  );
};

export default HomeContainer;
