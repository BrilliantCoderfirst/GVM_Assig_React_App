import React, { useEffect, useState } from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import MainNavbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { deleteBlogs } from "../redux/action";

const BuyProduct = () => {
  const userId = localStorage.getItem("userId");

  const [favoriteData, setFavoriteData] = useState([]);

  function buyProductFun() {
    const url = `https://gvm-backend-assignment.onrender.com/api/customer/getBuyProductCustomer/${userId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setFavoriteData(data.data))
      .catch((err) => {
        console.log(err);
        alert("Data Not Fetch Some Technical Issue :(");
      });
  }

  useEffect(() => {
    buyProductFun();
  }, []);

  return (
    <>
      <MainNavbar />
      <div className="favoriteContainer">
        <div className="favorite_box">
          <h1>Favorite Blogs</h1>

          {favoriteData.length !== 0 ? (
            favoriteData.map((items) => (
              <div className="box" key={items.id}>
                <img
                  src="https://media.istockphoto.com/id/1197832105/vector/male-hand-holding-megaphone-with-new-product-speech-bubble-loudspeaker-banner-for-business.jpg?s=612x612&w=0&k=20&c=INIM5M-N2DZh6pS6DUBSGh7x9ItOBSC3atZOVJtQf7M="
                  alt=""
                />

                <div className="author">
                  <h4>{items.product.productName}</h4>
                  <p>{items.product.compnayName}</p>
                  <h2>Rs. {items.product.price}</h2>
                  <div className="social_Icons">
                    <div className="facebook icon">
                      <FacebookIcon />
                    </div>
                    <div className="instagram icon">
                      <InstagramIcon />
                    </div>
                    <div className="telegram icon">
                      <TelegramIcon />
                    </div>
                    <div className="twitter icon">
                      <TwitterIcon />
                    </div>
                    <div className="youtube icon">
                      <YouTubeIcon />
                    </div>
                  </div>
                </div>

                <div className="btn">
                  <button>Buyed</button>
                </div>
              </div>
            ))
          ) : (
            <div className="noDataFound">
              <div className="center_noDataFound">
                <h1>No Data Found ...</h1>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BuyProduct;
