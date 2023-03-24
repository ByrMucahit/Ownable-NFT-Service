import React, {useState} from "react";
import useWindowSize from '../../../hook/useWindowSize'
import {useDispatch} from "react-redux";
import styles from './style.module.css'
import CONST from '../../../constant'
import Navigation from "../../navigation/navigation"
import ExhibitionSide from '../../row/exhibitionSide'
import Quotation from "../../row/quotation"
import ReasonSide from "../../row/reasonSide"
import GetStartedSide from "../../row/getStarted"
import FooterSide from "../../footer/index"
import {increment} from "../../../src/redux/reducers/userReducer";

function Layout() {
    const [msg, setMsg] = useState('');
    const dispatch = useDispatch();

    const makeSomething = () => {
        console.log("Hello World");
    }
    const size = useWindowSize()
    return (
                /* Layout */
            <div className={styles.layout}> 
                {/* Navigation */}
                <div className={styles.navigation}>
                    {size.width < CONST.TABLET_SIZE ? 
                      <Navigation  flat/> : <Navigation />}
                </div>

                <div>
                    <button onClick={() => dispatch(increment(msg))}>makes something</button>
                </div>

                {/* Exhibition */}
                <div className={styles.exhibition}>
                    <ExhibitionSide/>
                </div>
                {/* Qutation */}
               
                  <Quotation />
               
                {/* Reason */}
                <div className={styles.reasonSide}>
                    <ReasonSide/>
                </div>
                {/* Get Started */}
                <div className={styles.getStarted}>
                  <GetStartedSide />
                </div>
                <div>
                  {/* There having main side */}
                </div>
                      {/* Footer Side */}
                
                    <FooterSide /> 
        </div>)
}

export default Layout

/*
<MainSide/>: Page has one grid named MainSide. 
<Navigation/>: It has icon, mark, buttons,and located on top of pages. 
*/