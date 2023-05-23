import React, {useEffect, useRef, useState} from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';


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
        <div>
            <ProgressBar animated now={progress} variant={progress < 85 ? "info" : "success"} label={`${progress}%`}/>;
        </div>
    );
};

export default LazyLoad;