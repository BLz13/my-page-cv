import "./navbar.css";

import { useEffect, useState } from "react";

import {ReactComponent as Background} from "../../assets/images/background.svg";
import {ReactComponent as Logo} from "../../assets/images/logo.svg";
import { NAVBAR } from "../../assets/data/navbarData"

export default function Navbar() {

  const pages = NAVBAR["en"];

  const [logoState, setLogoState] = useState(1);

  useEffect( () => {
    const b1 = document.getElementById("topTop");
    const b2 = document.getElementById("i");
    const b3 = document.getElementById("z");
    const circle = document.getElementById("bBottom");
    const lTop = document.getElementById("lTop");
    const lBottom = document.getElementById("lBottom");
    setTimeout(() => {
      b1.setAttribute("class", "strokeBlue");
      b2.setAttribute("class", "strokeBlue");
      b3.setAttribute("class", "strokePink");
      circle.setAttribute("class", "strokeBlue");
      lTop.setAttribute("class", "fillPink");
      lBottom.setAttribute("class", "fillPink");
    }, 1000);
    setTimeout(() => {
      setLogoState(0);
    }, 3000);
  },[])

  return (
    <>
      <div className="logoContainer">
        { logoState ?
          <Logo className="logoImg"/>
        :
          <Background className="backgroundLogo"/>
        }
      </div>
      <ul className="pagesContainer">
        {pages.map( (page) => { return(
            <li className="navPages" id={page.id+"Id"}>{page.name}</li>
        )})}
      </ul>
    </>
  );
};