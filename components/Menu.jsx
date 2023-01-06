import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import styled from 'styled-components';

const StyledLink = styled.a`
  color: #fff;
  text-decoration: none;
  font-size: 18px;
  margin-right: 20px;

  &:hover {
    color: #ccc;
    cursor: pointer;
  }
  @media (max-width: 480px) {
  .link {
    display: none;
  }
}
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60px;
  background-color: #333;
  color: #fff;

  @media (max-width: 768px) {
    .menu-button {
      display: block;
    }
  }
  @media (min-width: 768px) {
    .menu-button {
      display: none;
    }
  }
`;

const Header = () => {
  const router = useRouter();

  return (
    <HeaderContainer>
      <Link legacyBehavior href="/">
        <StyledLink>Home</StyledLink>
      </Link>
      <Link legacyBehavior href="/about">
        <StyledLink>About</StyledLink>
      </Link>
      <Link legacyBehavior href="/contact">
        <StyledLink>Contact</StyledLink>
      </Link>
      <button className="menu-button" type="button">Menu</button>
    </HeaderContainer>
  );
};

export default Header;