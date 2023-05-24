import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from "react-bootstrap/Button";
import {motion} from "framer-motion";
import './Offers.css';
import React, {useRef} from "react";
import Badge from 'react-bootstrap/Badge';

const Offer = ({delay}) => {

    const scrollRef = useRef(null)

    return (

    <motion.div
        initial={{opacity:0, x:-100}}
        animate={{opacity: 1, x: 0}}
        transition={{duration: 1.3, delay: delay}}
    >
        <Card style={{ width: '22rem', margin:'15px 0'}}>
            <Card.Img variant="top" src="https://avatars.mds.yandex.net/get-altay/4365916/2a0000017914e032d1c7a0a1d03586577cd9/XXXL" />
            <Card.Body>
                <Card.Title><h3>Займ под 2% в месяц</h3></Card.Title>
                <Card.Text>
                    Выгодный займ для приобритения бытовых приборов, ремонта автотранспорта или погашении предыдущих  задолженностей
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroup.Item>Сумма: <b>до 300 000 рублей</b></ListGroup.Item>
                <ListGroup.Item>Ставка: <Badge bg="success" style={{'font-size': '0.9rem'}}> 2% в месяц</Badge></ListGroup.Item>
                <ListGroup.Item>Срок: <b>от 1 до 20 месяцев</b></ListGroup.Item>
                <ListGroup.Item>Паспорт: <b>не требуется</b></ListGroup.Item>
            </ListGroup>
            <Card.Body>
                <div className="d-grid gap-2">
                <Button variant={"success"} >Запросить займ</Button>
                    </div>
            </Card.Body>
        </Card>
        </motion.div>

    );
};

export default Offer;