import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from "react-bootstrap/Button";
import {motion} from "framer-motion";
import './Offers.css';
import React from "react";
import {useNavigate} from "react-router-dom";
import Offer from "./Offer";
import Btn from "../button/Button";

const Offers = () => {

let nav = useNavigate();

    return ( <>
<div className={'offers__block'}>
    <Offer delay={0}/>
    <Offer delay={0.4}/>
    <Offer delay={0.8} />
    <Offer delay={1.2}/>
    <Offer delay={1.6}/>


</div>
    <Button onClick={() => nav(-1)} variant={"primary"}>Назад</Button>
        </>
    );
};

export default Offers;