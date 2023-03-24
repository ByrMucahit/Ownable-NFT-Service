import styles from './navigation.module.css'
import cn from 'classnames'
import NavigationButton from './button'
import FrameButton from "../frame/frameButton";
import {MENU} from '../../constant'
import {HomepageOption} from '../icons'
import IconButton from "../button/icon/index"
import React, {useContext, useEffect, useState} from 'react';
import 'antd/dist/antd.css';
import {Button, Modal, Input, Tooltip, Space} from 'antd';
import {InfoCircleOutlined, UserOutlined, EyeInvisibleOutlined, EyeTwoTone} from '@ant-design/icons';
import SignUpForm from "../form/auth/signUp";
import ModalComponent from '../modal/index'
import { AuthContext } from "../../context/AuthProvider"

function Navigation({flat = false}) {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [show, setShow] = useState(false);
    const { username, signIn} = useContext(AuthContext);
    console.log("Login Modal Visible: ", username);


    const showModal = () => {
        console.log("Hello world from show modal");
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };


    return (
        /* Navigator */
        <header className={`
    ${styles.muiPaperRoot} 
    ${styles.muiAppBarRoot} 
    ${styles.muiAppBarPositionAbsolute} 
    ${styles.muiAppBarColorDefault} 
    ${styles.cssHeader} 
    ${styles.muiPaperElevation}`}>

            <div className={styles.navigator}>
                <NavigationButton href='/' className={styles.comp}>Ownable-NS</NavigationButton>
                {/* Mark Side */}
                <div className={styles.cssNavigator}>
                    {/* Link Side */}
                    {
                        MENU.map((menu) => {
                            return (
                                <div className={`
                       ${styles.muiButtonBaseRoot} 
                       ${styles.muiListItemRoot} 
                       ${styles.cssNavigatorContent} 
                       ${styles.muiListItemGutters} 
                       ${styles.muiListItemButton}`} key={menu.key}>
                                    <NavigationButton
                                        className={styles.subBtn}
                                        key={menu.key}
                                        href={menu.href}
                                    >
                                        {!flat && menu.title}
                                    </NavigationButton>
                                </div>

                            )
                        })
                    }
                </div>
            </div>
            <div>
                <Button onClick={()=> showModal()}>Login</Button>
                {/*  <Modal title="Login" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
            <SignUpForm/>
        </Modal>*/}

                {/* <ModalComponent
            title={'Sign in'}
            type={'signIn'}
            children={'please fill in the blank'}
            show={show}
            onClose={() => setShow(false)}/>*/}
            </div>

            <div className={styles.iconButtonContent}>
                <IconButton/>
            </div>

        </header>
    )
}

export default Navigation;