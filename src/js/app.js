import React from "react"
import ReactDOM from "react-dom"
import { Router, Route, IndexRoute, hashHistory } from "react-router"
import { Provider } from "react-redux"

import Products from "./pages/Products"
import Product from "./pages/Product"
import Home from "./pages/Home"
import Search from "./pages/Search"

import Layout from "./components/Layout"
import store from "./store"

const app = document.getElementById('app')

ReactDOM.render(<Provider store={store}>
	<Router history={hashHistory}>
		<Route path="/" component={Layout}>
			<IndexRoute component={Home}></IndexRoute>
			<Route path="products(/:categoryid)" name="products" component={Products}></Route>
			<Route path="product(/:productid)" name="product" component={Product}></Route>
			<Route path="search" name="search" component={Search}></Route>
		</Route>
	</Router>
</Provider>, app);