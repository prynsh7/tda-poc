import sidebarDashboard from "./dashboard.svg";
import sidebarCross from "./cross.svg";
import sidebarHamburger from "./hamburger.svg";
import sidebarrequests from "./reqests_main.svg";
import sidebarProfile from "./profile.svg";
import sidebarOffers from "./offers.svg";
import sidebarSettings from "./settings.svg";
import upload from "./upload.svg";
import add from "./add.svg";
import cross from "./cross.svg";
import { IoMdClose } from "react-icons/io";
import { BsArrowLeft, BsList } from "react-icons/bs";
import { MdDashboard, MdPerson, MdSettings } from "react-icons/md";
import { PiBuildingsDuotone, PiWarehouse, PiHouseLineFill,  } from "react-icons/pi";
import { IoHome } from "react-icons/io5";

export const ICONS = {
  SIDEBAR_DASHBOARD: MdDashboard,
  SIDEBAR_CROSS: IoMdClose,
  SIDEBAR_HAMBURGER: BsArrowLeft,
  SIDEBAR_REQUESTS: MdPerson,
  SIDEBAR_PROFILE: MdPerson,
  SIDEBAR_SETTINGS: MdSettings,
  SIDEBAR_OFFERS: MdPerson,
  UPLOAD: upload,
  ADD: add,
  CROSS: cross,
  HOME_1: PiBuildingsDuotone,
  HOME_2: PiWarehouse,
  HOME_3: PiHouseLineFill,
  HOME_4: IoHome,
};
