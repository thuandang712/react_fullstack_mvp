import React from 'react'

const LikeButton = ({like_count}) => {

    const likePost = () => {
        console.log('like post')
    }
    
    return (
        // <Button color='teal' basic content='' icon='heart' onClick={likePost} 
        // label={{ basic: true, color: 'teal', pointing: 'left', content: like_count }}
        // />
        <div className="ui labeled button">
            <button onClick={likePost} className="ui teal basic button">
                <i aria-hidden="true" className="heart icon"></i> 
            </button>

            <div className="ui teal left pointing basic label">{like_count}</div>
        </div>
    )
}

export default LikeButton