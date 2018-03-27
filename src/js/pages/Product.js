import React from "react";
import { connect } from "react-redux"

import ProductDetail from "../components/ProductDetail"

import { fetchProducts } from "../actions/productsActions"

@connect((store) => {
    return {
        products: store.products.products,
    };
})

export default class Products extends React.Component {
    componentDidMount() {
        const { products } = this.props;
        if ( !products.length ) this.props.dispatch(fetchProducts());
    }

    render() {
        const { params, products } = this.props;
        const { productid } = params;

        if ( products.length ) {
            const productInfo = products.find( product => product.id == productid );

            if ( !productInfo ) 
            return (
                <h1>Product not found!</h1>
            );

            return (
                <ProductDetail productInfo={productInfo}/>
            );
        }

        return (
            <div>Loading...</div>
        );
    }
}
