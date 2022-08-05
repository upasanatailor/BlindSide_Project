import styled from "styled-components";

export const CardComponent = styled.div`
  display: flex;
  width: 320px;
  height: 200px;
  background-color: #454444;
  border-radius: 8px;
  position: relative;
  transform: scale(1);
  transition: 0.5s ease-out;
  &:hover {
    height: 210px;
    transition: 0.5s ease-out;
    background-color: ${(props) => props.colordata};
    transform: scale(1.1);
  }
`;
export const ImageCard = styled.div`
  display: flex;
  width: 320px;
  height: calc(100% - 37px);
  mask-image: linear-gradient(0deg, transparent, #000 33%);
  border-radius: 8px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
`;

export const Imagesrc = styled.img`
  width: 320px;
  height: 200px;
  object-fit: cover;
`;
export const MovieTitle = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: white;
  z-index: 1;
  top: 70%;
  position: absolute;
  padding: 16px;
`;

export const MovieDescription = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: white;
  z-index: 1;
  top: 80%;
  position: absolute;
  padding: 16px;
`;

export const WatchMovieButton = styled.div`
  font-size: 50px;
  font-weight: bold;
  color: white;
  z-index: 1;
  border: 0px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, 0);
  cursor: pointer;
`;

export const Container = styled.a`
  margin: 32px;
`;
