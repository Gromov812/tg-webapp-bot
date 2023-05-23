import React, {useEffect, useState} from 'react';
import axios from "axios";
import CurrPair from "./CurrPair";
import "./Currencies.css";
import "../button/button.css";
import {useNavigate} from "react-router-dom";
import LazyLoad from "../LazyLoad/LazyLoad";

const Currencies = () => {

    const [isLoading, setLoading] = useState(true);

    const nav = useNavigate();
        const [currPairsList, setCurrPairsList] = useState([]);

    useEffect(() => {
       let t = setTimeout(() => {
            axios.get('https://open.er-api.com/v6/latest/USD')
                .then(res => {
                    console.log(res)
                    setCurrPairsList(res.data.rates);
                });
            setLoading(false);
        },1500);
return clearInterval(t);
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

            {isLoading
                ?
                 <LazyLoad />
                :
                pairsList

            }
            <button className={'button'} onClick={() => nav(-1)}>Prev</button>
        </>
    );
};

export default Currencies;