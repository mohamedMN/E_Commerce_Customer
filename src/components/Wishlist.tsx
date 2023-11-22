import React, { useState } from "react";
import bag from "../Assets/images/bag.jpg";
import { IoTrashOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import pc from "../Assets/images/pc.jpg";
import cooler from "../Assets/images/cooler.jpg";
import gucciperfum from "../Assets/images/gucciperfum.jpg";

const Wishlist = () => {
  const [showAddToCartButton, setShowAddToCartButton] = useState(false);

  return (
    <div>
      <div
        className="centered-container"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <div
          className="all "
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <div
            className="container "
            style={{
              maxWidth: "800px",
              position: "relative",
            }}
          >
            <div
              className="wishlist-item"
              style={{
                position: "relative",
                display: "inline-block",
                marginBottom: "16px",
                justifyContent: "space-between",
                // Increase the margin-bottom for more space
              }}
              onMouseEnter={() => setShowAddToCartButton(true)}
              onMouseLeave={() => setShowAddToCartButton(false)}
            >
              <img
                src={bag}
                alt="Gucci Duffle Bag"
                style={{
                  borderRadius: "8px",
                  width: "100%",
                }}
              />
              {showAddToCartButton && (
                <button
                  className="add-to-cart-button"
                  onClick={() => console.log("Added to Cart")}
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: "100%",
                    background: "#333",
                    color: "#fff",
                    border: "none",
                    padding: "8px",
                    cursor: "pointer",
                    transition: "background 0.3s",
                  }}
                >
                  <IoCartOutline />
                  Add to Cart
                </button>
              )}
              <button
                className="delete-button"
                style={{
                  position: "absolute",
                  top: "8px",
                  right: "8px",
                  background: "#fff",
                  borderRadius: "50%",
                  border: "1px solid #ccc",
                  padding: "8px",
                  cursor: "pointer",
                }}
              >
                <IoTrashOutline size={20} />
              </button>
            </div>
            <div>
              <p style={{ marginBottom: "8px" }}>Gucci Duffle Bag</p>
            </div>
            <div>
              <span style={{ color: "red", marginRight: "8px" }}>$960</span>

              <span
                style={{
                  color: "gray",
                  textDecoration: "line-through",
                }}
              >
                $1160
              </span>
            </div>
          </div>
          {/* **************************************************** */}
          <div
            className="container"
            style={{
              maxWidth: "800px",
            }}
          >
            <div
              className="wishlist-item"
              style={{
                position: "relative",
                display: "inline-block",
                marginBottom: "16px", // Increase the margin-bottom for more space
              }}
              onMouseEnter={() => setShowAddToCartButton(true)}
              onMouseLeave={() => setShowAddToCartButton(false)}
            >
              <img
                src={pc}
                alt="pc"
                style={{
                  borderRadius: "8px",
                }}
              />
              {showAddToCartButton && (
                <button
                  className="add-to-cart-button"
                  onClick={() => console.log("Added to Cart")}
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: "100%",
                    background: "#333",
                    color: "#fff",
                    border: "none",
                    padding: "8px",
                    cursor: "pointer",
                    transition: "background 0.3s",
                  }}
                >
                  <IoCartOutline />
                  Add to Cart
                </button>
              )}
              <button
                className="delete-button"
                style={{
                  position: "absolute",
                  top: "8px",
                  right: "8px",
                  background: "#fff",
                  borderRadius: "50%",
                  border: "1px solid #ccc",
                  padding: "8px",
                  cursor: "pointer",
                }}
              >
                <IoTrashOutline size={20} />
              </button>
            </div>
            <div>
              <p style={{ marginBottom: "8px" }}>pc</p>
            </div>
            <div>
              <span style={{ color: "red", marginRight: "8px" }}>$960</span>

              <span
                style={{
                  color: "gray",
                  textDecoration: "line-through",
                }}
              >
                $1160
              </span>
            </div>
          </div>
          {/* **************************************************** */}
          <div
            className="container"
            style={{
              maxWidth: "800px",
            }}
          >
            <div
              className="wishlist-item"
              style={{
                position: "relative",
                display: "inline-block",
                marginBottom: "16px", // Increase the margin-bottom for more space
              }}
              onMouseEnter={() => setShowAddToCartButton(true)}
              onMouseLeave={() => setShowAddToCartButton(false)}
            >
              <img
                src={cooler}
                alt="cooler"
                style={{
                  borderRadius: "8px",
                }}
              />
              {showAddToCartButton && (
                <button
                  className="add-to-cart-button"
                  onClick={() => console.log("Added to Cart")}
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: "100%",
                    background: "#333",
                    color: "#fff",
                    border: "none",
                    padding: "8px",
                    cursor: "pointer",
                    transition: "background 0.3s",
                  }}
                >
                  <IoCartOutline />
                  Add to Cart
                </button>
              )}
              <button
                className="delete-button"
                style={{
                  position: "absolute",
                  top: "8px",
                  right: "8px",
                  background: "#fff",
                  borderRadius: "50%",
                  border: "1px solid #ccc",
                  padding: "8px",
                  cursor: "pointer",
                }}
              >
                <IoTrashOutline size={20} />
              </button>
            </div>
            <div>
              <p style={{ marginBottom: "8px" }}>cooler</p>
            </div>
            <div>
              <span style={{ color: "red", marginRight: "8px" }}>$960</span>

              <span
                style={{
                  color: "gray",
                  textDecoration: "line-through",
                }}
              >
                $1160
              </span>
            </div>
          </div>
          {/* **************************************************** */}
          <div
            className="container"
            style={{
              maxWidth: "800px",
            }}
          >
            <div
              className="wishlist-item"
              style={{
                position: "relative",
                display: "inline-block",
                marginBottom: "16px", // Increase the margin-bottom for more space
              }}
              onMouseEnter={() => setShowAddToCartButton(true)}
              onMouseLeave={() => setShowAddToCartButton(false)}
            >
              <img
                src={gucciperfum}
                alt="gucciperfum"
                style={{
                  borderRadius: "8px",
                }}
              />
              {showAddToCartButton && (
                <button
                  className="add-to-cart-button"
                  onClick={() => console.log("Added to Cart")}
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: "100%",
                    background: "#333",
                    color: "#fff",
                    border: "none",
                    padding: "8px",
                    cursor: "pointer",
                    transition: "background 0.3s",
                  }}
                >
                  <IoCartOutline />
                  Add to Cart
                </button>
              )}
              <button
                className="delete-button"
                style={{
                  position: "absolute",
                  top: "8px",
                  right: "8px",
                  background: "#fff",
                  borderRadius: "50%",
                  border: "1px solid #ccc",
                  padding: "8px",
                  cursor: "pointer",
                }}
              >
                <IoTrashOutline size={20} />
              </button>
            </div>
            <div>
              <p style={{ marginBottom: "8px" }}>Gucci Perfum</p>
            </div>
            <div>
              <span style={{ color: "red", marginRight: "8px" }}>$960</span>

              <span
                style={{
                  color: "gray",
                  textDecoration: "line-through",
                }}
              >
                $1160
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
