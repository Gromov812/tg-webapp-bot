import React from 'react'
import Offer from './Offer';
import './Offers.css';
import bo from './bestOffers';


export function BestOffers(props) {
    
    return (
    <>
        <div className='bestoffers__block'>
            <h3>Лучшие предложения на {new Date().toLocaleString("ru-RU", {
    "year": "numeric",
    "month": "numeric",
    "day": "numeric"
})}</h3>

    {bo.map(el => {
        return <Offer delay={el.delay} title={el.title} text={el.promotext} image={el.img} url={el.url} offerOptions={{text: el.badge, bg: 'info', money: el.money,
        percent: el.percent, period: el.period, age: el.age, document: el.document, recive: el.recive}} modalText={el.modalText} modalTitle={el.modalTitle} />
    })}

{/* 
       <Offer delay={0.3} title={'best 1'} />
       <Offer delay={0.3} title={'best 2'} />
       <Offer delay={0.3} title={'best 3'} /> */}
       </div>
       </>
       )
}
