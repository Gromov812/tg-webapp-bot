import React, { useState } from 'react';

import { useTelegram } from "../../Hooks/useTelegram";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Carousel from 'react-bootstrap/Carousel';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container';
import './Header.css';
import Currencies from '../Currencies/Currencies';
import { Main } from '../Main/Main';
import lg from '../../asseets/lg.png'
import { BestOffers } from '../offers/BestOffers';

const Header = () => {

  const [findOffers, setFindOffers] = useState(false);
  const [selectRangeSumma, setSelectRangeSumma] = useState(0);
  const [selectRangeDays, setSelectRangeDays] = useState(0);



  const { user, onClose, tg, onToggleMainButton } = useTelegram();


  function findOffersButtonHandler() {
    setFindOffers(true)

  }

  return (<>
  
  <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="#home">
        <img
          alt=""
          src={lg}
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
      <span style={{
    'font-size': '1rem',
    'font-weight': '700'
}}>Поисковый Сервис Займов</span>
      </Navbar.Brand>
    </Container>
  </Navbar>

    {/* <div className={'bg'}>
      <div className={"header__block"}></div>
      <div className={"header__block_pic"}>
      </div> */}

      {user?.first_name && <h1>Hello, {user?.first_name}!</h1>}

      <Carousel fade>
        <Carousel.Item style={{ 'max-height': '200px' }} interval={1700}>
          <img
            className="d-block w-100"
            src="https://kredit-on.ru/wp-content/uploads/f/1/b/f1b1c6027c823d7f0062ff97f532e881.jpeg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item style={{ 'max-height': '200px' }} interval={1700}>
          <img
            className="d-block w-100"
            src="https://svarkagid.com/wp-content/uploads/2020/04/s1200-5.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item style={{ 'max-height': '200px' }} interval={1700}>
          <img
            className="d-block w-100"
            src="https://kredit-on.ru/wp-content/uploads/a/b/4/ab4813344cc3ad40a9b86aae430160da.jpeg"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>

      <Main />

      <Form.Label>Сумма: {selectRangeSumma} руб.</Form.Label>
      <Form.Range style={{'padding': '0 10px'}} onChange={(e) => setSelectRangeSumma(v =>  e.target.value*1000)} />
      <Form.Label>Срок: {selectRangeDays} дней</Form.Label>
      <Form.Range max={30} style={{'padding': '0 10px'}} value={selectRangeDays} onChange={(e) => setSelectRangeDays(e.target.value)} />

      <div className={"content__block"}>
        <Form.Select aria-label="Default select example" size="xl">
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
            size='20'
            type="switch"
            id="custom-switch"
            label="Без поручительства"
          />
          <Form.Check
            size={"lg"}
            type="switch"
            label="Без паспорта"
            id="disabled-custom-switch"
          />
        </Form>




        <div className="d-grid gap-2">
          <Button onClick={findOffersButtonHandler} pref={'qwe'} variant={'success'} size={"lg"}>Найти предложения</Button>
        </div>

        {findOffers && <Currencies setFindOffers={setFindOffers} />
        }

        
       <BestOffers />

        <Button variant={"primary"} onClick={onToggleMainButton} >Главная</Button>
        <Button onClick={onClose} >Закрыть</Button>
      </div>
    {/* </div> */}
  </>
  );
};

export default Header;