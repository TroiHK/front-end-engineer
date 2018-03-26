import React from "react"
import { connect } from "react-redux"

import ProductItem from "../components/ProductItem";

import { fetchProducts, filterProductByCategory } from "../actions/productsActions"

@connect((store) => {
    return {
        products: store.products.products,
        fetchedCategory: store.products.fetchedCategory,
        productsCategory: store.products.productsCategory,
    };
})

export default class Products extends React.Component {
    componentDidMount() {
        const { products } = this.props;
        if ( !products.length ) this.props.dispatch(fetchProducts());
    }

    render() {
        const { products } = this.props;

        if ( products.length ) {
            const { params } = this.props;
            const { categoryid } = params;
            const { productsCategory, fetchedCategory } = this.props;

            if ( !fetchedCategory ) this.props.dispatch(filterProductByCategory(categoryid, products));

            const ProductsCategory = productsCategory
            .map((p, i) => {
                return (
                    <ProductItem key={i} productInfo={p}/>
                );
            });

            if ( !ProductsCategory )
            return (
                <div>
                    Products not found!
                </div>
            );

            return (
                <div>
                    <div class="row">{ProductsCategory}</div>
                </div>
            );
        }

        return (
            <div>Loading...</div>
        );
    }
}
