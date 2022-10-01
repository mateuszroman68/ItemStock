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

const App = () => {
  const [categoryList, setCategoryList] = useState([]) 
  useEffect(() => {
    setCategoryList(AllCategories)
  
    return () => {
      
    }
  }, [])
  console.log('categoryList', categoryList)
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header/>} >
          <Route index element={<HomePage/>} />
          <Route path="/category" element={<CategoryPage categoryList={categoryList} />} />
          <Route path="/category/:categoryid" element={<CategoryPage categoryList={categoryList} />} />
          <Route path="/item/:id" element={<SingleProductPage />} />
          <Route path="*" element={<NoPage/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
  
};


ReactDOM.render(<App />, document.getElementById("app"));


