import React from "react";
import { Link } from "react-router-dom";


const CategoryButton = ({category}) => {

    return(
        <div>
            <Link to={`/category/${category.id}`}><button> { category.name}</button></Link>

        </div>
    )
}

export default CategoryButton;