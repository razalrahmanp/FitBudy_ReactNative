import { useMemo } from "react";

const NavigationBarIcon = ({
  imageDimensions,
  navigationBarIconPosition,
  navigationBarIconWidth,
  navigationBarIconHeight,
  navigationBarIconTop,
  navigationBarIconRight,
  navigationBarIconBottom,
  navigationBarIconLeft,
  navigationBarIconMaxWidth,
  navigationBarIconOverflow,
  navigationBarIconMaxHeight,
}) => {
  const navigationBarIconStyle = useMemo(() => {
    return {
      position: navigationBarIconPosition,
      width: navigationBarIconWidth,
      height: navigationBarIconHeight,
      top: navigationBarIconTop,
      right: navigationBarIconRight,
      bottom: navigationBarIconBottom,
      left: navigationBarIconLeft,
      maxWidth: navigationBarIconMaxWidth,
      overflow: navigationBarIconOverflow,
      maxHeight: navigationBarIconMaxHeight,
    };
  }, [
    navigationBarIconPosition,
    navigationBarIconWidth,
    navigationBarIconHeight,
    navigationBarIconTop,
    navigationBarIconRight,
    navigationBarIconBottom,
    navigationBarIconLeft,
    navigationBarIconMaxWidth,
    navigationBarIconOverflow,
    navigationBarIconMaxHeight,
  ]);

  return (
    <img
      className="relative w-[375px] h-[92px]"
      alt=""
      src={imageDimensions}
      style={navigationBarIconStyle}
    />
  );
};

export default NavigationBarIcon;
