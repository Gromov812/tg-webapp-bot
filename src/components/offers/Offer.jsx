import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from "react-bootstrap/Button";
import {motion} from "framer-motion";
import './Offers.css';
import React, { useState } from "react";
import Badge from 'react-bootstrap/Badge';
import  ModalBlock  from './Modal';

const Offer = ({delay, title, offerOptions}) => {

const [showModal, setShowModal] = useState(false);

    return (

    <motion.div
        initial={{opacity:0, x:-100}}
        animate={{opacity: 1, x: 0}}
        transition={{duration: 1.3, delay: delay}}
    >
        <Card style={{ width: '22rem', margin:'15px 0'}}>
            <Card.Img variant="top" src="https://avatars.mds.yandex.net/get-altay/4365916/2a0000017914e032d1c7a0a1d03586577cd9/XXXL" />
            <Card.Body>
                {
                    offerOptions?.text &&
                    <> 
                    <div style={{'float': 'right'}}><Badge bg={offerOptions.bg}>{offerOptions.text}</Badge></div>
                <br />
                </>
                }
               
                <Card.Title><h3>Займ под 2% в месяц</h3></Card.Title>
                <Card.Text>
                    Выгодный займ для приобритения бытовых приборов, ремонта автотранспорта или погашении предыдущих  задолженностей
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroup.Item>Сумма: <b>до 30 000 рублей</b></ListGroup.Item>
                <ListGroup.Item>Ставка: <Badge bg="success" style={{'font-size': '0.9rem'}}> от 0%</Badge></ListGroup.Item>
                <ListGroup.Item>Срок: <b>от 7 до 30 дней</b></ListGroup.Item>
                <ListGroup.Item>Возраст клиента: <b>от 20 до 99 лет</b></ListGroup.Item>
                <ListGroup.Item>Документ: <b>паспорт РФ</b></ListGroup.Item>
                <ListGroup.Item>Выдача: <b>на карту</b></ListGroup.Item>
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