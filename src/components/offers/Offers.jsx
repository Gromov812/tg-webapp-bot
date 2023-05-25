import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/Button";
import './Offers.css';
import React, { useEffect } from "react";
import Offer from "./Offer";

const Offers = ({setFindOffers, setLoading}) => {


    const backButtonHandler = () => {
        setLoading(true);
        setFindOffers(false);
    } 

    return ( <>

<div className={'offers__block'}>

    <Offer delay={0} title={1}/>
    <Offer delay={0.4} title={2}/>
    <Offer delay={0.8} title={3}/>
    <Offer delay={1.2} title={4}/>
    <Offer delay={1.6} title={5}/>


</div>
    <Button onClick={backButtonHandler} variant={"primary"}>Назад</Button>
        </>
    );
};

export default Offers;