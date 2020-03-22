import React from 'react'
import { Carousel } from 'react-bootstrap'
import styled from 'styled-components'
import binomo from '../assets/binomo.jpg'
import budi from '../assets/budi.jpg'

const Styles = styled.div`
    
`;

export const CarouselThread = () => (
    <Styles>
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={binomo}
                />
                <Carousel.Caption>
                    <h3>First slide</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src='https://react.semantic-ui.com/images/wireframe/image.png'
                />

                <Carousel.Caption>
                    <h3>Second slide</h3>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </Styles>
)