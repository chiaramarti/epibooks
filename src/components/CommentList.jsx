import { ListGroup } from 'react-bootstrap'
import SingleComment from './SingleComment'

const CommentList = ({ commentsToShow }) => (
  <ListGroup style={{ color: 'black' }} className="mt-2" data-testid="comment-list">
    {commentsToShow.map((comment) => (
      <SingleComment comment={comment} key={comment._id} />
    ))}
  </ListGroup>
)

export default CommentList
