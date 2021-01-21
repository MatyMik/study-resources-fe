import React from 'react';
import styled from 'styled-components';
import colors from '../../common/style/colors';
import { ReactComponent as Edit } from '../../assets/edit.svg';
import { ReactComponent as Delete } from '../../assets/trash.svg';

const ActionsContainer = styled.div`
display: grid;
justify-content: center;
grid-template-columns: 1fr 1fr;
`;

const EditLink = styled(Edit)`
    fill: ${colors.primary.main};
    height:1rem;
    width: 1rem;
    justify-self: center;
`;

const DeleteLink = styled(Delete)`
    fill: ${colors.primary.main};
    height:1rem;
    width: 1rem;
    justify-self: center;
`;

const Actions = ({ deleteHandler, editHandler }) => (
  <ActionsContainer>
    <EditLink onclick={editHandler} />
    <DeleteLink onclick={deleteHandler} />
  </ActionsContainer>
);

export default Actions;
