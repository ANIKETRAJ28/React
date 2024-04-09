import Tweet from "./Tweet";

import '../CSS/TweetList.css'
import { memo } from "react";

const MemoisedTweet = memo(Tweet);

function TweetList({tweets, onEditTweet}) {
    return(
        <ul className="tweet-list">
            {
                tweets.map((tweet) => (
                    <li className="tweet-like-wrapper" key={tweet.id}>
                        <MemoisedTweet 
                            content={tweet.content} 
                            likeCount={tweet.likeCount} 
                            date={tweet.date} 
                            id={tweet.id} 
                            onEdit={onEditTweet}
                        />
                    </li>
                ))
            }
        </ul>
    )
}

export default TweetList;