import SmallButton from "./small-button";

const PremiumForm = () => {
  return (
    <div className="absolute top-[214px] left-[32px] w-[311px] h-[385px] text-left text-smi text-white font-body-regular">
      <div className="absolute top-[0px] left-[0px] rounded-2xl bg-dark-2 w-[311px] h-[385px]" />
      <img
        className="absolute top-[0px] left-[0px] rounded-t-2xl rounded-b-none w-[311px] h-[239px] object-cover"
        alt=""
        src="/image29@2x.png"
      />
      <div className="absolute top-[0px] left-[0px] rounded-t-2xl rounded-b-none [background:linear-gradient(180deg,_rgba(17,_17,_18,_0),_rgba(17,_17,_18,_0.6))] w-[311px] h-[239px]" />
      <div className="absolute top-[89.61%] left-[41.8%] leading-[16px]">
        Cancel
      </div>
      <SmallButton
        buttonText="Be Premium"
        iconImageUrl="/chevronright2.svg"
        showChevronRightIcon={false}
        smallButtonPosition="absolute"
        smallButtonTop="271px"
        smallButtonLeft="32px"
        smallButtonCursor="unset"
        smallButtonBorder="unset"
        smallButtonWidth="247px"
        signUpColor="#000"
        signUpDisplay="inline-block"
      />
      <div className="absolute top-[51.69%] left-[7.72%] leading-[16px] text-primary">
        Subscribe to take an appointment
      </div>
      <div className="absolute top-[45.19%] left-[7.72%] text-mid font-semibold">
        Upgrade to Premium
      </div>
    </div>
  );
};

export default PremiumForm;
