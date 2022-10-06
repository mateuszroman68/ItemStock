import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import StockItemsList from "../../components/stock-list-items";
import { category } from "../../components/single-item/types";

const CategoryPage = ({categoryList}) => {
    const [ currentCategory, setCurrentCategory] = useState([0])
    const params = useParams();

    useEffect(() => {
        if(params.categoryid){
            setCurrentCategory([Number(params.categoryid)])
        }
    }, [])
    
    const activeCategory:category = categoryList.filter( category => category.id === currentCategory.pop()).pop()
    const categoryName = activeCategory?.name;
   
    return (
        <div className="container-2xl ">
            <h1 className="text-3xl bg-slate-300 rounded-lg text-center mt-20 ">{categoryName}</h1>
            <div>
                <StockItemsList currentCategories={currentCategory} />
            </div>
        </div>
    )
}



export default CategoryPage;