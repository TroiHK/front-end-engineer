import React from "react";
import { connect } from "react-redux"

import ProductDetail from "../components/ProductDetail";

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
        const { params } = this.props;
        const { productid } = params;

        const { products } = this.props;

        if ( products.length ) {
            const result = products.find( product => product.id == productid );

            if ( !result ) 
            return (
                <h1>Product not found!</h1>
            );

            return (
                <ProductDetail result={result}/>
            );
        }

        return (
            <div>Loading...</div>
        );
    }
}
