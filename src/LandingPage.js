import React, { Component } from 'react'
import { Image, Item, Checkbox, Grid, Icon, Dropdown, Label, Card } from 'semantic-ui-react'
import "./style.css";
import CatatanKeranjang from "./CatatanKeranjang";
import JumlahBarangKeranjang from "./JumlahBarangKeranjang";
import ModalHapusKeranjang from "./ModalHapusKeranjang";
import { UncontrolledCarousel } from 'reactstrap';

class LandingPage extends Component {

    constructor(props) {
        super(props)

    }

    render() {
        const description = [
            'Amy is a violinist with 2 years experience in the wedding industry.',
            'She enjoys the outdoors and currently resides in upstate New York.',
        ].join(' ')
        const items = [
            {
              src: 'https://ecs7.tokopedia.net/img/banner/2020/3/21/85531617/85531617_2c083724-a944-4edd-a1b3-c13fb516b819.jpg',
              altText: 'Slide 1',
              caption: 'Slide 1',
              header: 'Slide 1 Header',
              key: '1'
            },
            {
              src: 'https://ecs7.tokopedia.net/img/banner/2020/3/21/85531617/85531617_357e0f02-62f6-4661-928d-cf3de135f5e6.jpg',
              altText: 'Slide 2',
              caption: 'Slide 2',
              header: 'Slide 2 Header',
              key: '2'
            },
            {
              src: 'https://ecs7.tokopedia.net/img/banner/2020/3/21/85531617/85531617_e1d1235f-973a-4362-a0fe-7c89a406f90f.jpg',
              altText: 'Slide 3',
              caption: 'Slide 3',
              header: 'Slide 3 Header',
              key: '3'
            }
          ];
          
        return (
            <Grid>
                <Grid.Row></Grid.Row>
                <Grid.Row></Grid.Row>
                <Grid.Row></Grid.Row>
                <Grid.Row>
                    <Grid.Column width={1}></Grid.Column>
                    <Grid.Column width={4}>
                        <Card>
                            <Card.Content header='About Amy' />
                            <Card.Content description={description} />
                            <Card.Content extra>
                                <Icon name='user' />4 Friends
                            </Card.Content>
                        </Card>
                    </Grid.Column>
                    <Grid.Column width={10}>
                        <UncontrolledCarousel items={items} className="carousel"/>
                    </Grid.Column>
                    <Grid.Column width={1}></Grid.Column>
                </Grid.Row>


                <Grid.Row></Grid.Row>

            </Grid>

        )
    }
}





export default LandingPage