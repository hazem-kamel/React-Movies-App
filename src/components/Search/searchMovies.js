import React, { Component } from "react";
import {
  Card,
  Button,
  CardTitle,
  CardText,
  Row,
  Col,
  CardImg
} from "reactstrap";
import "../Cards/Cards.css";
import { Link } from "react-router-dom";
import StarRatingComponent from "react-star-rating-component";
import "./search.css";
export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: "",
      searchResults: [],
      isLoaded: false
    };
  }
  // Fetching the API using window.location.search.substring to take the searched text from the url
  componentDidMount() {
    let query = window.location.search.substring(5);
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=c71a7b8c45890b633f3719b41ed7996b&language=en-US&query=${query}&page=1&include_adult=false`
    )
      .then(movies => movies.json())
      .then(({ results }) => {
        this.setState({ isLoaded: true, searchResults: results });
      });
  }

  render() {
    if (!this.state.isLoaded) {
      return <div> .... Loading </div>;
    } else if (this.state.searchResults.length === 0) {
      return (
        <div>
          Your search did not match any movies. Suggestions: Make sure that all
          words are spelled correctly.{" "}
        </div>
      );
    } else {
      return (
        <div>
          <h3>Your Search Results!</h3>
          <Row>
            {this.state.searchResults.map(Movie => (
              <Col sm="3">
                <Card key={Movie.id} className="Top_Rated" body>
                  <CardImg
                    top
                    width="100%"
                    src={`https://image.tmdb.org/t/p/w200${Movie.poster_path}`}
                    alt=""
                  />
                  <CardTitle className="title">{Movie.title}</CardTitle>
                  <CardText className="Text">
                    Rating:{Movie.vote_average}
                    <StarRatingComponent
                      name="rate1"
                      starCount={10}
                      editing={false}
                      value={parseFloat(Movie.vote_average)}
                    />
                  </CardText>
                  <Link to={"/movie/" + Movie.id}>
                    {" "}
                    <Button className="button" color="danger">
                      Visit
                    </Button>{" "}
                  </Link>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      );
    }
  }
}
