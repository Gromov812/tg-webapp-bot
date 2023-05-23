import React, {useLayoutEffect, useRef, useState} from 'react';
import "./Currencies.css";
import "../button/button.css";
import {useNavigate} from "react-router-dom";
import LazyLoad from "../LazyLoad/LazyLoad";
import {AnimatePresence, motion} from "framer-motion";

const Currencies = () => {

    const ref = useRef();

    const [isLoading, setLoading] = useState(true);

    const nav = useNavigate();
        const [currPairsList, setCurrPairsList] = useState([]);

    useLayoutEffect(() => {
       let t = setTimeout(() => {

            setLoading(false);
        },2000);

    }, [])


    return (<>
            <AnimatePresence>
            <motion.div

                initial={{ opacity: 0 }}
                animate={{opacity: 1}}
                exit={{ opacity: 0 }}
                transition={{duration: .5}}
            >
                {isLoading && <LazyLoad /> }
            </motion.div>
                </AnimatePresence>

       <motion.div
       initial={{opacity:0}}
       animate={{opacity:1}}
       >
            {!isLoading && 'CONTENT' }
       </motion.div>
            <button className={'button'} onClick={() => nav(-1)}>Prev</button>
        </>
    );
};

export default Currencies;