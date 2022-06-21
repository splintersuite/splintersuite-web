import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { css } from 'styled-components';

import OsSnifferClass from 'utils/osSniffer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faWindows,
    faApple,
    faLinux,
} from '@fortawesome/free-brands-svg-icons';

import { Button as MantineButton } from '@mantine/core';

const StyledButton = styled(MantineButton)`
    box-shadow: 0px 14px 40px 10px rgba(0, 0, 0, 0.3);
`;

const Button = (props) => {
    const { text, size, insertLink, download, leftIcon, href, ...rest } = props;
    const [osType, setOsType] = useState('');
    const [osVersion, setOsVersion] = useState('');
    const [osIcon, setOsIcon] = useState(<FontAwesomeIcon />);
    const [downloadUrl, setDownloadUrl] = useState();

    const OsSniffer = new OsSnifferClass();

    useEffect(() => {
        if (download) {
            const currentOsType = OsSniffer.checkOsType(navigator);
            setOsType(currentOsType);
            setDownloadUrl(
                `https://splintersuite-updater-zjqp.vercel.app/download/${currentOsType}`
            );
        }
    }, []);

    useEffect(() => {
        if (osType == 'win32') {
            setOsIcon(<FontAwesomeIcon icon={faWindows} size={'1x'} />);
        } else if (osType == 'darwin') {
            setOsIcon(<FontAwesomeIcon icon={faApple} size={'1x'} />);
        } else if (osType == 'deb') {
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
            href={downloadUrl ? downloadUrl : href}
        >
            {text}
        </StyledButton>
    );
};

export default Button;
