import React from "react";
import { Link } from "react-router-dom";
import  ItemsList from '../../data/itemsList';
import PreviewSingleItem from './partials/preview-single-item/index';


const StockItemsList = ({ currentCategories }:number[]):JSX.Element => {
    const result = ItemsList.filter( product => {
        return product.category.filter( cat => {
            return currentCategories.includes( cat.id )
        }).length === currentCategories.length
    })

    return (
        <div className="grid grid-cols-12" >
            {result.map( ({id}, index) => {
                return (
                    <div className=" col-span-12 sm:col-span-6 md:col-span-3">
                        <Link key={index} to={`/item/${id}`} >
                            <PreviewSingleItem key={index} itemId={id} />
                        </Link>
                    </div>
                )
            })}
        </div>
    )
}

export default StockItemsList;