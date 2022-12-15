import React, {useState} from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Container, Row, Col } from "react-bootstrap";
import "./Promociones.css";
import "./Modal.css";
import articulo from "../../assets/images/articuloLlamativo.jpeg";
import axios from "axios";

export default function Promociones() {
  const id = localStorage.getItem("id");

  const [points, setpoints] = useState(0);
  const [email, setemail] = useState("");

  const [openModal, setOpenModal] = useState(false);

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
                    <Button variant="primary" onClick={()=>{setOpenModal(true)}} >Canjear articulo</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          
        </Container>

        
      </div>

      {openModal && <Modal/>}
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

  function Modal() {
    return (
      <div className="modalBackground">
        <div className="modalContainer">
          <div className="titleCloseBtn">
          <button onClick={()=> {setOpenModal(false)}}> X </button>
          </div>
          <div className="title">
            <h1>Deseo canjear mi articulo en:</h1>
          </div>
          <div className="body">
            <button className="button button1" onClick={()=>{
              setOpenModal(false);
              canjear();
            }}>La Sirena</button>
            <button className="button button2" onClick={()=>{
              setOpenModal(false);
              canjear();
            }}>El Bravo</button>
            <button className="button button3" onClick={()=>{
              setOpenModal(false);
              canjear();
            }}>El Nacional</button>
          </div>
          <div className="footer">
            <button onClick={()=> {setOpenModal(false)}} >Cancelar</button>
          </div>
        </div>
      </div>
    );
  }
  

}

