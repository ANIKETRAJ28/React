import Tweet from "./Tweet";

import '../CSS/TweetList.css'

function TweetList({tweets, onEditTweet}) {
    return(
        <ul className="tweet-list">
            {
                tweets.map((tweet) => (
                    <li className="tweet-like-wrapper" key={tweet.id}>
                        <Tweet 
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