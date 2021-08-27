import React from 'react'

const CreatePost = () => {
    return (
        <div className='create-post-container'>
            <div className='post-title'>Create a Post:</div>
            <input id='post-input' type='text' placeholder="What's in your mind?"></input>
            <button id='create-task-btn'>Submit</button>
        </div>
    )
}

export default CreatePost