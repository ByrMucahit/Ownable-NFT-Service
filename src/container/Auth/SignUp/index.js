import axios from "axios";
import Password from '../../../../components/input/password/index'
import InputComp from '../../../../components/input/characterField/index'
import { useForm, Controller } from 'react-hook-form';
import {Col, Row} from "antd";
import 'antd/dist/antd.css';
import {useState} from "react";
import { Button, Alert, Form, Input, message } from 'antd';

export default function SignUpForm() {

    const { control, watch, errors, handleSubmit } = useForm({mode: 'onChange'},);
    const {firstName, setFirstName} = useState(null);
    const [form] = Form.useForm();

    const  register = (request)=> {
        console.log('request: ', request);
        const ins = axios.create({
            baseURL: 'http://localhost:8080',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            },
        });

        ins.post('/api/auth/signup', request).then((response)=>{
            console.log('auth response: ', response);
            if(response.status==200 || response.status==201) {
                console.log('here');
                message.success('This is a success message');
            }

        }).catch((e)=>{
            console.log('response error: ', e?.response);
        });
    }

    const onChange = (values) => {
        console.log('changes: ', values);
    }

    const onFinish = (values) => {
        console.log('Success:', values);
        register(values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const onSubmit = (data) => {
        console.log('data: ', data);
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
            onFinish={register}
            form={form}

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
            />
            </Form.Item>

            <Form.Item
                label="Password"
                name="confirmPassword"
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

                />
            </Form.Item>
            <Button type="primary" htmlType="submit">
                Submit
            </Button>
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