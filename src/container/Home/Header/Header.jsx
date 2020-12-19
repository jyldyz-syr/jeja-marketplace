import React, { useContext } from "react";
import { productsContext } from "../../../contexts/ProductsContext";
import {
  Container,
  Nav,
  NavItem,
  NavLink,
  Media,
  Input,
  UncontrolledDropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap";

import {  Navbar } from 'react-bootstrap';



// import { FaBeer } from "@react-icons/all-files/fa/FaBeer";
import image1 from "./img/logo-2.svg";
import { Link, useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Home = (props) => {
  const { productsCountInCart, search,searchProducts} = useContext(productsContext);

  const styles = {
    nav: {
      backgroundColor: "#F1F1F1",
      display: "flex",
      justifyContent: "center",
    },
    first: {
      display: "flex",
      justifyContent: "flex-end",
    },
    second: {
      display: "flex",
      justifyContent: "flex-end",
    },
    end: {
      display: "flex flex justify-content-flex-end",
      marginTop: "25px",
      marginBottom: "25px",
    },
  };

  const history = useHistory();

  function handleSearch(e){
    let inp_val = e.target.value;
    const search = new URLSearchParams(window.location.search);
    console.log(search);
    console.log(window.location);
    search.set("q",inp_val);

    console.log(search.toString())
    history.replace("?"+search)
    searchProducts()
  }

  

  return (
    <div>
      <Nav style={styles.nav}>
        <NavItem>
          <NavLink disabled href="#">
            +132 124 234
          </NavLink>
        </NavItem>
        <NavItem style={styles.first}>
          <Link to="/signin">
            <NavLink disabled href="#">
              Login
            </NavLink>
          </Link>
          <Link to="/signup">
            <NavLink disabled href="#">
              Create account
            </NavLink>
          </Link>
        </NavItem>
        <NavItem>
          <Link to="/cart">
            <NavLink
              style={{ fontSize: "20x", color: "Black" }}
              disabled
              href="#"
            >
              <FontAwesomeIcon 
              icon={faShoppingCart}
              color={productsCountInCart !== 0 ? "red": "green"}
               />

              <> {productsCountInCart !== 0 ? "+" + productsCountInCart : ""}</>
            </NavLink>
          </Link>
        </NavItem>
      </Nav>


      <Navbar bg="white" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav"> 
      <Container>
        <Nav style={styles.end}>
          <div className="header-img">
            <Media className="header-img" left href="#">
              <Link to="/">
                <img src={image1} alt="" />
              </Link>
            </Media>
          </div>
          <NavItem>
            <NavLink>
             <Link to="/"> Home</Link>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink>
              <Link to="/fashion">Shop</Link>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink >
            <Link to="/admin">Admin</Link>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink>
            <Link to="/productcart/3">Detail</Link>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink >
            <Link to="/addproduct">Add</Link>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink >
            <Link to="https://github.com/jyldyz-syr?tab=repositories">Git</Link>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink >
            <Link to="https://trello.com/?&aceid=&adposition=&adgroup=105703213888&campaign=9843285526&creative=437184392305&device=c&keyword=trello&matchtype=e&network=g&placement=&ds_kids=p53016482445&ds_e=GOOGLE&ds_eid=700000001557344&ds_e1=GOOGLE&gclid=CjwKCAiAoOz-BRBdEiwAyuvA665mh8zwa2vwpePmMa-AaSBXyTlTzlTw56nsz5e4rT98eC6gDogGrBoCM4cQAvD_BwE&gclsrc=aw.ds">Trello</Link>
            </NavLink>
          </NavItem>
          {/* <NavItem>
            <NavLink disabled href="#">
              Contact
            </NavLink>
          </NavItem> */}
          <div style={styles.second}>
            {/* <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Categories
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Azerbaijan</DropdownItem>
                <DropdownItem>Banamas</DropdownItem>
                <DropdownItem>China</DropdownItem>
                <DropdownItem>USA</DropdownItem>
                <DropdownItem>Bahrain</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown> */}
            <NavItem className="search">
              <Input placeholder="Type to search ..." onChange={handleSearch}></Input>
            </NavItem>
   
          </div>
        </Nav>
      </Container>
      </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Home;
