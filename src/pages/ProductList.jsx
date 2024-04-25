import React from 'react';
import styled from 'styled-components';
import Announement from '../components/Announement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Products from '../components/Products';
import NewsLetter from '../components/NewsLetter';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';


const Container = styled.div``;
const Title = styled.h1`
    margin: 20px;
    font-size: 40px;
`;
const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const Filter = styled.div`
    margin: 20px;
`;
const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
`;
const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
`;
const Option = styled.option``;

const ProductList = () => {
    const location = useLocation();
    const cat = location.pathname.split("/")[2];
    const [filters, setFilters] = useState({});
    const [sort, setSort] = useState("newset");

    const handleFilters = (e) => {
        const { name, value } = e.target;
        setFilters({
            ...filters,
            [name]: value,
        })
    };

    return (
        <Container>
            <Navbar />
            <Announement />
            <Title>Dresses</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>Filter Products:</FilterText>
                    <Select name='color' onChange={handleFilters}>
                        <Option selected disabled>Color</Option>
                        <Option>white</Option>
                        <Option>black</Option>
                        <Option>red</Option>
                        <Option>blue</Option>
                        <Option>yellow</Option>
                        <Option>green</Option>
                    </Select>
                    <Select name='size' onChange={handleFilters}>
                        <Option selected disabled>Size</Option>
                        <Option>XS</Option>
                        <Option>S</Option>
                        <Option>M</Option>
                        <Option>L</Option>
                        <Option>XL</Option>
                    </Select>
                </Filter>
                <Filter>
                    <FilterText>Sort Products:</FilterText>
                    <Select onChange={(e) => setSort(e.target.value)}>
                        <Option value="newset" selected>Newest</Option>
                        <Option value="asc">Price (asc)</Option>
                        <Option value="desc">Price (Desc)</Option>
                    </Select>
                </Filter>
            </FilterContainer>
            <Products cat={cat} filters={filters} sort={sort} />
            <NewsLetter />
            <Footer />
        </Container>
    )
}

export default ProductList;