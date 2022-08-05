import { React, useState } from "react";
import Card from "../../component/Card";
import { Wrapper } from "./styled";
import videoData from "../../../src/local-Json/data.json";

const VideoSection = () => {
  const [getVideo, setGetVideo] = useState(videoData);

  return (
    <Wrapper>
      {getVideo &&
        getVideo.items.map((value) => {
          return <Card value={value} />;
        })}
    </Wrapper>
  );
};

export default VideoSection;
