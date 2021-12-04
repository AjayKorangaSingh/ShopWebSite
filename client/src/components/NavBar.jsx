import React from "react";
import styled from "styled-components";
import { Search, ShoppingCart } from "@material-ui/icons";
import { Badge } from "@material-ui/core";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 60px;
  margin-bottom: 15px;
  ${mobile({ height: "50px", marginBottom: "20px" })};
`;

const Wrapper = styled.div`
  display: flex;
  padding: 3px 10px;
  justify-content: space-between;
  align-items: center;
  ${mobile({ padding: "5px 0px" })};
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })};
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  ${mobile({ margin: "0px 7px" })}
`;

const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })};
`;

const Center = styled.div`
  text-align: center;
  flex: 1;
`;

const Logo = styled.h1`
  font-weight: 700;
  ${mobile({ fontSize: "22px" })};
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  ${mobile({ justifyContent: "center", flex: 2 })}
`;

const Menuitem = styled.div`
  font-size: 25px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "15px", marginLeft: "6px" })}
`;

const NavBar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: "grey", fontsize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>Koranga's</Logo>
        </Center>
        <Right>
          <Menuitem>Register</Menuitem>
          <Menuitem>SignIn</Menuitem>
          <Menuitem>
            <Badge badgeContent={4} color="primary">
              <ShoppingCart color="action" />
            </Badge>
          </Menuitem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default NavBar;
