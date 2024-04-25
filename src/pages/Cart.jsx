import React, { useEffect, useState } from 'react';
import Announement from '../components/Announement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import NewsLetter from '../components/NewsLetter';
import styled from 'styled-components';
import { Add, Remove } from '@material-ui/icons';
import { useSelector } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';
import { useNavigate } from 'react-router-dom';
import { userRequest } from '../requestMethods';

const KEY = process.env.REACT_APP_STRIPE;

const Container = styled.div``;
const Wrapper = styled.div`
    padding: 20px;
`;
const Title = styled.h1`
    font-weight: 500;
    text-align: center;
`;
const Top = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
`;
const TopButton = styled.button`
    padding: 10px 15px;
    font-weight: 600;
    border: ${props => props.type === "filled" && "none"};
    background-color: ${props => props.type === "filled" ? "black" : "transparent"};
    color: ${props => props.type === "filled" && "white"};
`;
const TopTexts = styled.div`
`;
const TopText = styled.span`
    cursor: pointer;
    margin: 0px 10px;
    text-decoration: underline;
`;
const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px;
`;
const Info = styled.div`
    flex: 3;
`;
const Product = styled.div`
    display: flex;
    justify-content: center;
`;
const ProductDetail = styled.div`
    flex: 2;
    display: flex;
    gap: 20px;
`;
const Image = styled.img`
    width: 200px;
`;
const Details = styled.div`
    display: flex;
    justify-content: space-around;
    flex-direction: column;
`;
const ProductName = styled.span``;
const ProductId = styled.span``;
const ProductColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props => props.color};
`;
const ProductSize = styled.span``;
const PriceDetail = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
`;
const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`;
const ProductAmount = styled.span`
    font-size: 24px;
`;
const ProductPrice = styled.span`
    font-size: 28px;
    font-weight: 200;
`;
const Hr = styled.hr`
    border: none;
    background-color: #EEE;
    height: 1px;
    margin: 5px 0px;
`;
const Summary = styled.div`
    flex: 1;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    height: 50vh;
    padding: 20px;
`;
const SummaryTitle = styled.h2`
    font-weight: 200;
    font-size: 30px;
`;
const SummaryItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 30px 0px;
    font-weight: ${props => props.type === "total" && "500"};
    font-size: ${props => props.type === "total" && "24px"};
`;
const SummaryItemText = styled.span``;
const SummaryItemPrice = styled.span``;
const Button = styled.button`
    width: 100%;
    border: none;
    background-color: #000;
    color: #FFF;
    font-weight: 600;
    padding: 10px;
`;

const Cart = () => {
    const cart = useSelector(state => state.cart);
    const [stripeToken, setStripeToken] = useState(null);
    const navigate = useNavigate();

    const onToken = (token) => {
        setStripeToken(token);
    }

    useEffect(() => {
        const makeRequest = async () => {
            try {
                const res = await userRequest.post(`/checkout/payement`, {
                    tokenId: stripeToken.id,
                    amount: cart?.total
                })
                navigate("/success", { data: res?.data });
            } catch (error) {
                console.log(error);
            }
        }
        stripeToken && cart?.quantity >= 1 && makeRequest();
    }, [stripeToken, cart?.total, navigate])


    return (
        <Container>
            <Navbar />
            <Announement />
            <Wrapper>
                <Title>YOUR BAG</Title>
                <Top>
                    <TopButton>CONTINUE SHOPPING</TopButton>
                    <TopTexts>
                        <TopText>Shopping Bag(2)</TopText>
                        <TopText>Your Wishlist (0)</TopText>
                    </TopTexts>
                    <TopButton type="filled">CHECKOUT NOW</TopButton>
                </Top>
                <Bottom>
                    <Info>
                        {cart.products?.map((product) => (
                            <div key={product?._id}>
                                <Product>
                                    <ProductDetail>
                                        <Image src={product?.img} />
                                        <Details>
                                            <ProductName><b>Product:</b> {product?.title}</ProductName>
                                            <ProductId><b>ID:</b> {product?._id}</ProductId>
                                            <ProductColor color={product?.color} />
                                            <ProductSize><b>Size:</b> {product?.size}</ProductSize>
                                        </Details>
                                    </ProductDetail>
                                    <PriceDetail>
                                        <ProductAmountContainer>
                                            <Add />
                                            <ProductAmount>{product?.quantity}</ProductAmount>
                                            <Remove />
                                        </ProductAmountContainer>
                                        <ProductPrice>$ {product?.price * product?.quantity}</ProductPrice>
                                    </PriceDetail>
                                </Product>
                                <Hr />
                            </div>
                        ))}

                    </Info>
                    <Summary>
                        <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>Subtotal</SummaryItemText>
                            <SummaryItemPrice>$ {cart?.total}</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Estimated Shipping</SummaryItemText>
                            <SummaryItemPrice>$ 5.90</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Shipping Discount</SummaryItemText>
                            <SummaryItemPrice>$ -5.90</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem type="total">
                            <SummaryItemText>Total</SummaryItemText>
                            <SummaryItemPrice>$ {cart?.total}</SummaryItemPrice>
                        </SummaryItem>
                        <StripeCheckout
                            name="Hamza Shop"
                            image="https://avatars.githubusercontent.com/u/1486366?v=4"
                            billingAddress
                            shippingAddress
                            description={`Your total is $${cart.total}`}
                            amount={cart.total * 100}
                            stripeKey={KEY}
                            token={onToken}
                        >
                            <Button>CHECKOUT NOW</Button>
                        </StripeCheckout>
                    </Summary>
                </Bottom>
            </Wrapper>
            <Footer />
        </Container>
    )
}

export default Cart;