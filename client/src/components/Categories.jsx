import React from "react";
import { useEffect, useState } from "react";
import styled from "styled-components";
// import { categories } from '../data';
import CategoryItem from "./CategoryItem";
import { mobile } from "../responsive";
import axios from "axios";

const Container = styled.div`
  display: flex;
  padding: 20px;
  ${mobile({ flexDirection: "column" })}
`;

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/category");
        setCategories(res.data);
      } catch (err) {}
    };
    getCategories();
  });

  return (
    <Container>
      {categories.map((item) => (
        <CategoryItem item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Categories;
