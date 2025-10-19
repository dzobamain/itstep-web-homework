import React, { Component } from "react";
import "./App.css";

export class ClubInfo extends Component {
  render() {
    const { club, cardStyle } = this.props;

    return (
      <div className={`card ${cardStyle}`}>
        <h2>Basic Information</h2>
        <p><b>Club Name:</b> {club.name}</p>
        <p><b>City:</b> {club.city}</p>
        <p><b>Founded:</b> {club.founded}</p>
        <img src={club.logo} alt="Club Logo" />
      </div>
    );
  }
}

export class ClubAchievements extends Component {
  render() {
    const { club, cardStyle } = this.props;

    return (
      <div className={`card ${cardStyle}`}>
        <h2>Club Achievements</h2>
        <ul>
          {club.achievements.map((a, i) => (
            <li key={i}>{a}</li>
          ))}
        </ul>
        <p>Average Goals per Season: {club.avgGoals}</p>
      </div>
    );
  }
}

export class ClubSquad extends Component {
  render() {
    const { club, cardStyle } = this.props;

    return (
      <div className={`card ${cardStyle}`}>
        <h2>Current Squad</h2>
        <ul>
          {club.players.map((p, i) => (
            <li key={i}>
              <b>{p.name}</b> — {p.position}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
