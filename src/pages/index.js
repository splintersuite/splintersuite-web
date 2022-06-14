import React from 'react';
import styled from '@emotion/styled';
import Button from 'components/elements/Button';

import { Text, Title } from '@mantine/core';

import Content from 'content/home.yaml';

import hero from '../assets/hero.jpg';

const PageBackground = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
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
    p {
        margin: 1.5em 0;
    }
`;

const IndexPage = () => {
    return (
        <PageBackground>
            <Box>
                <Title order={1}>{Content.mainHeading}</Title>
                <Text component="p">{Content.mainSubHeading}</Text>
                <Button size="lg" text="Download Now" download={true} />
            </Box>
        </PageBackground>
    );
};

export default IndexPage;
