import React, { Component } from "react";
import { Carousel } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';




class MyCarousel extends Component {


    render() {

        return (
            <div>
                <Carousel style={{ marginTop: '40px' }}>
                    <Carousel.Item>
                        <img 
                            className="d-block w-100"
                            src="https://ecs7.tokopedia.net/img/cache/700/product-1/2019/11/9/1852616/1852616_a2fb34ae-52f3-42d5-85a2-c8ab768d8150_879_879.webp"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://ecs7.tokopedia.net/img/cache/700/product-1/2019/11/9/1852616/1852616_834d8016-4a97-4d4c-b605-87dba5781249_740_740.webp"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                           
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://ecs7.tokopedia.net/img/cache/700/product-1/2019/11/9/1852616/1852616_6fb0b401-8e27-4ff4-856b-0d2a6964f9b1_1200_1200.webp"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        );
    }
}

export default MyCarousel;