import React from 'react'
import { Card } from 'semantic-ui-react'
import LikeButton from './LikeButton'
import DeleteButton from './DeleteButton'

const PostItem = ({post: {user_id, user_name, post_content, like_count}, getSinglePostItem, deletePost, updateLikeCount}) => {

    const handleGetPost = (e) => {
        getSinglePostItem(e.target.id)
    }

    return (

        <Card>
            <Card.Content>
                <Card.Header className='user-name' id={user_id} onClick={handleGetPost}>{user_name}</Card.Header>
                <Card.Description className='post-content'>{post_content}</Card.Description>
            </Card.Content>
            <Card.Content extra>
                <LikeButton user_id={user_id} like_count={like_count} updateLikeCount={updateLikeCount}/>
                <DeleteButton user_id={user_id} deletePost={deletePost}/>
            </Card.Content>
        </Card>
    )
}

export default PostItem