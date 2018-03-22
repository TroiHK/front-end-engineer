import React from "react";

export default class ProductDetail extends React.Component {
    render() {
        const { result } = this.props;

        return (
            <div class="container">
                <div class="row">
                   <div class="col-xs-7 item-photo">
                        <img src="https://ak1.ostkcdn.com/images/products/8818677/Samsung-Galaxy-S4-I337-16GB-AT-T-Unlocked-GSM-Android-Cell-Phone-85e3430e-6981-4252-a984-245862302c78_600.jpg"/>
                    </div>

                    <div class="col-xs-5">
                        <h1>{ result.title }</h1>    
                        <h5>vendido por <a href="#">Samsung</a> · <small>(5054 ventas)</small></h5>
            
                        <h6 class="title-price"><small>PRECIO OFERTA</small></h6>
                        <h3>U$S 399</h3>
            
                        <div class="section">
                            <h6 class="title-attr"><small>COLOR</small></h6>                    
                            <div>
                                <div class="attr"></div>
                                <div class="attr"></div>
                            </div>
                        </div>

                        <div class="section">
                            <h6 class="title-attr"><small>CAPACIDAD</small></h6>                    
                            <div>
                                <div class="attr2">16 GB</div>
                                <div class="attr2">32 GB</div>
                            </div>
                        </div>              
            
                        <div class="section">
                            <button class="btn btn-success"><span class="glyphicon glyphicon-shopping-cart" aria-hidden="true"></span> Agregar al carro</button>
                            <h6><a href="#"><span class="glyphicon glyphicon-heart-empty"></span> Agregar a lista de deseos</a></h6>
                        </div>                                        
                    </div>         
                </div>
            </div>        
        );
    }
}
