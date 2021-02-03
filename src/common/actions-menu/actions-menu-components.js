import styled from 'styled-components';
import colors from '../style/colors';

export const ActionsMenuContainer = styled.div`
    background-color: ${colors.primary.opaque};
    border: 1px solid ${colors.secondary.main};
    border-radius: 1rem;
    width: 85%;
    margin: 1rem 10%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-content: center;
    align-items: center;

    @media (max-width:767px) {
        width:75%;
        margin-left: 17.5%;
    }
`;

export const ActionsMenuButton = styled.div`
background-color: ${colors.secondary.main};
border: 1px solid ${colors.primary.main};
border-radius: 5px;
width: 60%;
padding: 0.25rem 0.75rem;
justify-self: center;
margin: 1rem auto;
text-align: center;
`;
