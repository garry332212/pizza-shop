import PizzaLogo from "../assets/pizzaria.jpg";
import styled from "styled-components";
const categories = ["All", "Chicken", "Vegetarian", "Meat"];

interface filterData {
  onCategoryChange: (category: string) => void;
  selectedCategory: string;
}

const Navbar: React.FC<filterData> = ({
  onCategoryChange,
  selectedCategory,
}) => {
  return (
    <NavbarWrapper>
      <div className="navbar">
        <img src={PizzaLogo} />
      </div>
      <div className="categories">
        <div className="tags">
          {categories.map((category) => (
            <h3
              key={category}
              onClick={() => onCategoryChange(category)}
              className={selectedCategory === category ? "active" : ""}
            >
              {category}
            </h3>
          ))}
        </div>
      </div>
    </NavbarWrapper>
  );
};

export default Navbar;

const NavbarWrapper = styled.div`
  .navbar {
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      height: 250px;
    }
  }
  .categories {
    display: flex;
    flex-direction: column;
    align-items: center;

    .tags {
      font-family: "Poppins", sans-serif;
      width: 50%;
      display: flex;
      justify-content: space-around;
      .active {
        background-color: #000000;
        color: white;
      }

      h3 {
        color: black;
        box-shadow: 0 10px 15px rgb(0 0 0 / 20%);
        box-sizing: border-box;
        border-radius: 5px;
        padding: 5px 10px;
        background-color: #fff;
        cursor: pointer;
        transition: all 0.2s ease-in-out;
        &:hover {
          background-color: #000000;
          color: white;
        }
      }
    }
  }

  @media (max-width: 1168px) {
    .categories {
      margin-inline: 20px;
      .tags {
        width: 100%;
        justify-content: space-between;
      }
    }
  }
  @media (max-width: 630px) {
    .navbar {
      .logo {
        img {
          height: 180px;
        }
      }
    }
    .categories {
      margin: 20px;
      .tags {
        h3 {
          margin-inline: 10px;
        }
      }
    }
  }
  @media (max-width: 438px) {
    .navbar {
      .cart {
        font-size: 1.5rem;
        right: 10px;
        top: 8px;
        width: 30px;
        height: 30px;
        position: fixed;
      }
    }
    .categories {
      .tags {
        justify-content: center;
        flex-wrap: wrap;
        h3 {
          font-size: 13px;
        }
      }
    }
  }
`;
