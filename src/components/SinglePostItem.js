import React from 'react'
import Header from './Header'

const SinglePostItem = ({singlePostItem, goHome}) => {

    return (
        <div className='single-post-item'>
            <Header goHome={goHome}/>
            <h2>Username: {singlePostItem[0].user_name}</h2>
            <p>Content: {singlePostItem[0].post_content}</p>
            <button>{singlePostItem[0].like_count}</button>
        </div>
    )
}

export default SinglePostItem