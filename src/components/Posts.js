import React from 'react'
import PostItem from './PostItem'
import {Grid} from 'semantic-ui-react'

const Posts = ({posts, getSinglePostItem}) => {
    return (
        // <div className='post-container'>
        //     {posts.map( post => (
        //         <PostItem key={post.user_id} post={post} getSinglePostItem={getSinglePostItem}/>
        //     ))}
        // </div>

        <Grid columns={3} className='post-container'>
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