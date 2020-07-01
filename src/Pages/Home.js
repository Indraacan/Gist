import React from "react";
import { useState, useEffect } from "react";

import {
  Card,
  ListGroupItem,
  ListGroup,
  Container,
  Col,
  Row,
} from "react-bootstrap";
import axios from "axios";

const Home = () => {
  const [data, setData] = useState([]);
  const [tooltipOpen, setTooltipOpen] = useState(false);

  const toggle = () => setTooltipOpen(!tooltipOpen);

  useEffect(() => {
    const url = "https://api.github.com/gists/public";
    axios.get(url).then((response) => {
      setData(response.data);
    });
  }, []);

  const showData = data.map((item, index) => {
    // console.log(item.owner);

    return (
      <Col key={index} lg={4} md={6} sm={12}>
        <Card className="mt-5 mr-4 ml-4 mb-5">
          <Card.Img variant="top" src={item.owner.avatar_url} />
          <ListGroup className="list-group-flush">
            <ListGroupItem>{item.owner.login}</ListGroupItem>
          </ListGroup>
          <Card.Body>
            <Card.Link href={item.owner.html_url}>github link</Card.Link>
          </Card.Body>
        </Card>
      </Col>
    );
  });

  return (
    <Container>
      <Row>{showData}</Row>
    </Container>
  );
};

export default Home;
