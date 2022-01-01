import styled from "styled-components";

export const Wrapper = styled.div`
display: flex;
align-items:center;
justify-content: center;
min-height: 100px;
background: var(--darkGrey);
padding: 0 20px;

`

export const Content = styled.div`
max-width: var(--maxWidth);
display: flex;
flex-wrap: wrap;
justify-content: space-between;
width: 100%;

.movieInfo {
    background: var(--medGrey);
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--medGrey);
    border-radius: 20px;
    flex: 1;
    margin: 0 20px;
}

@media screen and (max-width: 768px) {

    display: block;
    .movieInfo{
        margin: 20px 0;
    }
}

`