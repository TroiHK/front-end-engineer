export default function reducer(state={
        categories: [],
        fetching: false,
        fetched: false,
        error: null,
    }, action) {

    switch (action.type) {
        case "categories/FETCH_CATEGORIES": {
            return {...state, fetching: true}
        }
        case "categories/FETCH_CATEGORIES_REJECTED": {
            return {...state, fetching: false, error: action.payload}
        }
        case "categories/FETCH_CATEGORIES_FULFILLED": {
            return {
                ...state,
                fetching: false,
                fetched: true,
                categories: action.payload,
            }
        }
    }

    return state
}
