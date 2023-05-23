import React from 'react';
import Button from "../button/Button";
import {useTelegram} from "../../Hooks/useTelegram";



const Header = (props) => {
const {user, onClose, tg, onToggleMainButton} = useTelegram();
    return (
        <div>
            <h1>Hello, {user.first_name}!</h1>
            <Button onButtonClick = {onToggleMainButton} name = {'Main'}/>
        <Button onButtonClick = {onClose} name = {'Close'} />
        </div>
    );
};

export default Header;