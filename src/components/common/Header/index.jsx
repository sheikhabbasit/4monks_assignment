import React from "react";
import BattireLogo from "src/assets/images/logos/Battire.png";
import {
  AdditionalNavOptions,
  InitialNavOptions,
} from "src/helpers/constants/AppConstants";

function Header() {
  return (
    <div className="w-100 bg-secondary-main h-[60px]">
      <nav className="w-[90%] h-[inherit] mx-auto horizontal-between-flex">
        <div className="flex">
          <img
            src={BattireLogo}
            alt="Battire Logo"
            height={21}
            width={76}
            className="mr-16"
          />
          {InitialNavOptions.map((item, index) => {
            const isLastItem = InitialNavOptions.length - 1 === index;
            return (
              <span
                key={item.id}
                className={`${
                  isLastItem ? "" : "mr-10"
                } text-font-white relative`}
              >
                {item.label}
                {item?.isNew ? (
                  <span className="bg-secondary-yellow absolute top-[3px] -right-[24px] text-exsParagraph text-primary-black">
                    new
                  </span>
                ) : null}
              </span>
            );
          })}
        </div>
        <div className="flex flex-row-reverse">
          {AdditionalNavOptions.map((item, index) => {
            const isLastItem = index === 0;
            return (
              <span
                key={item.id}
                className={`${
                  isLastItem ? "" : "mr-10"
                } text-font-white relative`}
              >
                {item.label}
              </span>
            );
          })}
        </div>
      </nav>
    </div>
  );
}

export default Header;
