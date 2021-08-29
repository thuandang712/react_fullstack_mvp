import React from 'react'

import {Button} from 'semantic-ui-react'

const DeleteButton = () => {

    const deletePost = () => {
        console.log('delete post')
    }
    
    return (
        <Button color='red' basic floated='right' icon='trash' onClick={deletePost} 
        />
    )
}

export default DeleteButton