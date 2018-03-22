import React from "react";
import { connect } from "react-redux"

import ProductItem from "../components/ProductItem";

import { fetchProducts } from "../actions/productsActions"

@connect((store) => {
    return {
        products: store.products.products,
    };
})

export default class Products extends React.Component {
    componentWillMount() {
        this.props.dispatch(fetchProducts())
    }

    render() {
        const { query } = this.props.location;
        const { params } = this.props;
        const { product } = params;
        const { date, filter } = query;

        const { products } = this.props;

        const Products = products
        .map((anObjectMapped, index) => {
            return (
                <ProductItem key={index} title={anObjectMapped.title} id={anObjectMapped.id}/>
            );
        });

        return (
            <div>
                <h1>Products</h1>
                <div class="row">{Products}</div>
            </div>
        );
    }
}
