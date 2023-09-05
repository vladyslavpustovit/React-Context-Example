import {useContext} from "react";
import {ColorContext} from "../../../context/context";

function SectionOne() {

    const { backgroundColor, setBackgroundColor} = useContext(ColorContext);
    const changeBackgroundColor = (color) => {
        setBackgroundColor(color);
    };

    return (
        <div className="user-input">
            <input
                type="text"
                placeholder="Enter color value"
                value={backgroundColor}
                onChange={(e) => changeBackgroundColor(e.target.value)}
            />
        </div>
    );
}

export default SectionOne;
