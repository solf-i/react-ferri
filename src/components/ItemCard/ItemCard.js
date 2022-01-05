/* eslint-disable react/prop-types */
import React from 'react'
import { Card, Image } from 'semantic-ui-react'

function ItemCard ({ data }) {
  return (
    <Card>
      <Image src={data.img} size='small' wrapped ui={false} />
      <Card.Content>
        <Card.Header>{data.title}</Card.Header>
        <Card.Description>{data.description}</Card.Description>
      </Card.Content>
      <Card.Content extra>$ {data.price}</Card.Content>
    </Card>
  )
}

export default ItemCard
