import "./home.css"

import { SUBTITLE, WELCOMETEXT } from "../../assets/data/homeData";

import profilePic from "../../assets/images/profilePic.png"

export default function Home() {

    const welcomeText = WELCOMETEXT["en"];
    
    const subtitle = SUBTITLE["en"];

    return (
        <>
            <div className="titleContainer">
                <p className="subtitle">{subtitle}</p>
                <h1 className="title">Bruno Lazo</h1>
            </div>
            <p className="welcomeText"> {welcomeText} </p>
            <img className="profilePic" src={profilePic}/>
        </>
    );
}