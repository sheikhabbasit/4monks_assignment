import InstaIcon from "src/assets/images/logos/InstaIcon.png";
import FacebookIcon from "src/assets/images/logos/FBIcon.png";
import LinkedinIcon from "src/assets/images/logos/LinkedinIcon.png";
import TwitterIcon from "src/assets/images/logos/TwitterIcon.png";
import YoutubeIcon from "src/assets/images/logos/YoutubeIcon.png";

export const InitialNavOptions = [
  { id: 1, label: "Storie" },
  { id: 2, label: "Loev" },
  { id: 3, label: "One" },
  { id: 4, label: "Superbike", isNew: true },
];

export const AdditionalNavOptions = [
  { id: 7, label: "Become a Dealer" },
  { id: 6, label: "Book a Test Ride" },
  { id: 5, label: "Book Now" },
];

export const Steppers = [
  { id: 8, label: "01 Select Model" },
  { id: 9, label: "02 Select Color" },
  { id: 10, label: "03 Your Details and Your Preferred Location" },
];

export const ColorOptions = [
  {
    id: "C1",
    label: "aqua",
    color: "#A0CABB",
  },
  {
    id: "C2",
    label: "grey",
    color: "#707485",
  },
  {
    id: "C3",
    label: "green",
    color: "#233A78",
  },
  {
    id: "C4",
    label: "lightaqua",
    color: "#93D4DE",
  },
  {
    id: "C8",
    label: "greenaqua",
    color: "#C5DBF4",
  },
  {
    id: "C5",
    label: "orange-red",
    color: "#B42025",
  },
  {
    id: "C6",
    label: "white",
    color: "#fff",
  },
  {
    id: "C7",
    label: "cream",
    color: "#F5D266",
  },
];

const Models = ["Storie", "One", "Loev"];

const Company = ["About", "Blog"];

const QuickLinks1 = ["Become a Dealer", "Locate a Dealer", "Emagine"];

const QuickLinks2 = ["Book a Test Ride", "Book Now", "Contact"];

export const Links = [
  { label: "Models", items: Models },
  { label: "Company", items: Company },
  { label: "Quick Links", items: QuickLinks1 },
  { label: "  ", items: QuickLinks2 },
];

export const Icons = [
  { id: "icon1", imgSrc: InstaIcon },
  { id: "icon2", imgSrc: FacebookIcon },
  { id: "icon3", imgSrc: TwitterIcon },
  { id: "icon4", imgSrc: LinkedinIcon },
  { id: "icon5", imgSrc: YoutubeIcon },
];
