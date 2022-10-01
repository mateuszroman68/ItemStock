import React from 'react';
import { singleStockItem } from './types'
import CategoryButton from '../category-buttons';

const SingleStockItem = ({
        id, price, lastSold, name, category, description 
    }:singleStockItem):JSX.Element => {

    return (
        <div>
             <img src="https://sklep.gdynia.pl/wp-content/uploads/2022/09/brelok-22i-love-gdynia-z-kompasem-1024x1018-300x300.jpg"/>
            <p> ID:  {id}</p>
            <p>Price: {price} PLN </p>
            <p>Name: {name} </p>
            <p>Last sold: {lastSold.toDateString()}</p>
           <div><p>Category: </p> {category.map((cat, index) => <CategoryButton key={index} category={cat}/>)}</div> 
            <p>Description:  </p>
            <p>Brand: {description.brand}</p>
            <p>Model: {description.model}</p>
            <p>Condition: {description.used ? "Used" : "New"}</p>
            <p>Year of PP {description.yearOfPartProd}</p>
            <p>Volumen: {description.volumem} </p>
            <p>Condition: {description.condition}</p>
           
        </div>
    )
}

export default SingleStockItem;


