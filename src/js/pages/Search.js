import React from "react"
import { connect } from "react-redux"

import ProductItem from "../components/ProductItem";

import { fetchSearchResults, fetchProducts } from "../actions/productsActions"

@connect((store) => {
    return {
        products: store.products.products,
        searchValue: store.products.searchValue,
        resultsProducts: store.products.resultsProducts,
    };
})

export default class Products extends React.Component {
    componentWillMount() {
        const { searchValue, products } = this.props;
            this.props.dispatch(fetchSearchResults(searchValue, products));
    }

    componentWillReceiveProps (newProps) {
        if( newProps.searchValue !== this.props.searchValue ) {
            const { products } = this.props;
            this.props.dispatch(fetchSearchResults(newProps.searchValue, products));
            console.log(newProps.searchValue);
        }
    }

    componentDidMount() {
        const { products } = this.props;
        if ( !products.length ) this.props.dispatch(fetchProducts());
    }

    render() {
        const { searchValue, resultsProducts } = this.props;

        let ProductsSearch = resultsProducts
        .map((p, i) => {
            return (
                <ProductItem key={i} productInfo={p}/>
            );
        });

        if ( !resultsProducts.length )
        return (
            <div>
                Products not found!
            </div>
        );

        return (
            <div class="products-list">
                <div class="row">
                    {ProductsSearch}
                </div>
            </div>
        );
    }
}
