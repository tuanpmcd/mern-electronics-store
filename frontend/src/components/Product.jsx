import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import Rating from './Rating'

const Product = ({ product }) => {
  return (
    <Card className='my-3 p-2 rounded-3'>
      <Link to={`/product/${product._id}`}>
        <Card.Img style={{ maxHeight: "200px", objectFit: "contain" }} src={product.image} variant='top' />
      </Link>

      <Card.Body className='d-flex flex-column justify-content-end' style={{ minHeight: "200px" }}>
        <Link to={`/product/${product._id}`} className='text-dark text-decoration-none'>
          <Card.Title as='div'>
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>

        <Card.Text as='div'>
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </Card.Text>

        <Card.Text as='h3'>${product.price}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Product
