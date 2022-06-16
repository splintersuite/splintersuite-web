import React, { useEffect, useState } from 'react';
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
    z-index: 10;
    transition: 0.3s ease-in-out all;
    &.has-scrolled {
        background-color: ${({ theme }) => theme.colors.grey};
    }
`;

const Logo = styled.img`
    height: 32px;
`;

const Navbar = () => {
    const [navbar, setNavbar] = useState(false);

    const changeBackground = () => {
        console.log(window.scrollY);
        if (window.scrollY >= 76) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', changeBackground);
    });
    return (
        <Nav className={navbar ? 'has-scrolled' : ''}>
            <Logo src={logo} alt="Splintersuite Logo" />
            <Button
                insertLink={true}
                href="https://discord.gg/pnYsjYXKpf"
                target="_blank"
                text="Join Discord"
                color="dark"
                leftIcon={<FontAwesomeIcon icon={faDiscord} size={'1x'} />}
            />
        </Nav>
    );
};

export default Navbar;
