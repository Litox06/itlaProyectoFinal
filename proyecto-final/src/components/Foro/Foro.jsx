import React, {useState} from "react";
import Card from "react-bootstrap/Card";
import { Container, Row, Col } from "react-bootstrap";
import moment from "moment";
import arte from "../../assets/images/arteReciclaje.jpeg";
import axios from "axios";

export default function Promociones() {
  const id = localStorage.getItem("id");

  const [puntos, setpuntos] = useState(0);
  const [email, setemail] = useState("");

  const url = `http://localhost:4200/api/users/${id}`

  axios.get(url).then(response =>{
    setpuntos(response.data.puntos)
    setemail(response.data.email)
  })

  var createdAt = moment().format("DD-MM-YYYY");

  return (
    <div className="home-container">
      <div className="information">
        <p>{email}</p>
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
                      {email} el {createdAt}
                    </Card.Text>
                    <Card.Text>
                      Este texto es un marcador de posicion para presentar la
                      idea de como funcionaria el foro, la idea principal aun
                      sigue siendo el reciclaje y articulos de canjeo.
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
