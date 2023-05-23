import React from 'react';
import load from '../../asseets/load.gif';
import './LazyLoad.css'

const LazyLoad = () => {
    return (
        <div>
           <img className={'image'} src={load} alt =''/>
        </div>
    );
};

export default LazyLoad;