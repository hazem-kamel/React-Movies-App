import React, { Component } from "react";
import "./Movie.css";
import Youtube from "react-youtube";
import StarRatingComponent from "react-star-rating-component";

export default class Movie extends Component {
  constructor() {
    super();
    this.state = {
      id: "",
      name: "",
      vote: "",
      date: "",
      image: "",
      time: "",
      genres: [],
      overview: "",
      boxoffice: "",
      video: []
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=c71a7b8c45890b633f3719b41ed7996b&language=en-US&append_to_response=videos`
    )
      .then(data => data.json())
      .then(results => {
        this.setState({
          name: results.original_title,
          vote: results.vote_average,
          overview: results.overview,
          date: results.release_date,
          time: results.runtime,
          genres: results.genres,
          image: results.poster_path,
          video: results.results,
          boxoffice: results.revenue
        });
      });
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?api_key=c71a7b8c45890b633f3719b41ed7996b&language=en-US`
    )
      .then(videos => videos.json())
      .then(trailer => {
        this.setState({ video: trailer.results["0"].key });
      });
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }

  render() {
    const config = {
      height: "390",
      width: "640",
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 0
      }
    };
    return (
      <div className="movie_home">
        <div className="row">
          <div className="column">
            <img
              className="img"
              alt="poster"
              style={{}}
              src={`https://image.tmdb.org/t/p/w200${this.state.image}`}
            ></img>
          </div>
          <div className="column">
            <h1 className="name"> {this.state.name} </h1>

            <p>
              {" "}
              {(this.state.time / 60) ^ 0}h {this.state.time % 60} m |{" "}
              {this.state.date} | {this.state.boxoffice.toLocaleString()} $
            </p>
            <StarRatingComponent
              name="rate1"
              starCount={10}
              editing={false}
              value={parseInt(this.state.vote)}
            />
            <p>Rating: {this.state.vote}</p>
            <p className="overview">{this.state.overview}</p>
            <p>
              {this.state.genres.map(genre => (
                <li>{genre.name}</li>
              ))}
            </p>
          </div>
        </div>

        <div className="utube">
          <h3>Movie Trailer | {this.state.name}</h3>
          <br />
          <Youtube
            id="Youtube"
            videoId={this.state.video}
            opts={config}
            onReady={this._onReady}
          />
        </div>
      </div>
    );
  }
}
