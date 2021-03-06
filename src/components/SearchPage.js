import React from "react";
import "../css/Search.css";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { MDBContainer, MDBRating } from "mdbreact";
const SearchPage = () => {
  return (
    <div
      className="mb-4"
      style={{ display: "flex", justifyContent: "center", borderSpacing: 10 }}
    >
      <Container>
        <Row>
          <div>
            <div>
              <label for="address">Enter the address here</label>
              <input name="address" id="address" autocomplete="on" />
            </div>
          </div>
        </Row>
        <Row>
          <Form.Group>
            <Form.Text className="text-muted">
              Can't find it?
              <Link to="/ManualSearchPage">Add manually here</Link>
            </Form.Text>
          </Form.Group>
        </Row>
        <Row>
          <Form.Group>
            <Form.Text className="text-muted">
              <b> How much did you like it here?</b>
            </Form.Text>
          </Form.Group>
        </Row>
        <Row>
          <form>
            <input type="radio" id="1star" name="fav_place" value="1" />
            <label for="1star">1</label>
            <input type="radio" id="2star" name="fav_place" value="2" />
            <label for="2star">2</label>
            <input type="radio" id="3star" name="fav_place" value="3" />
            <label for="3star">3</label>
            <input type="radio" id="4star" name="fav_place" value="4" />
            <label for="4star">4</label>
            <input type="radio" id="5star" name="fav_place" value="5" />
            <label for="5star">5</label>
          </form>
        </Row>
        <Row>
          <Form.Group>
            <Form.Text className="text-muted">
              <b>How unique is this place?</b>
            </Form.Text>
          </Form.Group>
        </Row>
        <Row>
          <form>
            <input type="radio" id="1star" name="fav_place" value="1" />
            <label for="1star">1</label>
            <input type="radio" id="2star" name="fav_place" value="2" />
            <label for="2star">2</label>
            <input type="radio" id="3star" name="fav_place" value="3" />
            <label for="3star">3</label>
          </form>
        </Row>
        <Row>
          <Form.Group>
            <Form.Text className="text-muted">
              <b>Drop a note about why this place is meaningful to you:</b>
            </Form.Text>
          </Form.Group>
        </Row>
        <Row>
          <textarea
            className="inside"
            name="message"
            rows="5"
            cols="30"
          ></textarea>
        </Row>
        <Row>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Row>
      </Container>
    </div>
  );
};

export default SearchPage;
