import React from 'react'
import PostItem from './PostItem'

const Posts = ({posts}) => {
    return (
        <div id={'posts'}>
            {posts.map( (post, i) => (
                <PostItem key={i} post={post} />
            ))}
        </div>
    )
}

export default Posts;