import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useParams, useLocation } from "react-router-dom";

const Card = ({ id, userId, name, company, price, photo, onDelete }) => {
  let buyUserId = localStorage.getItem("userId");

  let photoAddress =
    "https://media.istockphoto.com/id/1197832105/vector/male-hand-holding-megaphone-with-new-product-speech-bubble-loudspeaker-banner-for-business.jpg?s=612x612&w=0&k=20&c=INIM5M-N2DZh6pS6DUBSGh7x9ItOBSC3atZOVJtQf7M=";

  async function deleteProductFun(id) {
    let url = `https://gvm-backend-assignment.onrender.com/api/product/deleteProducts/${id}`;
    await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    alert("Product Deleted Successfully");
    onDelete(id);
  }

  const handleDeleteProductDataFun = (id) => {
    deleteProductFun(id);
  };

  const handleBuyProductDataFun = (id) => {
    const url = `https://gvm-backend-assignment.onrender.com/api/customer/buyProductCustomer/${buyUserId}/${id}`;
    fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 200) {
          alert("Product Buy");
        } else {
          alert("Product Not Buy");
        }
      })
      .catch((err) => console.log(err));
  };

  const location = useLocation();

  return (
    <>
      <div className="card" key={id}>
        <div
          className="card-header"
          style={{
            backgroundImage: `url(${photoAddress})`,
            objectFit: "cover",
            backgroundPosition: "center",
            backgroundSize: "350px",
          }}
        >
          <div className="card-header-bar">
            <a href="#" className="btn-message">
              <span className="sr-only">Message</span>
            </a>
            <a href="#" className="btn-menu">
              <span className="sr-only">Menu</span>
            </a>
          </div>

          <div className="card-header-slanted-edge">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 200">
              <path className="polygon" d="M-20,200,1000,0V200Z" />
            </svg>
            <a href="#" className="btn-follow">
              <span className="sr-only">Edit</span>
            </a>
          </div>
        </div>

        <div className="card-body">
          <h2 className="name">{name}</h2>
          <h4 className="job-title1">{company}</h4>
          <h1 className="job-title2">
            Price: <b>{price}</b>
          </h1>
          <div className="bio">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Dignissimos, aperiam.
          </div>
        </div>

        {location.pathname !== "/customer" ? (
          <div className="btn">
            <div className="centerBtn">
              <Link to={`/product/${id}`}>
                <Button text="Edit" />
              </Link>
              <Button
                text="Delete"
                onClick={() => handleDeleteProductDataFun(id)}
              />
            </div>
          </div>
        ) : (
          <div className="btn">
            <div className="buyButton">
              <Button
                text="Buy Product"
                onClick={() => handleBuyProductDataFun(id)}
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Card;
