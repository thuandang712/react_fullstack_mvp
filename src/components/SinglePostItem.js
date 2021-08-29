import React from 'react'
import MenuBar from './MenuBar'
import { Button, Card } from 'semantic-ui-react'

const SinglePostItem = ({singlePostItem, goHome}) => {

    return (
        <div>
            <MenuBar goHome={goHome}/>
            <Card>
                <Card.Content>
                    <Card.Header>{singlePostItem[0].user_name}</Card.Header>
                    <Card.Description>{singlePostItem[0].post_content}</Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <Button color='teal' basic content='' icon='heart'
                    label={{ basic: true, color: 'teal', pointing: 'left', content: singlePostItem[0].like_count }}
                    />
                </Card.Content>
            </Card>
        </div>

    )
}

export default SinglePostItem