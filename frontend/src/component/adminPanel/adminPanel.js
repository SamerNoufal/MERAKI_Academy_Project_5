import axios from "axios";
import React, { useState, useEffect } from "react";
import "./adminPanel.css";
import jwt_decode from "jwt-decode";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Users from "../usersComponent/usersComponent";
import ProductsAdmin from "../productsComponent/productsComponent";
import Charts from "../Charts/charts";

const Panel = () => {
  const [usersList, setUsersList] = useState(true);
  const [productList, setProductList] = useState(false);
  const [addProduct, setAddProduct] = useState(false);
  return (
    <div>
      <div className="panel">
        <p
          className="adminPanel"
          onClick={() => {
            setUsersList(true);
            setProductList(false);
            setAddProduct(false);
          }}
        >
          Users List
        </p>
        <p
          className="adminPanel"
          onClick={() => {
            setUsersList(false);
            setProductList(true);
            setAddProduct(false);
          }}
        >
          Products List
        </p>
        <p
          className="adminPanel"
          onClick={() => {
            setUsersList(false);
            setProductList(false);
            setAddProduct(true);
          }}
        >
          Charts
        </p>
      </div>

      {usersList ? <Users /> : ""}
      {productList ? <ProductsAdmin /> : ""}
      {addProduct ? <Charts /> : ""}
    </div>
  );
};

export default Panel;
