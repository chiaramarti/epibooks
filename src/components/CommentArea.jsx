import React, { Component } from 'react';
import CommentList from './CommentList';
import AddComment from './AddComment';
import Loading from './Loading';
import Error from './Error';

class CommentArea extends Component {
  state = {
    comments: [],
    isLoading: false,
    isError: false,
  };

  componentDidMount(){
    this.loadComments();
  }

  componentDidUpdate(prevProps) {
    if (this.props.asin !== prevProps.asin) {
      this.loadComments();
    }
  }

  loadComments = async () => {
    const { selectedBookAsin } = this.props;
    if (selectedBookAsin) {
      this.setState({ isLoading: true });
      try {
        let response = await fetch(
          'https://striveschool-api.herokuapp.com/api/comments/' + selectedBookAsin,
          {
            headers: {
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWUxYzA5ODRjNTllYzAwMTk5MGQ4NzgiLCJpYXQiOjE3MTA3Njg4NDksImV4cCI6MTcxMTk3ODQ0OX0.iQR1qxIriAyShjRHEOwIHwWVZxIKp_Rt4vqgxWA00lY',
            },
          }
        );
        if (response.ok) {
          let comments = await response.json();
          this.setState({ comments: comments, isLoading: false, isError: false });
        } else {
          this.setState({ isLoading: false, isError: true });
        }
      } catch (error) {
        console.log(error);
        this.setState({ isLoading: false, isError: true });
      }
    } else {
      this.setState({ comments: [], isLoading: false, isError: false });
    }
  };

  render() {
    const { isLoading, isError, comments } = this.state;
    const { selectedBookAsin } = this.props;

    return (
      <div className="text-center">
        {isLoading && <Loading />}
        {isError && <Error />}
        {selectedBookAsin && (
          <>
            <AddComment asin={selectedBookAsin} />
            <CommentList commentsToShow={comments} />
          </>
        )}
      </div>
    );
  }
}

export default CommentArea;


