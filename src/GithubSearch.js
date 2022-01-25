import React, { useState, useContext } from "react";
import { Button, Form, FormGroup, Row, Col } from "react-bootstrap";
import { Context } from "./context";
import Styled from "styled-components";

const GithubSearch = () => {
  const { search, showModal } = useContext(Context);
  const [uid, setUid] = useState("chirag299051");

  return (
    <Form className="form" hidden={showModal}>
      <Form.Label>Search your Github Repos</Form.Label>
      <Row>
        <Form.Group lg={8} as={Col} className="mb-3" controlId="formBasicEmail">
          <Form.Control
            variant="dark"
            style={{
              color: "#d6dcff",
              background: "transparent",
              opacity: ".6",
              borderColor: "red",
            }}
            type="email"
            placeholder="chirag299051"
            value={uid}
            onChange={(e) => setUid(e.target.value)}
          />
        </Form.Group>
        <Col>
          <Button
            variant="outline-danger"
            type="submit"
            onClick={(e) => search(e, uid)}
          >
            Search
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default GithubSearch;
