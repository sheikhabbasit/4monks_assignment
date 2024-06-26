import React, { useState } from "react";
import { ColorOptions, Steppers } from "src/helpers/constants/AppConstants";
import AquaScooter from "src/assets/images/AquaScooter.png";
import WhiteScooter from "src/assets/images/WhiteScooter.png";
import TickIcon from "src/assets/images/Tick.png";
import LineIcon from "src/assets/images/Line.png";

function StepperView() {
  const [activeScooter, setActiveScooter] = useState("aqua");
  return (
    <div className="w-[59vw] mobile:w-[100vw] bg-background-secondary p-16 pb-8 flex flex-col justify-between mobile:px-6">
      <div className="flex flex-row justify-between">
        {Steppers?.map((step, index) => {
          const isLastItem = Steppers.length - 1 === index;
          return (
            <span
              className={`text-boldXsParagraph ${
                isLastItem ? "text-font-secondary" : "text-primary-black"
              } ${index === 0 ? "mobile:hidden" : ""} `}
            >
              {step.label}
            </span>
          );
        })}
      </div>
      <h5 className="text-boldTitle3 mobile:text-title4 text-primary-black mt-6 mobile:mb-6">
        Choose <br /> a colour
      </h5>
      <div className="h-[256px] w-100 bg-white px-16 py-8 flex flex-col justify-between mb-8 mobile:px-8">
        <div className="flex flex-row justify-between items-center">
          <div className="flex">
            <img src={TickIcon} alt="tick" className="h-[32px] w-[34px]" />
            <div className="flex flex-col ml-7 mobile:ml-2.5">
              <h5 className="text-title4 mobile:text-largeBoldParagraph">
                Storie
              </h5>
              <span className="text-smallerParagraph">Sparkling Green</span>
            </div>
          </div>
          <div>
            <img
              src={activeScooter === "aqua" ? AquaScooter : WhiteScooter}
              alt="scooter"
              className="mobile:w-[112px] mobile:h-[80px]"
              width={130}
              height={100}
            />
          </div>
        </div>
        <div className="flex flex-row justify-between items-center">
          {ColorOptions?.map((color) => {
            return (
              <div
                key={color.color}
                style={{
                  background: color.color,
                  border: color.label === activeScooter ? "4px solid" : "",
                }}
                onClick={() => setActiveScooter(color.label)}
                className={`w-8 h-8 rounded-full border-[1px]`}
              />
            );
          })}
        </div>
      </div>
      <div className="bg-primary-black w-100 h-[64px] p-5 flex flex-row justify-between items-center">
        <span className="text-boldXsParagraph text-primary-white">Confirm</span>
        <span className="flex flex-row items-center">
          <img src={LineIcon} alt="Line" />
          {">"}
        </span>
      </div>
    </div>
  );
}

export default StepperView;
