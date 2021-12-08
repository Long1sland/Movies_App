import React from "react";
import { Image, Container } from "./Thumb.styles";

const Thumb = ({ image, movieId, clickable }) => {
    return (
        <Container>
            <Image src = {image} alt = "movie thumb"/>
        </Container>
    );
}
 
export default Thumb;