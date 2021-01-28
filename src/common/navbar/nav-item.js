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
    color: ${colors.quarter.opaque(0.6)};
  }
`;

const NavItem = ({
  to, label, onClick, topicId, title,
}) => {
  const clickHandler = () => {
    onClick(topicId);
  };
  return (
    <StyledLink to={{ pathname: to, topicProps: { topicId, title } }} onClick={clickHandler}>
      {' '}
      {label}
      {' '}
    </StyledLink>
  );
};
export default NavItem;
