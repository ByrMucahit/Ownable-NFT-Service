import React from "react";
import useWindowSize from '../hook/useWindowSize'

import styles from './layout.module.css'
import CONST from '../constant'
import MainSide from '../components/col-mainSide'
import Navigation from "./navigation";

function Layout() {
    const size = useWindowSize()
    return <div className={styles.layout}>      
          <MainSide>
              { size.width < CONST.TABLET_SIZE ? 
              <Navigation className={styles.nav} flat/> : <Navigation />
              }
              
              <span>{JSON.stringify(size)}</span>
          </MainSide>
         
    </div>
}

export default Layout

/*
<MainSide/>: Page has one grid named MainSide. 
<Navigation/>: It has icon, mark, buttons,and located on top of pages. 
*/