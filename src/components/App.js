import React from 'react'
import axios from 'axios'

import Header from './Header'
import Posts from './Posts'
import Loading from './Loading'
import SinglePostItem from './SinglePostItem'

class App extends React.Component {
  state = {
    loading: false,
    posts: [],
    singlePostItem: null,
    currentLike: null
  }
  
  async componentDidMount() {
    this.setState({loading: true})
    const res = await axios('http://localhost:4000/api/users')
    this.setState({loading: false, posts: res.data})
  }


  async getSinglePostItem(id) {
    this.setState({loading: true})
    const res = await axios(`http://localhost:4000/api/users/${id}`)
    this.setState({singlePostItem: res.data})
    this.setState({loading: false})
  }

  goHome() {
    this.setState({singlePostItem: null})
    this.setState({loading: false})
  }

  render() {
    const {loading, posts, singlePostItem} = this.state

    if (singlePostItem) {
      return <SinglePostItem singlePostItem={singlePostItem} goHome={this.goHome.bind(this)}/>
    }
    else if (loading) {
      return <Loading />
    } else {
      return (
        <div className="App">
          <Header goHome={this.goHome.bind(this)}/>
          <Posts posts={posts} getSinglePostItem={this.getSinglePostItem.bind(this)} />
        </div>
      );
    }
  }


}

export default App;
