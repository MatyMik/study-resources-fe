import styled from 'styled-components';
import colors from '../../common/style/colors';
import { ReactComponent as Trash } from '../../assets/trash.svg';
import { ReactComponent as Add } from '../../assets/add.svg';
import { ReactComponent as Edit } from '../../assets/edit.svg';
import { ReactComponent as Archive } from '../../assets/archive.svg';

export const Container = styled.div`
  width:85%;
  margin: 2% 10%;
  border-left:  1px solid ${colors.primary.main};
  border-right:  1px solid ${colors.primary.main};
  border-bottom:  1px solid ${colors.primary.main};
  border-radius: 5px;
  overflow: hidden;

  @media (max-width:767px) {
      width: 75%;
      margin: 10% 5% 10% auto;
  }


`;

export const ListContainer = styled.div`
  display: grid;
  background-color: ${colors.primary.opaque};
  `;

export const ItemContainer = styled.div`
    width: 90%;
    margin: 0.5rem auto;
    border: 2px solid ${colors.secondary.main};
    border-radius: 5px;
    display: grid;
    grid-template-columns: ${(props) => (props.hasProgressbar ? '3fr 3fr 1fr;' : '6fr 1fr;')}
    height: 2rem;
    align-items: center;

    @media (min-width: 1200px) {
      grid-template-columns: ${(props) => (props.hasProgressbar ? '7fr 7fr 2fr;' : '6fr 1fr;')}
    }
`;

export const ItemTitle = styled.div`
  color: ${colors.primary.main};
  margin: 0 1rem;
  font-weight: bold;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Title = styled.div`
    color: ${colors.primary.opaque};
    text-shadow: 0px 4px 1px rgba(0,0,0,0.2);
    text-transform: uppercase;
    overflow: hidden;
    font-family: Nunito;
    font-size: ${(props) => (props.page === 'resetpassword' ? '2' : '3.125')}rem;
    font-weight: 900;
    display: grid;
    justify-content: center;
    align-self:center;
    align-items: center;
    -webkit-text-stroke: 1px ${colors.primary.main};
    filter: drop-shadow(0px 4px 4px rgba(0,0,0,0.25));
    text-align: center;
    margin: 3rem auto 0;
    position: relative;

    @media (max-width: 940px) {
        font-size: ${(props) => (props.page === 'resetpassword' ? '1.25' : '1.875')}rem;
    }
`;

export const TrashIcon = styled(Trash)`
    width: 2rem;
    height: 2rem;
    fill: ${colors.primary.opaque};
    justify-self: center;
    align-self: center;

    &:hover {
      fill: ${colors.primary.opaqueScale(0.6)};
    }


    @media (max-width: 600px) {
      width: 1rem;
      height: 1rem;
    }
`;

export const AddResourceItem = styled.div`
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

export const AddIcon = styled(Add)`
    fill: black;
    width: 1rem;
    height: 1rem;
    justify-self: center;

`;

export const EditTopic = styled(Edit)`
width: 2rem;
    height: 2rem;
    fill: ${colors.primary.opaque};
    justify-self: center;
    align-self: center;

    &:hover {
      fill: ${colors.primary.opaqueScale(0.6)};
    }


    @media (max-width: 600px) {
      width: 1rem;
      height: 1rem;
    }
`;

export const ActionButtonsContainer = styled.div`
  position: absolute;
  right: 5%;
  font-size: 1rem;
  width: 20%;

  @media (max-width: 940px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const EditTitleContainer = styled.div`
    display: grid;
    grid-template-columns: 3fr 1fr 1fr;
`;

export const EditTitleInput = styled.input``;

export const EditTitleButton = styled.div`
  justify-self: center;
  z-index:1;
  cursor: pointer;`;
export const EditTitleCancelButton = styled.div`
justify-self: center;
z-index:1;
cursor: pointer;
`;

export const ArchiveSelector = styled.div`
  text-shadow: none;
    font-family: Nunito;
    font-weight: 900;
    -webkit-text-stroke: 0;
    filter: none;
  text-decoration: none;
  color: ${colors.primary.opaque};

    &:hover {
      color: ${colors.primary.opaqueScale(0.6)};
    }

    @media (max-width: 940px) {
      display: none;
    }
`;

export const ArchiveIcon = styled(Archive)`

    display:none;

    @media (max-width:940px) {
      display: block;
      width: 2rem;
      height: 2rem;
      justify-self: center;
      align-self: center;
    fill: ${colors.primary.opaque};

    &:hover {
      fill: ${colors.primary.opaqueScale(0.6)};
    }
    }

    @media (max-width: 600px) {
      width: 1rem;
      height: 1rem;
    }
`;
