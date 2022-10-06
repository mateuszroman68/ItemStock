import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./views/header";
import CategoryPage from "./pages/category";
import "./index.css";
import NoPage from "./pages/404";
import HomePage from "./pages/home";
import SingleProductPage from "./pages/simgle-product";
import AllCategories from "./data/categoryList";
import Footer from "./views/footer";
import Layout from "./views/layout";
import User from "./pages/User";
import UserManage from "./pages/User/user manage";
import AddItem from "./pages/User/addItem";
import AllItems from "./pages/User/allItems";
import MakeAnOffer from "./pages/makeAnOffer";

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout/>} >
          <Route index element={<HomePage/>} />
          <Route path="/category" element={<CategoryPage categoryList={AllCategories} />} />
          <Route path="/category/:categoryName" element={<CategoryPage categoryList={AllCategories} />} />
          <Route path="/item/:id" element={<SingleProductPage />} />
          <Route path='/user' element={<User/>} />
          <Route path='/users/manage' element={<UserManage/>} />
          <Route path="/users/add" element={<AddItem/>}/>
          <Route path="/users/all" element={<AllItems/>}/>
          <Route path="*" element={<NoPage/>} />
          <Route path="/item/buy" element={<MakeAnOffer/>} />
          
          
        </Route>
      </Routes>
    </BrowserRouter>
  )
  
};


ReactDOM.render(<App />, document.getElementById("app"));


