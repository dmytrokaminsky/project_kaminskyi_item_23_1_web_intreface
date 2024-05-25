import React, { useEffect, useContext } from 'react';
import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import LoginInfo from "../components/LoginInfo";
import { UserContext } from '../components/UserContext'; // Import the UserContext

function Login() {
    const { username, setUsername } = useContext(UserContext); // Use context
    const [password, setPassword] = useState("");
    const [formMessage, setFormMessage] = useState("");
    const [usernameMsg, setUsernameMsg] = useState("Username is correct");

    useEffect(() => { setFormMessage("username is " + username) }, [username]);

    return (
        <main>
            <div className={"container"}><h2>Log In</h2> </div>
            <section className="mt-3 container">
                <div className={"container"}>
                    <div className="row justyfy-content-end">
                        <div className="col-6 col-lg-3"><LoginInfo username={username} /></div>
                    </div>
                    <div className="row justyfy-content-center">
                        <div className="col-12 col-lg-6">
                            <Form>
                                <Form.Group className="mb-3" controlId="LoginForm.username">
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control type="text" placeholder="username" onChange={event => setUsername(event.target.value)} />
                                    <div>{usernameMsg}</div>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="LoginForm.password">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="password" onChange={event => setPassword(event.target.value)} />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="LoginForm.submit">
                                    <Button type={"button"} variant="outline-primary" onClick={() => {
                                        console.log("username", username);
                                        console.log("passvord", password);
                                        const user = { "username": "Ivan", "password": "1234", };
                                        if (username !== user.username) {
                                            setUsernameMsg("Username is wrong");
                                        } else {
                                            setUsernameMsg("Username is OK");
                                        }
                                    }}>Submit</Button>{' '}
                                </Form.Group>
                            </Form>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Login;