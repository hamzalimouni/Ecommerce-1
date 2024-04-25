import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { login } from '../redux/apiCalls';

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(rgba(255,255,255,0.5),rgba(255, 255, 255, 0.5)),
                url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
                center;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const Wrapper = styled.div`
    width: 25%;
    background-color: #FFF;
    padding: 20px;
`;
const Title = styled.h1`
    font-size: 30px;
    font-weight: 600;
    margin-bottom: 30px;
`;
const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;
const Input = styled.input`
    padding: 10px;
`;
const Button = styled.button`
    padding: 15px;
    width: 40%;
    border: none;
    background-color: teal;
    color: #FFF;
    cursor: pointer;
    font-weight: 500;
    &:disabled{
        color: green;
        cursor: not-allowed;
    }
`;
const Error = styled.span`
color: red;
`;
const Link = styled.a`
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
`;

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const { isFetching, error } = useSelector(state => state.user);

    const handleClick = async (e) => {
        e.preventDefault();
        login(dispatch, { username, password });
    }
    return (
        <Container>
            <Wrapper>
                <Title>SIGN IN</Title>
                <Form>
                    <Input
                        placeholder='username'
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <Input
                        placeholder='password'
                        type='password'
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button onClick={handleClick} disabled={isFetching}>LOGIN</Button>
                    {error && <Error>Something went wrong</Error>}
                    <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
                    <Link>CREATE A NEW ACCOUNT</Link>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Login;