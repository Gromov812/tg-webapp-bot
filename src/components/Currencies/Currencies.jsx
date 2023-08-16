import React, {useEffect, useState} from 'react';
import "./Currencies.css";
import "../button/button.css";
import LazyLoad from "../LazyLoad/LazyLoad";
import {AnimatePresence, motion} from "framer-motion";
import Offers from "../offers/Offers";

const Currencies = ({setFindOffers, navRef}) => {


    const [isLoading, setLoading] = useState(true);


    useEffect(() => {
       let t = setTimeout(() => {

            setLoading(false);
        },5500);

        return () => clearTimeout(t);
    }, [])


    return (<>
            <AnimatePresence>
            <motion.div

                initial={{ opacity: 0 }}
                animate={{opacity: 1}}
                exit={{ opacity: 0 ,transition: { duration: 1 }}}
                transition={{duration: .5}}
            >
                {isLoading && <LazyLoad /> }
            </motion.div>
                </AnimatePresence>

       <div
       initial={{opacity:0}}
       animate={{opacity:1}}
       transition={{duration: .5}}
       >
            {!isLoading && <Offers navRef={navRef} setLoading={setLoading} setFindOffers={setFindOffers}/> }
       </div>
        </>
    );
};

export default Currencies;