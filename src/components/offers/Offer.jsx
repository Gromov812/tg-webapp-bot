import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from "react-bootstrap/Button";
import {motion} from "framer-motion";
import './Offers.css';
import React, {useRef} from "react";


const Offer = ({delay}) => {

    const scrollRef = useRef(null)

    return (

    <motion.div
        initial={{opacity:0, x:-100}}
        animate={{opacity: 1, x: 0}}
        transition={{duration: 1.3, delay: delay}}
    >
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://avatars.mds.yandex.net/get-altay/4365916/2a0000017914e032d1c7a0a1d03586577cd9/XXXL" />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
            </ListGroup>
            <Card.Body>
                <div className="d-grid gap-2">
                <Button variant={"primary"} >Запросить займ</Button>
                    </div>
            </Card.Body>
        </Card>
        </motion.div>

    );
};

export default Offer;