import React from "react"

export default class ProductDetail extends React.Component {
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

        // product-description
        let description = productInfo.description.split("#");
        if ( description.length ) {
            description = description
            .map((d, i) => {
                return (
                    <li key={i}>{d}</li>
                );
            });
        }
        // end product-description

        return (
            <div class="container">
                <div class="row">
                   <div class="col-sm-7 item-photo">
                        <img class="img-fluid" src={productInfo.image_url} alt="..."/>
                    </div>

                    <div class="col-sm-5">
                        <h1>{ productInfo.title }</h1>    
                        <div class="product-ratings">
                            {ratingsList}
                        </div>

                        <h3>{priceFormat} đ</h3>
        

                        <div class="product-description">
                            <ul>
                                {description}
                            </ul>
                        </div>            
            
                        <div class="section">
                            <button class="btn btn-primary"><span class="glyphicon glyphicon-shopping-cart" aria-hidden="true"></span> Mua Ngay</button>
                        </div>                                        
                    </div>         
                </div>
            </div>        
        );
    }
}
