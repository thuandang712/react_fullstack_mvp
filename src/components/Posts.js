import React from 'react'
import PostItem from './PostItem'

const Posts = ({posts, getSinglePostItem}) => {
    return (
        <div className='post-container'>
            {posts.map( (post, i) => (
                <PostItem key={i} post={post} getSinglePostItem={getSinglePostItem}/>
            ))}
        </div>
    )
}

export default Posts;