import React, { Component } from "react";
import "./Joke.css";

class Joke extends Component {
  
  getColor() {
    if (this.props.joke.votes >= 15) {
      return "#4CAF50";
    } else if (this.props.joke.votes >= 12) {
      return "#8BC34A";
    } else if (this.props.joke.votes >= 9) {
      return "#CDDC39";
    } else if (this.props.joke.votes >= 6) {
      return "#FFEB3B";
    } else if (this.props.joke.votes >= 3) {
      return "#FFC107";
    } else if (this.props.joke.votes >= 0) {
      return "#FF9800";
    } else {
      return "#f44336";
    }
  }
  getEmoji() {
    if (this.props.joke.votes >= 15) {
      return "em em-rolling_on_the_floor_laughing";
    } else if (this.props.joke.votes >= 12) {
      return "em em-laughing";
    } else if (this.props.joke.votes >= 9) {
      return "em em-smiley";
    } else if (this.props.joke.votes >= 6) {
      return "em em-slightly_smiling_face";
    } else if (this.props.joke.votes >= 3) {
      return "em em-neutral_face";
    } else if (this.props.joke.votes >= 0) {
      return "em em-confused";
    } else {
      return "em em-angry";
    }
  }

  handleVote(id, delta){
    this.props.handleVote(id, delta);
  }

  render() {
    let {joke, votes, id} = this.props.joke;
    return (
      <div className='Joke'>
        <div className='Joke-buttons'>
          <i className='fas fa-arrow-up' onClick={() => this.handleVote(id, 1)} />
          <span className='Joke-votes' style={{ borderColor: this.getColor() }}>
            {votes}
          </span>
          <i className='fas fa-arrow-down' onClick={() => this.handleVote(id, -1)} />
        </div>
        <div className='Joke-text'>{joke}</div>
        <div className='Joke-smiley'>
          <i className={this.getEmoji()} />
        </div>
      </div>
    );
  }
}
export default Joke;
