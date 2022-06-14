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
import OsSniffer from '../../utils/osSniffer';

const StyledButton = styled(MantineButton)``;

const Button = (props) => {
    const { text, size, insertLink, download, ...rest } = props;
    const [osType, setOsType] = useState('');
    const [osVersion, setOsVersion] = useState('');
    const [osIcon, setOsIcon] = useState(<FontAwesomeIcon />);

    const OsSniffer = new OsSnifferClass();

    useEffect(() => {
        if (download) {
            const currentOsType = OsSniffer.checkOsType(navigator);
            setOsType(currentOsType);
            if (osType == 'Windows OS') {
                setOsIcon(<FontAwesomeIcon icon={faWindows} />);
            } else if (osType == 'Macintosh') {
                setOsIcon(<FontAwesomeIcon icon={faApple} />);
            } else if (osType == 'Linux OS') {
                setOsIcon(<FontAwesomeIcon icon={faLinux} />);
            }
        }
    }, [download]);

    useEffect(() => {}, [osType, osVersion]);

    const handleDownload = () => {};

    return (
        <StyledButton
            size={size}
            {...rest}
            component={insertLink ? 'a' : null}
            leftIcon={download ? osIcon : null}
        >
            {text}
        </StyledButton>
    );
};

export default Button;
