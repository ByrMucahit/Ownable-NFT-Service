import React from "react";
import useWindowSize from '../hook/useWindowSize'

import styles from './layout.module.css'
import CONST from '../constant'
import MainSide from '../components/col-mainSide'
import Navigation from "./navigation"
import ExhibitionSide from './row-exhibitionSide'

function Layout() {
    const size = useWindowSize()
    return <div className={styles.layout}>      
              { size.width < CONST.TABLET_SIZE ? 
              <Navigation  flat/> : <Navigation />
              }
              

               <div>
                <ExhibitionSide/>
               </div>
               <span className={styles.sizing} style={{color:'white'}}>{JSON.stringify(size)}</span>
               {/* There having main side */}
        </div>
}

export default Layout

/*
<MainSide/>: Page has one grid named MainSide. 
<Navigation/>: It has icon, mark, buttons,and located on top of pages. 
*/