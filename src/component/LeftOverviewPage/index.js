import React from "react";

import { Wrapper, MovieTitle } from "./styled";

const LeftOverviewPage = ({ result }) => {
  return (
    <Wrapper>
      {result?.snippet?.videoLink ? (
        <video
          id="video"
          controls="controls"
          preload="none"
          width="800"
          height="400"
          poster={result.snippet.thumbnails.high.url}
        >
          <source id="mp4" src={result?.snippet?.videoLink} type="video/mp4" />
        </video>
      ) : null}
      <MovieTitle>{result.snippet.title}</MovieTitle>
    </Wrapper>
  );
};

export default LeftOverviewPage;
