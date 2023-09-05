import React, { useContext, useEffect, useState } from "react";
import Button from "../components/Button";
import SwapVertIcon from "@mui/icons-material/SwapVert";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPosts, setTotalPosts] = useState([]);
  // const totalPages = totalPosts.length / 10;

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

  function handleAdminFun() {
    const url = `https://gvm-backend-assignment.onrender.com/api/admin/detailForAdmin`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data.data))
      .catch((err) => console.log(err));
  }

  async function deleteCustomerFun(id) {
    try {
      let url = `https://gvm-backend-assignment.onrender.com/api/admin/deleteProductsForAdmin/${id}`;
      const response = await fetch(url, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(response);
      if (response.ok) {
        setData((prevData) => prevData.filter((item) => item._id !== id));
        alert("Customer Deleted Successfully");
      } else {
        alert("Failed to delete customer:");
      }
    } catch (error) {
      console.error("An error occurred during the DELETE request:", error);
    }
  }

  function handleDeleteCustomerFun(id) {
    deleteCustomerFun(id);
  }

  useEffect(() => {
    handleAdminFun();
  }, []);

  return (
    <>
      <nav className="Tag_heading">
        <h1>Admin</h1>
        <div className="logout">
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
        </div>
      </nav>

      <div className="tableContainer">
        <div className="tableContainer_Center">
          <div className="mainTableHeading">
            <p>Customers Buy Details</p>
          </div>

          <div className="table_box">
            <table>
              <thead>
                <tr>
                  <th style={{ paddingLeft: "23px" }}>
                    S.No <SwapVertIcon />
                  </th>
                  <th>
                    Customer Name <SwapVertIcon />
                  </th>
                  <th>
                    Product Name <SwapVertIcon />
                  </th>
                  <th className="secondLast_th_posts">
                    Vendor <SwapVertIcon />
                  </th>
                  <th className="last_th_posts">
                    Type <SwapVertIcon />
                  </th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {data.length !== 0 ? (
                  data.map((items, index) => (
                    <tr key={items._id}>
                      <td className="first_td">{index + 1}</td>
                      <td className="second_td">{items.user.name}</td>
                      <td className="third_td">{items.product.productName}</td>
                      <td className="fourth_td">{items.product.user.name}</td>
                      <td className="fiveth_td">{items.product.productType}</td>
                      <td>
                        <Button
                          text="Remove"
                          onClick={() => handleDeleteCustomerFun(items._id)}
                        />
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr className="center">
                    <td>#</td>
                    <td>Data Not Found</td>
                    <td className="center_td_id">Data Not Found</td>
                    <td className="secondLast_td_posts">Data Not Found</td>
                    <td className="center_td">Data Not Found</td>
                    <td className="center_button">
                      <Link to="/">
                        <Button text="No Comments" />
                      </Link>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* <div className="pagination_right">
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Admin;
