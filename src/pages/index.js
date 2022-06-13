import React from 'react';
import styled from '@emotion/styled';
import Button from 'components/elements/Button';

import { Text, Title } from '@mantine/core';

import hero from '../assets/hero.jpg';

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

const IndexPage = () => {
    return (
        <PageBackground>
            <Box>
                <Title order={1}>Rent your cards with ease</Title>
                <Text>
                    SplinterSuite automatically and intelligently rents out your
                    cards and helps you earn passively
                </Text>
                <Button size="lg" text="Download Now" />
            </Box>
        </PageBackground>
    );
};

export default IndexPage;
