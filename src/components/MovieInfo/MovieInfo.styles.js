import styled from "styled-components";
import { IMAGE_BASE_URL, BACKDROP_SIZE } from "../../config";

export const Wrapper = styled.div`
background: ${({backdrop}) =>
    backdrop? `url(${IMAGE_BASE_URL + BACKDROP_SIZE + backdrop})`: "black"};
background-size: cover;
background-position: center;
padding: 20px;
animation: movieInfoAnimation 1s;

@keyframes movieInfoAnimation{
    from{
        opacity: 0
    }

    to{
        opacity: 1
    }
}

`

export const Content = styled.div`
display: flex;
background: rgba(0, 0, 0, 0.7);
border-radius: 20px;
max-width: 1280px;
margin:0 auto;


@media screen and (max-width: 768px){
    display:block;
}



`

export const Text = styled.div`
padding: 20px;
width: 100%;

h3 {
    color: var(--white)
}

.rating-directors{
    width: 200px;
    display: flex;
    justify-content: space-between;
}



.score{
    font-weight: 800;
    display: flex;
    margin: 0 auto;
    align-items: center;
    justify-content: center;
    background: var(--white);
    border-radius: 50%;
    height: 30px;
    width: 30px;
    
}


`