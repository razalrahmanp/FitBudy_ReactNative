import { useCallback } from "react";

const Onboarding1 = () => {
  const onOnboarding1ContainerClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='backgroundImage']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <div
      className="relative bg-dark-1 w-full h-[738px] overflow-hidden flex flex-col items-center justify-start gap-[158px] cursor-pointer text-center text-5xl text-white font-integral-cf"
      onClick={onOnboarding1ContainerClick}
    >
      <div className="w-[375px] flex flex-col items-center justify-start gap-[62px]">
        <img
          className="relative w-[375px] h-[460px] object-cover"
          alt=""
          src="/background@2x.png"
          data-scroll-to="backgroundImage"
        />
        <div className="relative leading-[32px]">
          <p className="m-0">Meet your coach,</p>
          <p className="m-0">
            <b>start your journey</b>
          </p>
        </div>
      </div>
      <div className="w-[88px] h-1 flex flex-row items-center justify-start gap-[10px]">
        <div className="relative bg-primary w-9 h-1" />
        <div className="relative bg-dark-3 w-4 h-1" />
        <div className="relative bg-dark-3 w-4 h-1" />
      </div>
    </div>
  );
};

export default Onboarding1;
