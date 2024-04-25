import { Add, Remove } from '@material-ui/icons';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Announement from '../components/Announement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import NewsLetter from '../components/NewsLetter';
import { useLocation } from 'react-router-dom';
import { publicRequest } from '../requestMethods';
import { useDispatch } from 'react-redux';
import { addProduct } from '../redux/cartRedux';


const Container = styled.div``;
const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    gap: 30px;
`;
const ImgContainer = styled.div`
    flex: 1;
`;
const Image = styled.img`
    width: 100%;
    height: 80vh;
    object-fit: cover;
`;
const InfoContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 30px;
`;
const Title = styled.span`
    font-size: 30px;
    font-weight: 300;
`;
const Desc = styled.p`
    font-size: 18px;
    line-height: 1.4;
`;
const Price = styled.span`
    font-size: 30px;
    font-weight: 200;
`;
const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 50%;
`;
const Filter = styled.div`
    display: flex;
    gap: 8px;
    align-items: center;
`;
const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 200;
`;
const FilterColor = styled.span`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props => props.color};
    cursor: pointer;
`;
const FilterSize = styled.select`
    padding: 10px;
`;
const FilterSizeOption = styled.option``;
const AddContainer = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    font-weight: 700;
`;
const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const Button = styled.button`
    padding: 10px;
    border: none;
    color: #FFF;
    font-weight: 500;
    background-color: #039d9d;
    cursor: pointer;

    &:hover{
    background-color: teal;
    }
`;

const Product = () => {
    const [product, setProduct] = useState({});
    const [quantity, setQuantity] = useState(1);
    const [color, setColor] = useState("");
    const [size, setSize] = useState("");
    const dispatch = useDispatch();
    const location = useLocation();
    const id = location.pathname.split("/")[2];

    useEffect(() => {
        const getProduct = async () => {
            try {
                const res = await publicRequest.get(`products/find/${id}`);
                setProduct(res?.data);
            } catch (error) {
                console.log(error);
            }
        }
        getProduct();
    }, [id])

    const handleQuantity = (type) => {
        if (type === "dec") {
            quantity > 1 && setQuantity(quantity - 1);
        }
        else {
            setQuantity(quantity + 1);
        }
    }

    const handleClick = (e) => {
        e.preventDefault();
        dispatch(addProduct({ ...product, quantity, color, size }));
    }

    return (
        <Container>
            <Navbar />
            <Announement />
            <Wrapper>
                <ImgContainer>
                    <Image src={product.img} />
                </ImgContainer>
                <InfoContainer>
                    <Title>{product.title}</Title>
                    <Desc>{product.description}</Desc>
                    <Price>{product.price}$</Price>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Color</FilterTitle>
                            {product?.color?.map(c =>
                                <FilterColor color={c} key={c} onClick={() => setColor(c)} />
                            )
                            }
                        </Filter>
                        <Filter>
                            <FilterTitle>Size</FilterTitle>
                            <FilterSize onChange={(e) => setSize(e.target.value)}>
                                {product?.size?.map(s =>
                                    <FilterSizeOption key={s}>{s}</FilterSizeOption>
                                )}
                            </FilterSize>
                        </Filter>
                    </FilterContainer>
                    <AddContainer>
                        <AmountContainer>
                            <Remove onClick={() => handleQuantity("dec")} />
                            <Amount>{quantity}</Amount>
                            <Add onClick={() => handleQuantity("inc")} />
                        </AmountContainer>
                        <Button onClick={handleClick}>ADD TO CART</Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
            <NewsLetter />
            <Footer />
        </Container>
    )
}

export default Product;