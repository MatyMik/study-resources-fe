import styled from 'styled-components';
import colors from '../../common/style/colors';

export const TypeSelectorContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);

    @media (max-width:769px) {
        grid-template-columns: repeat(5, 1fr);
    }
    @media (max-width:480px) {
        grid-template-columns: 1fr 1fr 1fr;
    }
`;

export const ResourceTypeLink = styled.div`
    font-size: 1rem;
    cursor: pointer;
    border-radius: 5px 5px 0 0;
    text-decoration: none;
    text-align: center;
    border: 1px solid ${colors.primary.main};
    color: ${(props) => (props.active ? colors.primary.opaqueScale(0.2) : colors.secondary.opaque(0.2))};
    text-shadow: -1px 3px 3px rgba(0,0,0,0.2);
    text-transform: uppercase;
    font-family: Nunito;
    font-weight: 900;
    -webkit-text-stroke: 1px ${(props) => (props.active ? colors.primary.main : '#09f6b4')};
    filter: drop-shadow(0px 4px 4px rgba(0,0,0,0.25));
    ${(props) => (props.active ? `background-color: ${colors.primary.opaque};` : '')};

@media (min-width:768px) {
    font-size: 1.5rem;    
}

@media (min-width:830px) {
    font-size: 2rem;
}

@media (min-width:1000px) {
    font-size: 2rem;
}
`;
