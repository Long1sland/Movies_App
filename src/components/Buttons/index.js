import React from "react";
import { Wrapper } from "./Button.stlyles";

const Button = ({load, text}) => {
    return (
        <Wrapper onClick={load}>
            {text}
        </Wrapper>
    );
}
 
export default Button;