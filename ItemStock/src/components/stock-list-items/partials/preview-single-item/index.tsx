import React, { useState } from "react";

import { previewSingleItem } from './types';
import itemsList from "../../../../data/itemsList";
import { ItemStyles } from "../../../single-item";
import categoryList from "../../../../data/categoryList";

const PreviewSingleItem = ({itemId}:previewSingleItem)=> {

    const result = itemsList.filter( product => product.id === itemId).pop();
    const item = {
        ...result,
        imgUrl: "https://primabiotic.pl/wp-content/uploads/2020/05/Collagen-primabiotic-buteleczka-300x300.jpg"
    }
      console.log('item',item.description.brand)
    return (
        
<section className="text-gray-600 body-font" >
        <div className="py-24 ">
          <div className="">
            <div className="p-4 ">
              <div className="h-full rounded-xl shadow-cla-blue bg-gradient-to-r from-indigo-50 to-blue-50 overflow-hidden ">
                <img className="lg:h-48 md:h-36 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100" src="https://profimill.pl/2053-large_default/pila-tarczowa-300x32x22x30x72z-do-plyty-wiorowej-laminowanej-mdf-hdf-pilsniowej-meblowej-pilana-5398-13-wz-l.jpg" alt="blog"/>
                <div className="p-6 max-w-3xl">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">{item.id}</h2>
                  <h1 className="title-font text-lg font-medium text-gray-600 mb-3 max-w-10 ">{item.name}</h1>
                  <h1 className="title-font text-lg font-medium text-gray-600 mb-3 max-w-10 text-lime-700	 " > {item.price} $USD</h1>
                  <p className="leading-relaxed mb-3 flex flex-nowrap"> Brand: {item.description.brand}</p>
                  <p className="leading-relaxed mb-3 flex flex-nowrap"> Model: {item.description.model}</p>
                  <p className="leading-relaxed mb-3 flex flex-nowrap"> Condition: {item.description.condition}</p>
                  <p className="leading-relaxed mb-3 flex flex-nowrap"> Vol: {item.description.volumem}</p>


                  <div className="">
                    <button className="w-full bg-gradient-to-r from-cyan-200 to-blue-200 hover:scale-105 drop-shadow-md  shadow-cla-blue px-4 py-1 rounded-lg items-center"> Buy </button>
                   
                  </div>
                </div>
              </div>
            </div>
            
            
          </div>
        </div>
      </section>
    )
}

export default PreviewSingleItem;