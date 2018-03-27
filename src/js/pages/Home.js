import React from "react"
import { connect } from "react-redux"

import ProductItem from "../components/ProductItem"

import { fetchCategories } from "../actions/categoriesActions"
import { fetchProducts, fetchProductsFilter } from "../actions/productsActions"

@connect((store) => {
    return {
        categories: store.categories.categories,
        products: store.products.products,
        selectCategories: store.products.selectCategories,
        productsFilter: store.products.productsFilter,
    };
})

export default class Featured extends React.Component {
    handleClickSelectCategory = (e) => {
        let value = e.target.value;
        let { selectCategories, products } = this.props;

        if (e.target.checked) {
            selectCategories.push(value);
            this.props.dispatch(fetchProductsFilter(selectCategories, products));
        } else {
            selectCategories = selectCategories.filter(c => c != value);
            this.props.dispatch(fetchProductsFilter(selectCategories, products));
        }
    }

    componentWillMount() {
        this.props.dispatch(fetchCategories());
        this.props.dispatch(fetchProducts());
    }

    render() {
        const { categories, productsFilter } = this.props;

        // load categories
        const CategoriesList = categories
        .filter(c => c.parent == "0")
        // .sort(function(a, b){
        //     let keyA = a.id,                    
        //        keyB = b.id;
        //     // Compare the 2 dates
        //     if(keyA < keyB) return -1;
        //     if(keyA > keyB) return 1;
        //     return 0;
        // })
        // .reverse()
        .map((c, i) => {
            return (
                <div class="form-check" key={i}>
                    <input type="checkbox" class="form-check-input" onChange={ (e) => this.handleClickSelectCategory(e) } value={c.id} id={"check" + c.id}/>
                    <label class="form-check-label" for={"check" + c.id}><span></span>{c.title}</label>
                </div>
            );
        });
        // end load categories<div class="form-check">

        console.log(productsFilter);
        
        // Load product
        const ProductsList = productsFilter
        // .sort(function(a, b){
        //     let keyA = new Date(a.created_date),                    
        //        keyB = new Date(b.created_date);
        //     // Compare the 2 dates
        //     if(keyA < keyB) return -1;
        //     if(keyA > keyB) return 1;
        //     return 0;
        // })
        // .reverse()
        .map((p, i) => {
            return (
                <ProductItem key={i} productInfo={p}/>
            );
        });
        // end Load product

        return (
            <div class="row">
                <div class="side-bar col-xl-3" ref="cCheckbox">
                    {CategoriesList}
                </div>
                <div class="products-list col-xl-9">
                    <div class="row">{ProductsList}</div>
                </div>
            </div>
        );
    }
}
