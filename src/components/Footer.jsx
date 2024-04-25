import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px;
`;
const Logo = styled.h2`
    font-size: 32px;
`;
const Desc = styled.p`
    line-height: 1.4;
`;
const IconsContainer = styled.div`
    display: flex;
    gap: 20px;
`;
const SocialIcon = styled.div`
    height: 40px;
    width: 40px;
    border-radius: 50%;
    color: #FFF;
    background-color: #${props => props.color};
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;

const Center = styled.div`
    flex: 1;
    padding: 20px;
`;
const Title = styled.h3`
    margin-bottom: 30px;
`;
const List = styled.ul`
    padding: 0;
    margin: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`;
const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
    cursor: pointer;
`;

const Right = styled.div`
    flex: 1;
    padding: 20px;
`;
const ContactItem = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 15px;
`;
const Payement = styled.img`
    width: 50%;
`;

const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>E-Commerce.</Logo>
                <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse asperiores rerum ipsa laborum! cum asperiores rerum esse totam possimus et vitae natus.</Desc>
                <IconsContainer>
                    <SocialIcon color='3B5999'>
                        <Facebook />
                    </SocialIcon>
                    <SocialIcon color='E4405F'>
                        <Instagram />
                    </SocialIcon>
                    <SocialIcon color='55ACEE'>
                        <Twitter />
                    </SocialIcon>
                    <SocialIcon color='E60023'>
                        <Pinterest />
                    </SocialIcon>
                </IconsContainer>
            </Left>
            <Center>
                <Title>Useful links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Man Fashion</ListItem>
                    <ListItem>Accessoires</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Women Fashion</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Terms</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem><Room /> 1 Rue Bosio, Paris 75016</ContactItem>
                <ContactItem><Phone /> +33 7 45 43 74 59</ContactItem>
                <ContactItem><MailOutline />  limouni40@outlook.com</ContactItem>
                <Payement src='https://i.ibb.co/Qfvn4z6/payment.png' />
            </Right>
        </Container>
    )
}

export default Footer;