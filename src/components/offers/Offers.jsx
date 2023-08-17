import Button from "react-bootstrap/Button";
import './Offers.css';
import React, { useEffect, useRef } from "react";
import Offer from "./Offer";
import offers from "./offers";

const Offers = ({setFindOffers, setLoading, navRef, searchSumm, searchDays}) => {


    let ref = useRef();



    useEffect(() => {
        console.log(offers);
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
        {offers.filter(el => el.maxMoney >= searchSumm && el.maxDays >= searchDays).map((el, i) => {
            return <Offer delay={el.delay} title={el.title} text={el.promotext} image={el.img} url={el.url} offerOptions={{text: el.badge, bg: 'info', money: el.money,
             percent: el.percent, period: el.period, age: el.age, document: el.document, recive: el.recive}} modalText={el.modalText} modalTitle={el.modalTitle} />
        })}
    
    {/* <Offer delay={0.4} title={2}/>
    <Offer delay={0.8} title={3} offerOptions={{text: 'Ставка 0% первые 14 дней', bg: 'warning'}}/>
    <Offer delay={1.2} title={4}/>
    <Offer delay={1.6} title={5}/> */}


</div>
    <Button onClick={backButtonHandler} variant={"primary"}>Назад</Button>
        </>
    );
};

export default Offers;