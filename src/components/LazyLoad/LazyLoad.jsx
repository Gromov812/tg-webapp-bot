import React, {useEffect, useRef, useState} from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import {CProgressBar,CProgress} from '@coreui/bootstrap-react';

const LazyLoad = () => {

    const [progress, setProgress] = useState(1);



    useEffect(() => {
        const intervalId = setInterval(() => {
            setProgress((t) => {
                if (t >= 100) clearInterval(intervalId);
                return (t < 100) ? t + 1 : t;
            });
        }, 50);
        return () => clearInterval(intervalId);
    }, []);



    return (
        <div className={"loading_stripe"}>
            <CProgress height={35} className="mb-3">
                <CProgressBar  animated height={35} variant="striped" value={progress} color={progress < 85 ? "info" : "success"} >{progress}%</CProgressBar>
            </CProgress>
        </div>
    );
};

export default LazyLoad;