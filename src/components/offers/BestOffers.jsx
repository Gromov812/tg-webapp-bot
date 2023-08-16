import React from 'react'
import Offer from './Offer';
import './Offers.css';

export function BestOffers(props) {
    

    return (
    <>
        <div className='bestoffers__block'>
            <h3>Лучшие предложения на {new Date().toLocaleString("ru-RU", {
    "year": "numeric",
    "month": "numeric",
    "day": "numeric"
})}</h3>
{/* 
       <Offer delay={0.3} title={'best 1'} />
       <Offer delay={0.3} title={'best 2'} />
       <Offer delay={0.3} title={'best 3'} /> */}
       </div>
       </>
       )
}
