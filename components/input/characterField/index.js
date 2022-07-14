import { UserOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import PropTypes from 'prop-types';
import style from './style.module.css'
import {LargeButtonWrapper} from './module.style'
import {prefixes} from "next/dist/build/output/log";
function LargeInput ({size, content, onChange, prefixes}) {
    return (
        <LargeButtonWrapper>
            <Input
                className={style.largeButton}
                size={size}
                onChange={onChange}
                placeholder={content}
                prefix={prefixes} />
        </LargeButtonWrapper>
    )
}

function prefixFinder(prefix) {
    if(prefix == 'email') {
        return <UserOutlined/>;
    }
}

export default function CharacterField({size, content="Text", onChange, type}) {

    return (
        <>
            <LargeInput size={size} content={content} onChange={onChange} prefixes={prefixFinder(type)}/>
        </>
    )
}


CharacterField.prototype={
    size : PropTypes.oneOf(['small', 'medium', 'large'])
}

CharacterField.defaultProps = {
    size: 'large',
}