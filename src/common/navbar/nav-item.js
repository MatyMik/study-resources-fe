import { NavLink } from 'react-router-dom';
import React from 'react';
import styled from 'styled-components';
import colors from '../style/colors';

const activeClassName = 'nav-item-active';

const StyledLink = styled(NavLink).attrs({ activeClassName })`
  text-decoration: none;
  font-weight: bold;
  color: ${colors.primary.main};
  font-size: 1.25rem;

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
