import React from "react"
import { Link } from "react-router"

export default class ProductItem extends React.Component {
    render() {
        const { productInfo } = this.props;

        const priceFormat = productInfo.price.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");

        // ratingsArray
        let ratings = productInfo.ratings;
        let ratingsArray = [];

        for (var i = 0; i < ratings; i++) {
            ratingsArray[i] = true;
        }

        const ratingsList = ratingsArray
        .map((r, i) => {
            return (
                <i class="fas fa-star" key={i}></i>
            );
        });
        // end ratingsArray

        return (
            <div class="col-md-4 col-sm-6">
                <div class="card product-item">
                    <div class="product-image">
                        <img class="card-img-top" src={productInfo.image_url} alt="..."/>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">{productInfo.title}</h5>
                        <div class="product-ratings">
                            {ratingsList}
                        </div>
                        <p class="card-text product-description">
                            {productInfo.shortdescription}
                        </p>
                        <hr class="line"/>
                        <div class="row">
                            <div class="col-md-6">
                                <p class="price">{priceFormat} đ</p>
                            </div>
                            <div class="col-md-6 right">
                                <Link class="btn btn-primary" to={"product/" + productInfo.id}>Mua Ngay</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
