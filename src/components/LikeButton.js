import React from 'react'

class LikeButton extends React.Component {
    state = {
        liked: false
    }

    render() {
        const {user_id, like_count, updateLikeCount} = this.props
        const {liked} = this.state
        
        const likePost = (e) => {
            let updatedLike 

            if (liked) {
                updatedLike = {
                    user_id: e.target.id, // string type
                    like_count: like_count - 1
                }
                this.setState({liked: false})
            } else {
                updatedLike = {
                    user_id: e.target.id, // string type
                    like_count: like_count + 1
                }
                this.setState({liked: true})
            }
            
            updateLikeCount(updatedLike)
        }

        return (
            liked ? 
            <div className="ui labeled button">
                <button className="ui teal button">
                    <i id={user_id} onClick={likePost} aria-hidden="true" className="heart icon"></i> 
                </button>

                <div className="ui teal left pointing basic label">{like_count}</div>
            </div>
            :
            <div className="ui labeled button">
                <button className="ui teal basic button">
                    <i id={user_id} onClick={likePost} aria-hidden="true" className="heart icon"></i> 
                </button>

                <div className="ui teal left pointing basic label">{like_count}</div>
            </div>
        )
    }
}


export default LikeButton