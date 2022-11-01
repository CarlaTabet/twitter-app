import React from 'react';
import {useState} from 'react';
import Tweet from "./Tweet.js";
import serena from "../images/serene.jpg";
import sandra from "../images/sandra.jpg";
import "../Styles/Tweet.css"
import SearchBar from "./SearchBar.js";


const Body = () => {

    const[author, setAuthor] = useState("");
    const[handle, setHandle] = useState("");
    const[content, setContent] = useState("");

    const[tweets, setTweets] = useState([]);
    const[filteredTweets, setFilteredTweets] = useState([]);

    const addTweet = () => {
        if (handle !== "" && author !== "" && content !== "") {
        setTweets([{author: author, handle: handle, content: content, likes: 0}, ...tweets])
        setAuthor("");
        setHandle("");
        setContent("");
    }
  }

  const filterTweets = (match) => {
    const result = tweets.filter((tweet) => {
      return tweet.content.toLowerCase().includes(match.toLowerCase());
      })
      setFilteredTweets(result);
  }
    
    return (

        <div id = "Tweets">
          <div>
            <SearchBar onClick ={(match) => filterTweets(match)}/>
            {filteredTweets.map((tweet, i) => (
              <div>
                <Tweet pic = {tweet.pic} likes = {tweet.likes} content = {tweet.content} handle = {tweet.handle} author = {tweet.author} key={i}/>
                </div>
            ))}
          </div>
          <div id = "addTweet">
            <h3 id = "new-tweet"> Create a Tweet</h3>
            <input placeholder = "Author" value = {author} onChange = {e => setAuthor(e.target.value)}></input>
            <input placeholder = "Handle" value = {handle} onChange = {e => setHandle(e.target.value)}></input>
            <input placeholder = "Content" value = {content} onChange = {e => setContent(e.target.value)}></input>
            <button onClick = {addTweet}>Create</button>
          </div>

        <div id = "feed">
        <h3 id = "Feed">Your Twitter Feed</h3>
            <Tweet image = {serena} content = {"Hello"} handle = {"@SerenaWilliams"} author ={"Serena Williams"} date={"10/9"} time={"5pm"} />
            <Tweet image = {sandra} content = {"Watch my new movie"} handle ={"@SandraOh"} author ={"Sandra Oh"} date={"10/10"} time={"3pm"}/>
           
            {tweets.map((tweet, i) => (
              <Tweet handle={tweet.handle} author={tweet.author} content ={tweet.content} likes={tweet.likes} pic= {tweet.pic} key={i} />
            ))}
          </div>
        </div>  
        );

        }


export default Body;
