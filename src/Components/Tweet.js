import React from 'react';
import "../Styles/Tweet.css"
import {useState} from 'react';
import rheart from "../images/heart.png";
import wheart from "../images/whiteheart.jpg.png";

const Tweet = props => {
    const [likes, setLikes] = useState(props.likes);
    const [liked, setLiked] = useState(false);
    
    console.log(liked);

   const addLike = () => {
        if (likes === props.likes) {
            setLikes(likes + 1);
            setLiked (true);
        }
    }
    const removeLike = () => {
        if (likes !== props.likes) {
            setLikes(likes - 1);
            setLiked (false);
        }
    }

    return (
        <div id = "tweet-container">
            <div id= "tweet-header">
                <img id= "pic" src= {props.image} alt ="profile img"></img>
                <div id= "author">
                <p id="author-name">{props.author}</p>
                <p id ="author-handle">{props.handle}</p>
                </div>
            
            </div>
            <p id = "text">{props.content}</p>
            
           

            <div id = "tweet-footer">
            <div id="likes">
                <button onClick={addLike}>Like</button>
                <button onClick={removeLike}>Unlike</button>
            </div>
            {liked? <img className="heart" src={rheart}/> : <img className="heart" src={wheart}/>}
                <p id="time">{props.time}</p>
                <p id = "date">{props.date}</p>
                <p id = "likes">{likes}</p>
            </div>
        </div>
    );
    }

export default Tweet;