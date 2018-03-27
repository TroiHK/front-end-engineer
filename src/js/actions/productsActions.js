import axios from "axios"

export function fetchProducts() {
    return function(dispatch) {
        dispatch({type: "products/FETCH_PRODUCTS"});
        axios.get("/products.json")
        .then((response) => {
            dispatch({type: "products/FETCH_PRODUCTS_FULFILLED", payload: response.data})
        })
        .catch((err) => {
            dispatch({type: "products/FETCH_PRODUCTS_REJECTED", payload: err})
        })
    }
}

export function filterProductByCategory(categoryid, products) {
    const categoriesFiltered = products.map(p => p.categories.filter(c => c.id == categoryid));
    const productsFiltered = products.filter((p, i) => categoriesFiltered[i].length > 0);
    return {
        type: "products/FETCH_PRODUCTS_CATEGORY",
        productsCategory: productsFiltered,
    };
};

export function fetchProductsFilter(selectCategories, products) {
    const categoriesFiltered = products.map(p => p.categories.filter(c => selectCategories.indexOf(c.id) >= 0));
    const productsFiltered = products.filter((p, i) => categoriesFiltered[i].length > 0);
    return {
        type: "products/FETCH_PRODUCTS_FILTER",
        products: products,
        productsFilter: productsFiltered,
        selectCategories
    }
};

export function updateFetchedCategory() {
    return {
        type: "products/FETCH_UPDATE_FETCHHEDCATEGORY"
    }
};

export function fetchSearchValue(searchValue) {
    return {
        type: "products/FETCH_PRODUCTS_SEARCH",
        searchValue
    }
};

export function fetchSearchResults(searchValue, products) {
    const searchValueLowercase = searchValue.toLowerCase();
    const resultsProducts = searchValue 
      ? products.filter((p) => p.title.toLowerCase().includes(searchValueLowercase) || p.description.toLowerCase().includes(searchValueLowercase))
      : products;
    return {
        type: "products/FETCH_RESULTS_SEARCH",
        resultsProducts: resultsProducts
    }
};