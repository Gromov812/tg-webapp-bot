import React, {useLayoutEffect, useState} from 'react';
import axios from "axios";
import CurrPair from "./CurrPair";
import "./Currencies.css";
import {useNavigate} from "react-router-dom";

const Currencies = () => {

    const nav = useNavigate();
        const [currPairsList, setCurrPairsList] = useState([]);

    useLayoutEffect(() => {
        axios.get('https://open.er-api.com/v6/latest/USD')
            .then(res => {
                console.log(res)
                setCurrPairsList(res.data.rates);
            })


    }, [])

    let pairsList = {};

    for (let el in currPairsList) {
        pairsList[el] =  currPairsList[el];
    }
     pairsList = Object.entries(pairsList)

    pairsList.map((el,i) => {
        console.log(el)
        return (
            <div>
            <CurrPair name={el[0]} value={el[1]}/>
            </div>
        )})

    return (<>
        <div>
            {pairsList}
        </div>
        <button onClick={() => nav(-1)}>Prev</button>
        </>
    );
};

export default Currencies;