import React, { useState } from "react";
import Para from "./Para";

const Button = () => {
    const [isShown, setIsShown] = useState(false);
    
    const handleClick = ()=>{
        setIsShown(true); // toggle  or if u want to keep para, then setIsshown(true)
    }
    return (
        <div>
            <button id ="click" onClick={handleClick}>Click Me</button>
            
            {isShown && <Para/>}
            
        </div>
    );
}
 
export default Button;