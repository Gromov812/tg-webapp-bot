import { HashLink as Link } from 'react-router-hash-link';
import Button from "react-bootstrap/Button";
import './Offers.css';
import React, { useEffect, useRef } from "react";
import Offer from "./Offer";
import { useNavigate } from 'react-router-dom';

const Offers = ({setFindOffers, setLoading, navRef}) => {


    let ref = useRef();


    useEffect(() => {
         ref.current.scrollIntoView({ behavior: "smooth" });

        console.log(`RENDER!`);
    
    }, [])

    const backButtonHandler = () => {
        setLoading(true);
        setFindOffers(false);
        navRef.current.scrollIntoView({ behavior: "smooth" })
    } 

    return ( <>
<div className={'offers__block'} ref={ref}>

    <Offer delay={0} title={1} offerOptions={{text: 'Ставка 0% первые 14 дней', bg: 'info'}} />
    <Offer delay={0.4} title={2}/>
    <Offer delay={0.8} title={3} offerOptions={{text: 'Ставка 0% первые 14 дней', bg: 'warning'}}/>
    <Offer delay={1.2} title={4}/>
    <Offer delay={1.6} title={5}/>


</div>
    <Button onClick={backButtonHandler} variant={"primary"}>Назад</Button>
        </>
    );
};

export default Offers;