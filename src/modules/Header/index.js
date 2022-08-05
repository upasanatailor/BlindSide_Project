import React, { useState } from "react";
import { Wrapper, LeftIcon, RightIcon, Button, Container } from "./styled";
import Logo from "../../Images/Logo.svg";
import { useNavigate } from "react-router-dom";

const Header = () => {
  let navigate = useNavigate();

  const handleOnClick = () => {
    localStorage.removeItem("token");
    navigate("/", { replace: true });
  };
  return (
    <Wrapper>
      <Container>
        <LeftIcon>
          <img src={Logo} alt="logo-image" width={200} height={100} />
        </LeftIcon>
        {!localStorage.getItem("token") ? (
          <RightIcon>
            <Button>Sign up</Button>
          </RightIcon>
        ) : (
          <RightIcon onClick={handleOnClick}>
            <Button>Log Out</Button>
          </RightIcon>
        )}
      </Container>
    </Wrapper>
  );
};

export default Header;
