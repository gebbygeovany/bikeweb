import React from 'react'
import { Icon, Step } from 'semantic-ui-react'

export const StepSatu = () => (
  <Step.Group fluid>
    <Step active>
      <Icon name='info' />
      <Step.Content style={{backgroundColor: 'transparent'}}>
        <Step.Title>Detail Tiket</Step.Title>
        <Step.Description>Masukan Detail Informasi Pembelian Tiket</Step.Description>
      </Step.Content>
    </Step>
    <Step link>
      <Icon name='credit card' />
      <Step.Content >
        <Step.Title style={{color: 'black'}}>Pembayaran</Step.Title>
        <Step.Description>Masukan Informasi Pembayaran</Step.Description>
      </Step.Content>
    </Step>
  </Step.Group>
)
export const StepDua = () => (
    <Step.Group fluid>
      <Step completed>
        <Icon name='truck' />
        <Step.Content style={{backgroundColor: 'transparent'}}>
          <Step.Title style={{color: 'black'}}>Detail Tiket</Step.Title>
          <Step.Description>Masukan Detail Informasi Pembelian Tiket</Step.Description>
        </Step.Content>
      </Step>
      <Step active>
        <Icon name='credit card' />
        <Step.Content style={{backgroundColor: 'transparent'}}>
          <Step.Title >Pembayaran</Step.Title>
          <Step.Description>Masukan Informasi Pembayaran</Step.Description>
        </Step.Content>
      </Step>
    </Step.Group>
  )
