import React, {useEffect, useState} from 'react';

import {useTelegram} from "../../Hooks/useTelegram";
import {Link} from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from  'react-bootstrap/Form';

import './Header.css';
import {CFormSwitch} from "@coreui/bootstrap-react";
import Currencies from '../Currencies/Currencies';

const Header = ({setInputChose}) => {

const [findOffers, setFindOffers] = useState(false);


const {user, onClose, tg, onToggleMainButton} = useTelegram();
    const optionHandler = (e) => {
        console.log(e)
        let obj = {};
         if(e.target.localName != 'select') {

             obj[e.target.labels[0].innerText] = e.target.checked;

         }
         else {
             obj['sum'] = e.target.value;
         }
        setInputChose(obj)

    }


    return (<>
        <div className={'bg'}>
            <div className={"header__nav"}>
                <div className={"menu_btn"}></div>
            </div>
            <h1>Hello, {user?.first_name}!</h1>

    <div className={"content__block"}>
            <Form.Select aria-label="Default select example" size="xl" onChange={(e) => optionHandler(e)}>
                <option>До какой суммы искать предложения?</option>
                <option value="10000">До 10000 руб.</option>
                <option value="20000">До 20000 руб.</option>
                <option value="30000">До 30000 руб.</option>
                <option value="40000">До 40000 руб.</option>
                <option value="50000">До 50000 руб.</option>
                <option value="more">Более 50000 руб.</option>
            </Form.Select>

        {/*<CFormSwitch onClick={(e) => optionHandler(e)} size="xl" label="Без поручительства" />*/}
            <Form>
                <Form.Check
                    onClick={(e) => optionHandler(e)}
                    type="switch"
                    id="custom-switch"
                    label="Без поручительства"
                />
                <Form.Check
                    onClick={(e) => optionHandler(e)}
                    type="switch"
                    label="Без паспорта"
                    id="disabled-custom-switch"
                />
            </Form>




                <div className="d-grid gap-2">
                <Button onClick={() => setFindOffers(true)} pref={'qwe'} variant={'success'} size={"lg"}>Найти предложения</Button>
                </div>

        {findOffers && <Currencies setFindOffers={setFindOffers}/>
        }

        <Button variant={"primary"} onButtonClick = {onToggleMainButton} >Главная</Button>
        <Button onButtonClick = {onClose} >Закрыть</Button>
        </div>
        </div>
        </>
    );
};

export default Header;