import React from "react"


export default class Footer extends React.Component {
    render() {
        return (
            <footer style={this.props.style}>
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <p>Copyright &copy; demoshop.com</p>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}
