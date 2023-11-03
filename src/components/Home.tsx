import styled from "styled-components";

import Menu from "./Menu";
import Navbar from "./Navbar";
import { useState } from "react";


const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleSelectedCategory = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <HomeWrapper>
      <Navbar
        onCategoryChange={handleSelectedCategory}
        selectedCategory={selectedCategory}
      />

      <Menu selectedCategory={selectedCategory} />
    </HomeWrapper>
  );
};

export default Home;

const HomeWrapper = styled.div``;
