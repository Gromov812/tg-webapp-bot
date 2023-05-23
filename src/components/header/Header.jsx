import React, {useEffect, useState} from 'react';

import {useTelegram} from "../../Hooks/useTelegram";
import {Link} from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Btn from "../button/Button";
import './Header.css';

const Header = (props) => {

    useEffect(() => {

    },[])


const {user, onClose, tg, onToggleMainButton} = useTelegram();
const [optionValue, setOptionValue] = useState('10000');
    const optionHandler = (e) => {
    e.preventDefault();
    setOptionValue(e.target.value)
        console.log(e.target.value);
    }

    const options = [
        {text: 'До 10000 руб.', value: 10000},
        {text: 'До 20000 руб.', value: 20000},
        {text: 'До 30000 руб.', value: 30000},
        {text: 'До 40000 руб.', value: 40000},
        {text: 'До 50000 руб.', value: 50000},
        {text: 'Более 50000 руб.', value: 'more'},
    ];


    return (
        <div className={'bg'}>
            <h1>Hello, {user?.first_name}!</h1>

            <label>До какой суммы искать предложения?
            <select onChange={e => optionHandler(e)} name={'start_sum'}>
                {options.map((el,i) => {
                    return <option value={el.value}>{el.text}</option>
                })}

            </select>
            </label>
                <button type={"submit"} className={'button'}>Найти предложения</button>

            <Link to={'/currencies'}>
                <button className={'button'}>Currencies</button>
            </Link>
            <Btn onButtonClick = {onToggleMainButton} name = {'Main'}/>
        <Btn onButtonClick = {onClose} name = {'Close'} />
            <Button variant={'primary'} >Btn</Button>
        </div>
    );
};

export default Header;