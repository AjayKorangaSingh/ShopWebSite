import Announcement from "../components/Announcement";
import NavBar from "../components/NavBar";
import React from "react";
import styled from "styled-components";
import Products from "../components/Products";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";
import { mobile } from "../responsive";
import { useLocation } from "react-router";
import { useState } from "react";

const Container = styled.div``;
const Title = styled.h1`
  margin: 20px 0px;
  ${mobile({ margin: "10px 0px", fontSize: "20px" })}
`;
const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Filter = styled.div`
  display: flex;
  align-items: center;
  margin: 20px;
  ${mobile({ flexDirection: "column" })}
`;
const FilterText = styled.span`
  font-size: 20px;
  margin-right: 20px;
  font-weight: bolder;
  ${mobile({ fontSize: "14px", margin: "5px 0px 5px 0px" })}
`;
const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  color: green;
  font-weight: 400;
  font-size: 15px;
  letter-spacing: 0.33px;
  ${mobile({
    width: "30vw",
    height: "4vh",
    fontSize: "10px",
    padding: "2px",
    margin: "4px 0px",
  })}
`;
const Option = styled.option``;

const ProductList = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");
  const handleFilter = (e) => {
    const value = e.target.value;
    setFilters({ ...filters, [e.target.name]: value });
  };

  return (
    <Container>
      <NavBar />
      <Announcement />
      <Title>{cat}</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select name="color" onChange={handleFilter}>
            <Option disabled selected>
              Color
            </Option>
            <Option>White</Option>
            <Option>Black</Option>
            <Option>Red</Option>
            <Option>Blue</Option>
            <Option>Yellow</Option>
            <Option>Green</Option>
          </Select>
          <Select name="size" onChange={handleFilter}>
            <Option selected disabled>
              Size
            </Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>

        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select onChange={(e) => setSort(e.target.value)}>
            <Option>Newest</Option>
            <Option value="asc">Price (asc)</Option>
            <Option value="desc">Price (desc)</Option>
            <Option></Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products filters={filters} sort={sort} cat={cat} />
      <NewsLetter />
      <Footer />
    </Container>
  );
};

export default ProductList;
