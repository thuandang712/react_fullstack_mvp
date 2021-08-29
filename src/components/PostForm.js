import React from 'react'

const PostForm = ({userInputText, recordUserInput, submitUserInput}) => {
    
    const handleAdd = (e) => {
        if(e.key === 'Enter') {
            submitUserInput()
        }
    }

    return (
        <div className='form-container'>
            <input 
                id='post-input' 
                type='text' 
                placeholder="What's in your mind?"
                value={userInputText}
                onChange={recordUserInput}
                onKeyDown={handleAdd}>
            </input>
        </div>
    )

}


export default PostForm