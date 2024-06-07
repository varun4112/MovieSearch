import React from "react";
import { Card, Col, Row } from "react-bootstrap";

function Movcards({ movdets }) {
  if (!movdets.Title) {
    // Render dummy content if no movie details are available
    return (
      <Card className="m-2 w-100" style={{ maxWidth: "540px" }}>
        <Row className="g-0">
          <Col>
            <Card.Body>
              <Card.Title>
                <h1
                  style={{
                    fontFamily: "Bungee Spice",
                  }}
                >
                  Information About Your Favourite Movie In One Click
                </h1>
              </Card.Title>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    );
  }

  // Render card with real movie details
  return (
    <div>
      <Card className="m-2 w-100" style={{ maxWidth: "540px" }}>
        <Row className="g-0">
          <Col md={4}>
            <Card.Img
              src={movdets.Poster}
              className="img-fluid rounded-start"
              alt="..."
              style={{ height: "300px" }}
            />
          </Col>
          <Col md={8}>
            <Card.Body>
              <Card.Title>{movdets.Title}</Card.Title>
              <Card.Text></Card.Text>
              <Card.Text>
                <small className="text-muted">
                  Country: {movdets.Country} <br />
                  Actors: {movdets.Actors}
                  <br />
                  Genre: {movdets.Genre}
                </small>
              </Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </div>
  );
}

export default Movcards;
