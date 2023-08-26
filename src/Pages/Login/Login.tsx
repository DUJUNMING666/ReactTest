import React, { useState } from "react";
import { Form, Button, Input } from 'antd';
import "./Login.css"
import {useNavigate} from "react-router-dom";
const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loggedIn, setLoggedIn] = useState(false);
    const navigate = useNavigate();
    function login() {
        if (onFinish(username, password)) {
            setLoggedIn(true);
            alert("登录成功");
            navigate("/home");
        } else {
            alert("登录失败，请检查用户名和密码。");
        }
    }
    if (loggedIn) {
        return <div>Welcome, {username}!</div>;
    }
    const onFinish = (user: string, pwd: string) => {
        return user === "admin" && pwd === "1234";
    };

    if (loggedIn) {
        return <div>Welcome, {username}!</div>;
    }

    return (
        <div className="box">
            <Form className="form-container">
                <Form.Item label="账户">
                    <Input type="text" value={username} onChange={(e) => {
                        setUsername(e.target.value);
                    }} placeholder="Username" />
                </Form.Item>
                <Form.Item label="密码">
                    <Input type="password" value={password} onChange={(e) => {
                        setPassword(e.target.value);
                    }} placeholder="Password" />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" onClick={login}>Login</Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default Login;
