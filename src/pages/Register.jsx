import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(rgba(255,255,255,0.5),rgba(255, 255, 255, 0.5)),
                url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
                center;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const Wrapper = styled.div`
    width: 40%;
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
    flex-wrap: wrap;
    gap: 20px;
`;
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    padding: 10px;
`;
const Agreement = styled.span`
    font-size: 14px;
`;
const Button = styled.button`
    padding: 15px;
    width: 40%;
    border: none;
    background-color: teal;
    color: #FFF;
    cursor: pointer;
    font-weight: 500;
`;


const Register = () => {
    return (
        <Container>
            <Wrapper>
                <Title>CREATE AN ACCOUNT</Title>
                <Form>
                    <Input placeholder='first name' />
                    <Input placeholder='last name' />
                    <Input placeholder='username' />
                    <Input placeholder='email' />
                    <Input placeholder='password' />
                    <Input placeholder='confirm password' />
                    <Agreement>
                        By creating an account, I consent to the processing of my personal
                        data in accordance with the <b>PRIVACY POLICY</b>
                    </Agreement>
                    <Button>CREATE</Button>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Register;