import { useState } from 'react';
import '../CSS/Tweet.css'
function Tweet({ content, likeCount, date }) {
    const [isEditing, setIsEditing] = useState(false);
    return(
        <div className='tweet-wrapper'>
            <div className='tweet'>
                <div className="tweet-content">
                    {
                        (isEditing) ? <input value={content} /> : content
                    }
                </div>
                <button className='btn' onClick={() => setIsEditing(!isEditing)}>
                    {
                        (isEditing) ? "Save" : "Edit"
                    }
                </button>
            </div>
            <div className='wrapper'>
            <div className="likes">
                {likeCount} likes
            </div>
            <div className='date'>
            <b>Tweeted at:</b> {date.toString()}
            </div>
            </div>
        </div>
    )
}

export default Tweet;