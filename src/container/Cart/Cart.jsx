import React, { useContext, useState, useEffect } from "react";
import { productsContext } from "../../contexts/ProductsContext";
import { calcSubPrice, calcTotalPrice } from "../../helpers/calcPrice";
import { Link } from "react-router-dom";

const Cart = () => {
  const {
    cartData,
    getCart,
    deleteContact,
    changeCountProducts,
    makeOrder,
  } = useContext(productsContext);
  useEffect(() => {
    getCart();
  }, []);

  function handleChangeCount(e, id) {
    changeCountProducts(e.target.value, id);
  }

  return (
    <div className="cart">
      <div className="container">

      {cartData.products ? (
        <div>
          <table style={{ marginTop: "100px" }}>
            <thead>
              <tr>
                <th style={{ paddingLeft: "10px" }}>image</th>
                <th style={{ paddingLeft: "150px" }}>title</th>
                <th style={{ paddingLeft: "150px" }}>price</th>
                <th style={{ paddingLeft: "150px" }}>count</th>
                <th style={{ paddingLeft: "100px" }}>subTotal</th>
              </tr>
            </thead>
            <tbody>
              {cartData.products.map((item) => (
                <tr key={item.product.id}>
                    {/* <Link to={`/productcart/${item.id}`}> */}
                  <td style={{ paddingLeft: "150px" }}>
                      <img style={{ width: "50px" }} src={item.product.image} />
                  </td>
                    {/* </Link> */}
                  <td style={{ paddingLeft: "150px" }}>{item.product.title}</td>
                  <td style={{ paddingLeft: "150px" }}>{item.product.price}</td>
                  <td style={{ paddingLeft: "150px" }}>
                    <input
                      onChange={(e) => handleChangeCount(e, item.product.id)}
                      value={item.count}
                      type="number"
                      value={item.count}
                    />
                  </td>
                  <td style={{ paddingLeft: "100px" }}>{calcSubPrice(item)}</td>

                  {/* <button 
                  style={{ marginTop: "5px"}}
                  className="btn btn-danger btn-sm"
                  onClick={() => deleteContact (item.id)}
                >
                  Delete
                </button> */}
                </tr>
              ))}
            </tbody>
          </table>
          <h4 style={{ paddingLeft: "900px", marginTop: "50px" }}>
            Total: {calcTotalPrice(cartData.products)}
          </h4>
          <Link to="/address">
            <button
              onClick={makeOrder}
              className="btn btn-primary"
              style={{
                marginLeft: "900px",
                marginTop: "10px",
                marginBottom: "50px",
              }}
            >
              Pay
            </button>
          </Link>
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
      </div>
    </div>
  );
};

export default Cart;
