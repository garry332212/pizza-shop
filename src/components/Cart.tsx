import React from "react";

import styled from "styled-components";
import { PizzaTypes, useCart } from "./CartContext";

interface CartProps {
  closeCart: () => void;
}

const Cart: React.FC<CartProps> = ({ closeCart }) => {

  //*get the state to render items & dispatch to remove add increase
  const { state,dispatch } = useCart();


  //*Use Dispatch to access what you want to do eg. Remove Add, Increase etc
  const removeFromCart = (id: number) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: id });
  };


  return (
    <CartWrapper>
      <div className="cart">
      {state.cart.map((item:PizzaTypes) => (
          <div key={item.id} className="new">
            <div className="menuSide">
              <h1>{item.name}</h1>
              <img src={item.image} alt={item.name} />
              <div className="buttons">
                <p>{item.quantity}</p>
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            </div>
          </div>
        ))}


        <div className="priceArea">
          <p>Total <span>$</span></p>
          <p onClick={closeCart}>Close</p>
        </div>
      </div>
    </CartWrapper>
  );
};

export default Cart;
const CartWrapper = styled.div`
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
  display: flex;

  .cart {
    background-color: white;
    width: 500px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    padding: 10px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;

    .menuSide {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 5px;

      h1 {
        font-family: "Roboto Condensed", sans-serif;
        font-size: 24px;
      }

      img {
        height: 80px;
        border-radius: 10px;
      }

      .buttons {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        width: 100%;

        button {
          padding: 5px 10px;
          border: none;
          background-color: #e73f11;
          outline: none;
          border-radius: 3px;
          cursor: pointer;
          text-align: center;
          font-size: 15px;
          color:#fff
        }
      }
    }
    .priceArea {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      flex-direction: column;
      width: 50%;
      p:nth-child(2) {
        background: #6e11e7b3;
        color: #fff;
        cursor: pointer;
        padding: 10px 20px;
        border-radius: 10px;
        align-self: center;
        font-size: 1.1rem;
        font-weight: bold;
      }
      p {
        padding: 10px 20px;
       
        border-radius: 10px;
        align-self: center;
        font-size: 1.1rem;
        font-weight: bold;
      }
    }
  }
`;
