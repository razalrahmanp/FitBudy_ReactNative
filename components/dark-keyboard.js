import { useMemo } from "react";

const DarkKeyboard = ({
  dimension,
  productDimensions,
  darkKeyboardPosition,
  darkKeyboardTop,
  darkKeyboardLeft,
}) => {
  const darkKeyboardStyle = useMemo(() => {
    return {
      position: darkKeyboardPosition,
      top: darkKeyboardTop,
      left: darkKeyboardLeft,
    };
  }, [darkKeyboardPosition, darkKeyboardTop, darkKeyboardLeft]);

  return (
    <div
      className="relative bg-gray [backdrop-filter:blur(54.37px)] w-[375px] h-[291px] text-center text-3xl-5 text-white font-sf-pro-text"
      style={darkKeyboardStyle}
    >
      <img className="relative w-[15px] h-[25px]" alt="" src="/dictation.svg" />
      <img className="relative w-[26.5px] h-[26.5px]" alt="" src="/emoji.svg" />
      <div className="absolute w-full right-[0px] bottom-[0px] left-[0px] h-[34px]">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
          <div className="absolute bottom-[8px] left-[calc(50%_-_66.5px)] rounded-81xl bg-white w-[134px] h-[5px]" />
        </div>
      </div>
      <div className="absolute h-[70.1%] w-[98.4%] top-[2.75%] right-[0.8%] bottom-[27.15%] left-[0.8%]">
        <div className="absolute h-[20.59%] w-[23.85%] top-[79.41%] right-[0%] bottom-[0%] left-[76.15%] text-base">
          <img
            className="absolute h-[calc(100%_+_1px)] w-full top-[0px] right-[0px] bottom-[-1px] left-[0px] rounded-8xs-6 max-w-full overflow-hidden max-h-full"
            alt=""
            src="/rectangle1.svg"
          />
          <div className="absolute w-full top-[26.19%] left-[0px] tracking-[-0.32px] leading-[21px] inline-block">
            Go
          </div>
        </div>
        <div className="absolute h-[20.59%] w-[49.32%] top-[79.41%] right-[25.47%] bottom-[0%] left-[25.2%] text-base">
          <img
            className="absolute h-[calc(100%_+_1px)] w-full top-[0px] right-[0px] bottom-[-1px] left-[0px] rounded-8xs-6 max-w-full overflow-hidden max-h-full"
            alt=""
            src="/rectangle2.svg"
          />
          <div className="absolute w-full top-[26.19%] left-[0px] tracking-[-0.32px] leading-[21px] inline-block">
            space
          </div>
        </div>
        <div className="absolute h-[20.59%] w-[23.58%] top-[79.41%] right-[76.42%] bottom-[0%] left-[0%] text-base">
          <img
            className="absolute h-[calc(100%_+_1px)] w-full top-[0px] right-[0px] bottom-[-1px] left-[0px] rounded-8xs-6 max-w-full overflow-hidden max-h-full"
            alt=""
            src="/rectangle3.svg"
          />
          <div className="absolute w-full top-[26.19%] left-[0px] tracking-[-0.32px] leading-[21px] inline-block">
            123
          </div>
        </div>
        <div className="absolute h-[20.59%] w-[11.38%] top-[52.94%] right-[0%] bottom-[26.47%] left-[88.62%] text-base">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
            <img
              className="absolute h-[calc(100%_+_1px)] w-full top-[0px] right-[0px] bottom-[-1px] left-[0px] rounded-8xs-6 max-w-full overflow-hidden max-h-full"
              alt=""
              src="/rectangle4.svg"
            />
            <div className="absolute w-full top-[26.19%] left-[0px] tracking-[-0.32px] leading-[21px] inline-block">{` `}</div>
          </div>
          <img
            className="relative w-[22.66px] h-[16.99px]"
            alt=""
            src={dimension}
          />
        </div>
        <div className="absolute h-[20.59%] w-[11.38%] top-[52.94%] right-[88.62%] bottom-[26.47%] left-[0%]">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
            <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-8xs-6 bg-darkslategray shadow-[0px_1px_0px_#000]" />
            <div className="absolute top-[calc(50%_-_13px)] left-[48.57%] tracking-[-0.55px]">{` `}</div>
          </div>
          <img
            className="absolute h-[39.18%] w-[44.95%] top-[29.05%] right-[27.29%] bottom-[31.77%] left-[27.76%] max-w-full overflow-hidden max-h-full"
            alt=""
            src={productDimensions}
          />
        </div>
        <div className="absolute h-[20.59%] w-[8.67%] top-[52.94%] right-[14.91%] bottom-[26.47%] left-[76.42%]">
          <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-8xs-6 bg-darkslategray shadow-[0px_1px_0px_#000]" />
          <div className="absolute top-[calc(50%_-_13px)] left-[16.88%] tracking-[-0.55px]">
            M
          </div>
        </div>
        <div className="absolute h-[20.59%] w-[8.67%] top-[52.94%] right-[25.2%] bottom-[26.47%] left-[66.12%]">
          <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-8xs-6 bg-darkslategray shadow-[0px_1px_0px_#000]" />
          <div className="absolute top-[calc(50%_-_13px)] left-[23.13%] tracking-[-0.55px]">
            N
          </div>
        </div>
        <div className="absolute h-[20.59%] w-[8.67%] top-[52.94%] right-[35.5%] bottom-[26.47%] left-[55.83%]">
          <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-8xs-6 bg-darkslategray shadow-[0px_1px_0px_#000]" />
          <div className="absolute top-[calc(50%_-_13px)] left-[26.25%] tracking-[-0.55px]">
            B
          </div>
        </div>
        <div className="absolute h-[20.59%] w-[8.67%] top-[52.94%] right-[45.53%] bottom-[26.47%] left-[45.8%]">
          <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-8xs-6 bg-darkslategray shadow-[0px_1px_0px_#000]" />
          <div className="absolute top-[calc(50%_-_13px)] left-[23.13%] tracking-[-0.55px]">
            V
          </div>
        </div>
        <div className="absolute h-[20.59%] w-[8.67%] top-[52.94%] right-[55.83%] bottom-[26.47%] left-[35.5%]">
          <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-8xs-6 bg-darkslategray shadow-[0px_1px_0px_#000]" />
          <div className="absolute top-[calc(50%_-_13px)] left-[23.13%] tracking-[-0.55px]">
            C
          </div>
        </div>
        <div className="absolute h-[20.59%] w-[8.67%] top-[52.94%] right-[65.85%] bottom-[26.47%] left-[25.47%]">
          <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-8xs-6 bg-darkslategray shadow-[0px_1px_0px_#000]" />
          <div className="absolute top-[calc(50%_-_13px)] left-[23.13%] tracking-[-0.55px]">
            X
          </div>
        </div>
        <div className="absolute h-[20.59%] w-[8.67%] top-[52.94%] right-[76.15%] bottom-[26.47%] left-[15.18%]">
          <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-8xs-6 bg-darkslategray shadow-[0px_1px_0px_#000]" />
          <div className="absolute top-[calc(50%_-_13px)] left-[26.25%] tracking-[-0.55px]">
            Z
          </div>
        </div>
        <div className="absolute h-[20.59%] w-[8.67%] top-[26.47%] right-[4.88%] bottom-[52.94%] left-[86.45%]">
          <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-8xs-6 bg-darkslategray shadow-[0px_1px_0px_#000]" />
          <div className="absolute top-[calc(50%_-_13px)] left-[29.37%] tracking-[-0.55px]">
            L
          </div>
        </div>
        <div className="absolute h-[20.59%] w-[8.67%] top-[26.47%] right-[15.18%] bottom-[52.94%] left-[76.15%]">
          <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-8xs-6 bg-darkslategray shadow-[0px_1px_0px_#000]" />
          <div className="absolute top-[calc(50%_-_13px)] left-[26.25%] tracking-[-0.55px]">
            K
          </div>
        </div>
        <div className="absolute h-[20.59%] w-[8.67%] top-[26.47%] right-[25.2%] bottom-[52.94%] left-[66.12%]">
          <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-8xs-6 bg-darkslategray shadow-[0px_1px_0px_#000]" />
          <div className="absolute top-[calc(50%_-_13px)] left-[29.37%] tracking-[-0.55px]">
            J
          </div>
        </div>
        <div className="absolute h-[20.59%] w-[8.67%] top-[26.47%] right-[35.5%] bottom-[52.94%] left-[55.83%]">
          <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-8xs-6 bg-darkslategray shadow-[0px_1px_0px_#000]" />
          <div className="absolute top-[calc(50%_-_13px)] left-[23.13%] tracking-[-0.55px]">
            H
          </div>
        </div>
        <div className="absolute h-[20.59%] w-[8.67%] top-[26.47%] right-[45.53%] bottom-[52.94%] left-[45.8%]">
          <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-8xs-6 bg-darkslategray shadow-[0px_1px_0px_#000]" />
          <div className="absolute top-[calc(50%_-_13px)] left-[23.13%] tracking-[-0.55px]">
            G
          </div>
        </div>
        <div className="absolute h-[20.59%] w-[8.67%] top-[26.47%] right-[55.83%] bottom-[52.94%] left-[35.5%]">
          <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-8xs-6 bg-darkslategray shadow-[0px_1px_0px_#000]" />
          <div className="absolute top-[calc(50%_-_13px)] left-[29.37%] tracking-[-0.55px]">
            F
          </div>
        </div>
        <div className="absolute h-[20.59%] w-[8.67%] top-[26.47%] right-[65.85%] bottom-[52.94%] left-[25.47%]">
          <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-8xs-6 bg-darkslategray shadow-[0px_1px_0px_#000]" />
          <div className="absolute top-[calc(50%_-_13px)] left-[23.13%] tracking-[-0.55px]">
            D
          </div>
        </div>
        <div className="absolute h-[20.59%] w-[8.67%] top-[26.47%] right-[76.15%] bottom-[52.94%] left-[15.18%]">
          <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-8xs-6 bg-darkslategray shadow-[0px_1px_0px_#000]" />
          <div className="absolute top-[calc(50%_-_13px)] left-[26.25%] tracking-[-0.55px]">
            S
          </div>
        </div>
        <div className="absolute h-[20.59%] w-[8.67%] top-[26.47%] right-[86.18%] bottom-[52.94%] left-[5.15%]">
          <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-8xs-6 bg-darkslategray shadow-[0px_1px_0px_#000]" />
          <div className="absolute top-[calc(50%_-_13px)] left-[23.13%] tracking-[-0.55px]">
            A
          </div>
        </div>
        <div className="absolute h-[20.59%] w-[8.67%] top-[0%] right-[0%] bottom-[79.41%] left-[91.33%]">
          <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-8xs-6 bg-darkslategray shadow-[0px_1px_0px_#000]" />
          <div className="absolute top-[calc(50%_-_13px)] left-[26.25%] tracking-[-0.55px]">
            P
          </div>
        </div>
        <div className="absolute h-[20.59%] w-[8.67%] top-[0%] right-[10.03%] bottom-[79.41%] left-[81.3%]">
          <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-8xs-6 bg-darkslategray shadow-[0px_1px_0px_#000]" />
          <div className="absolute top-[calc(50%_-_13px)] left-[20%] tracking-[-0.55px]">
            O
          </div>
        </div>
        <div className="absolute h-[20.59%] w-[8.67%] top-[0%] right-[20.33%] bottom-[79.41%] left-[71%]">
          <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-8xs-6 bg-darkslategray shadow-[0px_1px_0px_#000]" />
          <div className="absolute top-[calc(50%_-_13px)] left-[38.75%] tracking-[-0.55px]">
            I
          </div>
        </div>
        <div className="absolute h-[20.59%] w-[8.67%] top-[0%] right-[30.35%] bottom-[79.41%] left-[60.98%]">
          <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-8xs-6 bg-darkslategray shadow-[0px_1px_0px_#000]" />
          <div className="absolute top-[calc(50%_-_13px)] left-[23.13%] tracking-[-0.55px]">
            U
          </div>
        </div>
        <div className="absolute h-[20.59%] w-[8.67%] top-[0%] right-[40.65%] bottom-[79.41%] left-[50.68%]">
          <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-8xs-6 bg-darkslategray shadow-[0px_1px_0px_#000]" />
          <div className="absolute top-[calc(50%_-_13px)] left-[26.25%] tracking-[-0.55px]">
            Y
          </div>
        </div>
        <div className="absolute h-[20.59%] w-[8.67%] top-[0%] right-[50.68%] bottom-[79.41%] left-[40.65%]">
          <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-8xs-6 bg-darkslategray shadow-[0px_1px_0px_#000]" />
          <div className="absolute top-[calc(50%_-_13px)] left-[26.25%] tracking-[-0.55px]">
            T
          </div>
        </div>
        <div className="absolute h-[20.59%] w-[8.67%] top-[0%] right-[60.98%] bottom-[79.41%] left-[30.35%]">
          <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-8xs-6 bg-darkslategray shadow-[0px_1px_0px_#000]" />
          <div className="absolute top-[calc(50%_-_13px)] left-[26.25%] tracking-[-0.55px]">
            R
          </div>
        </div>
        <div className="absolute h-[20.59%] w-[8.67%] top-[0%] right-[71%] bottom-[79.41%] left-[20.33%]">
          <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-8xs-6 bg-darkslategray shadow-[0px_1px_0px_#000]" />
          <div className="absolute top-[calc(50%_-_13px)] left-[26.25%] tracking-[-0.55px]">
            E
          </div>
        </div>
        <div className="absolute h-[20.59%] w-[8.67%] top-[0%] right-[81.3%] bottom-[79.41%] left-[10.03%]">
          <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-8xs-6 bg-darkslategray shadow-[0px_1px_0px_#000]" />
          <div className="absolute top-[calc(50%_-_13px)] left-[13.75%] tracking-[-0.55px]">
            W
          </div>
        </div>
        <div className="absolute h-[20.59%] w-[8.67%] top-[0%] right-[91.33%] bottom-[79.41%] left-[0%]">
          <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-8xs-6 bg-darkslategray shadow-[0px_1px_0px_#000]" />
          <div className="absolute top-[calc(50%_-_13px)] left-[20%] tracking-[-0.55px]">
            Q
          </div>
        </div>
      </div>
    </div>
  );
};

export default DarkKeyboard;
