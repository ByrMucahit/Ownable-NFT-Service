
import Password from '../../../input/password/index'
import InputComp from '../../../input/characterField/index'
import {Col, Row} from "antd";
import style from './style.module.css'
import {useState} from "react";
import { Button, Checkbox, Form, Input } from 'antd';

export default function SignUpForm() {

    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return(
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
                label="First Name"
                name="firstName"
                rules={[
                    {
                        required: true,
                        message: 'Please input your first name!',
                    },
                ]}
            >
                <InputComp
                    onChange={(value) => console.log('value', value.target.value)}
                    content={'Name'}
                    size={'large'}
                    type={'name'}
                />
            </Form.Item>

            <Form.Item
                label="Last Name"
                name="lastName"
                rules={[
                    {
                        required: true,
                        message: 'Please input your lastName!',
                    },
                ]}
            >
                <InputComp
                    onChange={(value) => console.log('value', value.target.value)}
                    content={'Surname'}
                    size={'large'}
                    type={'surname'}
                />
            </Form.Item>

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
                    content={'Enter password Again'}
                    size={'large'}
                    onChange={(value) => console.log('password: ', value.target.value)}/>
            </Form.Item>
        </Form>

    )
}

/*
*  <Row >
            <Col>
                <Input
                    onChange={(value) => console.log('value', value.target.value)}
                    content={'Name'}
                    size={'large'}
                    type={'name'}
                />
            </Col>
            <br/>
            <br/>
            <Col>
                <Input
                    onChange={(value) => console.log('value', value.target.value)}
                    content={'Surname'}
                    size={'large'}
                    type={'surname'}
                />
            </Col>
            <br/>
            <br/>
            <Col>
                <Input
                    onChange={(value) => console.log('value', value.target.value)}
                    content={'Email'}
                    size={'large'}
                    type={'email'}
                />
            </Col>
            <br/>
            <br/>
            <Col>
                <Password
                    content={'Enter password'}
                    size={'large'}
                    onChange={(value) => console.log('password: ', value.target.value)}/>
            </Col>
            <br/>
            <br/>
            <Col>
                <Password
                    content={'Enter password Again'}
                    size={'large'}
                    onChange={(value) => console.log('password: ', value.target.value)}/>
            </Col>

        </Row>
* */