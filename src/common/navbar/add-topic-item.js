import { NavLink } from 'react-router-dom';
import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Add } from '../../assets/add.svg';
import colors from '../style/colors';

const StyledAdd = styled(Add)`
width: 1rem;
height: 1.25rem;
fill: ${colors.primary.opaqueScale(0.6)};
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
  color: ${colors.primary.opaqueScale(0.6)}; 
  &:hover {
    font-size: 1.5rem;
}
`;

const NavAddTopicsItem = ({ to, label, onClick }) => (
  <StyledLink to={to} onClick={onClick}>
    {' '}
    {label}
    {' '}
    <StyledAdd />
  </StyledLink>
);

export default NavAddTopicsItem;
