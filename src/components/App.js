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
    userInputText: '',
  }

  
  async componentDidMount() {
    this.setState({loading: true})
    const res = await axios.get('http://localhost:4000/api/users')
    this.setState({posts: res.data})
    this.setState({loading: false})
  }


  /*************************************** SINGLE POST ITEM ***************************************/
  // get single post item
  async getSinglePostItem(id) {
    this.setState({loading: true})
    const res = await axios.get(`http://localhost:4000/api/users/${id}`)
    this.setState({singlePostItem: res.data})
    this.setState({loading: false})
  }

  // event handler on home btn
  goHome() {
    this.setState({singlePostItem: null})
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
    if(JSON.stringify(this.state.userInputText) === JSON.stringify('')) {
      alert('Can\'t be empty')
      return
    } else {
      const lastPost = {user_name: 'User', post_content: this.state.userInputText, like_count: 0}
      const res = await axios.post('http://localhost:4000/api/users', lastPost)
      this.setState({userInputText: '', posts: posts.concat(res.data)})
    }
  }
  /*************************************** ADD NEW POST ******************************************/





  /*************************************** DELETE POST ******************************************/
  async deletePost(id) {
    // Delete in DB
    await axios.delete(`http://localhost:4000/api/users/${id}`)
    const res = await axios.get('http://localhost:4000/api/users/')
    this.setState({posts: [...res.data]})

    // USE filter method or spread operator to update state
    // Filter UI data
    // this.setState({posts: this.state.posts.filter(ele =>  ele.user_id !== id)})
  }
  /*************************************** DELETE POST ******************************************/





  /*************************************** UPDATE LIKE COUNT ******************************************/
  async updateLikeCount(obj) {
    const {posts} = this.state

    const updatedData = posts.map(post => {
      if (post.user_id === parseInt(obj.user_id)) {
        post.like_count = obj.like_count
      }
      return post
    })

    this.setState({posts: updatedData})

    // UPDATE TO DB
    const res = await axios.get(`http://localhost:4000/api/users/${obj.user_id}`)

    let newUpdate = {
      user_name: res.data[0].user_name,
      post_content: res.data[0].post_content,
      like_count: obj.like_count
    }

    await axios.patch(`http://localhost:4000/api/users/${obj.user_id}`, newUpdate)

  }
  /*************************************** UPDATE LIKE COUNT ******************************************/




  render() {
    const {loading, posts, singlePostItem, userInputText} = this.state

    if (singlePostItem) {
      return <SinglePostItem singlePostItem={singlePostItem} goHome={this.goHome.bind(this)} updateLikeCount={this.updateLikeCount.bind(this)}/>
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
          deletePost={this.deletePost.bind(this)}
          updateLikeCount={this.updateLikeCount.bind(this)}
          />
        </div>
      );
    }
  }
}

export default App;
