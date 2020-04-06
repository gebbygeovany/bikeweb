import React from 'react'
import { Dropdown, Menu } from 'semantic-ui-react'

const options = [
  { key: 1, text: '1', value: 1 },
  { key: 2, text: '2', value: 2 },
  { key: 3, text: '3', value: 3 },
]

const DropdownExampleSimple = () => (
    <Dropdown placeholder='Jumlah' options={options} selection  />
)

export default DropdownExampleSimple