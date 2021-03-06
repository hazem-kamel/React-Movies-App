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
import "./pages.css";
import StarRatingComponent from "react-star-rating-component";

export default class TopRated extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topRated: [],
      isLoaded: false,
      target_id: null
    };
  }
  componentDidMount() {
    fetch(
      "https://api.themoviedb.org/3/movie/top_rated?api_key=c71a7b8c45890b633f3719b41ed7996b&language=en-US&page=1"
    )
      .then(data => data.json())
      .then(({ results }) => {
        this.setState({ isLoaded: true, topRated: results });
      });
  }

  render() {
    var { isLoaded, topRated } = this.state;
    if (!isLoaded) {
      return <div> .... Loading</div>;
    } else {
      return (
        <div>
          <h3>The top rated movies of all time !</h3>
          <h5>
            Find the latest information and reviews for the top rated movies of
            all time , including trailers, casts and summaries
          </h5>
          <Row>
            {topRated.map(Movie => (
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
