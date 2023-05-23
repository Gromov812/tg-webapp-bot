import React from 'react';
import load from '../../asseets/load.gif';

const LazyLoad = () => {
    return (
        <div>
           <img src={load} />
        </div>
    );
};

export default LazyLoad;