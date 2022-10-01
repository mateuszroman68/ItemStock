import React, { useState } from "react";

import { previewSingleItem } from './types';
import itemsList from "../../../../data/itemsList";

const PreviewSingleItem = ({itemId}:previewSingleItem)=> {

    const result = itemsList.filter( product => product.id === itemId).pop();
    const item = {
        ...result,
        imgUrl: "https://primabiotic.pl/wp-content/uploads/2020/05/Collagen-primabiotic-buteleczka-300x300.jpg"
    }

    return (
        <div>
            <div>
                <div>{item.id}</div>
                <div>{item.name} </div> 
                <img src={item.imgUrl}/>
                <div>{item.price} PLN</div>
            </div>
        </div>
    )
}

export default PreviewSingleItem;