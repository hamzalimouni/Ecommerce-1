import React from 'react';
import styled from 'styled-components';
import { popularProducts } from '../data';
import ProductItem from './ProductItem';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

const Container = styled.div`
    padding: 20px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`;

const Products = ({ cat, filters, sort }) => {
    const [products, setProducts] = useState([]);
    const [filtredProducts, setFiltredProducts] = useState([]);


    useEffect(() => {
        const getProduct = async () => {
            try {
                const res = await axios.get(cat ? `http://localhost:5000/api/products?category=${cat}` : `http://localhost:5000/api/products/`);
                setProducts(res?.data);
            } catch (error) {
                console.log(error);
            }
        }
        getProduct();
    }, [cat])

    useEffect(() => {
        cat && setFiltredProducts(
            products.filter(item =>
                Object.entries(filters).every(([key, value]) =>
                    item[key].includes(value)
                )
            )
        )
    }, [cat, filters, products])

    useEffect(() => {
        if (sort === "newset") {
            setFiltredProducts(prev =>
                [...prev].sort((a, b) => a.createdAt - b.createdAt)
            )
        }
        else if (sort === "asc") {
            setFiltredProducts(prev =>
                [...prev].sort((a, b) => a.price - b.price)
            )
        }
        else {
            setFiltredProducts(prev =>
                [...prev].sort((a, b) => b.price - a.price)
            )
        }
    }, [sort])

    return (
        <Container>
            {cat ? filtredProducts.map((item, index) => (
                <ProductItem item={item} key={item._id} />
            ))
                : products.slice(0, 8).map((item, index) => (
                    <ProductItem item={item} key={item._id} />
                ))}
        </Container>
    )
}

export default Products;