import React from "react";
import { Icons, Links1, Links2 } from "src/helpers/constants/AppConstants";

function Footer() {
  return (
    <footer className="bg-primary-black px-24 mobile:px-5 pt-16">
      {/* Subscribe Section */}
      <div className="flex flex-row mobile:flex-col justify-between pb-9 items-center border-b-[1px] border-b-border-secondary">
        <h3 className="text-font-white text-title mobile:text-title4 mobile:text-center mobile:mb-7">
          Stay Informed <br /> About Battre
        </h3>
        <form className="flex mobile:w-[100%]">
          <input
            className="bg-input-main h-16 pl-6 pr-16 mobile:pl-4 mobile:pr-10 mobile:w-[70%]"
            placeholder="Your email ID"
            type="text"
          />
          <button
            type="submit"
            className="bg-primary-white text-boldXsParagraph px-12 mobile:px-4 mobile:w-[30%]"
          >
            Subscribe
          </button>
        </form>
      </div>

      {/* Links Section */}
      <div className="flex flex-row mobile:flex-col mobile:justify-start justify-between pt-12 w-100 pb-24 mobile:pb-10 border-b-[1px] border-b-border-secondary">
        {/* Address */}
        <div className="pb-8 text-font-white text-smallerParagraph">
          Kasra No 351, 80 Feet Road <br /> Vinayak City <br /> Guru Marg, Sirsi
          Road <br /> Neemera, Bindayaka, <br /> <br />
          Jaipur, Rajasthan, 302041 <br /> <br />
          CIN: U29100RJ2017PTC059452
        </div>
        {/* Other Links */}
        <div className="flex flex-row mobile:flex-col justify-between mobile:mt-10">
          <div className="flex flex-row mobile:justify-start">
            {Links1.map((column, index) => {
              return (
                <div
                  key={column.label + `LinkOne`}
                  className="flex flex-col ml-24 mobile:ml-0 mobile:w-[50%]"
                >
                  <ul>
                    <li
                      className={`text-font-grey ${
                        column.label.trim() === "" ? "mb-10" : "mb-4"
                      }`}
                    >
                      {column.label}
                    </li>
                    {column.items.map((item) => {
                      return (
                        <li className="text-primary-white  mb-4">{item}</li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
          </div>
          <div className="flex flex-row mobile:mt-9">
            {Links2.map((column, index) => {
              return (
                <div
                  key={column.label + `LinkTwo`}
                  className="flex flex-col ml-24 mobile:ml-0 mobile:w-[50%]"
                >
                  <ul>
                    <li
                      className={`text-font-grey ${
                        column.label.trim() === "" ? "mb-10" : "mb-4"
                      }`}
                    >
                      {column.label}
                    </li>
                    {column.items.map((item) => {
                      return (
                        <li className="text-primary-white  mb-4">{item}</li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* Copyrights */}
      <div className="py-8 flex flex-row justify-between items-center mobile:flex-col">
        <span className="text-smallerParagraph mobile:text-boldXsParagraph mobile:mb-4  text-font-grey">
          © 2023 Batt:RE. All rights reserved
        </span>
        <div className="flex gap-x-8 mobile:gap-x-4">
          <span className="text-smallerParagraph mobile:text-boldXsParagraph mobile:mb-4 text-font-grey">
            PRIVACY POLICY
          </span>
          <span className="text-smallerParagraph mobile:text-boldXsParagraph mobile:mb-4 text-font-grey">
            TERMS AND CONDITIONS
          </span>
        </div>
        <div className="flex gap-x-3">
          {Icons?.map((icon) => {
            return <img key={icon.id} src={icon.imgSrc} alt={"Social Icon"} />;
          })}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
