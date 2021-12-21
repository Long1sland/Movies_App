import React from "react";
import { Wrapper, Content, TMDBLogoImg, LogoImg } from "./Header.styles";
import ReactMovieLogo from "../../images/react-movie-logo.svg";
import TMDBLogo from '../../images/tmdb_logo.svg';
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <>
        <Wrapper>
            <Content>
                <Link to = "/Movies_App">
                <TMDBLogoImg src = {TMDBLogo}/>
                </Link>
                
                <LogoImg src = {ReactMovieLogo}/>
            </Content>
        </Wrapper>
        </>
    );
}
 
export default Header;