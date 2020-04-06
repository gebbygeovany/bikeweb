import React from 'react'
import { Item } from 'semantic-ui-react'

const items = [
  {
    childKey: 0,
    // image: '/images/wireframe/image.png',
    header: 'Muhammad Gebby Geovany',
    description: '081809195559',
    meta: 'komplek pasanggrahan indah blok 17 no.8 Ujungberung, Kota Bandung, 40617',
    extra: 'Bandung',
  },
//   {
//     childKey: 1,
//     image: '/images/wireframe/image.png',
//     header: 'Header',
//     description: 'Description',
//     meta: 'Metadata',
//     extra: 'Extra',
//   },
]

const ItemExampleProps = () => <Item.Group items={items} />

export default ItemExampleProps