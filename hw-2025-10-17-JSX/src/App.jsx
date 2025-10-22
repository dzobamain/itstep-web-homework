import React from "react";
import "./App.css";

import BookCard from "../task/task1";
import BandCard from "../task/task2";
import RecipeCard from "../task/task3";

const currentTask = 1; // 1,2,3
const taskList = ["Book", "Band", "Recipe"];

function App() {
  // TEST DATA
  // Task1: Book
  const book = {
    title: "The Adventures of Coding Cat",
    author: "Jane Developer",
    genre: "Fantasy, Programming, Comedy",
    pages: 123,
    cover: "https://placekitten.com/200/300",
    reviews: [
      "Hilarious and inspiring story for all programmers!",
      "I laughed, I cried, I debugged.",
      "Perfect for coffee breaks and coding sessions.",
    ],
  };


  // Task2: Band
  const band = {
    name: "The Bug Squashers",
    members: [
      { name: "Alice Keyboard", role: "Vocals" },
      { name: "Bob Loop", role: "Guitar" },
      { name: "Charlie Cache", role: "Bass" },
      { name: "Daisy Stack", role: "Drums" },
    ],
    albums: [
      { title: "Hello World", year: 2020, cover: "https://placekitten.com/150/150" },
      { title: "Infinite Loops", year: 2021, cover: "https://placekitten.com/151/150" },
      { title: "Bug Free", year: 2022, cover: "https://placekitten.com/150/151" },
    ],
  };


  // Task3: Recipe
  const recipe = {
    title: "Magic Pancakes",
    image: "https://placekitten.com/400/300",
    ingredients: [
      { name: "Flour", amount: "100g" },
      { name: "Milk", amount: "200ml" },
      { name: "Egg", amount: "1 large" },
      { name: "Sugar", amount: "2 tbsp" },
      { name: "Chocolate chips", amount: "30g" },
    ],
    steps: [
      "Mix all ingredients in a big bowl.",
      "Heat a frying pan and pour some batter.",
      "Cook until golden on both sides.",
      "Sprinkle chocolate chips on top.",
      "Serve with a smile!",
    ],
  };

  let Content;
  switch (currentTask) {
    case 1:
      Content = <BookCard {...book} />;
      break;
    case 2:
      Content = <BandCard {...band} />;
      break;
    case 3:
      Content = <RecipeCard {...recipe} />;
      break;
    default:
      Content = <p>No task selected</p>;
  }

  return (
    <div className={`app-container task${currentTask}`}>
      <h1 className="title">{taskList[currentTask - 1]}</h1>
      <div className="content">{Content}</div>
    </div>
  );
}

export default App;
