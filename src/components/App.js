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
    // liked: false
  }

  
  async componentDidMount() {
    this.setState({loading: true})
    await axios.get('http://localhost:4000/api/users')
      .then(res => this.setState({loading: false, posts: res.data}))
      .catch(err => console.log(err))
  }


  /*************************************** SINGLE POST ITEM ***************************************/
  // get single post item
  async getSinglePostItem(id) {
    this.setState({loading: true})
    await axios.get(`http://localhost:4000/api/users/${id}`)
      .then(res => this.setState({singlePostItem: res.data, loading: false}))
      .catch(err => console.log(err))
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
    if(JSON.stringify(this.state.userInputText) === JSON.stringify('')) {
      alert('Can\'t be empty')
    } else {
      const lastPost = {user_name: 'User', post_content: this.state.userInputText, like_count: 0}
      await axios.post('http://localhost:4000/api/users', lastPost)
        .then(res => this.setState({userInputText: '', posts: posts.concat(res.data)}))
        .catch(err => console.log(err))
    }
  }
  /*************************************** ADD NEW POST ******************************************/





  /*************************************** DELETE POST ******************************************/
  async deletePost(id) {
    this.setState({loading: true})
    await axios.delete(`http://localhost:4000/api/users/${id}`)
      .catch(err => console.log(err))
    this.componentDidMount()
  }
  /*************************************** DELETE POST ******************************************/





  /*************************************** UPDATE LIKE COUNT ******************************************/
  async updateLikeCount(id) {
    // get data from single post
    const res = await axios.get(`http://localhost:4000/api/users/${id}`)
      .catch(err => console.log(err))

    let {user_name, post_content, like_count} = res.data[0]
    like_count++
    // this.setState({liked: true})
    const updateData = {user_name: user_name, post_content: post_content, like_count: like_count}

    await axios.patch(`http://localhost:4000/api/users/${id}`, updateData)
      // .then(resp => this.setState({liked: false}))
      .catch(err => console.log(err))

    // get all again ? 
    this.componentDidMount()
    // this.setState({liked: false})
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
