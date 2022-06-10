import React from 'react';
import styled from '@emotion/styled';
import { Button } from '@mantine/core';

import hero from '../assets/hero.jpg';
import Navbar from './Navbar';

const PageBackground = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    color: ${({ theme }) => theme.colors.white};
    background: ${({ theme }) => theme.colors.grey[900]};
    background-image: url(${hero});
    background-size: cover;
`;

const Box = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 456px;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
`;

const Heading = styled.h1`
    font-size: 40px;
    margin-top: ${({ theme }) => theme.space(12)};
`;

const Description = styled.p`
    margin-top: ${({ theme }) => theme.space(1)};
    margin-bottom: ${({ theme }) => theme.space(3)};
    font-size: 20px;
`;

const Landing = () => {
    const handleClick = () => {};

    return (
        <PageBackground>
            <Navbar />
            <Box>
                <Heading>Rent your cards with ease</Heading>
                <Description>
                    SplinterSuite automatically and intelligently rents out your
                    cards and helps you earn passively
                </Description>
                <Button size="lg" onClick={handleClick}>
                    Get Started
                </Button>
            </Box>
        </PageBackground>
    );
};

export default Landing;
