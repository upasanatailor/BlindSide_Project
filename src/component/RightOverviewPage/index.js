import React from "react";
import BigCard from "../BigCard";
import { Wrapper } from "./styled";

const RightOverviewPage = ({ categoryResult }) => {
  console.log("category", categoryResult);

  return (
    <Wrapper>
      {categoryResult?.map((value) => {
        return <BigCard value={value} />;
      })}
    </Wrapper>
  );
};

export default RightOverviewPage;
