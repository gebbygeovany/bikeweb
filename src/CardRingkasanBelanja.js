import React from 'react'
import { Card, Icon, Button } from 'semantic-ui-react'
import { Link } from "react-router-dom";

const description = [
  'Amy is a violinist with 2 years experience in the wedding industry.',
  'She enjoys the outdoors and currently resides in upstate New York.',
].join(' ')

export const CardRingkasanBelanjaKeranjang = () => (
  <Card>
    <Card.Content header='Ringkasan Belanja' style={{ fontSize: '12px' }} />
    <Card.Content >
      <span style={{ float: 'left' }}>Total Harga</span>
      <span style={{ float: 'right', fontWeight: 'bold' }}>Rp200.000</span>
    </Card.Content>
    <Card.Content extra>
      <Link to={'./CheckoutBarang'}>
        <Button style={{ width: '100%', backgroundColor: '#FA591D' }}>
          <span className="btnBayarKeranjang">Beli</span>
        </Button>
      </Link>
    </Card.Content>
  </Card>
)


export const CardRingkasanBelanjaCheckout = () => (
  <Card>
    <Card.Content header='Ringkasan Belanja' style={{ fontSize: '12px' }} />
    <Card.Content >
      <span style={{ float: 'left' }}>Total Harga</span>
      <span style={{ float: 'right'}}>Rp200.000</span>
      <br></br>
      <span style={{ float: 'left' }}>Ongkos Kirim</span>
      <span style={{ float: 'right'}}>Rp20.000</span>
      <br></br>
     
      <br></br>
      <span style={{ float: 'left' }}>Total Harga</span>
      <span style={{ float: 'right', fontWeight: 'bold' }}>Rp220.000</span>
    </Card.Content>
    <Card.Content extra>
      <Link to={'./CheckoutBarang'}>
        <Button style={{ width: '100%', backgroundColor: '#FA591D' }}>
          <span className="btnBayarKeranjang">Beli</span>
        </Button>
      </Link>
    </Card.Content>
  </Card>
)
