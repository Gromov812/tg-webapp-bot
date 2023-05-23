import React from 'react';
import Button from "../button/Button";
import {useTelegram} from "../../Hooks/useTelegram";



const Header = (props) => {

    return (
        <div>
            <h1>Hello, {useTelegram().user.name}!</h1>
        <Button onButtonClick = {useTelegram().onClose} name = {'Close'} />
        </div>
    );
};

export default Header;