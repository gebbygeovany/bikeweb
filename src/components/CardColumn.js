import React from 'react'
import { CardColumns, Card, Button } from 'react-bootstrap'
import styled from 'styled-components'
import bike from '../assets/bike.jpg'

import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Styles = styled.div`
    .collapse-icon {
        float: right;
    }
`;

export const CardColumn = () => (
  <Styles>
    <br></br>
    <br></br>
    <br></br>
    <CardColumns>
      <Card className="text-center">
        <Card.Img variant="top" src={bike} />
        <Card.Body>
          <Card.Title>Gowes Ngalam</Card.Title>
          <Card.Text>
            Komunitas Gowes Ngalam
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-left">
          <Button size="sm" className="float-right">Lihat</Button>
          <small className="text-muted">420 anggota</small>
        </Card.Footer>
      </Card>
      <Card className="text-center">
        <Card.Img variant="top" src={bike} />
        <Card.Body>
          <Card.Title>Gowes Ngalam</Card.Title>
          <Card.Text>
            Komunitas Gowes Ngalam
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-left">
          <Button size="sm" className="float-right">Lihat</Button>
          <small className="text-muted">420 anggota</small>
        </Card.Footer>
      </Card>
      <Card className="text-center">
        <Card.Img variant="top" src={bike} />
        <Card.Body>
          <Card.Title>Gowes Ngalam</Card.Title>
          <Card.Text>
            Komunitas Gowes Ngalam
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-left">
          <Button size="sm" className="float-right">Lihat</Button>
          <small className="text-muted">420 anggota</small>
        </Card.Footer>
      </Card>
      <Card className="text-center">
        <Card.Img variant="top" src={bike} />
        <Card.Body>
          <Card.Title>Gowes Ngalam</Card.Title>
          <Card.Text>
            Komunitas Gowes Ngalam
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-left">
          <Button size="sm" className="float-right">Lihat</Button>
          <small className="text-muted">420 anggota</small>
        </Card.Footer>
      </Card>
      <Card className="text-center">
        <Card.Img variant="top" src={bike} />
        <Card.Body>
          <Card.Title>Gowes Ngalam</Card.Title>
          <Card.Text>
            Komunitas Gowes Ngalam
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-left">
          <Button size="sm" className="float-right">Lihat</Button>
          <small className="text-muted">420 anggota</small>
        </Card.Footer>
      </Card>
      <Card className="text-center">
        <Card.Img variant="top" src={bike} />
        <Card.Body>
          <Card.Title>Gowes Ngalam</Card.Title>
          <Card.Text>
            Komunitas Gowes Ngalam
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-left">
          <Button size="sm" className="float-right">Lihat</Button>
          <small className="text-muted">420 anggota</small>
        </Card.Footer>
      </Card>
    </CardColumns>
  </Styles>
)