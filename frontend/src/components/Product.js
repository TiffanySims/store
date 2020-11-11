import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Card, Button } from "react-bootstrap";

const Product = ({ product }) => {
  return (
    <>
      <Card className='my-3 rounded cart'>
        <Link to={`/product/${product._id}`}>
          <Card.Img src={product.image} variant='top' className='card-img' />
        </Link>

        <Card.Body>
          <Link to={`/product/${product._id}`}>
            <Card.Title as='div'>
              <strong>{product.name}</strong>
            </Card.Title>
          </Link>
          <Card.Text as='div'></Card.Text>
          <Card.Text as='h4'>${product.price}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default Product;
