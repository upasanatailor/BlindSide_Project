import React, { useState } from "react";
import CommentSection from "../../component/CommentSection";
import LeftOverviewPage from "../../component/LeftOverviewPage";

import RightOverviewPage from "../../component/RightOverviewPage";
import { Wrapper, Container } from "./styled";
import { useParams } from "react-router-dom";
import videoData from "../../../src/local-Json/data.json";

const OverviewPage = () => {
  let { id, categoryid } = useParams();

  const [playVideo, setPlayVideo] = useState(videoData);
  console.log();

  const result = videoData.items.find((videoData) => videoData.id == id);
  const categoryResult = videoData.items.filter(
    (videoData) => videoData.snippet.categoryId == categoryid
  );
  console.log("idresult", categoryResult);

  return (
    <Wrapper>
      <Container>
        <LeftOverviewPage result={result} />
        <CommentSection />
      </Container>
      <RightOverviewPage categoryResult={categoryResult} />
    </Wrapper>
  );
};

export default OverviewPage;
