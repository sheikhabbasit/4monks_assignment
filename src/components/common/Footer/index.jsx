import React from "react";
import { Icons, Links } from "src/helpers/constants/AppConstants";

function Footer() {
  return (
    <footer className="bg-primary-black px-24 pt-16">
      {/* Subscribe Section */}
      <div className="flex flex-row justify-between pb-9 items-center border-b-[1px] border-b-border-secondary">
        <h3 className="text-font-white text-title">
          Stay Informed <br /> About Battre
        </h3>
        <form className="flex">
          <input
            className="bg-input-main h-16 pl-6 pr-16"
            placeholder="Your email ID"
            type="text"
          />
          <button
            type="submit"
            className="bg-primary-white text-boldXsParagraph px-12"
          >
            Subscribe
          </button>
        </form>
      </div>

      {/* Links Section */}
      <div className="flex flex-row justify-between pt-12 w-100 pb-24 border-b-[1px] border-b-border-secondary">
        {/* Address */}
        <addr className="pb-8 text-font-white text-smallerParagraph">
          Kasra No 351, 80 Feet Road <br /> Vinayak City <br /> Guru Marg, Sirsi
          Road <br /> Neemera, Bindayaka, <br /> <br />
          Jaipur, Rajasthan, 302041 <br /> <br />
          CIN: U29100RJ2017PTC059452
        </addr>
        {/* Other Links */}
        <div className="flex flex-row justify-between">
          {Links.map((column) => {
            return (
              <div className="flex flex-col ml-24">
                <ul>
                  <li
                    className={`text-secondary-darkGray ${
                      column.label.trim() === "" ? "mb-10" : "mb-4"
                    }`}
                  >
                    {column.label}
                  </li>
                  {column.items.map((item) => {
                    return <li className="text-primary-white  mb-4">{item}</li>;
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
      {/* Copyrights */}
      <div className="py-8 flex flex-row justify-between items-center">
        <span className="text-smallerParagraph text-secondary-darkGray">
          © 2023 Batt:RE. All rights reserved
        </span>
        <div className="flex gap-x-8">
          <span className="text-smallerParagraph text-secondary-darkGray">
            PRIVACY POLICY
          </span>
          <span className="text-smallerParagraph text-secondary-darkGray">
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
