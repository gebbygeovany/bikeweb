import React, { Component } from "react";
import "./style.css";
import CardBarang from "./CardBarang";
import FilterCard from './FilterCard';
import 'semantic-ui-css/semantic.min.css';
import { Grid, Pagination } from 'semantic-ui-react';



class HomeBarang extends Component {
  state = { active: true }


  handleToggle = () =>
    this.setState((prevState) => ({ active: !prevState.active }))

  constructor() {
    super();
    this.state = {
      barang: [
        {
          name: "Brompton"
        },
        {
          name: "Brompton"
        },
        {
          name: "Brompton"
        },
        {
          name: "Brompton"
        },
        {
          name: "Brompton"
        },
        {
          name: "Brompton"
        },
        {
          name: "Brompton"
        },
        {
          name: "Brompton"
        },
        {
          name: "Brompton"
        },
        {
          name: "Brompton"
        },
        {
          name: "Brompton"
        },
        {
          name: "Brompton"
        },
        {
          name: "Brompton"
        },
        {
          name: "Brompton"
        },
        {
          name: "powerbank"
        },
        {
          name: "powerbank"
        },
        {
          name: "powerbank"
        },
        {
          name: "powerbank"
        },
        {
          name: "powerbank"
        },
        {
          name: "powerbank"
        },
      ]
    }
  }

  state = {
    visibile: true,
    modalIsOpen: false
  }
  toggleModal() {
    this.setState({
      modalIsOpen: !this.state.modalIsOpen
    });
  }



  render() {
    let cardBarang = this.state.barang.map(barang => {
      return (
        <CardBarang barang={barang}></CardBarang>
      )
    });
    const { active } = this.state

    return (
      <div>
        <Grid centered columns={2} >
          <Grid.Row></Grid.Row>
          <Grid.Row></Grid.Row>
          <Grid.Row></Grid.Row>
          <Grid.Row >
            <Grid.Column width={1}></Grid.Column>
            <Grid.Column width={3} >
              {/* <Sticky context={this.contextRef} offset={0}> */}
              <FilterCard ></FilterCard>
              {/* </Sticky> */}

            </Grid.Column>
            <Grid.Column width={12}>
              {cardBarang}
            </Grid.Column>
          </Grid.Row>

          <Grid.Row></Grid.Row>
          <Grid.Row >
            <Grid.Column width={1}></Grid.Column>
            <Grid.Column width={3}></Grid.Column>
            <Grid.Column width={11}>
              <Pagination
                defaultActivePage={1}
                firstItem={null}
                lastItem={null}
                pointing
                secondary
                totalPages={10}
                style={{
                  position: 'absolute',
                  left: '50%',
                  top: '50%',
                  transform: 'translate(-50%, -50%)'
                }}
              />

            </Grid.Column>
            <Grid.Column width={1}></Grid.Column>
          </Grid.Row>

        </Grid>
      </div>
    );
  }
}

export default HomeBarang;