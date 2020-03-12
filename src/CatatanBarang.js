import React, { Component } from 'react'
import { Accordion, Icon, Form, TextArea } from 'semantic-ui-react'
import "./style.css";


export default class AccordionExampleStandard extends Component {
    state = { activeIndex: 1 }

    handleClick = (e, titleProps) => {
        const { index } = titleProps
        const { activeIndex } = this.state
        const newIndex = activeIndex === index ? -1 : index

        this.setState({ activeIndex: newIndex })
    }

    render() {
        const { activeIndex } = this.state

        return (
            <Accordion>
                <Accordion.Title
                    active={activeIndex === 0}
                    index={0}
                    onClick={this.handleClick}
                    style={{paddingBottom:'0px', color:'grey'}}
                >
                    {this.state.activeIndex === 0 ? 'Sembunyikan' : 'Tambah Catatan?'}
                    {/* Tambah Catatan? */}
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 0}>
                    <Form>
                        <TextArea rows={2} placeholder='Catatan untuk penjual' />
                    </Form>
                </Accordion.Content>


            </Accordion>
        )
    }
}