import React from 'react'
import { Card, Icon, Image, Item } from 'semantic-ui-react'
import faker from 'faker'

const description = [
    'Amy is a violinist with 2 years experience in the wedding industry.',
    'She enjoys the outdoors and currently resides in upstate New York.',
].join(' ')
const src = 'https://i.ya-webdesign.com/images/avatar-png-1.png'


const CardExampleExtraContent = () => (
    <Card style={{ width: '100%' }}>
        <Card.Content header='Penyelenggara Event' style={{ fontSize: '12px' }} />
        <Card.Content description={description} >
            <Item>
                <Image src={src} size='mini' verticalAlign='middle' />{' '}
                <span style={{ marginLeft: '10px' }} >Middle Aligned</span>

            </Item>
        </Card.Content>
    </Card>
)

export default CardExampleExtraContent