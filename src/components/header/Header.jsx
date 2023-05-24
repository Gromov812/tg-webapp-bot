import React, {useEffect, useState} from 'react';

import {useTelegram} from "../../Hooks/useTelegram";
import {Link} from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from  'react-bootstrap/Form';
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


    return (<>
        <div className={'bg'}>
            <div className={"header__nav"}>
                <div className={"menu_btn"}></div>
            </div>
            <h1>Hello, {user?.first_name}!</h1>

            {/*<label>До какой суммы искать предложения?*/}
            {/*<select onChange={e => optionHandler(e)} name={'start_sum'}>*/}
            {/*    {options.map((el,i) => {*/}
            {/*        return <option value={el.value}>{el.text}</option>*/}
            {/*    })}*/}

            {/*</select>*/}
            {/*</label>*/}
    <div className={"content__block"}>
            <Form.Select aria-label="Default select example" size="lg" onChange={(e) => console.log(e.target.value)}>
                <option>До какой суммы искать предложения?</option>
                <option value="1">До 10000 руб.</option>
                <option value="2">До 20000 руб.</option>
                <option value="3">До 30000 руб.</option>
                <option value="4">До 40000 руб.</option>
                <option value="5">До 50000 руб.</option>
                <option value="6">Более 50000 руб.</option>
            </Form.Select>

            <Form>
                <Form.Check

                    type="switch"
                    id="custom-switch"
                    label="Без поручительства"
                />
                <Form.Check

                    type="switch"
                    label="Без паспорта"
                    id="disabled-custom-switch"
                />
            </Form>



            <Link className={'link'} to={'/currencies'}>
                <div className="d-grid gap-2">
                <Button pref={'qwe'} variant={'success'} size={"lg"}>Найти предложения</Button>
                </div>
            </Link>

        <Button variant={"primary"} onButtonClick = {onToggleMainButton} >Главная</Button>
        <Button onButtonClick = {onClose} >Закрыть</Button>
        </div>
        </div>
        </>
    );
};

export default Header;