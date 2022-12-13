import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Container, Row, Col } from "react-bootstrap";
import "./Promociones.css";
import articulo from "../../assets/images/articuloLlamativo.jpeg";

export default function Promociones() {
  const user = localStorage.getItem("email");
  const puntos = localStorage.getItem("puntos");

  return (
    <div className="home-container">
      <div className="information">
        <p>{user}</p>
        <p>Puntos: {puntos}</p>
      </div>

      <div className="articulos">
        <Container>
          <Row>
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <Col xs="4">
                <Card style={{ width: "18rem", marginBottom: 20 }}>
                  <Card.Img
                    variant="top"
                    className="rounded mx-auto d-block"
                    src={articulo}
                    style={{
                      padding: 20,
                      width: 100,
                      height: 180,
                      justifyContent: "center",
                    }}
                  />
                  <Card.Body>
                    <Card.Title>Articulo Llamativo</Card.Title>
                    <Card.Text>
                      Este es un articulo llamativo el cual se podra canjear con
                      una X cantidad de puntos en una tienda XYZ.
                    </Card.Text>
                    <Button variant="primary">Canjear articulo</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );
}
