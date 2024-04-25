/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    screens: {
      mobile: { max: "767px" },
      tablet: { min: "768px", max: "1024px" },
      desktop: { min: "1025px" },
    },
    extend: {
      colors: {
        primary: {
          main: "#F4F4F4",
          black: "#000000",
          white: "#FFFFFF",
          mainGradient:
            "linear-gradient(to top, rgba(255,255,255,1) 0%, rgba(241,249,246,1) 35%, #f7b0c1 100%)",
        },
        secondary: {
          main: "#000000cc",
          main2: "#171717",
          charcoal: "#000000e6",
          charcoalLight: "#333333",
          darkGray: "#D9D9D9",
          normalGray: "#E9E9E9",
          lightGray: "#EFEFEF",
          extraLightGray: "#F0F0F0",
          yellow: "#FAFF00",
        },
        supportive: {
          green_main: "#00AB1B",
          orange_main: "#FF9900",
          pink_main: "#FF4E64",
          sparklingGreen: "#A0CABC",
        },
        error: {
          main: "#FF4E64",
        },
        border: {
          main: "#00000033",
        },
        background: {
          main: "#FFFFFF",
          secondary: "#F4F4F4",
        },
        font: {
          main: "#111111",
          white: "#fff",
          secondary: "#0000004d",
          gray: "#575757",
          darkGray: "#7D7D7D",
          whiteGray: "#DCDCDC",
          grey: "#909090",
        },
      },
      fontSize: {
        // Heading
        large: [
          "128px",
          {
            lineHeight: "normal",
            fontWeight: "400",
            fontFamily: "",
            letterSpacing: "0px",
          },
        ],
        large2: [
          "64px",
          {
            lineHeight: "normal",
            fontWeight: "400",
            fontFamily: "",
            letterSpacing: "0px",
          },
        ],
        title: [
          "48px",
          {
            lineHeight: "normal",
            fontWeight: "600",
            fontFamily: "",
            letterSpacing: "0px",
          },
        ],
        title2: [
          "40px",
          {
            lineHeight: "normal",
            fontWeight: "400",
            fontFamily: "",
            letterSpacing: "0px",
          },
        ],
        boldTitle2: [
          "40px",
          {
            lineHeight: "normal",
            fontWeight: "600",
            fontFamily: "",
            letterSpacing: "0px",
          },
        ],
        lightTitle: [
          "36px",
          {
            lineHeight: "54px",
            fontWeight: "400",
            fontFamily: "",
            letterSpacing: "0px",
          },
        ],
        title3: [
          "32px",
          {
            lineHeight: "normal",
            fontWeight: "400",
            fontFamily: "",
            letterSpacing: "0px",
          },
        ],
        boldTitle3: [
          "30px",
          {
            lineHeight: "normal",
            fontWeight: "600",
            fontFamily: "",
            letterSpacing: "0px",
          },
        ],
        title4: [
          "25px",
          {
            lineHeight: "normal",
            fontWeight: "600",
            fontFamily: "",
            letterSpacing: "0px",
          },
        ],
        // Paragraph
        semiLargeTitle: [
          "22px",
          {
            lineHeight: "normal",
            fontWeight: "400",
            fontFamily: "",
            letterSpacing: "0px",
          },
        ],
        largeBoldParagraph: [
          "20px",
          {
            lineHeight: "normal",
            fontWeight: "600",
            fontFamily: "",
            letterSpacing: "0px",
          },
        ],
        largeParagraph: [
          "20px",
          {
            lineHeight: "30px",
            fontWeight: "400",
            fontFamily: "",
            letterSpacing: "0px",
          },
        ],
        mediumParagraph: [
          "18px",
          {
            lineHeight: "normal",
            fontWeight: "400",
            fontFamily: "",
            letterSpacing: "0px",
          },
        ],
        normalParagraph: [
          "16px",
          {
            lineHeight: "normal",
            fontWeight: "400",
            fontFamily: "",
            letterSpacing: "0px",
          },
        ],
        boldNormalParagraph: [
          "16px",
          {
            lineHeight: "normal",
            fontWeight: "500",
            fontFamily: "",
            letterSpacing: "0px",
          },
        ],
        smallParagraph: [
          "14px",
          {
            lineHeight: "normal",
            fontWeight: "600",
            fontFamily: "",
            letterSpacing: "0px",
          },
        ],
        smallerParagraph: [
          "14px",
          {
            lineHeight: "normal",
            fontWeight: "400",
            fontFamily: "",
            letterSpacing: "0px",
          },
        ],
        xsParagraph: [
          "12px",
          {
            lineHeight: "15.12px",
            fontWeight: "400",
            fontFamily: "",
            letterSpacing: "0px",
          },
        ],
        boldXsParagraph: [
          "12px",
          {
            lineHeight: "15.12px",
            fontWeight: "600",
            fontFamily: "",
            letterSpacing: "0px",
          },
        ],
        exsParagraph: [
          "10px",
          {
            lineHeight: "normal",
            fontWeight: "400",
            fontFamily: "",
            letterSpacing: "0px",
          },
        ],
        mobilexsParagraph: [
          "8px",
          {
            lineHeight: "normal",
            fontWeight: "400",
            fontFamily: "",
            letterSpacing: "0px",
          },
        ],
        // Accent
        accent: [
          "20px",
          {
            lineHeight: "normal",
            fontWeight: "600",
            fontFamily: "",
            letterSpacing: "0px",
          },
        ],
        accent2: [
          "16px",
          {
            lineHeight: "normal",
            fontWeight: "600",
            fontFamily: "",
            letterSpacing: "0px",
          },
        ],
        accent3: [
          "14px",
          {
            lineHeight: "normal",
            fontWeight: "600",
            fontFamily: "",
            letterSpacing: "0px",
          },
        ],
        accent4: [
          "12px",
          {
            lineHeight: "normal",
            fontWeight: "600",
            fontFamily: "",
            letterSpacing: "0px",
          },
        ],
        accent5: [
          "10px",
          {
            lineHeight: "normal",
            fontWeight: "600",
            fontFamily: "",
            letterSpacing: "0px",
          },
        ],
      },
    },
  },
  plugins: [],
};
