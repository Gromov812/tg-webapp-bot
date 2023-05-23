import React, {useLayoutEffect, useState} from 'react';
import axios from "axios";
import CurrPair from "./CurrPair";
import "./Currencies.css";
import "../button/button.css";
import {useNavigate} from "react-router-dom";

const Currencies = () => {

    const nav = useNavigate();
        const [currPairsList, setCurrPairsList] = useState([]);

    useLayoutEffect(() => {
       let timeout = setTimeout(() => {
            axios.get('https://open.er-api.com/v6/latest/USD')
                .then(res => {
                    console.log(res)
                    setCurrPairsList(res.data?.rates);
                })
        },3000);
    return clearInterval(timeout);
    }, [])

    let pairsList = {};

    for (let el in currPairsList) {
        pairsList[el] =  currPairsList[el];
    }
     pairsList = Object.entries(pairsList)

    pairsList = pairsList.map((el,i) => {
        console.log(el)
        return (
            <div>
            <CurrPair key={i} name={el[0]} value={el[1]}/>
            </div>
        )})

    return (<>


        <button className={'button'} onClick={() => nav(-1)}>Prev</button>
            {pairsList}
        </>
    );
};

export default Currencies;