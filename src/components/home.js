import React, { Component } from "react";
import { Jumbotron } from "reactstrap";
import NowPlaying from "../components/Movies/NowPlaying";
import "./home.css";
export default class Home extends Component {
  render() {
    return (
      <div>
        <Jumbotron className="Jumbotron">
          <h1 className="display-3">Your Movies Gate!</h1>
          <p className="lead">
            Your online database of information related to films{" "}
          </p>
          <hr className="my-2" />
          <p>
            Updated information regarding cast, production crew and personal
            biographies, plot summaries, trivia, fan and critical reviews, and
            ratings.
          </p>
        </Jumbotron>

        <NowPlaying />
      </div>
    );
  }
}
