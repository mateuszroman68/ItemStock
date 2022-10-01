import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { RedirectFunction } from "react-router-dom";
import SingleStockItem from "../../components/single-item";
import { singleStockItem } from "../../components/single-item/types";
import itemsList from "../../data/itemsList";


const SingleProductPage:React.FC<any> = () => {
    
    const params = useParams();
    const id = params.id
    const allProducts = itemsList;

    const item = allProducts.filter( item => item.id === Number(id)).pop();
    
    if (!item) {
        const navigate = useNavigate();
        navigate('/404')
    }
    console.log('id', item);
    return (
        <div>
                <SingleStockItem id={item.id} name={item.name} price={item.price} lastSold={new Date(item.lastSold)}  category= {item.category} description={item.description}/>
                
        </div>
        
        
    )
}

export default SingleProductPage;