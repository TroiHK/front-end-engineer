import React from "react"
// import { connect } from "react-redux"

// import { fetchUser } from "../actions/userActions"
// import { fetchTweets } from "../actions/tweetsActions"

// @connect((store) => {
//   return {
//     user: store.user.user,
//     userFetched: store.user.fetched,
//     tweets: store.tweets.tweets,
//   };
// })
// export default class Layout extends React.Component {
//   componentWillMount() {
//     this.props.dispatch(fetchUser())
//   }

//   fetchTweets() {
//     this.props.dispatch(fetchTweets())
//   }

//   render() {
//     const { user, tweets } = this.props;

//     if (!tweets.length) {
//       return <button onClick={this.fetchTweets.bind(this)}>load tweets</button>
//     }

//     const mappedTweets = tweets.map(tweet => <li key={tweet.id}>{tweet.text}</li>)

//     return <div>
//       <h1>{user.name}</h1>
//       <ul>{mappedTweets}</ul>
//     </div>
//   }
// }

import { Link } from "react-router";

import Footer from "../components/layout/Footer";
import Nav from "../components/layout/Nav";

export default class Layout extends React.Component {
    render() {
        const { location } = this.props;
        const containerStyle = {
            marginTop: "60px"
        };

        return (
            <div>
                <Nav location={location} />

                <div class="container" style={containerStyle}>
                    <div class="row">
                        <div class="col-lg-12">
                            <h1>KillerNews.net</h1>

                            {this.props.children}
                        </div>
                    </div>
                </div>

                <Footer style={containerStyle} />
            </div>
        );
    }
}
