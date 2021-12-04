import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";

const Icon = styled.div`
  opacity: 0;
  width: 35px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  border-radius: 50%;
  z-index: 3;
  transition: all 0.2s ease;
  &:hover {
    background-color: black;
    color: black;
    transform: scale(1.5);
  }
`;

const Container = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20vw;
  height: 30vh;
  margin: 10px;
  position: relative;
  &:hover ${Icon} {
    z-index: 333;
    opacity: 42;
    color: black;
    font-weight: 400;
    background-color: white;
  }
  ${mobile({ width: "100%", height: "100%" })}
`;

const Image = styled.img`
  height: 100%;
  width: 90%;
  object-fit: cover;
  ${mobile({ height: "30vh" })}
`;

const Info = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0.3;
  z-index: 1;
  cursor: pointer;
  transition: all 0.5s ease;
  background-color: rgba(0, 0, 0, 0.2);
`;

const Product = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Icon>
          <ShoppingCartOutlined />
        </Icon>
        <Icon>
          <Link to={`/product/${item._id}`}>
            <SearchOutlined />
          </Link>
        </Icon>
        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
      </Info>
    </Container>
  );
};

export default Product;
