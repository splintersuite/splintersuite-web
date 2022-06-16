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
    background-color: ${({ theme }) => theme.colors.grey};
    padding: 5vh 5vw;
    @media all and (min-width: 600px) {
        flex-direction: row;
        justify-content: space-between;
    }
    button {
        box-shadow: 0px 14px 40px 10px rgba(0, 0, 0, 0.3);
        margin-bottom: 2em;
    }
    a {
        align-self: flex-end;
        box-shadow: 0px 20px 40px 10px rgba(0, 0, 0, 0.3);
    }
`;

const Section = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    p {
        color: white;
        font-size: 1.2em;
    }
`;

const Logo = styled.img`
    height: 32px;
    width: auto;
`;

export default Footer;
