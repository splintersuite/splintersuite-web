import React from 'react';
import styled from '@emotion/styled';
import Button from 'components/elements/Button';

import { Text, Title } from '@mantine/core';

import Content from 'content/home.yaml';

const Download = () => {
    return (
        <Container>
            <Title order={2}>{Content.downloadHeadline}</Title>
            <Text component="p">{Content.downloadSubHeadline}</Text>
            <Button
                size="lg"
                text="Download Now"
                color="dark"
                download={true}
            />
            <Text size="s" component="p" className="supported">
                Windows, Mac and Linux supported
            </Text>
        </Container>
    );
};

const Container = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    align-items: center;
    padding: 5vh 0;
    background-color: ${({ theme }) => theme.colors.primary[5]};
    width: 100%;
    h2 {
        color: white;
        font-size: 2.8em;
    }
    p {
        color: white;
        font-size: 1.4em;
    }
    p:first-of-type {
        margin: 0.5em 0;
    }
    button {
        margin: 1em 0;
    }
    @media all and (min-width: 800px) {
        h2 {
            font-size: 3.6em;
        }
        p {
            font-size: 1.8em;
            &.supported {
                font-size: 1.6em;
            }
        }
    }
`;

export default Download;
