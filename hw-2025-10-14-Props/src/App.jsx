
import "./App.css";

import MovieCard from "../task/task1";
import PersonCard from "../task/task2";
import Time from "../task/task3";
// import Pet from "../task/task4";

const currentTask = 3;
const taskList = ["Favorite movie", "Personal page", "Time"];

function App() {
  // MovieCard (task1)
  const movie = {
    title: "Interstellar",
    director: "Christopher Nolan",
    year: 2014,
    studio: "Paramount Pictures, Warner Bros.",
    poster: "https://m.media-amazon.com/images/I/81kR9QvR0xL._AC_SY679_.jpg",
    description:
      "A group of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
  };

  // PersonCard (task2)
  const person = {
    name: "Oleh Shevchenko",
    phone: "+380-67-123-4567",
    email: "oleh.shevchenko@example.com",
    city: "Kyiv",
    experience: "3 years in web development",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    photo: "https://cdn-icons-png.flaticon.com/512/147/147144.png",
  };

  let Content;
  switch (currentTask) {
    case 1:
      Content = <MovieCard {...movie} />;
      break;
    case 2:
      Content = <PersonCard {...person} />;
      break;
    case 3:
      Content = <Time format="HH:MM:SS" />;
      break;
    // case 4:
    //   Content = <Pet />;
    //   break;
    default:
      Content = <p>No task selected</p>;
  }

  return (
    <div className={`app-container task${currentTask}`}>
      <h1 className="title">Homework Task: "{taskList[currentTask - 1]}"</h1>
      {Content}
    </div>

  );
}

export default App;
