import styled from 'styled-components';
import colors from '../../common/style/colors';

export const AllTopicsContainer = styled.div`
    border-radius: 5px;
    border: 1px solid ${colors.primary.main};
    width: 85%;
    margin-left:10%;
    background-color: ${colors.primary.opaque};

    @media (max-width:767px) {
        width:75%;
        margin-left: 17.5%;
    }
`;

export const TopicsContainer = styled.div`
    display: grid;
    width: 90%;
    justify-content: flex-around;
    margin: auto;
    grid-template-columns: 1fr 1fr 1fr;
    display: grid;
    align-items: center;
    column-gap: 1rem;
    row-gap: 0.5rem;
    justify-content:center;
`;

export const TopicItemContainer = styled.div`
    border-radius: 5px;
    border: 1px solid ${colors.secondary.main};
    text-align: center;
    height: 2rem;
    display: grid;
    align-items: center;
    justify-content:center;
    
`;
