import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { stockListItems } from "./types"
import  ItemsList from '../../data/itemsList';
import PreviewSingleItem from './partials/preview-single-item/index';


const StockItemsList = ({ currentCategories }:number[]):JSX.Element => {
    console.log('currentCategories', currentCategories)
    const result = ItemsList.filter( product => {
        return product.category.filter( cat => {
            return currentCategories.includes( cat.id )
        }).length === currentCategories.length
    })

    return (
        <div>
           
            <div>
                {result.map( ({id}, index) => {
                    return (<Link key={index} to={`/item/${id}`} >
                        <PreviewSingleItem key={index} itemId={id} />
                    </Link>)
                })}
                
            </div>
        </div>
    )
}

export default StockItemsList;