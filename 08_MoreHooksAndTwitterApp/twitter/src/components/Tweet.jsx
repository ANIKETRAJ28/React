function Tweet({ content, likeCount }) {
    return(
        <>
            <div className="tweet-content">
                {content}
            </div>
            <div className="tikes">
                {likeCount} likes
            </div>
        </>
    )
}

export default Tweet;