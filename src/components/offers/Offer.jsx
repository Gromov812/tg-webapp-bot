import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from "react-bootstrap/Button";
import {motion} from "framer-motion";
import './Offers.css';
import React, { useState } from "react";
import Badge from 'react-bootstrap/Badge';
import  ModalBlock  from './Modal';

const Offer = ({delay, title, offerOptions, text, image}) => {


    console.log(delay, title, offerOptions, text, image);

const [showModal, setShowModal] = useState(false);

    return (

    <motion.div
        initial={{opacity:0, x:-100}}
        animate={{opacity: 1, x: 0}}
        transition={{duration: 1.3, delay}}
    >
        <Card style={{ width: '22rem', margin:'15px 0'}}>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                {
                    offerOptions?.text &&
                    <> 
                    <div style={{'float': 'right'}}><Badge bg={offerOptions.bg}>{offerOptions.text}</Badge></div>
                <br />
                </>
                }
               
                <Card.Title><h3>{title}</h3></Card.Title>
                <Card.Text>
                    {text}
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">

                <ListGroup.Item>Сумма: <b>{offerOptions.money}</b></ListGroup.Item>
                <ListGroup.Item>Ставка: <Badge bg="success" style={{'font-size': '0.9rem'}}>{offerOptions.percent}</Badge></ListGroup.Item>
                <ListGroup.Item>Срок: <b>{offerOptions.period}</b></ListGroup.Item>
                <ListGroup.Item>Возраст клиента: <b>{offerOptions.age}</b></ListGroup.Item>
                <ListGroup.Item>Документ: <b>{offerOptions.document}</b></ListGroup.Item>
                <ListGroup.Item>Выдача: <b>{offerOptions.recive}</b></ListGroup.Item>
            </ListGroup>
            <Card.Body>
                <div className="buttons__row">
                <Badge onClick={()=> setShowModal(true)} bg="secondary" style={{display: 'flex', 'align-items': 'center', 'font-weight': '400'}}>Подробнее</Badge> <Button style={{flex: '1'}} variant={"success"} >Запросить займ</Button>
                    </div>
            </Card.Body>
        </Card>
        {showModal && <ModalBlock setShowModal={setShowModal} show={showModal} title={title} />}
        </motion.div>

    );
};

export default Offer;