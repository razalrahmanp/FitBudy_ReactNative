import { useMemo } from "react";

const Property1Placeholder = ({
  inputPlaceholder,
  property1PlaceholderPosition,
  property1PlaceholderTop,
  property1PlaceholderLeft,
  placeholderColor,
}) => {
  const property1PlaceholderStyle = useMemo(() => {
    return {
      position: property1PlaceholderPosition,
      top: property1PlaceholderTop,
      left: property1PlaceholderLeft,
    };
  }, [
    property1PlaceholderPosition,
    property1PlaceholderTop,
    property1PlaceholderLeft,
  ]);

  const placeholderStyle = useMemo(() => {
    return {
      color: placeholderColor,
    };
  }, [placeholderColor]);

  return (
    <div
      className="relative w-[311px] h-[60px] text-left text-mid text-gray-light font-body-regular"
      style={property1PlaceholderStyle}
    >
      <img
        className="absolute h-[1.67%] w-full top-[99.17%] right-[0%] bottom-[-0.83%] left-[0%] rounded-xl max-w-full overflow-hidden max-h-full"
        alt=""
        src="/rectangle.svg"
      />
      <div className="absolute top-[19px] left-[16px]" style={placeholderStyle}>
        {inputPlaceholder}
      </div>
    </div>
  );
};

export default Property1Placeholder;
