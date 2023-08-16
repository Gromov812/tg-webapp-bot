import React, {useEffect, useState} from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar'
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
            {/* <CProgress height={35} className="mb-3"> */}
                <ProgressBar style={{height:'3rem'}} animated height={35} now={progress} label={`${progress}%`} color={progress < 85 ? "info" : "success"} />
            {/* </CProgress> */}
        </div>
    );
};

export default LazyLoad;