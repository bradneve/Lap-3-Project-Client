import React from 'react'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

const RoundStats = () => {
    return (
        <CardGroup style={{width: '50%', }}>
            <Card>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body style={{backgroundColor: 'mediumspringgreen'}}>
                    <Card.Title>Fastest Answer:</Card.Title>
                    <Card.Text>
                        Bradley, 0.1s
                    </Card.Text>
                </Card.Body>

            </Card>
            <Card>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                    <Card.Title>Slowest Answer:</Card.Title>
                    <Card.Text>
                        Jakerin, 29.9s
                    </Card.Text>
                </Card.Body>
            </Card>
        </CardGroup>
    )
}

export default RoundStats