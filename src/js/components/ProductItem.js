import React from "react";
import { Link } from "react-router";

export default class ProductItem extends React.Component {
    render() {
        const { title, id } = this.props;

        return (
            <div class="col-md-3 col-sm-6">
                <span class="thumbnail">
                    <img src="https://s12.postimg.org/41uq0fc4d/item_2_180x200.png" alt="..."/>
                    <h4>{title}</h4>
                    <div class="ratings">
                        <span class="glyphicon glyphicon-star"></span>
                        <span class="glyphicon glyphicon-star"></span>
                        <span class="glyphicon glyphicon-star"></span>
                        <span class="glyphicon glyphicon-star"></span>
                        <span class="glyphicon glyphicon-star-empty"></span>
                    </div>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                    <hr class="line"/>
                    <div class="row">
                        <div class="col-md-6 col-sm-6">
                            <p class="price">$29,90</p>
                        </div>
                        <div class="col-md-6 col-sm-6">
                            <Link class="btn btn-info right" to={"product/" + id}>BUY ITEM</Link>
                        </div>
                    </div>
                </span>
            </div>
        );
    }
}
