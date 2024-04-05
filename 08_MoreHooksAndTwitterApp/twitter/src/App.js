import './App.css';

import TweetList from './components/TweetList';

const initialDummyTweets = [
  {id: 0, content: 'we have a new twitter called as threads', likeCount: 20},
  {id: 1, content: 'what should we post?', likeCount: 9},
  {id: 0, content: 'what is up with the tech community', likeCount: 52},
];

function App() {
  return (
    <div>
      <TweetList tweets={initialDummyTweets}/>
    </div>
  );
}

export default App;
