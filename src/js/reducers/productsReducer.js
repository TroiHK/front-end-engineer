export default function reducer(state={
        products: [],
        productsCategory: [],
        productsFilter: [],
        selectCategories: [],
        fetching: false,
        fetched: false,
        fetchedCategory: false,
        error: null,
    }, action) {

    switch (action.type) {
        case "products/FETCH_PRODUCTS": {
            return {...state, fetching: true}
        }
        case "products/FETCH_PRODUCTS_REJECTED": {
            return {...state, fetching: false, error: action.payload}
        }
        case "products/FETCH_PRODUCTS_FULFILLED": {
            return {
                ...state,
                fetching: false,
                fetched: true,
                products: action.payload,
                productsFilter: action.payload,
            }
        }
        case "products/FETCH_PRODUCTS_CATEGORY": {
            const { productsCategory } = action;
            return {
                ...state,
                productsCategory: productsCategory,
                fetchedCategory: true
            }
        }
        case "products/FETCH_UPDATE_FETCHHEDCATEGORY": {
            return {
                ...state,
                fetchedCategory: false
            }
        }
        case "products/FETCH_PRODUCTS_FILTER": {
            const { productsFilter, selectCategories, products } = action;
            if ( selectCategories.length ) {
                return {
                    ...state,
                    productsFilter : productsFilter,
                    selectCategories
                }
            } else {
                return {
                    ...state,
                    productsFilter : products,
                    selectCategories
                }
            }
        }
    }

    return state
}
