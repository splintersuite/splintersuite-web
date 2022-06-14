import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

import OsSnifferClass from 'utils/osSniffer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faWindows,
    faApple,
    faLinux,
} from '@fortawesome/free-brands-svg-icons';

import { Button as MantineButton } from '@mantine/core';

const StyledButton = styled(MantineButton)``;

const Button = (props) => {
    const { text, size, insertLink, download, leftIcon, ...rest } = props;
    const [osType, setOsType] = useState('');
    const [osVersion, setOsVersion] = useState('');
    const [osIcon, setOsIcon] = useState(<FontAwesomeIcon />);

    const OsSniffer = new OsSnifferClass();

    useEffect(() => {
        if (download) {
            const currentOsType = OsSniffer.checkOsType(navigator);
            setOsType(currentOsType);
        }
    }, []);

    useEffect(() => {
        if (osType == 'Windows OS') {
            setOsIcon(<FontAwesomeIcon icon={faWindows} size={'1x'} />);
        } else if (osType == 'Macintosh') {
            setOsIcon(<FontAwesomeIcon icon={faApple} size={'1x'} />);
        } else if (osType == 'Linux OS') {
            setOsIcon(<FontAwesomeIcon icon={faLinux} size={'1x'} />);
        }
    }, [osType, osVersion]);

    const handleDownload = () => {};

    return (
        <StyledButton
            size={size}
            {...rest}
            component={insertLink ? 'a' : null}
            leftIcon={download ? osIcon : leftIcon}
        >
            {text}
        </StyledButton>
    );
};

export default Button;
