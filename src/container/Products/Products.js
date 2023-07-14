import React from 'react'
import ProductRight from '../../components/ProductPage/ProductRight/ProductRight';
import ProductsLeft from '../../components/ProductPage/ProductsLeft/ProductsLeft';

import classes from "./Product.module.css"


function Products(props) {
    return (
        <div className={classes.ProductPageContainer}>
            <div className={classes.ProductWrapper}>
                <ProductsLeft props={props} />
                <ProductRight />
            </div>
        </div>
    )
}


export default Products; 