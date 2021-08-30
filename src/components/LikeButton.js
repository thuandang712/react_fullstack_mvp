import React from 'react'

const LikeButton = ({user_id, like_count, updateLikeCount}) => {

    const likePost = (e) => {
        updateLikeCount(e.target.id)
        // liked = false;
    }
    
    return (
        <div className="ui labeled button">
            <button className="ui teal basic button">
                <i id={user_id} onClick={likePost} aria-hidden="true" className="heart icon"></i> 
            </button>

            <div className="ui teal left pointing basic label">{like_count}</div>
        </div>
    )
}

export default LikeButton