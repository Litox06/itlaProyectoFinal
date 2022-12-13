import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Container, Row, Col } from "react-bootstrap";
import moment from "moment";
import arte from "../../assets/images/arteReciclaje.jpeg";

export default function Promociones() {
  const user = localStorage.getItem("email");
  const puntos = localStorage.getItem("puntos");

  var createdAt = moment().format("DD-MM-YYYY");

  return (
    <div className="home-container">
      <div className="information">
        <p>{user}</p>
        <p>Puntos: {puntos}</p>
      </div>

      <div className="articulos">
        <Container>
          <Row>
            {[0, 1].map((i) => (
              <Col xs="6">
                <Card>
                  <Card.Body>
                    <Card.Text>
                      {user} el {createdAt}
                    </Card.Text>
                    <Card.Text>
                      Este texto es un marcador de posicion para vender la idea
                      de como funcionaria el foro
                    </Card.Text>
                  </Card.Body>
                  <Card.Img variant="bottom" src={arte} />
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );
}
