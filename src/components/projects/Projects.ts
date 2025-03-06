import Zoom from "../../assets/img/zoom65-blue.webp"
import Waak from "../../assets/img/waak/STILL_1_FRONT.png"
import Oneclock from "../../assets/img/oneclock-inside-angle.webp"
import Dior from "../../assets/img/dior.webp"
import Autonomous from "../../assets/img/autonomous.webp"
import AmericanCola from "../../assets/img/AC/AMERICAN_COLA_1.jpg"

export interface Iprojects {
  title: string;
  img: string;
  tag: string;
  color: string;
  path: string;
  id: string;
}

export const projects: Iprojects[] = [

    {
      title: "WAAK Clothing",
      img: Waak,
      tag:"3d Animation",
      color: "#000000",
      path: "/waak",
      id: "waak",
    },
    {
      title: "American Cola",
      img: AmericanCola,
      tag:"3d Animation",
      color: "#000000",
      path: "/american-cola",
      id: "american-cola",
    },
    {
      title: "Zoom65 Mechanical keyboard",
      img: Zoom,
      tag:"3d Styleframes",
      color: "#000000",
      path: "/zoom-65",
      id: "zoom",
    },
    // {
    //   title: "OneClock - Alarm clock",
    //   img: Oneclock,
    //   tag:"3d Styleframes",
    //   color: "#000000",
    //   path: "/oneclock",
    //   id: "oneclock",
    // },
    {
      title: "dior Homme",
      img: Dior,
      tag:"3d Styleframes",
      color: "#000000",
      path: "/dior",
      id: "dior",
    },
    // {
    //   title: "Autonomous Smartdesk",
    //   img: Autonomous,
    //   tag:"3d Animation",
    //   color: "#000000",
    //   path: "/autonomous",
    //   id: "autonomous",
    // },
    
  
  ]