import React, { useEffect, useState } from "react";
import SideImage from "../assest/img/formImage.png";
import Input from "../components/Input";
import Button from "../components/Button";
import AddBoxIcon from "@mui/icons-material/AddBox";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import BusinessIcon from "@mui/icons-material/Business";
import CategoryIcon from "@mui/icons-material/Category";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Product = () => {
  const navigate = useNavigate();
  const param = useParams();
  const userId = localStorage.getItem("userId");

  const [data, setData] = useState({});
  const [productName, setProductName] = useState(data.productName || "");
  const [productType, setProductType] = useState(data.productType || "");
  const [price, setPrice] = useState(data.price || "");
  const [compnayName, setCompnayName] = useState(data.compnayName || "");

  const [photo, setPhoto] = useState([]);

  // State to hold validation errors
  const [errors, setErrors] = useState({});

  // Validation function
  function validateForm() {
    const errors = {};

    if (productName.trim() === "") {
      errors.productName = "Product Name is required";
    }

    if (productType.trim() === "") {
      errors.productType = "Product Type is required";
    }

    if (price.trim() === "") {
      errors.price = "Price is required";
    }

    if (compnayName.trim() === "") {
      errors.compnayName = "Compnay Name is required";
    }

    setErrors(errors);

    // Return true if there are no errors, indicating the form is valid
    return Object.keys(errors).length === 0;
  }

  const addProductFun = async () => {
    const url = `https://gvm-backend-assignment.onrender.com/api/product/postProducts`;
    fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: userId,
        productName: productName,
        productType: productType,
        price: price,
        compnayName: compnayName,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.status === 200) {
          navigate("/vendor");
          setProductName("");
          setProductType("");
          setPrice("");
          setCompnayName("");
        } else {
          alert("Your Product Is Not Added");
        }
      })
      .catch((err) => console.log(err));
  };

  const editProductFun = async (id) => {
    const url = `https://gvm-backend-assignment.onrender.com/api/product/editProducts/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: userId,
        productName: productName,
        productType: productType,
        price: price,
        compnayName: compnayName,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.status === 200) {
          navigate("/vendor");
          setProductName("");
          setProductType("");
          setPrice("");
          setCompnayName("");
        } else {
          alert("Your Product Is Not Updated");
        }
      })
      .catch((err) => console.log(err));
  };

  const handleProductDataFun = (id) => {
    if (validateForm()) {
      if (!id) {
        addProductFun();
      } else {
        editProductFun(id);
      }
    }
  };

  const getParticularProductFun = async (id) => {
    let url = `https://gvm-backend-assignment.onrender.com/api/product/getParticularProducts/${id}`;
    try {
      const response = await fetch(url);
      if (response.ok) {
        const jsonData = await response.json();
        const productData = jsonData.data;
        setData(productData);
        setProductName(productData.productName);
        setProductType(productData.productType);
        setPrice(productData.price);
        setCompnayName(productData.compnayName);
      } else {
        console.error("API request failed");
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (param.id !== undefined) {
      getParticularProductFun(param.id);
    }
  }, [param.id]);

  return (
    <>
      <div className="formContainer">
        <div className="form">
          <div className="leftFormPart">
            {!param.id ? <h1>Add Product</h1> : <h1>Edit Product</h1>}
            <form action="">
              <div className="formInput">
                <AddBoxIcon />
                <Input
                  name="productname"
                  type="text"
                  placeholder="Product Name"
                  value={productName}
                  onChange={(e) => setProductName(e)}
                  />
              </div>
                  {errors.productName && <p className="error">{errors.productName}</p>}
              <div className="formInput">
                <CategoryIcon />
                <Input
                  name="producttype"
                  type="text"
                  placeholder="Product Type"
                  value={productType}
                  onChange={(e) => setProductType(e)}
                />
              </div>
                {errors.productType && <p className="error">{errors.productType}</p>}
              <div className="formInput">
                <AttachMoneyIcon />
                <Input
                  name="price"
                  type="number"
                  placeholder="Price"
                  value={price}
                  onChange={(e) => setPrice(e)}
                />
              </div>
                {errors.price && <p className="error">{errors.price}</p>}
              <div className="formInput">
                <BusinessIcon />
                <Input
                  name="companyName"
                  type="text"
                  placeholder="Company Name"
                  value={compnayName}
                  onChange={(e) => setCompnayName(e)}
                />
              </div>
                {errors.compnayName && <p className="error">{errors.compnayName}</p>}
              <div className="formInput photoInput">
                {/* <Input
                  name="photo"
                  type="file"
                  onChange={(e) => console.log(e.target)}
                /> */}
              </div>
            </form>
            {!param.id ? (
              <div className="btn">
                <Button text="Add" onClick={() => handleProductDataFun()} />
              </div>
            ) : (
              <div className="btn">
                <Button
                  text="Edit"
                  onClick={() => handleProductDataFun(param.id)}
                />
              </div>
            )}
          </div>

          <div className="rightFormPart">
            <img src={SideImage} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
