import React, { useState } from "react";
import {
  Wrapper,
  Container,
  Text,
  Button,
  TextArea,
  AddComment,
  CommentList,
  ListStyle,
  UnorderList,
  IconStyle,
} from "./styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

const CommentSection = () => {
  const [comments, setComments] = useState([]);
  const [textvalue, setTextValue] = useState();
  const [toggleOn, setToggleOn] = useState(true);

  const toggleOnOff = () => {
    setToggleOn(!toggleOn);
    console.log("toggle", setToggleOn);
  };
  const handleonchange = (e) => {
    setTextValue(e.target.value);
  };
  const addEntryClick = (event) => {
    event.preventDefault();
    setComments((comments) => [...comments, textvalue]);
    setTextValue("");
  };
  console.log("oldarray", comments);
  return (
    <Wrapper>
      <form onSubmit={addEntryClick}>
        <Container>
          <Text>Comments</Text>
        </Container>
        <AddComment>
          <TextArea
            name="Comment"
            placeholder="Add a comment..."
            onChange={handleonchange}
            value={textvalue}
          ></TextArea>
        </AddComment>
        <Button>Submit</Button>
      </form>
      <IconStyle onClick={toggleOnOff}>
        <FontAwesomeIcon icon={faArrowDown} />
      </IconStyle>
      <CommentList>
        {toggleOn ? (
          <UnorderList>
            {comments.map((value) => (
              <li>
                <ListStyle>{value}</ListStyle>
              </li>
            ))}
          </UnorderList>
        ) : null}
      </CommentList>
    </Wrapper>
  );
};

export default CommentSection;
