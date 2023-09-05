import React, { useEffect, useState } from "react";
import Carousel from "../components/Carousel";
import SearchIcon from "@mui/icons-material/Search";
import Card from "../components/Card";
import Input from "../components/Input";
import { Link } from "react-router-dom";
import MainNavbar from "../components/Navbar";
import Footer from "../components/Footer";
import Pagination from "../components/Pagination";

const Home = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  const handleTotalProductsFun = () => {
    const url = `https://gvm-backend-assignment.onrender.com/api/customer/getProductCustomer`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data.data))
      .catch((err) => {
        console.log(err);
        alert("Data Not Fetch Some Technical Issue :(");
      });
  };

  useEffect(() => {
    handleTotalProductsFun();
  }, []);

  return (
    <>
      <MainNavbar />
      <Carousel />
      <div className="homeContainer">
        <div className="allCards">
          <div className="heading_card">
            <div className="blank"></div>
            <h1>Our Products</h1>
            <div className="search">
              <Input
                type="text"
                placeholder="Search Products ..."
                value={search}
                onChange={setSearch}
              />
              <SearchIcon />
            </div>
          </div>

          <div className="cards">
            {data.length !== 0 ? (
              data.map((items) => (
                <Card
                  key={items._id}
                  userId={items.user}
                  id={items._id}
                  name={items.productName}
                  company={items.compnayName}
                  price={items.price}
                  compnay={items.compnayName}
                />
              ))
            ) : (
              <div className="messageShow">
                <div className="center">
                  <h1>Data Not Found</h1>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
