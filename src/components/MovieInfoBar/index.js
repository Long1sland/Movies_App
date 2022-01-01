import React from "react";

// helpers
import {calcTime, convertMoney} from "../../helpers"

//Styles
import {Content, Wrapper} from "./MovieInfoBar.styles"


const MovieInfoBar = ({time, budget, revenue }) => {


    return (
        <Wrapper>
            <Content>
                <div className="movieInfo">
                    <p>Running Time: {calcTime(time)}</p>
                </div>
                <div className="movieInfo">
                    <p>Budget: {convertMoney(budget)}</p>
                </div>
                <div className="movieInfo">
                    <p>Revenue: {convertMoney(revenue)}</p>
                </div>
            </Content>
        </Wrapper>
    );
}
 
export default MovieInfoBar;