import styled from "styled-components";

export const Wrapper = styled.div`
width: 60px;
height: 60px;
opacity: 0.8;
background: var(--darkGrey);
border-radius: 50%;
position: fixed;
top: 90%;
left: 92%;

@media screen and (max-width: 800px) {
top: 90%;
left: 85%;
width: 50px;
height: 50px;

}

@media screen and (max-width: 320px) {

    left: 80%;
    top: 87%;
    width: 40px;
    height: 40px;
}

display: flex;
justify-content: center;
align-items: center;
img{
    width: 40px;

    @media screen and (max-width: 800px){
        width: 30px;
    }
}           
`