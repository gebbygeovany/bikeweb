import React from 'react'
import { Card, Icon } from 'semantic-ui-react'
import "./style.css";

const description = [
  'Amy is a violinist with 2 years experience in the wedding industry.',
  'She enjoys the outdoors and currently resides in upstate New York.',
].join(' ')

const CardExampleExtraContent = () => (
  <Card style={{width:'100%'}}>
    <Card.Content header='Deskripsi Event' style={{ fontSize:'12px' }}/>
    <Card.Content >
      <div className="detailEvent">Tanggal:</div>
      <div>12 Maret 2020</div>
      <br></br>
      <div className="detailEvent">Waktu:</div>
      <div>14.00-20.00</div>
      <br></br>

      <div className="detailEvent">Lokasi:</div>
      <div>Lapangan Pussenif Angkatan Darat, Bandung, Jawa Barat</div>
      <br></br>

      <div className="detailEvent">Harga Tiket Masuk:</div>
      <div>Rp20.000</div>

    </Card.Content>
  </Card>
)

export default CardExampleExtraContent