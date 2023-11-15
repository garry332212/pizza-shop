import { useState } from "react";
import menu from "../../menu.json";
import styled from "styled-components";
import OverlayMenu from "./OverlayMenu";

export interface PizzaTypes {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}
interface Category {
  selectedCategory: string;
}
const Menu: React.FC<Category> = ({ selectedCategory }) => {
  const [selectedPizza, setSelectedPizza] = useState<PizzaTypes | null>(null);

  const [quantity, setQuantity] = useState(1);

  //!FILTER THE MENU BASED ON THE SELECTED CATEGORY

  const filteredMenu =
    selectedCategory === "All"
      ? menu
      : menu.filter((pizzas) => pizzas.category === selectedCategory);

  //!Open the overlay for the selected pizza
  const openPizzaOverlay = (pizza: PizzaTypes) => {
    setSelectedPizza(pizza);
  };

  //! Close the overlay
  const closePizzaOverlay = () => {
    setSelectedPizza(null);
  };

  return (
    <MenuWrapper>
      {filteredMenu.map((pizza: PizzaTypes) => (
        <div
          className="menuContainer"
          key={pizza.id}
          onClick={() => openPizzaOverlay(pizza)}
        >
          <img src={pizza.image} alt={pizza.name} />
          <div className="topInfo">
            <h1>{pizza.name}</h1>
            <p>{pizza.description}</p>
            <h2>${pizza.price}</h2>
          </div>
        </div>
      ))}

      {selectedPizza && (
        <OverlayMenu
          selectedPizza={selectedPizza}
          closeOverlay={closePizzaOverlay}
          quantity={quantity}
          setQuantity={setQuantity}
        />
      )}
    </MenuWrapper>
  );
};

export default Menu;
const MenuWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-color: white;

  .menuContainer {
    display: flex;
    width: 40%;
    height: 250px;
    background-color: white;
    margin: 20px;
    border-radius: 30px;
    box-shadow: 1px 1px 10px -2px gray;
    cursor: pointer;
    transition: all 0.1s ease-in-out;
    transform: scale(0.9);
    &:hover {
      box-shadow: 1px 1px 10px -2px red;
      transform: scale(1);
    }

    img {
      height: 250px;
      width: 250px;
      border-top-left-radius: 30px;
      border-bottom-left-radius: 30px;
    }

    .topInfo {
      width: 100%;
      margin-left: 10px;
      padding-right: 10px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      h1 {
        font-family: "Roboto Condensed", sans-serif;
      }
      p {
        font-family: "Poppins", sans-serif;
        max-height: 3em;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
    h2 {
      font-size: 1.2rem;
      padding: 5px;
      font-family: "Roboto Condensed", sans-serif;
      font-weight: bolder;
      text-align: right;
    }
  }

  @media (max-width: 1168px) {
    .menuContainer {
      width: 100%;
      margin: 10px;
    }
  }
  @media (max-width: 576px) {
    .menuContainer {
      height: 150px;
      img {
        height: 150px;
        width: 150px;
      }
      .topInfo {
        height: 160px;
        h1 {
          font-size: 20px;
        }
        p {
          font-size: 11px;
        }
        h2 {
          font-size: 1rem;
        }
      }
    }
  }
  @media (max-width: 368px) {
    .menuContainer {
      margin: 0px;height: 120px;
      img{
        height: 120px;
        width: 120px;
      }
      .topInfo {
        height: 135px;
        h1 {
          font-size: 16px;
        }
        p {
          font-size: 10px;
        }
        h2 {
          font-size: 1rem;
          padding: 8px;
        }
      }
    }
  }
`;
