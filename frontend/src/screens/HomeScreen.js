import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Product from "../components/Product";
import Hero from "../components/Hero";
import Loader from "../components/Loader";
import Paginate from "../components/Paginate";
import Message from "../components/Message";

import { listProducts } from "../actions/productActions";

const HomeScreen = ({ match }) => {
  const [product, setProduct] = useState({});

  const pageNumber = match.params.pageNumber || 1;
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products, page, pages } = productList;

  useEffect(() => {
    dispatch(listProducts(pageNumber));
  }, [dispatch, pageNumber]);

  return (
    <>
      <Hero />
      <div className='home-container'>
        <h1>Get Pin't Up!</h1>
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant='danger'>{error}</Message>
        ) : (
          <>
            <Row>
              {products.map((product) => (
                <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                  <Product product={product} />
                </Col>
              ))}
            </Row>
            <Paginate pages={pages} page={page} />
          </>
        )}
      </div>
    </>
  );
};

export default HomeScreen;
