import React from "react";
import {Form} from "antd";
import InputComp from "../../../input/characterField";
import Password from "../../../input/password";
import style from './style.module.css'


export default function SignIn() {

    const showModal = () => {

    }

    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <div className={style.formContainer}>


            <Form
                name="basic"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 16,
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your email!',
                        },
                    ]}
                >
                    <InputComp
                        onChange={(value) => console.log('value', value.target.value)}
                        content={'Email'}
                        size={'large'}
                        type={'email'}
                    />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                >
                    <Password
                        content={'Enter password'}
                        size={'large'}
                        onChange={(value) => console.log('password: ', value.target.value)}/>
                </Form.Item>

            </Form>
            <div>
                <a className={style.link} onClick={showModal()}>Haven't you ever been registered yet?</a>
            </div>

        </div>
    )
}