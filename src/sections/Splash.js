import React from 'react';
import styled from '@emotion/styled';
import Button from 'components/elements/Button';

import { Text, Title } from '@mantine/core';

import Content from 'content/home.yaml';

import hero from '../assets/hero.jpg';

const Splash = () => {
    const handleLearnMoreClick = (event) => {
        event.preventDefault();
        const streamlineSection = document.getElementById('streamline');
        window.scrollTo({
            top: streamlineSection.offsetTop - 76,
            left: 0,
            behavior: 'smooth',
        });
    };
    return (
        <Container>
            <CtaContainer>
                <Title order={1} size="md">
                    {Content.mainHeading}
                </Title>
                <Text component="p" size="lg">
                    {Content.mainSubHeading}
                </Text>
                <Button
                    size="lg"
                    text="Download Now"
                    download={true}
                    insertLink={true}
                />
                <Text size="s" component="p" className="supported">
                    Windows, Mac and Linux supported
                </Text>
            </CtaContainer>
            <Text
                component="a"
                weight="700"
                className="learn-more"
                href="#streamline"
                onClick={handleLearnMoreClick}
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
        margin-bottom: 7vh;
        position: relative;
        &:after {
            content: '';
            width: 0.6em;
            height: 0.6em;
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
    margin-top: 25vh;
    h1 {
        font-size: 2.8em;
    }
    p {
        margin-top: 0.5em;
        margin-bottom: 1.5em;
        padding: 0 1em;
        max-width: 440px;
    }
    .supported {
        font-size: 1.2em;
        font-style: italic;
        margin-top: 0.5em;
    }
    > button {
        margin-top: 1.5em;
    }
    @media all and (min-width: 768px) {
        h1 {
            font-size: 5em;
        }
    }
`;

export default Splash;
