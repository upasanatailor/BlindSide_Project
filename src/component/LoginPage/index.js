import { React, useState } from "react";
import axios from "axios";
import {
  Wrapper,
  Form,
  Logintext,
  UserName,
  Password,
  Button,
  Input,
  Container,
  Span,
  Imagebox,
} from "./styled";
import Logo from "../../Images/Logo.svg";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  console.log({ username, password });

  let navigate = useNavigate();
  const handleUsename = (e) => {
    setUsername(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleApi = () => {
    axios
      .post("https://reqres.in/api/login", {
        username: username,
        password: password,
      })
      .then(function (response) {
        localStorage.setItem("token", response.data.token);
        navigate("/VideoSection", { replace: true });
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <Container>
      <Wrapper>
        <Imagebox>
          <img src={Logo} alt="logo-image" width={270} height={130} />
        </Imagebox>
        <Logintext>Sign In</Logintext>
        <Form>
          <UserName>
            <Input
              type="text"
              name="username"
              placeholder="e-mail"
              onChange={handleUsename}
            />
          </UserName>

          <Password>
            <Input
              type="text"
              name="password"
              placeholder="password"
              onChange={handlePassword}
            />
          </Password>
          <Button type="submit" onClick={handleApi}>
            <Span>Log in</Span>
          </Button>
        </Form>
        <Logintext>Forgot password?</Logintext>
      </Wrapper>
    </Container>
  );
};

export default LoginPage;
