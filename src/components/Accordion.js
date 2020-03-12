import React from 'react'
import { Accordion, Card } from 'react-bootstrap'
import styled from 'styled-components'

import { faQuestionCircle, faChevronLeft, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Styles = styled.div`
    .collapse-icon {
        float: right;
    }
`;

export const AccorDion = () => (
    <Styles>
        <br></br>
        <br></br>
        <br></br>
        <Accordion defaultActiveKey="0">
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey="0">
                    <FontAwesomeIcon icon={faQuestionCircle} />
                    <span>&nbsp;&nbsp;&nbsp;</span>
                    <b>Gowes</b>
                    <FontAwesomeIcon className="collapse-icon" icon={faChevronDown} />
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                    <Card.Body>
                    Gowes adalah aktivitas mengayuh pedal pada sepeda, dan orang jaman now banyak menyebut kata gowes daripada mengayuh, mungkin dikarnakan lebih simpel dan enak didengar, serta lebih gaul terdengar di telinga.
                        {/* Kita masuk ke Binomo, saya akan membuka perdagangan sekarang dan mendapatkan profit sebesar 88 dolar dalam 1 menit. Waktu perdagangan 1 menit. Besar transaksi 100 dolar, saya memprediksi grafik akan naik atau turun. Kemudian saya tunggu sebentar ... lihat, saya mendapat kembali 100 dolar saya dan menghasilkan profit sebesar 88 dolar hanya dalam 1 menit. Bagaimana menurut anda? */}
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey="1">
                    <FontAwesomeIcon icon={faQuestionCircle} />
                    <span>&nbsp;&nbsp;&nbsp;</span>
                    <b>Judul Pertanyaan</b>
                    <FontAwesomeIcon className="collapse-icon" icon={faChevronLeft} />
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="1">
                    <Card.Body>Isi jawaban</Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey="2">
                    <FontAwesomeIcon icon={faQuestionCircle} />
                    <span>&nbsp;&nbsp;&nbsp;</span>
                    <b>Judul Pertanyaan</b>
                    <FontAwesomeIcon className="collapse-icon" icon={faChevronLeft} />
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="2">
                    <Card.Body>Isi jawaban</Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey="3">
                    <FontAwesomeIcon icon={faQuestionCircle} />
                    <span>&nbsp;&nbsp;&nbsp;</span>
                    <b>Judul Pertanyaan</b>
                    <FontAwesomeIcon className="collapse-icon" icon={faChevronLeft} />
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="3">
                    <Card.Body>Isi jawaban</Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey="4">
                    <FontAwesomeIcon icon={faQuestionCircle} />
                    <span>&nbsp;&nbsp;&nbsp;</span>
                    <b>Judul Pertanyaan</b>
                    <FontAwesomeIcon className="collapse-icon" icon={faChevronLeft} />
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="4">
                    <Card.Body>Isi jawaban</Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey="5">
                    <FontAwesomeIcon icon={faQuestionCircle} />
                    <span>&nbsp;&nbsp;&nbsp;</span>
                    <b>Judul Pertanyaan</b>
                    <FontAwesomeIcon className="collapse-icon" icon={faChevronLeft} />
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="5">
                    <Card.Body>Isi jawaban</Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
    </Styles>
)