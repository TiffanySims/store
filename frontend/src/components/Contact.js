import React from "react";
import { ListGroup } from "react-bootstrap";

const Contact = () => {
  return (
    <ListGroup>
      <h2>Contact Me</h2>
      <ListGroup.Item>
        <a href='mailto:pintuppins@gmail.com' className='contact'>
          pintuppins@gmail.com
        </a>
      </ListGroup.Item>
    </ListGroup>
  );
};

export default Contact;
