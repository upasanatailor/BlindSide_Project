import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 30px;
  width: 600px;
  height: 400px;

  color: white;
`;
export const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const Text = styled.h2``;
export const Icon = styled.div``;
export const AddComment = styled.div`
  margin-top: 5px;
  border-bottom: 1px solid black;
`;
export const TextArea = styled.textarea`
  width: 700px;
  height: 100px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  padding: 8px;
  color: white;
  background-color: gray;
`;

export const Optionarea = styled.textarea`
  float: left;
  width: 75%;
  margin-top: 6px;
`;
export const Button = styled.button`
  height: 40px;
  width: 100px;
  background-color: #c90707;
  color: white;
  border-radius: 5px;
  font-weight: 600;
`;
export const CommentList = styled.div`
  height: 40px;
  width: 100px;
  border-radius: 1px solid white;
  margin-top: 10px;
`;
export const ListStyle = styled.div`
  height: auto;
  width: 700px;
  border: 1px solid white;
  margin-bottom: 5px;
  padding: 16px;

  list-style-type: none;
`;
export const UnorderList = styled.div`
  list-style-type: none;
`;

export const IconStyle = styled.div`
  display: flex;
  justify-content: end;
  width: 700px;
`;
