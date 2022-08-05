import { React } from "react";
import { Link } from "react-router-dom";

import {
  CardComponent,
  ImageCard,
  Imagesrc,
  MovieTitle,
  WatchMovieButton,
  MovieDescription,
  Container,
} from "./styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";

const Card = ({ value }) => {
  return (
    <Link to={`/overviewpage/${value.id}/${value.snippet.categoryId}`}>
      <Container>
        <CardComponent colordata={value.snippet.color}>
          <ImageCard>
            <Imagesrc src={value.snippet.thumbnails.medium.url} />
          </ImageCard>
          <MovieTitle>{value.snippet.channelTitle}</MovieTitle>
          <MovieDescription>{value.snippet.channelTitle}</MovieDescription>
          <WatchMovieButton>
            <FontAwesomeIcon icon={faCirclePlay} />
          </WatchMovieButton>
        </CardComponent>
      </Container>
    </Link>
  );
};

export default Card;
