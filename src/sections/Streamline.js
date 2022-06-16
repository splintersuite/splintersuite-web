import React from 'react';
import styled from '@emotion/styled';

import { Text, Title, Card, Image } from '@mantine/core';

import Content from 'content/home.yaml';

const Streamline = () => {
    return (
        <Container>
            <Title color="white" order={5} align="center">
                {Content.streamlineSubHeadline}
            </Title>
            <Title order={2} align="center">
                {Content.streamlineHeadline}
            </Title>
            <CardContainer>
                {Content.streamlineCards.map((card) => (
                    <Card component="li" key={card.title}>
                        <Card.Section>
                            <Title order={3}>{card.title}</Title>
                            <Text component="p">{card.body}</Text>
                        </Card.Section>
                        <Image src={card.image} alt={card.imageAlt} />
                    </Card>
                ))}
            </CardContainer>
        </Container>
    );
};

const Container = styled.section`
    background-color: ${({ theme }) => theme.colors.black};
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 5vh;
    h2 {
        color: ${({ theme }) => theme.colors.white};
        margin-top: 0.25em;
    }
    h5 {
        color: ${({ theme }) => theme.colors.lightGrey};
    }
    @media all and (min-width: 800px) {
        h2 {
            font-size: 4em;
        }
    }
`;

const CardContainer = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2.5vh;
    max-width: 900px;
    width: 100%;
    li {
        background-color: ${({ theme }) => theme.colors.grey};
        display: flex;
        flex-direction: column;
        margin: 2em 0;
        padding: 5em;
        width: 100%;
        border-radius: 3em;
        h3,
        p {
            color: white;
        }
        h3 {
            font-weight: 700;
            margin-bottom: 1em;
            font-size: 2.4em;
        }
        > div:first-of-type {
            max-width: 300px;
        }
    }
    img {
        max-width: 400px;
        margin-top: 5vh;
    }
    @media all and (min-width: 800px) {
        li {
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            padding: 4em 5em 8em 5em;
            &:nth-of-type(2) {
                > div:last-of-type {
                    order: 1;
                }
                > div:first-of-type {
                    order: 2;
                }
            }
            h3 {
                font-size: 2.8em;
            }
        }
    }
`;

export default Streamline;
