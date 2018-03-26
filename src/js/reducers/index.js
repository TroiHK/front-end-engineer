import { combineReducers } from "redux"

import categories from "./categoriesReducer"
import products from "./productsReducer"

export default combineReducers({
	categories,
  	products,
})
