import { CartProvider } from "./CartContext";
import Menu from "./Menu";
import Navbar from "./Navbar";
import { useState } from "react";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleSelectedCategory = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <CartProvider>
      <Navbar
        onCategoryChange={handleSelectedCategory}
        selectedCategory={selectedCategory}
      />

      <Menu selectedCategory={selectedCategory} />
    </CartProvider>
  );
};

export default Home;
