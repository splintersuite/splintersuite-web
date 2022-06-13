import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { Button as MantineButton } from '@mantine/core';

const StyledButton = styled(MantineButton)``;

const Button = ({ ...props }) => {
    const { text, size, color, hasLink, href } = props;
    console.log(href);
    return (
        <StyledButton size={size} {...props} component={hasLink ? 'a' : null}>
            {text}
        </StyledButton>
    );
};

export default Button;
