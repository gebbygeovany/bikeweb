import React, { Component } from 'react'
import { Input, Menu, Segment } from 'semantic-ui-react'
import Comment from "./Comment";
import Ulasan from "./Ulasan";
import DesktipsiBarang from "./DeskripsiBarang";




export default class MenuExamplePointing extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div>
        <Menu pointing>
          <Menu.Item
            name='Deskripsi'
            active={activeItem === 'Deskripsi'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='Diskusi'
            active={activeItem === 'Diskusi'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='Ulasan'
            active={activeItem === 'Ulasan'}
            onClick={this.handleItemClick}
          />
          
        </Menu>

        <Segment>
          <DesktipsiBarang></DesktipsiBarang>
        </Segment>
        <Segment>
          <Comment ></Comment>
        </Segment>
        <Segment>
          <Ulasan></Ulasan>
        </Segment>
        
      </div>
    )
  }
}
