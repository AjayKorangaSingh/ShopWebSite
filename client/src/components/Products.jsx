import React from "react";
import styled from "styled-components";
import { popularProducts } from "../data";
import Product from "../components/Product";
import { useState, useEffect } from "react";
import axios from "axios";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 20px;
`;

const Products = ({ cat, filters, sort }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          cat
            ? `http://localhost:5000/api/product?cat=${cat}`
            : "http://localhost:5000/api/product"
        );
        setProducts(res.data);
        console.log(products);
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, [cat]);

  useEffect(() => {
    cat &&
      setFilteredProducts(
        products.filter((prev) =>
          Object.entries(filters).every(([key, value]) =>
            prev[key].includes(value)
          )
        )
      );
  }, [cat, filters, products]);

  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);

  return (
    <Container>
      {cat
        ? filteredProducts.map((item) => {
            return <Product item={item} key={item.id} />;
          })
        : products.slice(0, 7).map((item) => {
            return <Product item={item} key={item.id} />;
          })}
    </Container>
  );
};

export default Products;
