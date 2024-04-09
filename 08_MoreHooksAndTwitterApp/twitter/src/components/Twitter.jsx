import { memo, useCallback, useState } from 'react';
import AddTweet from './AddTweet';
import TweetList from './TweetList';

const initialDummyTweets = [
  {id: 0, content: 'we have a new twitter called as threads', likeCount: 20, date: new Date()},
  {id: 1, content: 'what should we post?', likeCount: 9, date: new Date()},
  {id: 2, content: 'what is up with the tech community', likeCount: 52, date: new Date()},
];

const MemoisedAddTweet = memo(AddTweet)

function Twitter() {
    const [tweets, setTweets] = useState(initialDummyTweets);
    const handleAddTweet = useCallback((text) => {
        let nextId = (tweets.length > 0) ? tweets[tweets.length-1].id+1 : 0;
        setTweets([...tweets, {
            content: text,
            likeCount: Math.floor(Math.random()*50),
            id: nextId,
            date: new Date()
        }]);
    }, [tweets]);
    const handleEditTweet = useCallback((tweet) => {
        setTweets(
            tweets.map((editedTweet) => {
                if(editedTweet.id === tweet.id) {
                    return tweet;
                } else {
                    return editedTweet;
                }
            })
        )
    },[tweets]);
    const sortTweets = useCallback(() => {
        tweets.sort((t1, t2) => {return t2.date.getTime() - t1.date.getTime()});
        setTweets([...tweets]);
    }, [tweets])
    return (
        <>
            <MemoisedAddTweet onAddTweet={handleAddTweet}/>
            <button onClick={sortTweets}>
                Sort Tweet by recent Added
            </button>
            <TweetList tweets={tweets} onEditTweet={handleEditTweet}/>
        </>
    );
}

export default Twitter;