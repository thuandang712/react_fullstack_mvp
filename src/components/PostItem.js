import React from 'react'
import { Image, Button, Card, Icon, Label } from 'semantic-ui-react'

const PostItem = ({post: {user_id, user_name, post_content, like_count}, getSinglePostItem}) => {

    const handleGetPost = (e) => {
        getSinglePostItem(e.target.id)
    }

    return (
        // <div className='post-item' >
        //     <h2 className='user-name' id={post.user_id} onClick={handleGetPost}>{post.user_name}</h2>
        //     <p className='post-content'>{post.post_content}</p>
        //     <button className='like-button'>{post.like_count}</button>
        // </div>

        <Card>
            <Card.Content>
                <Image
                    floated='right'
                    size='mini'
                    src='https://react.semantic-ui.com/images/avatar/large/steve.jpg'
                />
                <Card.Header>{user_name}</Card.Header>
                <Card.Description>{post_content}</Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Button as='div' labelPosition='right'>
                    <Button color='teal' basic>
                        <Icon name='heart' />
                        Like
                    </Button>
                <Label basic color='teal' pointing='left'>
                    {like_count}
                </Label>
                </Button>
            </Card.Content>
        </Card>
    )
}

export default PostItem