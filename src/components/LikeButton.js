import React from 'react'
import { Button } from 'semantic-ui-react'

const LikeButton = ({like_count}) => {

    const likePost = () => {
        console.log('like post')
    }
    
    return (
        <Button color='teal' basic content='' icon='heart' onClick={likePost} 
        label={{ basic: true, color: 'teal', pointing: 'left', content: like_count }}
        />
    )
}

export default LikeButton