import React from 'react';
import styled from 'styled-components';

import { Text, Title, Image, List } from '@mantine/core';

import Content from 'content/home.yaml';

const HowItWorks = () => {
    return (
        <Container>
            <Title order={2} align="center">
                {Content.howItWorksHeadline}
            </Title>
            <Group>
                <List type="ordered" size="lg">
                    {Content.howItWorksList.map((item) => (
                        <List.Item>
                            <Title weight="700" order={3}>
                                {item.title}
                            </Title>
                            <Text component="p">{item.body}</Text>
                        </List.Item>
                    ))}
                </List>
            </Group>
            <Group className="has-screenshots">
                <Image src={Content.howItWorksScreenshotTwo} />
                <Image
                    src={Content.howItWorksScreenshotOne}
                    className="overlap"
                />
            </Group>
        </Container>
    );
};

const Container = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.black};
    width: 100%;
    padding: 5vh 7.5vw 30vh 7.5vw;
    h2 {
        color: white;
        width: 100%;
        margin-bottom: 2em;
    }
    @media all and (min-width: 800px) {
        flex-direction: row;
        flex-wrap: wrap;
        padding: 5vh 5vw 30vh 5vw;
        h2 {
            font-size: 4em;
        }
    }
`;

const Group = styled.div`
    display: flex;
    flex-direction: column;
    align-content: center;
    img {
        max-width: 500px;
        align-self: center;
        margin-bottom: 4em;
        border-radius: 2em;
        box-shadow: 0px 14px 40px 10px rgba(0, 0, 0, 0.3);
    }
    ol {
        max-width: 500px;
        margin-right: 5vw;
    }
    li {
        margin: 2em 0;
        &:first-of-type {
            margin-top: 0;
        }
        h3,
        p {
            color: white;
        }
        h3 {
            font-size: 1.4em;
        }
        p {
            font-size: 0.9em;
        }
    }
    &.has-screenshots {
        position: relative;
        .overlap {
            position: absolute;
            top: 20vh;
            left: 2.5vw;
            width: 100%;
        }
    }
    @media all and (min-width: 800px) {
        &:nth-of-type(2) {
            margin-top: 9vh;
        }
        li {
            h3 {
                font-size: 2.2em;
            }
            p {
                font-size: 1.35em;
            }
        }
    }
`;

export default HowItWorks;
