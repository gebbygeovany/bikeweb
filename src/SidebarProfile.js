import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

export default class MenuExampleVerticalPointing extends Component {
  state = { activeItem: 'Pembelian' }

  handleItemClick = (e, { name }) => {
    this.setState({
      activeItem: name
    })
    // render() {
    //   return <div>ss</div>;
    // }
  }


  

  render() {
    const { activeItem } = this.state

    return (
      <Menu pointing vertical>
        <Menu.Item
          name='Pembelian'
          active={activeItem === 'Pembelian'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='Penjualan'
          active={activeItem === 'Penjualan'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='Riwayat Pembelian'
          active={activeItem === 'Riwayat Pembelian'}
          onClick={this.handleItemClick}
        />
      </Menu>
    )
  }
}