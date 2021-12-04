import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 100vh;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${mobile({ height: "30vh" })}
`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  width: 100%;
  height: 100%;
`;

const Title = styled.h1`
  color: white;
  text-align: center;
`;

const Button = styled.button`
  border: none;
  padding: 10px;
  border-radius: 10px;
  font-weight: 700;
  font-size: 15px;
  background-color: white;
  color: grey;
  cursor: pointer;
`;

const CategoryItem = ({ item }) => {
  return (
    <Link to={`/products/${item.cat}`}>
      <Container>
        <Image src={item.img} />
        <Info>
          <Title>{item.title}</Title>
          <Button>Shop Now</Button>
        </Info>
      </Container>
    </Link>
  );
};

export default CategoryItem;
