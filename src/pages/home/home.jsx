import { WELCOMETEXT } from "../../data/homeData";

export default function Home() {

    const welcomeText = WELCOMETEXT["en"];

    return (
        <div> <p> {welcomeText} </p> </div>
    );
}