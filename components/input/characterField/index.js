import { UserOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import PropTypes from 'prop-types';
import style from './style.module.css'
import {LargeButtonWrapper} from './module.style'
import {prefixes} from "next/dist/build/output/log";
function LargeInput ({size, content, onChange, prefixes, value}) {
    console.log('value from input: ', value);
    return (
        <LargeButtonWrapper>
            <Input
                className={style.largeButton}
                size={size}
                onChange={onChange}
                placeholder={content}
                prefix={prefixes}
            value={value}/>
        </LargeButtonWrapper>
    )
}

function prefixFinder(prefix) {

}

export default function CharacterField({size, content="Text", onChange, type, value}) {

    return (
        <>
            <LargeInput size={size} content={content} value={value} onChange={onChange} prefixes={prefixFinder(type)}/>
        </>
    )
}


CharacterField.prototype={
    size : PropTypes.oneOf(['small', 'medium', 'large'])
}

CharacterField.defaultProps = {
    size: 'large',
}