import React from 'react'
import axios from 'axios'

import Posts from './Posts'
import Loading from './Loading'
import SinglePostItem from './SinglePostItem'
import MenuBar from './MenuBar'

class App extends React.Component {
  state = {
    loading: false,
    posts: [],
    singlePostItem: null,
    userInputText: ''
  }

  
  async componentDidMount() {
    this.setState({loading: true})
    const res = await axios('http://localhost:4000/api/users')
    this.setState({loading: false, posts: res.data})
  }


  /*************************************** SINGLE POST ITEM ***************************************/
  // get single post item
  async getSinglePostItem(id) {
    this.setState({loading: true})
    const res = await axios(`http://localhost:4000/api/users/${id}`)
    this.setState({singlePostItem: res.data})
    this.setState({loading: false})
  }

  // event handler on home btn
  goHome() {
    this.setState({singlePostItem: null})
    this.setState({loading: false})
  }
  /*************************************** SINGLE POST ITEM ***************************************/


  /*************************************** ADD NEW POST ******************************************/
  // record user input
  recordUserInput(text) {
    // console.log(this.state.posts)
    this.setState({userInputText: text.target.value})
  }

  // submit when enter key is hit
  async submitUserInput() {
    const posts = this.state.posts.slice() // make copy of posts array
    const lastPost = {user_name: 'User', post_content: this.state.userInputText, like_count: 0}
    const res = await axios.post('http://localhost:4000/api/users', lastPost)
    this.setState({userInputText: ''})
    this.setState({posts: posts.concat(res.data)}) // use concat to add last post to posts Array 
    // console.log(this.state.posts)
  }
  /*************************************** ADD NEW POST ******************************************/


  /*************************************** DELETE POST ******************************************/
  async deletePost(id) {
    this.setState({loading: true})
    await axios.delete(`http://localhost:4000/api/users/${id}`)
    const res = await axios.get('http://localhost:4000/api/users')
    this.setState({posts: res.data})
    this.setState({loading: false})
  }
  /*************************************** DELETE POST ******************************************/

  render() {
    const {loading, posts, singlePostItem, userInputText} = this.state

    if (singlePostItem) {
      return <SinglePostItem singlePostItem={singlePostItem} goHome={this.goHome.bind(this)}/>
    }
    else if (loading) {
      return <Loading />
    } else {
      return (
        <div className="App">
          <MenuBar goHome={this.goHome.bind(this)}/>
          <Posts posts={posts} 
          getSinglePostItem={this.getSinglePostItem.bind(this)}
          userInputText={userInputText}
          recordUserInput={this.recordUserInput.bind(this)}
          submitUserInput={this.submitUserInput.bind(this)}
          deletePost={this.deletePost.bind(this)}/>
        </div>
      );
    }
  }
}

export default App;
