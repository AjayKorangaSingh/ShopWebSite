import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  padding: 10px;
  ${mobile({ flexDirection: "column" })}
`;

const Left = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ padding: "10px" })}
`;
const Logo = styled.h2`
  cursor: pointer;
`;

const Desc = styled.p`
  margin: 20px 0;
  font-size: 17px;
  font-weight: 100;
  ${mobile({ margin: "10px 0px", fontSize: "15px" })}
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  margin-right: 20px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.bg};
  display: flex;
  align-items: center;
  justify-content: center;
  ${mobile({ height: "30px", width: "30px" })}
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`;

const Title = styled.h2`
  margin-bottom: 30px;
  ${mobile({ marginBottom: "20px" })}
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  font-weight: bold;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "#d3caca" })}
`;

const ContactItem = styled.div`
  margin-bottom: 15px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
  width: 50%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Koranga's</Logo>
        <Desc>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don’t look even slightly believable.
        </Desc>
        <SocialContainer>
          <SocialIcon bg="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon bg="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon bg="55ACEE">
            <Pinterest />
          </SocialIcon>
          <SocialIcon bg="E60023">
            <Twitter />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{ marginRight: "10px" }} />{" "}
          122,Mumbai,SouthHall(Pin-223300)
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} /> +911043223344
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginRight: "10px" }} />{" "}
          contact@vikkybhai@gmail.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;
