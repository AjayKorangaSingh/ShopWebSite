import { Add, Remove } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { mobile } from "../responsive";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 10px;
  ${mobile({ padding: "6px" })}
`;
const Title = styled.h1`
  font-size: 30px;
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  align-items: center;
`;

const TopButton = styled.button`
  padding: 10px;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background: ${(props) => (props.type === "filled" ? "black" : "transparent")};
  color: ${(props) => props.type === "filled" && "white"};
  font-size: 17px;
  ${mobile({ fontSize: "13px", marginLeft: "5px" })}
`;
const TopTexts = styled.div`
  display: flex;
  ${mobile({ display: "none" })}
`;
const TopText = styled.span`
  margin: 0px 10px;
  cursor: pointer;
  text-decoration: underline;
  font-size: 20px;
`;

const Bottom = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}
`;
const Info = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
`;
const Product = styled.div`
  display: flex;
  padding: 10px;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;
const ProductDetail = styled.div`
  display: flex;
  flex: 2;
`;
const Image = styled.img`
  width: 200px;
`;
const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const ProductName = styled.span``;
const ProductId = styled.span``;
const ProductColor = styled.div`
  background-color: ${(props) => props.color};
  width: 20px;
  height: 20px;
  border-radius: 50%;
`;
const ProductSize = styled.span``;
const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 17px;
`;
const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({ margin: "5px 15px" })}
`;
const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 100;
  ${mobile({ marginBottom: "20px" })}
`;

const Hr = styled.hr`
  background-color: #833636;
  height: 0.01px;
  width: 100%;
`;

const Summary = styled.div`
  flex: 1;
  height: 50vh;
  border: 0.5px solid grey;
  padding: 20px;
  border-radius: 10px;
`;

const SummaryTitle = styled.span`
  align-items: center;
  font-size: 30px;
  font-weight: 400;
`;
const SummaryItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 0px;
  font-size: ${(props) => (props.type === "total" ? "25px" : "17px")};
  font-weight: ${(props) => (props.type === "total" ? "300" : "100")};
`;
const SummaryItemText = styled.span``;
const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 400;
`;

const Cart = () => {
  return (
    <Container>
      <NavBar />
      <Announcement />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <TopButton>Continue Shopping </TopButton>
          <TopTexts>
            <TopText>Shopping Bag(2)</TopText>
            <TopText>Your Wishlist (0)</TopText>
          </TopTexts>
          <TopButton type="filled"> Check Out Now </TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Image src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A" />
                <Details>
                  <ProductName>
                    <b>Product:</b> JESSIE THUNDER SHOES
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> 93813718293
                  </ProductId>
                  <ProductColor color="black" />
                  <ProductSize>
                    <b>Size:</b> 37.5
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>1</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>$33</ProductPrice>
              </PriceDetail>
            </Product>
            <Hr />
            <Product>
              <ProductDetail>
                <Image src="https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png" />
                <Details>
                  <ProductName>
                    <b>Product:</b> HAKURA T-SHIRT
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> 93813718293
                  </ProductId>
                  <ProductColor color="gray" />
                  <ProductSize>
                    <b>Size:</b> M
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>1</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>$ 20</ProductPrice>
              </PriceDetail>
            </Product>
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$ 80</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$ 5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>$ -5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>$ 80</SummaryItemPrice>
            </SummaryItem>
            <Button>CHECKOUT NOW</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
