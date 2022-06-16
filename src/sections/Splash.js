import React from 'react';
import styled from '@emotion/styled';
import Button from 'components/elements/Button';

import { Text, Title } from '@mantine/core';

import Content from 'content/home.yaml';

import hero from '../assets/hero.jpg';

const Splash = () => {
    return (
        <Container>
            <CtaContainer>
                <Title order={1} size="md">
                    {Content.mainHeading}
                </Title>
                <Text component="p" size="lg">
                    {Content.mainSubHeading}
                </Text>
                <Button size="lg" text="Download Now" download={true} />
                <Text size="s" component="p" className="supported">
                    Windows, Mac and Linux supported
                </Text>
            </CtaContainer>
            <Text
                component="a"
                weight="700"
                className="learn-more"
                href="#streamline"
            >
                Learn More
            </Text>
        </Container>
    );
};

const Container = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    min-height: 100vh;
    color: ${({ theme }) => theme.colors.white};
    background: ${({ theme }) => theme.colors.grey[900]};
    background-image: url(${hero});
    background-size: cover;
    width: 100%;
    .learn-more {
        margin-bottom: 4vh;
        position: relative;
        &:after {
            content: '';
            width: 1em;
            height: 1em;
            border-bottom: 2px solid white;
            border-right: 2px solid white;
            position: absolute;
            bottom: -20px;
            left: 50%;
            transform: rotate(45deg) translateX(-50%);
        }
    }
`;

const CtaContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 600px;
    text-align: center;
    margin-top: 30vh;
    h1 {
        font-size: 2.8em;
    }
    p {
        margin: 1.5em 0;
        padding: 0 1em;
    }
    .supported {
        font-size: 1.4em;
        font-style: italic;
    }
    @media all and (min-width: 768px) {
        h1 {
            font-size: 5em;
        }
    }
`;

export default Splash;