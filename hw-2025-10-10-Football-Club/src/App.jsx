import React, { Component } from "react";
import { ClubInfo, ClubAchievements, ClubSquad } from "./components.jsx";
import "./App.css";

/* Task 2 */
const styles = ["card-style1-Dynamo-Kyiv", "card-style2-Dynamo-Kyiv"];

function getRandomStyle() {
  return styles[Math.floor(Math.random() * styles.length)];
}

class App extends Component {
  render() {
    const clubs = [
      {
        name: "Dynamo Kyiv",
        city: "Kyiv, Ukraine",
        founded: 1927,
        logo: "/logoD.png",
        achievements: ["16-time Ukrainian Champion"],
        avgGoals: 65,
        players: [{ name: "Player 1", position: "Forward" }],
      },
      {
        name: "Shakhtar Donetsk",
        city: "Donetsk, Ukraine",
        founded: 1936,
        logo: "/logoS.png",
        achievements: ["13-time Ukrainian Champion"],
        avgGoals: 70,
        players: [{ name: "Player 2", position: "Midfielder" }],
        cardStyle: "card-style-Shakhtar",
      },
      {
        name: "Lviv FC",
        city: "Lviv, Ukraine",
        founded: 2006,
        logo: "/logoL.png",
        achievements: ["Best New Club"],
        avgGoals: 50,
        players: [{ name: "Player 3", position: "Defender" }],
        cardStyle: "card-style-Lviv-FC",
      },
    ];

    return (
      <div className="container">
        {clubs.map((club, index) => {
          const cardStyle = club.cardStyle || getRandomStyle();

          return (
            <div key={index} style={{ marginBottom: "40px" }}>
              <h1>Football Club "{club.name}"</h1>
              <ClubInfo club={club} cardStyle={cardStyle} />
              <ClubAchievements club={club} cardStyle={cardStyle} />
              <ClubSquad club={club} cardStyle={cardStyle} />
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
