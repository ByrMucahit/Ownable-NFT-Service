import React from "react";
import useWindowSize from '../../hook/useWindowSize'

import styles from './layout.module.css'
import CONST from '../../constant'
import Navigation from "../navigation/navigation"
import ExhibitionSide from '../row/exhibitionSide'
import Quotation from "../row/quotation"
import ReasonSide from "../row/reasonSide"
import BusinessSide from "../row/businessSide"
import GetStartedSide from "../row/getStarted"
import FooterSide from "../footer/index"
function Layout() {
    const size = useWindowSize()
    return <div className={styles.layout}> 
                
                <div>
                { size.width < CONST.TABLET_SIZE ? 
              <Navigation  flat/> : <Navigation />}
                </div>
               
                <div>
                 <ExhibitionSide/>
                 </div>
            
                  <div>
                  <Quotation />
                  </div>
                  
                  <div>
                    <ReasonSide/>
                  </div>

                  <div>
                    <BusinessSide />
                  </div>
            
                  <div className={styles.getStarted}>
                    <GetStartedSide />
                  </div>
           
                  <div>
                <span className={styles.sizing} >{JSON.stringify(size)}</span>
               {/* There having main side */}
                </div>
                
                  <div>
                    <FooterSide />
                  </div>
           
               
                
                
            
               
        </div>
}

export default Layout

/*
<MainSide/>: Page has one grid named MainSide. 
<Navigation/>: It has icon, mark, buttons,and located on top of pages. 
*/