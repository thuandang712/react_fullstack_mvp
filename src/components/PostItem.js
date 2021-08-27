import React from 'react'

const PostItem = ({post}) => {
    return (
        <div className='post-item' id={post.user_id}>
            <h2>{post.user_name}</h2>
            <p>{post.post_content}</p>
            <button>{post.like_count}</button>
        </div>
    )
}

export default PostItem