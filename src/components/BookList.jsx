import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import SingleBook from './SingleBook';
import CommentArea from './CommentArea';

class BookList extends Component {
  state = {
    searchQuery: "",
    asin: "",
  };

  changeCardSelected = (newSelectedValue) => {
    this.setState({
      asin: newSelectedValue,
    })
  };

  render() {
    const { books } = this.props;
    const { changeCardSelected } = this.state;

    return (
      <Row className="mt-5">
        {/* Colonna sinistra - Lista dei libri */}
        <Col md={6}>
          <Row className="g-2 mt-3">
            {books.map((book) => (
              <Col xs={12} md={6} lg={4} key={book.asin}>
                <SingleBook
                  book={book}
                  // onSelect={() => this.changeCardSelected(book.asin)}
                  // isSelected={selectedBookAsin === book.asin}
                  asin={this.state.asin} 
                  changeCardSelected={this.changeCardSelected}
                />
              </Col>
            ))}
          </Row>
        </Col>
        {/* Colonna destra - CommentArea */}
        <Col md={6}>
          <CommentArea asin={this.state.asin}/>
        </Col>
      </Row>
    );
  }
}

export default BookList;
