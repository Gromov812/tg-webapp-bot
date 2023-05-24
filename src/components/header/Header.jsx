import React, { useState} from 'react';

import {useTelegram} from "../../Hooks/useTelegram";
import Button from 'react-bootstrap/Button';
import Form from  'react-bootstrap/Form';
import Carousel from 'react-bootstrap/Carousel';
import './Header.css';
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
            <div className={"header__block"}></div>
            <div className={"header__block_pic"}>
            </div>
            {user?.first_name && <h1>Hello, {user?.first_name}!</h1>}

            <Carousel fade>
  <Carousel.Item style={{'max-height': '200px'}} interval={1700}>
    <img
      className="d-block w-100"
      src="https://kredit-on.ru/wp-content/uploads/f/1/b/f1b1c6027c823d7f0062ff97f532e881.jpeg"
      alt="First slide"
    />

  </Carousel.Item>
  <Carousel.Item style={{'max-height': '200px'}} interval={1700}>
    <img
      className="d-block w-100"
      src="https://svarkagid.com/wp-content/uploads/2020/04/s1200-5.jpg"
      alt="Second slide"
    />

  </Carousel.Item>
  <Carousel.Item style={{'max-height': '200px'}} interval={1700}>
    <img
      className="d-block w-100"
      src="https://kredit-on.ru/wp-content/uploads/a/b/4/ab4813344cc3ad40a9b86aae430160da.jpeg"
      alt="Third slide"
    />

  </Carousel.Item>
</Carousel>

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