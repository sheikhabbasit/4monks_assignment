import React from "react";
import ScooterImg from "src/assets/images/LargeScooter.png";

function MainView() {
  return (
    <div className="w-[41vw] h-[100%] flex flex-col justify-between bg-background-main py-16 pl-24 mr-16">
      {/* Heading */}
      <div className="border-b-[1px] border-b-border-main flex flex-row justify-between items-center pb-8">
        <h5 className="text-title4">Storie</h5>
        <div className="flex items-center">
          <div className="w-8 h-8 rounded-full bg-supportive-sparklingGreen" />
          <span className="text-smallerParagraph ml-4">Sparkling Green</span>
        </div>
      </div>

      {/* Scooter Main */}
      <div className="border-b-[1px] border-b-border-main pb-8 pt-4">
        <div className="w-100 flex justify-center">
          <img src={ScooterImg} alt="scooter" />
        </div>
      </div>

      {/* Price Section */}
      <div className="flex flex-row justify-between mt-7">
        <div className="flex flex-col w-50">
          <span className="text-exsParagraph mb-5">Booking Amount</span>
          <h4 className="text-boldTitle2">₹2,500/-</h4>
        </div>
        <div className="w-50 flex flex-col">
          <div className="flex flex-row mb-5">
            <span className="text-exsParagraph">
              *Ex-showroom price in <br /> (incl. FAME II Subsidy )
            </span>
            <span className="text-exsParagraph ml-4 text-primary-black">
              New Delhi
            </span>
          </div>
          <div>
            <span className="text-semiLargeTitle">₹ 1,17,357/-</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainView;
