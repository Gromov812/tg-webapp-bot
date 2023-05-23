import React from 'react';
import Button from "../button/Button";
import {useTelegram} from "../../Hooks/useTelegram";



const Header = (props) => {
const {user, onClose, tg} = useTelegram();
    return (
        <div>
            <h1>Hello, {user.name}!</h1>
        <Button onButtonClick = {onClose} name = {'Close'} />
        </div>
    );
};

export default Header;