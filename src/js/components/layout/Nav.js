import React from "react"
import { IndexLink, Link } from "react-router"
import { connect } from "react-redux"

import { fetchSearchValue } from "../../actions/productsActions"

@connect((store) => {
    return {
        searchValue: store.products.searchValue,
    };
})

export default class Nav extends React.Component {
    constructor() {
        super()
        this.state = {
            collapsed: true,
            collapsedDropdown: false,
        };
    }

    toggleCollapse() {
        const collapsed = !this.state.collapsed;
        this.setState({collapsed});
    }

    toggleCollapseDropdown() {
        const collapsedDropdown = !this.state.collapsedDropdown;
        this.setState({collapsedDropdown});
    }

    handleSearch(searchValue) {
        this.props.dispatch(fetchSearchValue(searchValue));
    }

    render() {
        const { location, searchValue } = this.props;
        const { collapsed, collapsedDropdown } = this.state;
        const homeClass = location.pathname === "/" ? "active" : "";
        const productsClass = location.pathname.match(/^\/archives/) ? "active" : "";
        const settingsClass = location.pathname.match(/^\/settings/) ? "active" : "";
        const navClass = collapsed ? "collapse" : "";
        const dropdownClass = collapsedDropdown ? "show" : "";

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
                            <li class={"nav-item dropdown " + dropdownClass}>
                                <a class="nav-link dropdown-toggle" id="navbarDropdown" onClick={this.toggleCollapseDropdown.bind(this)}>
                                    Products
                                </a>
                                <div class={"dropdown-menu " + dropdownClass}>
                                    <Link class="dropdown-item" to="products/1" onClick={this.toggleCollapseDropdown.bind(this)}>Điện Thoại, Máy Tính Bảng</Link>
                                    <Link class="dropdown-item" to="products/2" onClick={this.toggleCollapseDropdown.bind(this)}>Tivi & Thiết Bị Nghe Nhìn</Link>
                                    <Link class="dropdown-item" to="products/3" onClick={this.toggleCollapseDropdown.bind(this)}>Thiết Bị Số - Phụ Kiện Số</Link>
                                    <Link class="dropdown-item" to="products/4" onClick={this.toggleCollapseDropdown.bind(this)}>Laptop & Máy Vi Tính</Link>
                                    <Link class="dropdown-item" to="products/5" onClick={this.toggleCollapseDropdown.bind(this)}>Điện Thoại Smartphone</Link>
                                    <Link class="dropdown-item" to="products/6" onClick={this.toggleCollapseDropdown.bind(this)}>Máy Tính Bảng</Link>
                                    <Link class="dropdown-item" to="products/7" onClick={this.toggleCollapseDropdown.bind(this)}>Tivi</Link>
                                </div>
                            </li>
                        </ul>
                        <form class="form-inline my-2 my-lg-0">
                            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" value={searchValue} onInput={(e)=>this.handleSearch(e.target.value)}/>
                            <Link class="btn btn-danger my-2 my-sm-0" to="search">Search</Link>
                        </form>
                    </div>
                </div>
            </nav>
        );
    }
}
