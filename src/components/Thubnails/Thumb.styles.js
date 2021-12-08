import styled from "styled-components";



export const Container = styled.div`
background-color: lightgrey;
border-radius: 20px;
`
export const Image = styled.img`
width: 100%;
height: 100%;
max-width: 720px;
min-width: 100px;
transition: all 0.3s;
object-fit: cover;
border-radius: 20px;
animation: animateThumb 0.5s;
background-color: var(--darkGrey);


@keyframes animateThumb {
    
    from{
        opacity: 0;
    }

    to{
        opacity: 1;
    }


}

:hover {
    opacity: 0.8;
}

`;