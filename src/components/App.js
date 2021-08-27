import React from 'react'
import axios from 'axios'

import CreatePost from './CreatePost'
import Header from './Header'
import Posts from './Posts'
import RecentPosts from './RecentPosts'
import Loading from './Loading'

class App extends React.Component {
  state = {
    loading: false,
    posts: []
  }
  
  async componentDidMount() {
    this.setState({loading: true})
    const res = await axios('http://localhost:4000/api/users')
    this.setState({loading: false, posts: res.data})
    console.log(this.state.posts)
  }

  render() {

    const {loading, posts} = this.state

    if (loading) {
      return <Loading />
    } else {
      return (
        <div className="App">
          <Header />
          <RecentPosts />
          <CreatePost />
          <Posts posts={posts} />
        </div>
      );
    }
  }
}

export default App;
