import React from "react"
import { connect } from "react-redux"

import ProductItem from "../components/ProductItem";

import { fetchProducts, filterProductByCategory, updateFetchedCategory } from "../actions/productsActions"

@connect((store) => {
    return {
        products: store.products.products,
        fetchedCategory: store.products.fetchedCategory,
        productsCategory: store.products.productsCategory,
    };
})

export default class Products extends React.Component {
    componentWillReceiveProps (newProps) {
        if( newProps.params.categoryid !== this.props.params.categoryid ) {
            const { products } = this.props;
            this.props.dispatch(filterProductByCategory(newProps.params.categoryid, products));
        }
    }

    componentDidMount() {
        const { products } = this.props;
        if ( !products.length ) this.props.dispatch(fetchProducts());
    }

    componentWillUnmount() {
        this.props.dispatch(updateFetchedCategory());
    }

    render() {
        const { products } = this.props;

        if ( products.length ) {
            const { params, productsCategory, fetchedCategory } = this.props;
            const { categoryid } = params;

            if ( !fetchedCategory ) this.props.dispatch(filterProductByCategory(categoryid, products));

            const ProductsCategory = productsCategory
            .map((p, i) => {
                return (
                    <ProductItem key={i} productInfo={p}/>
                );
            });

            if ( !productsCategory.length )
            return (
                <div>
                    Products not found!
                </div>
            );

            return (
                <div class="products-list">
                    <div class="row">
                        {ProductsCategory}
                    </div>
                </div>
            );
        }

        return (
            <div>Loading...</div>
        );
    }
}
