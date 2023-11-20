import React, { useEffect } from "react";

import styled from "styled-components";
import { PizzaTypes, useCart } from "./CartContext";

interface CartProps {
  closeCart: () => void;
}

const Cart: React.FC<CartProps> = ({ closeCart }) => {
  //*get the state to render items & dispatch to remove add increase
  const { state, dispatch } = useCart();

  //*Use Dispatch to access what you want to do eg. Remove Add, Increase etc
  const removeFromCart = (id: number) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: id });
  };

  const increaseQuantity = (id: number) => {
    dispatch({ type: "INCREASE_QUANTITY", payload: id });
  };

  const decreaseQuantity = (id: number) => {
    const foundItem = state.cart.find((item) => item.id === id);

    // Ensure foundItem is not undefined and quantity doesn't go below 1
    if (foundItem && foundItem.quantity > 1) {
      dispatch({ type: "DECREASE_QUANTITY", payload: id });
    }
  };

  //to stop the background from scrolling while overlay is active!!
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  });

  return (
    <CartWrapper>
      <div className="totalClose">
        <p className="closeCart" onClick={closeCart}>
          Close
        </p>
        <p>
          Total:
          <span>
            ＄
            {state.cart
              .reduce((total, item) => total + item.price * item.quantity, 0)
              .toFixed(2)}
          </span>
        </p>
      </div>

      <div className="cart">
        {state.cart.length === 0 ? (
          <p className="emptyCartMsg">Your cart is empty</p>
        ) : (
          <>
            {state.cart.map((item: PizzaTypes) => (
              <div key={item.id} className="menuSide">
                <div className="items">
                  <img src={item.image} alt={item.name} />
                  <h1>{item.name}</h1>
                </div>
                <div className="buttons">
                  <button onClick={() => increaseQuantity(item.id)}>+</button>
                  <p>{item.quantity}</p>
                  <button onClick={() => decreaseQuantity(item.id)}>-</button>
                </div>
                <button
                  className="removeBtn"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            ))}
          </>
        )}
        <div className="priceArea"></div>
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
  flex-direction: column;
  z-index: 100;
  box-shadow: 0 10px 15px rgb(0 0 0 / 20%);
  color: black;
  box-sizing: border-box;
  display: flex;

  .totalClose {
    display: flex;
    justify-content: space-evenly;
    width: 75%;

    p:nth-child(1),
    p {
      background: #FF6969;
      cursor: pointer;
      padding: 10px 20px;
      border-radius: 10px;
      align-self: center;
      font-size: 1.1rem;
      font-weight: bold;
      color: #fff;
    }

    p:nth-child(2) {
      background-color: #fff;
      color: #000;
    }
  }

  .cart {
    background-color: #fff;
    width: 500px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    padding: 10px;
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 550px;
    overflow-y: auto;
    transition: all 0.3s ease-in-out;

    .emptyCartMsg {
      margin: auto;
      font-size: 2rem;
    }

    .menuSide {
      display: flex;
      justify-content: space-around;
      align-items: center;
      width: 90%;
      margin: 5px;
      box-shadow: 1px 1px 12px -5px grey;
      border-radius: 10px;
      padding: 10px;
      background-color: #fff;

      .items {
        h1 {
          font-family: "Roboto Condensed", sans-serif;
          font-size: 12px;
        }

        img {
          height: 80px;
          border-radius: 10px;
        }
      }

      .buttons {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        width: 30%;

        p {
          padding: 10px;
          background-color: #2d9596;
          border-radius: 5px;
          color: #fff;
          font-weight: bold;
        }

        button {
          padding: 5px 10px;
          border: none;
          background-color: #e7e011;
          outline: none;
          border-radius: 3px;
          cursor: pointer;
          text-align: center;
          font-size: 15px;
        }
      }

      .removeBtn {
        border: none;
        outline: none;
        padding: 8px 10px;
        border-radius: 4px;
        background-color: #e73f11;
        color: #fff;
        cursor: pointer;
      }
    }
    .priceArea {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      flex-direction: column;
      width: 50%;
      p {
        background-color: #1199e7;
      }
    }
  }

  @media screen and (max-width: 540px) {
    .totalClose {
      display: flex;
      justify-content: space-evenly;
      width: 80%;

      p:nth-child(1),
      p {
        padding: 8px 15px;
      }
    }
    .cart {
      width: 350px;

      .menuSide {
        .items {
          h1 {
            font-size: 10px;
          }

          img {
            height: 70px;
          }
        }

        .buttons {
          width: 40%;

          p {
            padding: 8px;
          }

          button {
            font-size: 13px;
          }
        }

        .removeBtn {
          padding: 6px;
        }
      }
    }
  }
  @media screen and (max-width: 380px) {
    .cart {
      width: 300px;
    }
  }
`;
