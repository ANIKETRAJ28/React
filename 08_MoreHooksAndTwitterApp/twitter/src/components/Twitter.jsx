import { useState } from 'react';
import AddTweet from './AddTweet';
import TweetList from './TweetList';

const initialDummyTweets = [
  {id: 0, content: 'we have a new twitter called as threads', likeCount: 20, date: new Date()},
  {id: 1, content: 'what should we post?', likeCount: 9, date: new Date()},
  {id: 2, content: 'what is up with the tech community', likeCount: 52, date: new Date()},
];

function Twitter() {
    const [tweet, setTweet] = useState(initialDummyTweets);
    const handleAddTweet = (text) => {
        let nextId = (tweet.length > 0) ? tweet[tweet.length-1].id+1 : 0;
        setTweet([...tweet, {
            content: text,
            likeCount: Math.floor(Math.random()*50),
            id: nextId,
            date: new Date()
        }]);
    }
    return (
        <>
            <AddTweet onAddTweet={handleAddTweet}/>
          <TweetList tweets={tweet}/>
        </>
    );
}

export default Twitter;