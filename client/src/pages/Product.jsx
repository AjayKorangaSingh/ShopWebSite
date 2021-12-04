import React from "react";
import styled from "styled-components";
import NavBar from "../components/NavBar";
import Announcement from "../components/Announcement";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";
import { Add, Remove } from "@material-ui/icons";
import { mobile } from "../responsive";
import { publicRequest } from "../requestMethods";
import { useState, useEffect } from "react";
import { useLocation } from "react-router";

const Container = styled.div``;
const Wrapper = styled.div`
  display: flex;
  padding: 50px;
  ${mobile({ padding: "20px", flexDirection: "column" })}
`;
const ImgContainer = styled.div`
  flex: 1;
`;
const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 90vh;
  ${mobile({ width: "90%", height: "30vh" })}
`;

const InfoContainer = styled.div`
  padding: 0 30px;
  flex: 1;
  ${mobile({ padding: " 0px 15px" })}
`;
const Title = styled.h1`
  font-weight: 200;
`;
const Desc = styled.p`
  margin: 20px 0px;
  font-size: 20px;
  letter-spacing: 0.23px;
  font-weight: 200;
  ${mobile({ margin: "10px 0px", fontSize: "14px", letterSpacing: ".14px" })}
`;
const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
  ${mobile({ fontSize: "29px" })}
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
  margin: 15px 0px;
  ${mobile({ width: "100%" })}
`;
const Filter = styled.div`
  display: flex;
  align-items: center;
`;
const FilterTitle = styled.span`
  font-size: 25px;
  margin-right: 10px;
  font-weight: 400;
  ${mobile({ fontSize: "20px", marginRight: "5px" })}
`;
const FilterColor = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
`;
const FilterSize = styled.select`
  padding: 5px;
  color: teal;
  margin-left: 10px;
  ${mobile({ marginLeft: "5px" })}
`;
const FilterSizeOption = styled.option``;
const AddContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 50%;
  ${mobile({ width: "100%" })}
`;
const AmountContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Amount = styled.span`
  border: 1px solid red;
  padding: 5px;
  font-size: 15px;
  font-weight: 400;
  width: 30px;
  height: 30px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;
const Button = styled.button`
  border: none;
  border-radius: 10px;
  background-color: teal;
  color: white;
  cursor: pointer;
  padding: 10px;
  font-size: 15px;
`;

const Product = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get("/product/find/" + id);
        setProduct(res.data);
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getProduct();
  }, [id]);

  const handleQuantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

  return (
    <Container>
      <NavBar />
      <Announcement />
      <Wrapper>
        <ImgContainer>
          <Image src={product.img} />
        </ImgContainer>
        <InfoContainer>
          <Title>{product.title}</Title>
          <Desc>{product.desc}</Desc>
          <Price>$ {product.price}</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle> Color</FilterTitle>
              {product.color?.map((item) => {
                return <FilterColor color={item} key={item} />;
              })}
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                {product.size?.map((item) => {
                  return <FilterSizeOption>{item}</FilterSizeOption>;
                })}
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove onClick={() => handleQuantity("dec")} />
              <Amount>{quantity}</Amount>
              <Add onClick={() => handleQuantity("inc")} />
            </AmountContainer>
            <Button>Add To Cart</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <NewsLetter />
      <Footer />
    </Container>
  );
};

export default Product;
