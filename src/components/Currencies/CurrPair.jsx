import React from 'react';

const CurrPair = ({name, value}) => {
    return (
        <div className={'currPair'}>
            <p>{name} >> {value}</p>
        </div>
    );
};

export default CurrPair;