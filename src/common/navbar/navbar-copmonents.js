import styled from 'styled-components';
import colors from '../style/colors';
import { ReactComponent as LeftArrow } from '../../assets/left-arrow.svg';
import { ReactComponent as Menu } from '../../assets/menu.svg';

export const StyledLeftArrow = styled(LeftArrow)`
  align-self: flex-end;
  width: 3rem;
  height: 3rem;
  margin-right: 1rem;
  fill: ${colors.secondary.main};
`;

export const NavbarContainer = styled.div`
  border: 1px solid black;
  width: 18rem;
  height: 100%;
  background-color: ${colors.primary.opaque(0.1)};
  position: fixed;
  top: 0;
  display: flex;
  flex-direction: column;
`;

export const NavbarSection = styled.div`

  color: ${colors.secondary.opaque(0.2)};
  text-shadow: -1px 3px 3px rgba(0,0,0,0.2);
  text-transform: uppercase;
  font-family: Nunito;
  font-size: 2.5rem;
  font-weight: 900;
  margin: 3rem auto 0 auto;
  border-bottom: 3px solid ${colors.primary.main};
  width:90%;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: #09f6b4;
  filter: drop-shadow(0px 4px 4px rgba(0,0,0,0.25));
`;
export const TopicsContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(${(props) => props.numberOfTopics}, 2rem) 4rem;
  width: 80%;
  margin: 2rem auto 2rem auto;
`;

export const ClosedNavbarContainer = styled.div`
  border: 1px solid black;
  width: 5rem;
  height: 100%;
  background-color: ${colors.primary.opaque(0.1)};
  position: fixed;
  top: 0;
  display: flex;
  flex-direction: column;
`;

export const HamburgerMenu = styled(Menu)`
align-self: flex-end;
  width: 3rem;
  height: 3rem;
  margin-right: 1rem;
  fill: ${colors.secondary.main};
`;
