import React from "react";

//Styles
import {Text, Wrapper, Content} from './MovieInfo.styles'

//Components
import Thumb from "../Thubnails";

//Image
import NoImage from "../../images/no_image.jpg"

//Config
import { IMAGE_BASE_URL, POSTER_SIZE } from "../../config";
 



const MovieInfo = ({movie}) => {
    return (
        <Wrapper backdrop = {movie.backdrop_path}>
            <Content>
                <Thumb

                image = {
                    movie.poster_path?
                    IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path : NoImage
                }

                clickable= {false}

                
                />
                <Text>
                    <h1>{movie.title}</h1>
                    <h3>PLOT</h3>
                    <p>{movie.overview}</p>


                    <div className="rating-directors">
                        <div className="rating-info">
                            <h3>RATING</h3>
                            <div className="score">{movie.vote_average}</div>
                        </div>
                        <div>
                            <h3>DIRECTOR{ movie.directors.length > 1? "S" : null}</h3>
                            {movie.directors.map(director => {
                                <p key = {director.credit_id}>{director.name}</p>
                            })}
                        </div>
                    </div>


                </Text>
            </Content>
        </Wrapper>
    );
}
 
export default MovieInfo;