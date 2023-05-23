import React from 'react';
import Button from "../button/Button";
import {useTelegram} from "../../Hooks/useTelegram";
import {Link} from "react-router-dom";



const Header = (props) => {
const {user, onClose, tg, onToggleMainButton} = useTelegram();
    return (
        <div>
            <h1>Hello, {user?.first_name}!</h1>
            <Link to={'/currencies'}>
                <button className={'button'}>Currencies</button>
            </Link>
            <Button onButtonClick = {onToggleMainButton} name = {'Main'}/>
        <Button onButtonClick = {onClose} name = {'Close'} />
        </div>
    );
};

export default Header;