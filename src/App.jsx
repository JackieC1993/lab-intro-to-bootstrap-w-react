import React, {useState, useEffect} from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import TravelCards from "./components/TravelCards";
import PostByLocation from "./components/PostByLocation";
import postData from "./data/posts.json";

function App(){
  const [post, setPost] = useState(postData);
  const [value,setValue] = useState ("");
  const [error, setError] = useState(false);
} 

function handlePost(event) {
  //console.log(event.target.value)
  //to avoid case senstivity set all inputs to lowercase
  const input = event.target.value.toLowerCase();
  setPost(
    postData.filter((obj))
  )
}
export default App;
