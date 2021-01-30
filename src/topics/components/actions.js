import React from 'react';
import styled from 'styled-components';
import colors from '../../common/style/colors';
import { ReactComponent as Edit } from '../../assets/edit.svg';
import { ReactComponent as Delete } from '../../assets/trash.svg';
import { ReactComponent as Archive } from '../../assets/archive.svg';

const ActionsContainer = styled.div`
display: grid;
justify-content: center;
grid-template-columns: 1fr 1fr 1fr;
`;

const EditLink = styled(Edit)`
    fill: ${colors.primary.main};
    height:1rem;
    width: 1rem;
    justify-self: center;
    cursor: pointer;
`;

const ArchiveLink = styled(Archive)`
    fill: ${colors.primary.main};
    height:1rem;
    width: 1rem;
    justify-self: center;
    cursor: pointer;
`;

const DeleteLink = styled(Delete)`
    fill: ${colors.primary.main};
    height:1rem;
    width: 1rem;
    justify-self: center;
    cursor: pointer;
`;

const Actions = ({ deleteHandler, editModeHandler, archiveHandler }) => (
  <ActionsContainer>
    <EditLink onClick={editModeHandler} />
    <DeleteLink onClick={deleteHandler} />
    <ArchiveLink onClick={archiveHandler} />
  </ActionsContainer>
);

export default Actions;
