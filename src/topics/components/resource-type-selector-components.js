import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import colors from '../../common/style/colors';

const activeClassName = 'resource-type-active';

export const TypeSelectorContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);

    @media (max-width:769px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width:400px) {
        grid-template-columns: 1fr;
    }
`;

export const ResourceTypeLink = styled(NavLink).attrs({ activeClassName })`
    border-radius: 5px 5px 0 0;
    text-decoration: none;
    text-align: center;
    border: 1px solid ${colors.primary.main};
    color: ${colors.secondary.opaque(0.2)};
    text-shadow: -1px 3px 3px rgba(0,0,0,0.2);
    text-transform: uppercase;
    font-family: Nunito;
    font-size: 2.5rem;
    font-weight: 900;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: #09f6b4;
    filter: drop-shadow(0px 4px 4px rgba(0,0,0,0.25));
    z-index: -1;
    
    &.${activeClassName} {
        background-color: ${colors.primary.opaque};
        color: ${colors.primary.opaqueScale(0.2)};
        text-shadow: -1px 3px 3px rgba(0,0,0,0.2);
        text-transform: uppercase;
        -webkit-text-stroke: 1px ${colors.primary.main};
        filter: drop-shadow(0px 4px 4px rgba(0,0,0,0.25));
      }

@media (max-width:769px) {
    font-size: 2rem;
}
`;
