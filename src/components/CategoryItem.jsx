import { Link } from 'react-router-dom';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    flex: 1;
    margin: 5px;
    height: 70vh;
    position: relative;
`;
const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;
const Info = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 20px;
`;
const Title = styled.h2`
    color: #FFF;
`;
const Button = styled.button`
    padding: 10px;
    border: none;
    cursor: pointer;
    background-color: #FFF;
    color: gray;
`;

const CategoryItem = ({ item }) => {
    return (
        <Container>
            <Link to={`/products/${item.cat}`}>
                <Image src={item.img} />
                <Info>
                    <Title>{item.title}</Title>
                    <Button>SHOP NOW</Button>
                </Info>
            </Link>
        </Container>
    )
}

export default CategoryItem