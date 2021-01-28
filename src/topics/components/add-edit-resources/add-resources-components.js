import styled from 'styled-components';
import colors from '../../../common/style/colors';
import { ReactComponent as Book } from '../../../assets/book.svg';

export const AddResourceContainer = styled.div`
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

export const Title = styled.div`
    color: ${colors.primary.opaqueScale(0.2)};
    text-shadow: -1px 3px 3px rgba(0,0,0,0.2);
    text-transform: uppercase;
    font-family: Nunito;
    font-size: 2.5rem;
    font-weight: 900;
    -webkit-text-stroke: 1px ${colors.primary.main};
    text-align: center;
    margin: 2rem auto;
`;

export const ResourceTypeSelectorContainer = styled.div` 
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    justify-content: space-around;

    @media (max-width:769px) { 
        width: 92.5%;
        margin: auto;
    }
    @media (max-width:500px) {
        width: 92.5%;
        margin: auto;
        justify-content: flex-start;
    }
    
`;

export const ResourceTypeSelector = styled.div`
    border-radius: 5px;
    text-decoration: none;
    text-align: center;
    border: 1px solid ${(props) => (props.active ? colors.primary.main : colors.secondary.main)};
    color: ${(props) => (props.active ? colors.primary.opaqueScale(0.2) : colors.secondary.opaque(0.2))};
    text-shadow: -1px 3px 3px rgba(0,0,0,0.2);
    text-transform: uppercase;
    font-family: Nunito;
    font-size: 1.5rem;
    font-weight: 900;
    width:70%;
    margin: auto;
    -webkit-text-stroke: 1px ${(props) => (props.active ? colors.primary.main : '#09f6b4')};
    filter: drop-shadow(0px 4px 4px rgba(0,0,0,0.25));
    cursor: pointer;

    @media (min-width: 769px) {
        ${(props) => (props.active ? `background-color: ${colors.primary.opaqueScale(0.1)};` : '')};
    }

    @media (max-width:769px) {
        font-size: 1.25rem;
        text-shadow: none;
        font-weight: bold;
        -webkit-text-stroke: none;
        margin: 0;
        border: none;
        justify-self: flex-start;
    }
    @media (max-width:500px) {
        font-size: 0.75rem;
        text-shadow: none;
        font-weight: bold;
        margin: 0;
        justify-self: flex-start;
        background-color: none;
    }
`;

export const Input = styled.input`
    width: 92.5%;
    margin: auto;
    display: block;
    outline: none;
    border: 1px solid ${colors.secondary.main};
    border-radius: 5px;
    background-color: ${colors.primary.opaque};
    font-size: 1rem;

    &:focus {
        outline: none;
        border: 1px solid ${colors.secondary.main}
    }
`;

export const InputLabel = styled.div`
    color: ${colors.primary.opaqueScale(1)};
    font-weight: bold;
    margin-left: 3.75%;
    margin-bottom: 1rem;
`;

export const FileInputLabel = styled.label`
    width: 92.5%;
    display: block;
    margin: 1rem auto;
    outline: none;
    border: 1px solid ${colors.secondary.main};
    border-radius: 5px;
    display: grid;
    align-items: center;
    grid-template-columns: 1fr 30fr;
    font-size: 1rem;

    &:focus {
        outline: none;
        border: 1px solid ${colors.secondary.main}
    }
`;

export const FileInput = styled.input`
    opacity: 0;
    position: absolute;
    z-index: -1;
`;

export const BookIcon = styled(Book)`
    fill: ${colors.secondary.main};
    width: 1rem;
    height: 1rem;
    justify-self: center;
`;

export const InputContainer = styled.div`
    margin: 2rem auto 1rem auto;
`;

export const TopicSelector = styled.select`
    width: 92.5%;
    font-size: 1rem;
    display: block;
    margin: 1rem auto;
    outline: none;
    border: 1px solid ${colors.secondary.main};
    border-radius: 5px;
`;

export const FullButton = styled.button`
    border-radius: 5px;
    border: 2px solid ${colors.primary.main};
    background-color: ${colors.terciary.main};
    justify-self: flex-end;
    padding: 0.25rem 2rem;
    margin-right: 1rem;
`;

export const EmptyButton = styled.button`
    border-radius: 5px;
    border: 2px solid ${colors.primary.main};
    background-color: ${colors.primary.opaque};
    margin-left: 1rem;
    justify-self: flex-start;
    padding: 0.25rem 2rem;
`;

export const ButtonLine = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: 2rem auto;
`;

export const ErrorText = styled.div`
    width: 92.5%;
    color: ${colors.quarter.main};
`;
