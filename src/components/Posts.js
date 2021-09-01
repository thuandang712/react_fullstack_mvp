import React from 'react'
import PostItem from './PostItem'
import PostForm from './PostForm'
import {Grid} from 'semantic-ui-react'

const Posts = ({posts, getSinglePostItem, userInputText, recordUserInput, submitUserInput, deletePost, updateLikeCount}) => {
    
    return (
        <Grid columns={3} className='post-container'>
            <Grid.Row className='title'>
                <h1>Recent Posts</h1>
            </Grid.Row>

            <Grid.Row>
                <PostForm userInputText={userInputText} recordUserInput={recordUserInput} submitUserInput={submitUserInput}/>
            </Grid.Row>

            <Grid.Row>
                {posts.map( post => (
                    <Grid.Column key={post.user_id}>
                        <PostItem post={post} getSinglePostItem={getSinglePostItem} deletePost={deletePost} updateLikeCount={updateLikeCount}/>
                    </Grid.Column>
                ))}
            </Grid.Row>

        </Grid>
    )
}

export default Posts;