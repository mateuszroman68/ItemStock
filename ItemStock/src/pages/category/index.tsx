import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import StockItemsList from "../../components/stock-list-items";
import ProductFilters from "../../components/product-filters";

const CategoryPage = ({categoryList}):JSX.Element => {
    const [ currentCategory, setCurrentCategory] = useState([])
    const navigate = useNavigate();
    console.log('navigate', navigate);

    console.log('Params', useParams());
   const params = useParams();
    useEffect(() => {
        if(params.categoryid){
            setCurrentCategory([Number(params.categoryid)])
        }else {
            setCurrentCategory([2022])
        }
    }, [])

    return (
        <div>
            <h1>{currentCategory}</h1>
            <div className="container">
                <StockItemsList currentCategories={currentCategory} />
            </div>
        </div>
    )
}



export default CategoryPage;