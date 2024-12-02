import React, { Component } from 'react'
import { Card, Button } from 'react-bootstrap'

class SingleBook extends Component {
  render() {
    const { book, isSelected, onBookSelect } = this.props

    return (
      <Card
        onClick={() => onBookSelect(book)}
        style={{
          width: '18rem',
          height: '40rem',

          border: isSelected ? '3px solid red' : '1px solid #ddd',
          cursor: 'pointer',
        }}
      >
        <Card.Img style={{ height: '22rem' }} variant="top" src={book.img} />
        <Card.Body>
          <Card.Title>{book.title}</Card.Title>
          <Card.Text>{book.category}</Card.Text>
          <Card.Text>€ {book.price}</Card.Text>
          <Button className="mt-4" variant="success">
            Buy
          </Button>
        </Card.Body>
      </Card>
    )
  }
}

export default SingleBook
