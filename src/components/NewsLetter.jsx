import { Send } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
    height: 60vh;
    background-color: #FCF5F5;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;
`;
const Title = styled.h2`
    font-size: 70px;
`;
const Desc = styled.p`
    font-size: 24px;
    font-weight: 300;
`;
const InputContainer = styled.div`
    width: 50%;
    height: 40px;
    background-color: #FFF;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid lightgray;
`;
const Input = styled.input`
    padding: 8px 15px;
    flex: 8;
    border: none;
    outline: none;
`;
const Button = styled.button`
    flex: 1;
    border: none;
    padding: 7px 10px;
    background-color: teal;
    color: #FFF;
    cursor: pointer;
`;

const NewsLetter = () => {
    return (
        <Container>
            <Title>Newsletter</Title>
            <Desc>Get timely updates from your favorite products</Desc>
            <InputContainer>
                <Input placeholder='Your email' />
                <Button><Send /></Button>
            </InputContainer>
        </Container>
    )
}

export default NewsLetter;