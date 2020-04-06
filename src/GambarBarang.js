import React, { Component, useState } from "react";
import "./style.css";
import 'semantic-ui-css/semantic.min.css';
import { Grid, Image, Button, Header, Icon, Modal } from 'semantic-ui-react'
import { Link } from "react-router-dom";
import {GlassMagnifier} from "react-image-magnifiers";



class GambarBarang extends Component {
    constructor(props) {
        super(props);


        const img1 = 'https://ecs7.tokopedia.net/img/cache/700/product-1/2019/11/9/1852616/1852616_a2fb34ae-52f3-42d5-85a2-c8ab768d8150_879_879.webp'
        const img2 = 'https://ecs7.tokopedia.net/img/cache/700/product-1/2019/11/9/1852616/1852616_834d8016-4a97-4d4c-b605-87dba5781249_740_740.webp'
        const img3 = 'https://ecs7.tokopedia.net/img/cache/700/product-1/2019/11/9/1852616/1852616_6fb0b401-8e27-4ff4-856b-0d2a6964f9b1_1200_1200.webp'
        const img4 = 'https://ecs7.tokopedia.net/img/cache/700/product-1/2019/11/9/1852616/1852616_a2fb34ae-52f3-42d5-85a2-c8ab768d8150_879_879.webp'
        const img5 = 'https://ecs7.tokopedia.net/img/cache/700/product-1/2019/11/9/1852616/1852616_834d8016-4a97-4d4c-b605-87dba5781249_740_740.webp'

        this.state = {
            index: img1,
            imgList: [img1, img2, img3, img4, img5],
            visible: true,
            modalIsOpen: false
        }

    }

    onClickForward() {
        if (this.state.index + 1 === this.state.imgList.length) {
            this.setState({
                index: 0
            })
        } else {
            this.setState({
                index: this.state.index + 1
            })
        }

    }

    onClickBack() {
        if (this.state.index - 1 === -1) {
            this.setState({
                index: this.state.imgList.length - 1
            })
        } else {
            this.setState({
                index: this.state.index - 1
            })
        }
    }

    onClickImage(image) {
        this.setState({
            index: image
        })
    }
    viewImage() {
        let temp = this.state.imgList[0]
        return temp
    }

    toggleModal() {
        this.setState({
            modalIsOpen: !this.state.modalIsOpen
        });
    }



    render() {

        let images = this.state.imgList.map(image => {
            return <Grid.Column><Image src={image} alt="" onClick={() => this.onClickImage(image)}></Image></Grid.Column>
        });
        return (
            <div>
                <Grid divided='vertically' style={{ marginTop: '5px' }}>
                    <Grid.Row centered columns={1}>
                        <Grid.Column>
                            {/* <Image src={this.state.imgList[this.state.index]} /> */}
                            {/* <Image src={this.state.index} /> */}
                            <GlassMagnifier
                                imageSrc={this.state.index}
                                imageAlt="Example"
                                largeImageSrc={this.state.index}
                                magnifierSize="75%"
                            />

                        </Grid.Column>
                    </Grid.Row>

                    <Grid.Row columns={5}>
                        {images}
                    </Grid.Row>
                </Grid>


            </div >


            // <div>
            //     <img src={this.state.imgList[this.state.index]} alt=''></img><br></br>
            //     <Button onClick={this.onClickBack}>Back</Button>
            //     <Button onClick={this.onClickForward}>NExt</Button>
            // </div>


        );
    }
}
export default GambarBarang;