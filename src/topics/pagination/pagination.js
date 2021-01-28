import React from 'react';
import RowNumberSelector from './row-number-selector';
import {
  PaginationContainer, ArrowsContainer, FirstPage, PreviousPage, NextPage, LastPage, TextContainer,
} from './pagination-componenets';

const Pagination = ({
  totalItems, page, itemsPerPage, setItemsPerPage, setPage,
}) => {
  const lastPage = totalItems % itemsPerPage === 0
    ? Math.floor(totalItems / itemsPerPage)
    : Math.floor(totalItems / itemsPerPage) + 1;
  const firstItemOnPage = (page - 1) * itemsPerPage + 1;
  const lastItemOnPage = page === lastPage ? totalItems : page * itemsPerPage;

  const firstPageHandler = () => {
    setPage(1);
  };
  const previousPageHandler = () => {
    setPage(page - 1);
  };

  const lastPageHandler = () => {
    setPage(lastPage);
  };
  const nextPageHandler = () => {
    setPage(page + 1);
  };

  return (
    <PaginationContainer>
      <ArrowsContainer>
        <FirstPage onClick={firstPageHandler} />
        {page > 1 ? <PreviousPage onClick={previousPageHandler} /> : null }
        <TextContainer>...</TextContainer>

        { page === lastPage ? null : <NextPage onClick={nextPageHandler} />}
        <LastPage onClick={lastPageHandler} />
      </ArrowsContainer>
      <RowNumberSelector
        totalItems={totalItems}
        page={page}
        setItemsPerPage={setItemsPerPage}
        setPage={setPage}
        itemsPerPage={itemsPerPage}
        firstItemOnPage={firstItemOnPage}
        lastItemOnPage={lastItemOnPage}
      />
    </PaginationContainer>
  );
};

export default Pagination;
