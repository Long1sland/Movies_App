import React from "react";
import { Wrapper, Content, TMDBLogoImg, LogoImg } from "./Header.styles";
import ReactMovieLogo from "../../images/react-movie-logo.svg";
import TMDBLogo from '../../images/tmdb_logo.svg';


const Header = () => {
    return (
        <>
        <Wrapper>
            <Content>
                <TMDBLogoImg src = {TMDBLogo}/>
                <LogoImg src = {ReactMovieLogo}/>
            </Content>
        </Wrapper>
        </>
    );
}
 
export default Header;