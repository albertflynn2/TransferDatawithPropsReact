import React from 'react';

import {
    Input, Button, Form, Icon, Row, Col,
} from 'antd';

import { myContext } from '../App';

//const { Option } = Select;

const Home = ({ change, form }) => {
    const handleChange = (e) => {
        e.preventDefault();
        form.validateFields((err, values) => {
            if (!err) {
                change(values);
            }
        });
    };

    const { getFieldDecorator } = form;
    return (
        <Row>
            <Col span={18} push={1}>
                <Form layout="vertical" onSubmit={handleChange}>
                    <Form.Item label="word">
                        {getFieldDecorator('word', {
                            rules: [{ required: true, message: 'Please input your word!' }],
                        })(
                            <Input
                                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="Word"
                            />,
                        )}
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            Go!
                        </Button>
                    </Form.Item>
                </Form>
            </Col>
        </Row>
    );
};


const HomeContainer = props => (
    <myContext.Consumer>
        {value => (
            <Home {...props} value={value} />
        )}
    </myContext.Consumer>
);

export default Form.create({ name: 'normal_login' })(HomeContainer);
