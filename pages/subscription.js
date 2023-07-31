const Subscription = () => {
  return (
    <div className="relative bg-dark-1 w-full h-[812px] overflow-hidden text-left text-2xs text-white font-body-regular">
      <div className="absolute top-[0px] left-[0px] w-[375px] h-[459px] text-smi font-integral-cf">
        <img
          className="absolute top-[0px] left-[0px] w-[375px] h-[459px] object-cover"
          alt=""
          src="/background6@2x.png"
        />
        <div className="absolute h-[8.27%] w-[50.13%] top-[78.86%] left-[8.53%] leading-[16px] font-body-regular inline-block">
          <p className="m-0">When you subscribe, you’ll get</p>
          <p className="m-0">instant unlimited access</p>
        </div>
        <div className="absolute top-[282px] left-[32px] text-[25px] leading-[30px] inline-block w-[274px] h-[62px]">
          Get unlimited access
        </div>
        <b className="absolute top-[237px] left-[32px] text-9xl leading-[30px] inline-block w-[207px] h-9">
          Be Premium
        </b>
      </div>
      <div className="absolute h-[6.16%] w-[70.13%] top-[89.9%] right-[14.93%] bottom-[3.94%] left-[14.93%] text-center text-mid text-black">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-3xl bg-primary" />
          <div className="absolute top-[calc(50%_-_11px)] left-[calc(50%_-_63.5px)] font-semibold">
            Subscribe Now
          </div>
        </div>
      </div>
      <div className="absolute top-[487px] left-[32px] w-[311px] h-[74px]">
        <div className="absolute top-[0px] left-[0px] rounded-2xl bg-red-200 box-border w-[311px] h-[74px] border-[1px] border-solid border-red-100" />
        <img
          className="absolute top-[25px] left-[16px] w-6 h-6"
          alt=""
          src="/radio.svg"
        />
        <div className="absolute top-[22px] left-[52px] text-mini leading-[18px] font-semibold">
          Monthly
        </div>
        <div className="absolute top-[60.81%] left-[16.72%] text-4xs leading-[13px] text-red-100">
          Pay monthly, cancel any time
        </div>
        <div className="absolute top-[16px] left-[224px] text-xl leading-[25px] font-semibold">
          19.99
        </div>
        <div className="absolute top-[24.32%] left-[68.49%] leading-[13px]">
          $
        </div>
        <div className="absolute top-[33.78%] left-[90.35%] leading-[13px]">
          /m
        </div>
      </div>
      <div className="absolute top-[577px] left-[32px] w-[311px] h-[74px]">
        <div className="absolute top-[0px] left-[0px] rounded-2xl bg-dark-2 w-[311px] h-[74px]" />
        <img
          className="absolute top-[25px] left-[16px] w-6 h-6"
          alt=""
          src="/property-1off.svg"
        />
        <div className="absolute top-[22px] left-[52px] text-mini leading-[18px] font-semibold">
          Yearly
        </div>
        <div className="absolute top-[60.81%] left-[16.72%] text-4xs leading-[13px]">
          Pay for a full year
        </div>
        <div className="absolute top-[16px] left-[212px] text-xl leading-[25px] font-semibold">
          129.99
        </div>
        <div className="absolute top-[24.32%] left-[64.63%] leading-[13px]">
          $
        </div>
        <div className="absolute top-[33.78%] left-[90.35%] leading-[13px]">
          /y
        </div>
      </div>
    </div>
  );
};

export default Subscription;
