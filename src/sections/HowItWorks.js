import React from 'react';
import styled from '@emotion/styled';

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
            <Group>
                <Image src={Content.howItWorksScreenshotOne} />
                <Image src={Content.howItWorksScreenshotTwo} />
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
    padding: 5vh 5vw;
    @media all and (min-width: 800px) {
        flex-direction: row;
        flex-wrap: wrap;
    }
    h2 {
        color: white;
        width: 100%;
        margin-bottom: 2em;
    }
`;

const Group = styled.div`
    img {
        max-width: 250px;
    }
    ol {
        max-width: 500px;
        margin-right: 5vw;
    }
    li {
        margin: 1.5em 0;
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
`;

export default HowItWorks;
