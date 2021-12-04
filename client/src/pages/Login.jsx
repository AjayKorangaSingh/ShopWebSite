import React from "react";
import styled from "styled-components";
import { mobile, tablet } from "../responsive";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 25%;
  background: white;
  padding: 20px;
  ${mobile({ width: "75%" })}
  ${tablet({ width: "75%" })}
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 400;
  text-align: center;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const Input = styled.input`
  min-width: 40%;
  flex: 1;
  padding: 15px 20px;
  margin-bottom: 10px;
  ${mobile({ border: "1px solid grey" })}
  ${tablet({ border: "1px solid grey" })}
`;

const Button = styled.button`
  width: 50%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin: 10px 0px;
  font-size: 17px;
  letter-spacing: 0.25px;
`;

const Link = styled.a`
  text-decoration: underline;
  cursor: pointer;
  margin: 5px 0px;
  font-size: 12px;
`;

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Sign In</Title>
        <Form>
          <Input placeholder="User-name" />
          <Input placeholder="passwortd" />
          <Button>REGISTER</Button>
          <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
          <Link>CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
