import styled from 'styled-components';
import colors from '../../common/style/colors';

export const AddSectionContainer = styled.div`
    // border: 2px solid ${colors.secondary.main};
    color: ${colors.primary.main};
    font-weight: bold;
    border-radius: 5px;
`;

export const Title = styled.div`
    display: grid;
    justify-content: center;
    margin: 1rem auto;
`;

export const InputContainer = styled.div`
    width: 90%;
    margin: auto;
`;

export const Input = styled.input`
    border: 1px solid ${colors.secondary.main};
    border-radius: 5px;
`;
export const LabeLContainer = styled.div``;

export const SectionTitleEditContainer = styled.div`
    width: 90%;
    margin: 1rem auto;
`;

export const InputRow = styled.div`
    display: grid;
    grid-template-columns: 5fr 2fr;
    @media (max-width: 600px) {
        grid-template-columns: 1fr;
    }
`;

export const AddButton = styled.button`
    background-color: ${colors.terciary.main};
    border: 1px solid ${colors.primary.main};
    border-radius: 5px;
    margin: auto;
`;

export const ButtonRow = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
`;

export const ButtonFullRow = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: 1rem auto;
`;

export const CancelButton = styled.button`
    background-color: ${colors.primary.opaque};
    border: 1px solid ${colors.primary.main};
    border-radius: 5px;
    margin: auto;
`;

export const AddVideoPlaceholder = styled.div`
opacity: 0.2;  
  width: 90%;
    margin: 0.5rem auto;
    border: 2px solid ${colors.secondary.main};
    border-radius: 5px;
    display: grid;
    grid-template-columns: 1fr 2fr 10fr;
    height: 2rem;
    align-items: center;

    &:hover {
      opacity:1;
    }

    @media (max-width: 800px) {
      grid-template-columns: 1fr 2fr 2fr;
    }

    @media (min-width: 1200px) {
      grid-template-columns: 1fr 2fr 5fr;
    }
`;

export const VideoListContainer = styled.div`
    
`;

export const AddVideoContainer = styled.div`
    width: 90%;
    margin: 2rem auto;
`;
