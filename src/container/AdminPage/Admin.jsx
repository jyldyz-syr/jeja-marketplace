import React, { useState, useEffect, useContext } from "react";
import { Table } from "reactstrap";
import { productsContext } from "../../contexts/ProductsContext";
import Pagination from "@material-ui/lab/Pagination";
import { Link, useHistory } from "react-router-dom";
import { Container } from "reactstrap";

const styles = {
  first: {
    display: "flex",
    justifyContent: "center",
  },
};

const Admin = (props) => {

  const history = useHistory();
  const search = new URLSearchParams(history.location.search);


  const {
    products,
    getProducts,
    deleteContact,
    editProduct,
    pageTask,
    page,

    getProductsAdmin,
    totalCount
  } = useContext(productsContext);

  useEffect(() => {
    getProductsAdmin();
    getProducts();
  }, []);

  // useEffect(() => {
  //   getProducts();
  //   pageTask(page);
  // }, [page]);

  return (
    <>
      <Link to="/addproduct">
        <div style={{ textAlign: "center", marginTop: "30px" }}>
          <button type="submit" className="btn btn-primary my-5">
            Add New Product
          </button>
        </div>
      </Link>
      <Table  className="tableMain">
        <thead>
          <tr>
            <th 
            className="description"
            >#</th>
            <th>Title</th>
            <th
            className="description"
            
            >Description</th>
            <th>Image</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item) => (
            <>
              <tr>
                <th 
                className="description"
                scope="row">{item.id}</th>
                <td>{item.title}</td>
                <td
                className="description"
                 style={{ width: "30%" }}>{item.description}</td>
                <td style={{ width: "15%" }}>
                  <img style={{ width: "50%" }} src={item.image} />
                </td>
                <td>{item.price}</td>
                <button
                  className="btn-admin"
                  style={{ marginTop: "20px" }}
                  className="btn btn-danger"
                  onClick={() => deleteContact(item.id)}
                >
                  Delete
                </button>
                <Link to="/edit">
                  <button
                  className="btn-admin"
                    style={{ marginTop: "20px" }}
                    className="btn btn-warning"
                    onClick={() => editProduct(item.id)}
                  >
                    Edit
                  </button>
                </Link>
              </tr>
            </>
          ))}
        </tbody>
      </Table>
      <Container>
        <div style={styles.paging}>
          <Pagination
            onChange={(e, newpage) => pageTask(newpage)}
            page={parseInt(search.get("_page")) || 1}
            count={Math.ceil(totalCount / 3)}
            defaultPage={1}
          />
        </div>
      </Container>
    </>
  );
};

export default Admin;
