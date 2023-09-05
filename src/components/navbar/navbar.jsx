import "./navbar.css";

import { NAVBAR } from "../../data/navbarData"

export default function Navbar() {

    const pages = NAVBAR["en"];

  return (
    <>
        <ul>
            <li> <a href="">  </a> </li>
            {pages.map( (page) => { return(
                <li>{page}</li>
            )})}
        </ul>
    </>
  );
};