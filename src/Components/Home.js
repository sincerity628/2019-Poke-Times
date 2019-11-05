import React from 'react';
import { Link } from 'react-router-dom';
// import axios from 'axios';
import { connect } from 'react-redux';
// import the image
import Pokeball from '../Assets/images/pokeball.png';
// Functional component can not use life cycle hooks!! We have to convert it into the class base component
class Home extends React.Component {
  // Becaue we are using Redux now! So we don't need to use the state!
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     posts: []
  //   }
  // }

  // componentDidMount() {
  //   axios.get('https://jsonplaceholder.typicode.com/posts')
  //   .then(res => {
  //     this.setState({
  //       posts: res.data.slice(0, 10)
  //     });
  //   })
  //   .catch(error => {
  //     console.log(error);
  //   })
  // }

  render() {
    // console.log(this.props)
    const posts = this.props.posts;
    const postList = posts.length ? (
      posts.map(post => {
        const toUrl = '/posts/' + post.id;
        return (
          <div className="post card" key={post.id}>
            <img src={Pokeball} alt="A poke ball" />
            <div className="card-content">
              <Link className="card-title red-text" to={toUrl}>{post.title}</Link>
              <p>{post.body}</p>
            </div>
          </div>
        )
      })
    ) : (
      <div className="center">No post yet.</div>
    );
    return (
      <div className="home container">
        <h4 className="center">Home</h4>
        {postList}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts
  }
};

// connect is a function from react redux, it returns a higher order component, use the component to wrap the returned component 'Home'
export default connect(mapStateToProps)(Home);
