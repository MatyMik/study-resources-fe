import styled from 'styled-components';
import colors from '../../common/style/colors';

export const AddCourseContainer = styled.div`
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

export const TitleInputContainer = styled.div``;

export const TitleInput = styled.input`
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

export const TopicSelector = styled.select`
    width: 92.5%;
    font-size: 1rem;
    display: block;
    margin: 1rem auto;
    outline: none;
    border: 1px solid ${colors.secondary.main};
    border-radius: 5px;
`;
