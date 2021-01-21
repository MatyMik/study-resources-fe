import React from 'react';
import RowNumberSelector from './row-number-selector';
import {
  PaginationContainer, ArrowsContainer, FirstPage, PreviousPage, NextPage, LastPage, TextContainer,
} from './pagination-componenets';

const Pagination = ({
  totalItems, page, itemsPerPage, firstPageHandler,
}) => {
  const firstItemOnPage = (page - 1) * itemsPerPage + 1;
  const lastItemOnPage = page * itemsPerPage;

  return (
    <PaginationContainer>
      <ArrowsContainer>
        <FirstPage onClick={firstPageHandler} />
        <PreviousPage />
        <TextContainer>...</TextContainer>

        <NextPage />
        <LastPage />
      </ArrowsContainer>
      <RowNumberSelector
        totalItems={totalItems}
        page={page}
        itemsPerPage={itemsPerPage}
        firstItemOnPage={firstItemOnPage}
        lastItemOnPage={lastItemOnPage}
      />
    </PaginationContainer>
  );
};

export default Pagination;
