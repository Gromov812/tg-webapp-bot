import React, {useEffect, useState} from 'react';
import axios from "axios";
import CurrPair from "./CurrPair";
import "./Currencies.css";

const Currencies = () => {

        const [currPairsList, setCurrPairsList] = useState([]);

    useEffect(() => {
        // axios.get('https://currate.ru/api/?get=currency_list&key=24ea37c3210093fdba9ae3e83e1be56c')
        //     .then(res => {
        //         console.log(res)
        //         setCurrPairsList(res.data);
        //     })
        //     .then(() => {
        //         axios.get(`https://currate.ru/api/?get=rates&pairs=${currPairsList.toString()}&key=24ea37c3210093fdba9ae3e83e1be56c`)
        //             .then(res => {
        //                 console.log(res)
        //             })
        //     })

    }, [])

    // let pairsList = currPairsList.map((el,i) => {
    //     return <CurrPair name={el} key={i} />
    // })

    return (
        <div>
            123123
        </div>
    );
};

export default Currencies;