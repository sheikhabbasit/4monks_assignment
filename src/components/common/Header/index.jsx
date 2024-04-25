import React from "react";
import HamburgerIcon from "src/assets/images/Hamburger";
import BattireLogo from "src/assets/images/logos/Battire.png";
import {
  AdditionalNavOptions,
  InitialNavOptions,
} from "src/helpers/constants/AppConstants";

function Header() {
  return (
    <div className="w-100 bg-secondary-main h-[60px]">
      <nav className="w-[90%] mobile:w-[93%] h-[inherit] mx-auto horizontal-between-flex">
        <div className="flex">
          <img
            src={BattireLogo}
            alt="Battire Logo"
            height={21}
            width={76}
            className="mr-16"
          />
          <div className="mobile:hidden">
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
        </div>
        <div className="flex flex-row-reverse">
          <div className="mobile:hidden">
            {AdditionalNavOptions.map((item) => {
              return (
                <span
                  key={item.id}
                  className={`ml-10
                   text-font-white relative`}
                >
                  {item.label}
                </span>
              );
            })}
          </div>
          <div className="desktop:hidden tablet:hidden">
            <HamburgerIcon />
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
