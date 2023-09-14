import './layout.css';

import Navbar from "./components/navbar/navbar";

export default function Layout(props) {

    const {children} = props;

  return (
    <div className="layoutContainer" >
        <header className="navbarConteiner">
          <Navbar />
        </header>
        <div className="pageContainer">
          {children}
        </div>
        <footer className="footerContainer">
        </footer>
    </div>
  );
};