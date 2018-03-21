import React from "react"
import ReactDOM from "react-dom"
import { Router, Route, IndexRoute, hashHistory } from "react-router";
import { Provider } from "react-redux"

import Products from "./pages/Products";
import Home from "./pages/Home";
import Settings from "./pages/Settings";

import Layout from "./components/Layout"
import store from "./store"

const app = document.getElementById('app')

ReactDOM.render(<Provider store={store}>
	<Router history={hashHistory}>
		<Route path="/" component={Layout}>
			<IndexRoute component={Home}></IndexRoute>
			<Route path="Products(/:product)" name="products" component={Products}></Route>
			<Route path="settings" name="settings" component={Settings}></Route>
		</Route>
	</Router>
</Provider>, app);