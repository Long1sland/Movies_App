import React from "react";
import {Wrapper} from "./backToTop.styles"
import Arrow from "../../images/up_arrow.png"


const BackToTop = () => {

    const handleScrollToTop = () => {
        window.scrollTo({top: 0, left: 0, behavior:"smooth"})
    }
    return (
        
        <Wrapper onClick={handleScrollToTop}>
            <img src= {Arrow} alt = "Back to Top"/>
        </Wrapper>
    );
}
 
export default BackToTop;