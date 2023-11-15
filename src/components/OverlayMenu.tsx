import styled from "styled-components";
import { PizzaTypes } from "./Menu";

interface PropsType {
  selectedPizza: PizzaTypes;
  closeOverlay: () => void;

  setQuantity: (quantity: number) => void;
  quantity: number;
}

const OverlayMenu: React.FC<PropsType> = ({
  selectedPizza,
  closeOverlay,
  setQuantity,
  quantity,
}) => {
  const handleAddToCart = () => {
    setQuantity(1);
  };

  return (
    <PizzaOverlay>
      <div className="overlayContent">
        <img src={selectedPizza.image} alt={selectedPizza.name} />
        <div className="pizzaInfo">
          <h1>{selectedPizza.name}</h1>
          <p>{selectedPizza.description}</p>
          <h2>${selectedPizza.price}</h2>
          <div className="quantity">
            <button
              onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
            >
              -
            </button>
            {quantity}
            <button onClick={() => setQuantity(quantity + 1)}>+</button>
          </div>
          <button onClick={handleAddToCart}>Add to Cart</button>
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
  background-color: #1f1e1e7c;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100; /* Ensure it's on top of other elements */
  box-shadow: 0 10px 15px rgb(0 0 0 / 20%);
  color: black;
  box-sizing: border-box;

  .overlayContent {
    background-color: white;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    text-align: center;
    max-width: 300px;
  }

  img {
    width: 300px;
    height: 250px;
    border-radius: 10px;
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
`;
