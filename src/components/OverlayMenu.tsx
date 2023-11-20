import styled from "styled-components";
import { PizzaTypes } from "./Menu";
import { useCart } from "./CartContext";
import { useEffect } from "react";

interface PropsType {
  selectedPizza: PizzaTypes;
  closeOverlay: () => void;
}

const OverlayMenu: React.FC<PropsType> = ({ selectedPizza, closeOverlay }) => {
  const {dispatch } = useCart();

  const addToCartHandler = () => {
    // Dispatch the action to add the selected pizza to the cart
    dispatch({ type: "ADD_TO_CART", payload: selectedPizza });
    // Close the overlay
    closeOverlay();
  };

    //to stop the background from scrolling while overlay is active!!
    useEffect(() => {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "auto";
      };
    });

 
  
  
  return (
    <PizzaOverlay>
      <div className="overlayContent">
        <img src={selectedPizza.image} alt={selectedPizza.name} />
        <div className="pizzaInfo">
          <h1>{selectedPizza.name}</h1>
          <p>{selectedPizza.description}</p>
          <h2>${selectedPizza.price}</h2>
          <div className="quantity">
          </div>
          <button onClick={addToCartHandler}>Add to Cart</button>
          <button className="closeButton" onClick={closeOverlay}>
            Close
          </button>
        </div>
      </div>
    </PizzaOverlay>
  );
};

export default OverlayMenu;

const PizzaOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #1f1e1eb5;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  box-shadow: 0 10px 15px rgb(0 0 0 / 20%);
  color: black;
  box-sizing: border-box;

  .overlayContent {
    background-color: white;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    text-align: center;
    max-width: 350px;
    transition: all 0.3s ease-in-out;
  }

  img {
    width: 350px;
    height: 330px;
  }

  .pizzaInfo {
    padding: 10px;
    h1 {
      font-family: "Roboto Condensed", sans-serif;
    }
    p {
      font-family: "Poppins", sans-serif;
      font-size: 14px;
    }
  }

  .quantity {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 20px 0;

    button {
      background-color: #f5f7f8;
      color: #000000;
      border: none;
      padding: 5px 10px;
      border-radius: 5px;
      cursor: pointer;
      margin: 0 10px;
    }
  }

  button {
    font-family: "Roboto Condensed", sans-serif;
    background-color: #f4ce14;
    color: #000;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;
    margin: 0 10px;
    &:nth-child(6) {
      background-color: #ff6969;
      color: #fff;
    }
  }

  @media screen and (max-width: 568px) {
    .overlayContent {
      padding: 5px;
      max-width: 300px;
    }

    img {
      width: 300px;
      height: 280px;
      border-radius: 10px;
    }

    .pizzaInfo {
      padding: 5px;
      h1 {
        font-size: 26px;
      }
      p {
        font-size: 13px;
      }
      h2 {
        font-size: 20px;
      }
    }
  }
  @media screen and (max-width: 368px) {
    .overlayContent {
      padding: 5px;
      max-width: 250px;
    }

    img {
      width: 250px;
      height: 250px;
      border-radius: 10px;
    }

    .pizzaInfo {
      h1 {
        font-size: 22px;
      }
      p {
        font-size: 11px;
      }
    }

    button {
      font-family: "Roboto Condensed", sans-serif;
      background-color: #f4ce14;
      color: #000;
      border: none;
      padding: 6px 20px;
      border-radius: 5px;
      cursor: pointer;
      font-size: 0.8rem;
      margin: 0 10px;
    }
  }
`;
