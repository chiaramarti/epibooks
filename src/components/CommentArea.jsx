import { Component, useState, useEffect } from 'react'
import CommentList from './CommentList'
import AddComment from './AddComment'
import Loading from './Loading'
import Error from './Error'
import { setSelectionRange } from '@testing-library/user-event/dist/utils'


const CommentArea = ({asin}) => {
  
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false)

 useEffect(() => {
    const fetchComments = async() => {
      setIsLoading(true);
      try{
        const response = await fetch(
          'https://striveschool-api.herokuapp.com/api/comments/',
          {
            headers: {
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWUxYzA5ODRjNTllYzAwMTk5MGQ4NzgiLCJpYXQiOjE3MTA3Njg4NDksImV4cCI6MTcxMTk3ODQ0OX0.iQR1qxIriAyShjRHEOwIHwWVZxIKp_Rt4vqgxWA00lY',
            }
          }
        )
        if (response.ok) {
          const commentsData = await response.json();
          setComments(commentsData);
          setIsError(false);
        } else {
          setIsError(true);
        }
      } catch (error) {
        console.log(error);
        setIsError(true);
      }
      setIsLoading(false);
    };

    if (asin) {
      fetchComments();
    }
  }, [asin]);

  
    return (
      <div className="text-center">
        {isLoading && <Loading />}
        {isError && <Error />}
        <AddComment asin={asin} />
        <CommentList commentsToShow={comments} />
      </div>
    )
}


export default CommentArea



