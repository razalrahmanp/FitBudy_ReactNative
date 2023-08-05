const Splash = () => {
  return (
    <div className="relative bg-dark-1 w-full h-[756px] overflow-hidden flex flex-col py-[244px] px-[41px] box-border items-center justify-end gap-[40px] text-center text-[70px] text-primary font-integral-cf">
      <img
        className="relative w-[117px] h-[116px] object-cover"
        alt=""
        src="/mask-group@2x.png"
      />
      <div className="relative tracking-[0.01em] leading-[45.5px] font-extrabold inline-block w-[293px] h-[122px] shrink-0">
        <p className="[margin-block-start:0] [margin-block-end:10px]">Dev</p>
        <p className="m-0 text-[50px]">Muscles</p>
      </div>
    </div>
  );
};

export default Splash;
