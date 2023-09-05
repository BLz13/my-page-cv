import './layout.css';

import { LAYOUT } from "./data/layoutData"
import Navbar from "./components/navbar/navbar";

export default function Layout(props) {

    const {children} = props;

    const subtitle = LAYOUT["en"];

  return (
    <>
        <header> <Navbar /> </header>
        <div>
          <p>{subtitle}</p>
          <h1>Bruno Lazo</h1>
        </div>
        {children}
        <footer></footer>
    </>
  );
};