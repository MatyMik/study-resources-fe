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
  display: grid;
  grid-template-columns: 4fr 1fr;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  text-align: right;
  font-weight: bold;
  font-size: 1.25rem;
  color: ${colors.primary.main};


  &.${activeClassName} {
    color:  ${colors.quarter.opaque(0.6)};

    & svg {
      fill:  ${colors.quarter.opaque(0.6)};
    }
  }

  
`;

const NavAllTopicsItem = ({ to, label, onClick }) => (
  <StyledLink to={to} onClick={onClick}>
    {' '}
    {label}
    {' '}
    <StyledArrow />
  </StyledLink>
);

export default NavAllTopicsItem;
