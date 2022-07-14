import React from "react";
import {Form} from "antd";
import InputComp from "../../../input/characterField";
import Password from "../../../input/password";


export  default function SignIn() {

    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <p>
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

        </p>
    )
}