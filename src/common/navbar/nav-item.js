import { NavLink } from 'react-router-dom';
import React from 'react';
import styled from 'styled-components';

const activeClassName = 'nav-item-active';

const StyledLink = styled(NavLink).attrs({ activeClassName })`
  &.${activeClassName} {
    color: red;
  }
`;

const NavItem = ({ to, label }) => (
  <StyledLink to={to}>
    {' '}
    {label}
    {' '}
  </StyledLink>
);

export default NavItem;
