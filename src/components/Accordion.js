import React, { Component } from 'react'
import faker from 'faker'
import _ from 'lodash'
import { Accordion, Form, Menu } from 'semantic-ui-react'
import styled from 'styled-components'

const Styles = styled.div`
    .collapse-icon {
        float: right;
    }
`;

const panels = _.times(10, (i) => ({
    key: `panel-${i}`,
    title: faker.lorem.sentence(),
    content: faker.lorem.paragraphs(),
}))

export const AccorDion = () => (
    <Styles>
        <br></br><br></br><br></br>
        <Accordion
            fluid styled
            defaultActiveIndex={[0]}
            panels={panels}
            exclusive={false}
        >
        </Accordion>
    </Styles>
)

//accordion filter komunitas
const ColorForm = (
    <Form>
        <Form.Group grouped>
            <Form.Checkbox label='Red' name='color' value='red' />
            <Form.Checkbox label='Orange' name='color' value='orange' />
            <Form.Checkbox label='Green' name='color' value='green' />
            <Form.Checkbox label='Blue' name='color' value='blue' />
        </Form.Group>
    </Form>
)

const SizeForm = (
    <Form>
        <Form.Group grouped>
            <Form.Radio label='Small' name='size' type='radio' value='small' />
            <Form.Radio label='Medium' name='size' type='radio' value='medium' />
            <Form.Radio label='Large' name='size' type='radio' value='large' />
            <Form.Radio label='X-Large' name='size' type='radio' value='x-large' />
        </Form.Group>
    </Form>
)

export default class AccordionFilter extends Component {
    state = { activeIndex: 0 }

    handleClick = (e, titleProps) => {
        const { index } = titleProps
        const { activeIndex } = this.state
        const newIndex = activeIndex === index ? -1 : index

        this.setState({ activeIndex: newIndex })
    }

    render() {
        const { activeIndex } = this.state

        return (
            <Accordion as={Menu} vertical>
                <Menu.Item>
                    <Accordion.Title
                        active={activeIndex === 0}
                        content='Size'
                        index={0}
                        onClick={this.handleClick}
                    />
                    <Accordion.Content active={activeIndex === 0} content={SizeForm} />
                </Menu.Item>

                <Menu.Item>
                    <Accordion.Title
                        active={activeIndex === 1}
                        content='Colors'
                        index={1}
                        onClick={this.handleClick}
                    />
                    <Accordion.Content active={activeIndex === 1} content={ColorForm} />
                </Menu.Item>
            </Accordion>
        )
    }
}