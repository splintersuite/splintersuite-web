import React from 'react';
import { ThemeProvider } from '@emotion/react';
import { MantineProvider } from '@mantine/core';

import theme from '../theme';
import Landing from './Landing';

const App = () => {
    return (
        <MantineProvider
            theme={{ primaryColor: 'violet', fontFamily: 'Source Sans Pro' }}
        >
            <ThemeProvider theme={theme}>
                <Landing />
            </ThemeProvider>
        </MantineProvider>
    );
};

export default App;
