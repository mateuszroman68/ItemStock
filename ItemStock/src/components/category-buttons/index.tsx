import React from "react";
import { Link } from "react-router-dom";
import categoryList from '../../data/categoryList';

const CategoryButton = ({category}) => {
   
    const currentCategory = categoryList.filter( cat => cat.id === category).pop();
    
    return(
        <div>
            <Link to={`/category/${category}`}><button> { currentCategory.name}</button></Link>

        </div>
    )
}

export default CategoryButton;