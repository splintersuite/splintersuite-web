import React from 'react';
import styled from '@emotion/styled';

import logo from '../assets/logo.png';

const Nav = styled.nav`
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    padding: ${({ theme }) => theme.space(4)};
    background-color: ${({ theme }) => theme.colors.primary};
`;

const Logo = styled.img`
    height: 32px;
`;

const Navbar = () => {
    return (
        <Nav>
            <Logo src={logo} />
        </Nav>
    );
};

export default Navbar;
