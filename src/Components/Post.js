import React from 'react';
import { connect } from 'react-redux';
import { deletePost } from '../Actions/postActions';

class Post extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     post: null
  //   }
  // }
  //
  // componentDidMount() {
  //   const id = this.props.match.params.post_id;
  //
  //   const getUrl = 'https://jsonplaceholder.typicode.com/posts/' + id;
  //   axios.get(getUrl)
  //   .then(res => {
  //     // console.log(res);
  //     this.setState({
  //       post: res.data
  //     });
  //   })
  //   .catch(error => {
  //     console.log(error);
  //   })
  // }
  handleClick =  () => {
    this.props.deletePost(this.props.post.id);
    // redirect to the home page
    this.props.history.push('/');
  }

  render() {
    // console.log(this.props);
    const post = this.props.post? (
      <div className="post-content">
        <h4>{this.props.post.title}</h4>
        <p>{this.props.post.body}</p>
        <div className="center">
          <button className="btn grey" onClick={this.handleClick}>Delete Post.</button>
        </div>
      </div>
    ) : (
      <div>Loading the post...</div>
    );
    return (
      <div className="center container">
        {post}
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.post_id;
  return {
    post: state.posts.find(post => post.id === id)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deletePost: (id) => {dispatch(deletePost(id))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);
