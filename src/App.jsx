import React, {useState} from "react";
import Navbar from "./components/Navbar";
import Quote from "./components/Quote";
import SearchBar from "./components/SearchBar";
import Post from "./components/Post";
import Table from "./components/Table";
import Footer from "./components/Footer";
import postData from "./data/posts.json";

function App() {
  const [searchText, setSearchText] = useState("");
  const [filteredPosts, setFilteredPosts] = useState(postData);

  const handleSearch = (text) => {
    setSearchText(text);

    if(text === "") {
      setFilteredPosts(postData);
    }else{
      const filtered = postData.filter(
        (post) =>
        post.title.toLowerCase().includes(text.toLowerCase()) || post.location.toLowerCase().includes(text.toLowerCase())
      );
      setFilteredPosts(filtered);
    }
  };
  
  //console.log(postData);
  
  return (
    <div>
      <Navbar/>
      <Quote/>
      <SearchBar onSearch={handleSearch} />
      <div className="container mt-4">
      <div className="row row-cols-1 row-cols-md-2 g-4">
        {filteredPosts.map((post,postIndex) => (
          <div key={postIndex} className="col"/>
          <Post post={post} />
          </div>
        ))}
    </div>
    </div>
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-8">
    <Table postsData={filterPosts} />
        </div>
        <div className="col-md-4">
    <Footer/>
    </div>
    </div>
    </div>
    </div>
  );
}

export default App;
