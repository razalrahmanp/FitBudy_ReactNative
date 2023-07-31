import { useCallback } from "react";
import { useRouter } from "next/router";

const Onboarding2 = () => {
  const router = useRouter();

  const onOnboarding2ContainerClick = useCallback(() => {
    router.push("/onboarding3");
  }, [router]);

  return (
    <div
      className="relative bg-dark-1 w-full h-[738px] overflow-hidden flex flex-col items-center justify-start gap-[158px] cursor-pointer text-center text-5xl text-white font-integral-cf"
      onClick={onOnboarding2ContainerClick}
    >
      <div className="w-[375px] h-[586px] flex flex-col items-center justify-start gap-[62px]">
        <img
          className="relative w-[375px] h-[460px] object-cover"
          alt=""
          src="/background1@2x.png"
        />
        <div className="relative leading-[32px]">
          <p className="m-0">Create a workout plan</p>
          <p className="m-0">
            <b>to stay fit</b>
          </p>
        </div>
      </div>
      <div className="w-[88px] h-1 flex flex-row items-center justify-start gap-[10px]">
        <div className="relative bg-dark-3 w-4 h-1" />
        <div className="relative bg-primary w-9 h-1" />
        <div className="relative bg-dark-3 w-4 h-1" />
      </div>
    </div>
  );
};

export default Onboarding2;
