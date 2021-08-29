import React from 'react'
import PostItem from './PostItem'
import CreatePost from './CreatePost'
import {Grid} from 'semantic-ui-react'

const Posts = ({posts, getSinglePostItem}) => {
    
    return (
        <Grid columns={3} className='post-container'>
            <Grid.Row className='title'>
                <h1>Recent Posts</h1>
            </Grid.Row>
            <Grid.Row>
                <CreatePost/>
            </Grid.Row>
            <Grid.Row>
                {posts.map( post => (
                    <Grid.Column key={post.user_id}>
                        <PostItem post={post} getSinglePostItem={getSinglePostItem}/>
                    </Grid.Column>
                ))}
            </Grid.Row>
        </Grid>
    )
}

export default Posts;