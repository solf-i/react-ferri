import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import './Item.css'


const Item = ({ data }) => {

    return (
    <Card className="card">
		<Image src={data.thumbnailUrl} wrapped ui={false} />
		<Card.Content>
			<Card.Header>{data.title}</Card.Header>
			
		</Card.Content>
	</Card>
    )
}

export default Item
