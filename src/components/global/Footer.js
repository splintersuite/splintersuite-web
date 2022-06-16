import React from 'react';
import styled from '@emotion/styled';
import Button from 'components/elements/Button';
import logo from 'assets/logo.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';

import { Text, Title } from '@mantine/core';

import Content from 'content/home.yaml';

const Footer = () => {
    return (
        <Container>
            <Section>
                <Logo src={logo} alt="Splintersuite Logo" />
                <Text component="p">
                    ©2022 SplinterSuite All Rights Reserved
                </Text>
            </Section>
            <Section>
                <Button size="lg" text="Download Now" download={true} />
                <Button
                    insertLink={true}
                    href="https://discord.gg/pnYsjYXKpf"
                    target="_blank"
                    text="Join Discord"
                    color="dark"
                    leftIcon={<FontAwesomeIcon icon={faDiscord} size={'1x'} />}
                />
            </Section>
        </Container>
    );
};

const Container = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.grey};
    padding: 10vh 10vw;
    button {
        margin-bottom: 2em;
    }
    a {
        align-self: center;
    }
    @media all and (min-width: 600px) {
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-start;
        a {
            align-self: flex-end;
        }
    }
`;

const Section = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-content: center;
    align-items: center;
    max-width: 300px;
    &:nth-of-type(2) {
        margin-top: 5vh;
    }
    p {
        color: white;
        font-size: 1.2em;
    }
    @media all and (min-width: 800px) {
        &:nth-of-type(2) {
            margin-top: 0;
        }
    }
`;

const Logo = styled.img`
    height: 32px;
    width: auto;
    align-self: center;
    @media all and (min-width: 800px) {
        align-self: flex-start;
    }
`;

export default Footer;
