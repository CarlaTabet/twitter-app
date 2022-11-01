import React, {useState} from 'react';
import "../Styles/Counter.css"



const Counter = props => {
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
        <div id = "Likes">
            <h1>Likes: {liked}</h1>
            <button onClick= {addLike}>+</button>
            <button onClick= {removeLike}>-</button>
        </div>
    );
}

export default Counter;