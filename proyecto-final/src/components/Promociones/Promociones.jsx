import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Container, Row, Col } from "react-bootstrap";
import "./Promociones.css";
import "./Modal.css";
import smartFridge from "../../assets/images/articuloLlamativo.jpeg";
import amgSUV from "../../assets/images/amgSUV.png"
import smartTV from "../../assets/images/sonyBravia.jpeg"
import axios from "axios";

export default function Promociones() {
  const id = localStorage.getItem("id");

  const [points, setpoints] = useState(0);
  const [email, setemail] = useState("");

  const [openModal, setOpenModal] = useState(false);

  const url = `http://localhost:4200/api/users/${id}`;

  axios.get(url).then((response) => {
    setpoints(response.data.puntos);
    setemail(response.data.email);
  });

  return (
    <div className="home-container">
      <div className="information">
        <p>{email}</p>
        <p>Puntos: {points}</p>
      </div>

      <div className="articulos">
        <Container>
          <Row>
            {[
              {
                title: "Samsung RF23A9771",
                body: "El Smart Counter Depth 4-Door Flex™ con Family Hub™ te ayuda a conectar con lo más importante: tu familia y tu hogar.",
                article: smartFridge ,
                widthImage: 100,
                heightImage: 180,
              },
              {
                title: "Sony BRAVIA OLED",
                body: "Disfrute de una experiencia visual con visión y sonido en perfecta armonía, gracias al procesador cognitivo inteligente XR.",
                article: smartTV,
                widthImage: 250,
                heightImage: 180,
              },
              {
                title: "2022 AMG G63 SUV",
                body: "Con 577 caballos artesanales, el AMG G63 es una leyenda elevada a una potencia superior para una nueva era.",
                article: amgSUV,
                widthImage: 230,
                heightImage: 180,
              },
            ].map((i) => (
              <Col md="4">
                <Card style={{ width: "18rem", marginRight: 40 }}>
                  <Card.Img
                    variant="top"
                    className="rounded mx-auto d-block"
                    src={i.article}
                    style={{
                      padding: 20,
                      width: i.widthImage,
                      height: i.heightImage,
                      justifyContent: "center",
                    }}
                  />
                  <Card.Body>
                    <Card.Title>{i.title}</Card.Title>
                    <Card.Text>{i.body}</Card.Text>
                    <Button
                      variant="primary"
                      onClick={() => {
                        setOpenModal(true);
                      }}
                    >
                      Canjear articulo
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>

      {openModal && <Modal />}
    </div>
  );

  async function canjear() {
    let p = points - 50;

    await axios.put(url, {
      puntos: p,
    });

    axios
      .get(url)
      .then((response) => {
        setpoints(response.data.puntos);
      })
      .then(() => {
        alert("Puntos canjeados");
      });
  }

  function Modal() {
    return (
      <div className="modalBackground">
        <div className="modalContainer">
          <div className="titleCloseBtn">
            <button
              onClick={() => {
                setOpenModal(false);
              }}
            >
              {" "}
              X{" "}
            </button>
          </div>
          <div className="title">
            <h1>Deseo canjear mi articulo en:</h1>
          </div>
          <div className="body">
            <button
              className="button button1"
              onClick={() => {
                setOpenModal(false);
                canjear();
              }}
            >
              La Sirena
            </button>
            <button
              className="button button2"
              onClick={() => {
                setOpenModal(false);
                canjear();
              }}
            >
              El Bravo
            </button>
            <button
              className="button button3"
              onClick={() => {
                setOpenModal(false);
                canjear();
              }}
            >
              El Nacional
            </button>
          </div>
          <div className="footer">
            <button
              onClick={() => {
                setOpenModal(false);
              }}
            >
              Cancelar
            </button>
          </div>
        </div>
      </div>
    );
  }
}
