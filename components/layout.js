import React from "react";
import cn from 'classnames'

import styles from './layout.module.css'

import CONST from '../constant'
import MarkSide from '../components/col-markSide'
import MainSide from '../components/col-mainSide'
import LoginSide from '../components/col-loginSide'
import useWindowSize from '../Hook/useWindowsSize'
import Navigation from "./navigation";


function Layout({ children }) {
    const size = useWindowSize();

    return <div className={cn(styles.layout)}>
          
          <MainSide>
              <Navigation/>
          </MainSide>
    </div>
}

export default Layout