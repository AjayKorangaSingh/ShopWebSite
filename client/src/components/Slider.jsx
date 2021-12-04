import React from "react";
import styled from "styled-components";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import { sliderItems } from "../data";
import { useState } from "react";
import { mobile } from "../responsive";

const Container = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  overflow: hidden;
  ${mobile({ display: "none" })}
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: pink;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  cursor: pointer;
  opacity: 2;
  color: green;
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
  transition: all 0.78s ease;
`;
const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
`;

const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
`;
const Image = styled.img`
  height: 80%;
`;

const InfoContainer = styled.div`
  padding: 10px;
  flex: 1;
`;

const Title = styled.h1`
  font-size: 70px;
`;
const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 3px;
`;
const Button = styled.button`
  padding: 10px;
  background-color: transparent;
  font-size: 20px;
  cursor: pointer;
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleSubmit = (dir) => {
    if (dir === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };
  return (
    <Container>
      <Arrow direction="left" onClick={() => handleSubmit("left")}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => {
          return (
            <Slide key={item.id} bg={item.bg}>
              <ImgContainer>
                <Image src={item.img} />
              </ImgContainer>
              <InfoContainer>
                <Title> {item.title} </Title>
                <Desc> {item.desc} </Desc>
                <Button> SHOP NOW</Button>
              </InfoContainer>
            </Slide>
          );
        })}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleSubmit("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;
