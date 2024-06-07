import React, { useState } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import Movcards from "./Movcards";

function Body() {
  const [search, setSearch] = useState("");
  const [movdets, setMoviedets] = useState({});
  console.log(search);

  let baseurl;
  baseurl = `https://omdbapi.com/?apikey=fa1c9c03&t=${search}`;
  console.log(baseurl);

  const fetchdata = () => {
    fetch(`${baseurl}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setMoviedets(data);
        console.log(data);
        console.log("movdets", movdets);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  return (
    <>
      <div
        className="p-5 text-align-center border-box"
        style={{
          height: "75vh",
          backgroundImage:
            "url('https://images.vexels.com/media/users/3/257066/raw/7a25dfaa05b4d10b428d2dc17041d1f1-film-icons-seamless-pattern.jpg')",
        }}
      >
        <Row>
          <Col>
            <div
              className="Container m-2 p-5 w-100 text-align-center"
              style={{
                backgroundColor: "white",
                backgroundRepeat: "repeat",
                backgroundSize: "cover",
                borderRadius: "5px",
              }}
            >
              <h1>Search For Your Favourite Movie</h1>
              <Form>
                <Form.Control
                  type="text"
                  id="inputPassword5"
                  aria-describedby="passwordHelpBlock"
                  placeholder="Enter Movie Name"
                  onChange={(e) => setSearch(e.target.value)}
                />
                <Button className="w-100 mt-2" onClick={fetchdata}>
                  Search
                </Button>
              </Form>
            </div>
          </Col>
          <Col>
            <Movcards movdets={movdets} />
            {/* <Card className="m-2 w-100" style={{ maxWidth: "540px" }}>
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
                        {movdets.Country} <br />
                        {movdets.Actors}
                        <br />
                        {movdets.Genre}
                      </small>
                    </Card.Text>
                  </Card.Body>
                </Col>
              </Row>
            </Card> */}
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Body;
