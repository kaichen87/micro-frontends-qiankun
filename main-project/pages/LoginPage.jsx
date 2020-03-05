import React from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import './LoginPage.css';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
  }

  //   handleSubmit = e => {
  //     e.preventDefault();
  //     this.props.form.validateFields((err, values) => {
  //       if (!err) {
  //         console.log('Received values of form: ', values);
  //       }
  //     });
  //   };

  //   handleSubmit(e) {
  //       e.preventDefault();
  //       this.props.form.validateFields((err, values) => {
  //         if (!err) {
  //           console.log('Received values of form: ', values);
  //         }
  //       });
  //   }

  forgetPassword = () => {

  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="login-page">
        <div className="login-box">
          <div className="login-form-box">
          <div className="login-logo">
              <div className="login-name">Logo And Title</div>
            </div>
            <Form onSubmit={this.handleSubmit} className="login-form">
              <Form.Item>
                {getFieldDecorator('username', {
                  rules: [{ required: true, message: 'Please input your username!' }],
                })(<Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />)}
              </Form.Item>
              <Form.Item>
                {getFieldDecorator('password', {
                  rules: [{ required: true, message: 'Please input your Password!' }],
                })(
                  <Input
                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    type="password"
                    placeholder="Password"
                  />,
                )}
              </Form.Item>
              <Form.Item>
                {getFieldDecorator('remember', {
                  valuePropName: 'checked',
                  initialValue: true,
                })(<Checkbox>自动登录</Checkbox>)}
                <a className="login-form-forgot" onClick={this.forgetPassword} href="">
                  忘记密码
                </a>
                <Button type="primary" htmlType="submit" className="login-form-button">
                  登录密码
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

// export default LoginPage;
const LoginPage = Form.create({ name: 'login_form' })(LoginForm);
export default LoginPage;
