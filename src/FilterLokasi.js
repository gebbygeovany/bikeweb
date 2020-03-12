import React, { Component } from "react";
import "./style.css";
import 'semantic-ui-css/semantic.min.css';
import { Card, Icon, Rating, Image, Item, Label, Button, Grid } from 'semantic-ui-react';
import ContentDetailBarang from "./ContentDetailBarang";
import MenuDetailBarang from "./MenuDetailBarang";
import MyCarousel from "./MyCarousel";



class FilterLokasi extends Component {
  constructor(props) {
    super(props);
  }
  render() {

    return (
      <Grid>
        <Grid.Row></Grid.Row>
        <Grid.Row></Grid.Row>
        <Grid.Row></Grid.Row>
        <Grid.Row></Grid.Row>
        <Grid.Row>
          <Grid.Column width={1}></Grid.Column>

          <Grid.Column width={4} style={{ marginLeft: '40px' }}>
            {/* <Image
              src='https://www.brompton.com/~/media/images/core-site-content/interactive-bike-block/explore/bromptonexplore_740x600.png?h=600&la=en&w=740'

            /> */}
            <MyCarousel ></MyCarousel>
          </Grid.Column>
          <Grid.Column width={1}></Grid.Column>

          <Grid.Column width={9}>

            <Grid>
              <Grid></Grid>
              <ContentDetailBarang ></ContentDetailBarang>
            </Grid>

          </Grid.Column>

          <Grid.Column width={2}></Grid.Column>

        </Grid.Row>
        <Grid.Row >
        <Grid.Column width={1}></Grid.Column>
          <Grid.Column width={14}>
            <MenuDetailBarang></MenuDetailBarang>
          </Grid.Column>
          <Grid.Column width={2}></Grid.Column>
        </Grid.Row>

        <Grid.Row></Grid.Row>

      </Grid>

    );
  }
}
export default FilterLokasi;