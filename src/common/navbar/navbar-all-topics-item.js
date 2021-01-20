import { NavLink } from 'react-router-dom';
import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Arrow } from '../../assets/arrow.svg';
import colors from '../style/colors';

const StyledArrow = styled(Arrow)`
width: 1rem;
height: 1.25rem;
fill: ${colors.primary.main};
justify-self: center;
`;

const activeClassName = 'nav-item-active';

const StyledLink = styled(NavLink).attrs({ activeClassName })`
  text-decoration: none;
  font-weight: bold;
  justify-self: flex-end;
  font-size: 1.25rem;
  color: ${colors.primary.main};


  &.${activeClassName} {
    color: red;
  }
`;

const LinkContainer = styled.div`
  display: grid;
  grid-template-columns: 4fr 1fr;
  justify-content: center;
  align-items: center;
`;

const NavAllTopicsItem = ({ to, label }) => (
  <LinkContainer>
    <StyledLink to={to}>
      {' '}
      {label}
      {' '}
    </StyledLink>
    <StyledArrow />
  </LinkContainer>
);

export default NavAllTopicsItem;
