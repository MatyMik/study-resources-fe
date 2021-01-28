import React from 'react';
import styled from 'styled-components';
import colors from '../../common/style/colors';

const RowNumberSelectorContainer = styled.div`
    display: grid;
    justify-content: center;
    grid-template-columns: 1fr 1fr;
`;

const Selector = styled.select`
    width: 50%;
    margin: auto;
`;

const RowNumberShow = styled.div`
    color: ${colors.primary.main};
    display: grid;
    justify-content: center;
    align-items: center;
`;

const RowNumberSelector = ({
  totalItems, firstItemOnPage, lastItemOnPage, setItemsPerPage, itemsPerPage,
}) => {
  const selectItemsPerPage = (event) => {
    setItemsPerPage(event.target.value);
  };
  return (
    <RowNumberSelectorContainer>
      <RowNumberShow>
        {firstItemOnPage}
        {' '}
        -
        {' '}
        {lastItemOnPage}
        {' '}
        of
        {' '}
        {totalItems}
      </RowNumberShow>
      <Selector value={itemsPerPage} onChange={selectItemsPerPage}>
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="25">25</option>
      </Selector>
    </RowNumberSelectorContainer>
  );
};

export default RowNumberSelector;
