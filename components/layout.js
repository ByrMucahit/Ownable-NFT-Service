import React from "react";

import styles from './layout.module.css'

import MainSide from '../components/col-mainSide'
import Navigation from "./navigation";

function Layout() {

    return <div className={styles.layout}>      
          <MainSide>
              <Navigation/>
          </MainSide>
    </div>
}

export default Layout

/*
<MainSide/>: Page has one grid named MainSide. 
<Navigation/>: It has icon, mark, buttons,and located on top of pages. 
*/