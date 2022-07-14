import { Input, Space } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone  } from '@ant-design/icons';
import {LargePasswordInputWrapper} from './module.style'
import PropTypes from 'prop-types';

function LargePassword({size, onChange, content}) {
    return (
        <LargePasswordInputWrapper>
            <Input.Password
                placeholder={content}
                iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                size={size}
                onChange={onChange}
            />
        </LargePasswordInputWrapper>
    );
}

export  default function Password({size, onChange, content}) {

    const Comp = size == 'large' ? LargePassword  : null;
    return (
        <Space direction="vertical">
            <Comp size={size} onChange={onChange} content={content}/>
        </Space>
    );
}

Password.prototype = {
    size: PropTypes.oneOf(["small","medium","large"])
}

Password.defaultPrototype = {
    size: "medium"
}