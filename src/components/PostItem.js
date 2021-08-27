import React from 'react'

const PostItem = ({post, getSinglePostItem}) => {

    const handleGetPost = (e) => {
        getSinglePostItem(e.target.id)
    }

    return (
        <div className='post-item' >
            <h2 className='user-name' id={post.user_id} onClick={handleGetPost}>{post.user_name}</h2>
            <p className='post-content'>{post.post_content}</p>
            <button className='like-button'>{post.like_count}</button>
        </div>
    )
}

export default PostItem