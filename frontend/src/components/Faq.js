import React from "react";
import { ListGroup } from "react-bootstrap";

const Faq = () => {
  return (
    <ListGroup>
      <ListGroup.Item className='bold'>
        What payment methods do you accept?
      </ListGroup.Item>
      <ListGroup.Item>
        At the moment we only accept payment through paypal
      </ListGroup.Item>
      <ListGroup.Item className='bold'>
        {" "}
        I placed an order, but never received a confirmation email.
      </ListGroup.Item>
      <ListGroup.Item>
        {" "}
        If you placed an order and did not receive a confirmation, Please send
        us an email
      </ListGroup.Item>
      <ListGroup.Item className='bold'>
        How do I change or cancel my order?
      </ListGroup.Item>
      <ListGroup.Item>
        We're super quick at processing orders to make sure that you receive
        them as soon as possible. In the case that the order has already been
        shipped, you can return the item within 7 days for a refund
      </ListGroup.Item>
      <ListGroup.Item className='bold'>
        How long after I place my order will it ship?
      </ListGroup.Item>
      <ListGroup.Item>
        Orders ship within 72 hours after being placed
      </ListGroup.Item>
      <ListGroup.Item className='bold'>
        What is the return policy?
      </ListGroup.Item>
      <ListGroup.Item>
        Items can be returned if contacted within 7 days of receiving item
      </ListGroup.Item>
    </ListGroup>
  );
};

export default Faq;
