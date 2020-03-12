import React, { Component } from "react";
import "./style.css";
import 'semantic-ui-css/semantic.min.css';
import { Card, Icon, Rating, Image, Item, Label, Button, Grid } from 'semantic-ui-react';
import ContentDetailEvent from "./ContentDetailEvent";
import ContentPenyelenggaraEvent from "./ContentPenyelenggaraEvent";
import ContentInfoEvent from "./ContentInfoEvent";




class DetailEvent extends Component {
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
          <Grid.Column width={2}></Grid.Column>


          <Grid.Column width={3}>
            <ContentPenyelenggaraEvent></ContentPenyelenggaraEvent>
            <ContentDetailEvent></ContentDetailEvent>

          </Grid.Column>
          <Grid.Column width={9}>
            <ContentInfoEvent></ContentInfoEvent>
          </Grid.Column>
          <Grid.Column width={2}></Grid.Column>
        </Grid.Row>


      </Grid>

    );
  }
}
export default DetailEvent;