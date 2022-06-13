import React from 'react';
import styled from '@emotion/styled';

import logo from 'assets/logo.png';
import Button from 'components/elements/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';

const Nav = styled.nav`
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    padding: 2em;
    background-color: transparent;
    position: fixed;
    top: 0px;
    left: 0px;
    display: flex;
    justify-content: space-between;
`;

const Logo = styled.img`
    height: 32px;
`;

const Navbar = () => {
    return (
        <Nav>
            <Logo src={logo} />
            <Button
                hasLink={true}
                href="https://discord.com"
                target="_blank"
                text="Join Discord"
                color="dark"
                leftIcon={<FontAwesomeIcon icon={faDiscord} size={14} />}
            />
        </Nav>
    );
};

export default Navbar;
