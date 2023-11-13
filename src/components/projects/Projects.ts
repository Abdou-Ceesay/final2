import Zoom from "../../assets/img/zoom65-blue.png"
import Oneclock from "../../assets/img/oneclock-inside-angle.png"
import Dior from "../../assets/img/dior.png"
import Autonomous from "../../assets/img/autonomous.jpg"


export interface Iprojects {
  title: string;
  img: string;
  tag: string;
  color: string;
  path: string
}

export const projects: Iprojects[] = [

    {
      title: "Zoom65 Mechanical keyboard",
      img: Zoom,
      tag:"3d Styleframes",
      color: "#000000",
      path: "/"
    },
    {
      title: "OneClock - Alarm clock",
      img: Oneclock,
      tag:"3d Styleframes",
      color: "#000000",
      path: "/"
    },
    {
      title: "Dior Homme",
      img: Dior,
      tag:"3d Styleframes",
      color: "#000000",
      path: "/"
    },
    {
      title: "Autonomous Smartdesk",
      img: Autonomous,
      tag:"3d Animation",
      color: "#000000",
      path: "/"
    },
  
  ]