import { useMemo } from "react";

const Info = ({
  productCode,
  durationText,
  infoPosition,
  infoTop,
  infoLeft,
}) => {
  const infoStyle = useMemo(() => {
    return {
      position: infoPosition,
      top: infoTop,
      left: infoLeft,
    };
  }, [infoPosition, infoTop, infoLeft]);

  return (
    <div
      className="relative rounded-31xl bg-dark-2 flex flex-row py-[5px] pr-3.5 pl-[5px] items-center justify-start gap-[6px] text-left text-smi text-white font-body-regular"
      style={infoStyle}
    >
      <img className="relative w-[19px] h-[19px]" alt="" src={productCode} />
      <div className="relative leading-[16px]">{durationText}</div>
    </div>
  );
};

export default Info;
