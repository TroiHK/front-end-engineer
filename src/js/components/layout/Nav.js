import React from "react"
import { IndexLink, Link } from "react-router"

export default class Nav extends React.Component {
    constructor() {
        super()
        this.state = {
            collapsed: true,
        };
    }

    toggleCollapse() {
        const collapsed = !this.state.collapsed;
        this.setState({collapsed});
    }

    render() {
        const { location } = this.props;
        const { collapsed } = this.state;
        const homeClass = location.pathname === "/" ? "active" : "";
        const productsClass = location.pathname.match(/^\/archives/) ? "active" : "";
        const settingsClass = location.pathname.match(/^\/settings/) ? "active" : "";
        const navClass = collapsed ? "collapse" : "";

        return (
            <nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
                <div class="container">
                    <a class="navbar-brand" href="#">DemoApp</a>
                    <button class="navbar-toggler" type="button" onClick={this.toggleCollapse.bind(this)}>
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    
                    <div class={"navbar-collapse " + navClass} id="bs-example-navbar-collapse-1">
                        <ul class="navbar-nav mr-auto">
                            <li class={"nav-item " + homeClass}>
                                <IndexLink class="nav-link" to="/" onClick={this.toggleCollapse.bind(this)}>Home</IndexLink>
                            </li>
                            <li class={"nav-item " + productsClass}>
                                <Link class="nav-link" to="products/1" onClick={this.toggleCollapse.bind(this)}>Products</Link>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown">
                                    Dropdown
                                </a>
                                <div class="dropdown-menu">
                                    <a class="dropdown-item" href="#">Action</a>
                                    <a class="dropdown-item" href="#">Another action</a>
                                    <div class="dropdown-divider"></div>
                                    <a class="dropdown-item" href="#">Something else here</a>
                                </div>
                            </li>
                            <li class={"nav-item " + settingsClass}>
                                <Link class="nav-link" to="settings" onClick={this.toggleCollapse.bind(this)}>Settings</Link>
                            </li>
                        </ul>
                        <form class="form-inline my-2 my-lg-0">
                            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                        </form>
                    </div>
                </div>
            </nav>
        );
    }
}
