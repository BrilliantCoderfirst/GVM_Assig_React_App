import React from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const MainNavbar = () => {
  const navigate = useNavigate();
  const userId = localStorage.getItem("userId");

  function logoutFun() {
    console.log("Done");
    const url = `https://gvm-backend-assignment.onrender.com/api/auth/logout/${userId}`;
    fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.status === 200) {
          console.log("done");
          navigate("/GVM_Assig_React_App/");
          alert("Your Logout Successfully");
        } else {
          console.log("Not Done");
          alert("You Are Not Logout");
        }
      })
      .catch((err) => console.log(err));
  }

  function handleLogoutFun() {
    logoutFun();
  }

  return (
    <>
      <Navbar
        expand="xxl"
        bg="dark"
        data-bs-theme="dark"
        className="bg-body-tertiary"
      >
        <Container fluid>
          <Navbar.Brand href="#">
            <Link to="/customer">MineCart</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            ></Nav>

            <Form className="d-flex">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Nav.Link href="#">
                  <Link to="/customer">Home</Link>
                </Nav.Link>
                <Nav.Link href="#">
                  <Link to="/BuyProduct">Add Product</Link>
                </Nav.Link>
                <Link to="/GVM_Assig_React_App/">
                  <Button
                    text="LogOut"
                    onClick={() => handleLogoutFun()}
                    style={{
                      background: "transparent",
                      outline: "none",
                      border: "none",
                    }}
                  />
                </Link>
              </Nav>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default MainNavbar;
