import SectionOne from "./sections/sectionOne";
import {useContext} from "react";
import {ColorContext} from "../../context/context";

function Content() {
    const { backgroundColor } =  useContext(ColorContext);

    return (
        <div style={{ backgroundColor }} className="content">
            <SectionOne/>
        </div>
    );
}

export default Content;
