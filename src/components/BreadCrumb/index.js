import React from "react";
import {Wrapper, Content} from './BeadCrumb.styles'
import { Link } from "react-router-dom";

const BreadCrumb = ({movieTitle}) => {
    return (
        <Wrapper>
            <Content>
                <Link to = "/Movies_App">
                <span>Home</span>
                </Link>
                <span>|</span>
                <span>{movieTitle}</span>
            </Content>
        </Wrapper>
    );
}
 
export default BreadCrumb;