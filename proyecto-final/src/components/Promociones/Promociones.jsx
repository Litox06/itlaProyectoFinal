import React, {useState} from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Container, Row, Col } from "react-bootstrap";
import "./Promociones.css";
import articulo from "../../assets/images/articuloLlamativo.jpeg";
import axios from "axios";

export default function Promociones() {
  const id = localStorage.getItem("id");

  const [points, setpoints] = useState(0);
  const [email, setemail] = useState("");

  const url = `http://localhost:4200/api/users/${id}`

  axios.get(url).then(response =>{
    setpoints(response.data.puntos)
    setemail(response.data.email)
  })

  return (
    <div className="home-container">
      <div className="information">
        <p>{email}</p>
        <p>Puntos: {points}</p>
      </div>

      <div className="articulos">
        <Container>
          <Row>
            {[0, 1, 2].map((i) => (
              <Col md="4">
                <Card style={{ width: "18rem", marginRight: 40 }}>
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
                    <Button variant="primary" onClick={canjear} >Canjear articulo</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );

  async function canjear(){
  
    let p = points - 50

    const res = await axios.put(url,{
      puntos: p
    })

    axios.get(url).then(response =>{
      setpoints(response.data.puntos)
    }).then(()=>{alert("Puntos canjeados")})
  
  }
}

