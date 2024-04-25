import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height: 30px;
    background-color: teal;
    color: #FFF;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 15px;
    font-weight: 500;
`;

const Announement = () => {
    return (
        <Container>
            Super Deal! Free Shipping On Orders Over $50
        </Container>
    )
}

export default Announement