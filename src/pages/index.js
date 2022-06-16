import React from 'react';
import styled from '@emotion/styled';

import Splash from 'sections/Splash';
import Streamline from 'sections/Streamline';

const Container = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

const IndexPage = () => {
    return (
        <Container>
            <Splash />
            <Streamline />
        </Container>
    );
};

export default IndexPage;
