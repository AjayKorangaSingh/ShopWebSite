import { Send } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 60vh;
`;

const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
  ${mobile({ fontSize: "30px" })}
`;

const Desc = styled.div`
  font-size: 25px;
  font-weight: 200;
  margin-bottom: 20px;
  ${mobile({ textAlign: "center", fontSize: "17px" })}
`;

const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  display: flex;
  justify-content: center;
  background-color: white;
  border: 1px solid green;
  ${mobile({ width: "80%", height: "25px" })}
`;

const Input = styled.input`
  border: none;
  padding-left: 20px;
  flex: 7;
`;

const Button = styled.button`
  flex: 1;
  border: none;
  background-color: teal;
  color: white;
`;

const NewsLetter = () => {
  return (
    <Container>
      <Title>NewsLetter</Title>
      <Desc>Get timely updates from your favorite products</Desc>
      <InputContainer>
        <Input placeholder="email-Id" />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default NewsLetter;
