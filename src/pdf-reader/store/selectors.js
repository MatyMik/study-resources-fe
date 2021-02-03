import { createSelector } from 'reselect';

export const selectPdf = (state) => state.pdf;

export const selectFile = createSelector(
  selectPdf,
  (pdf) => pdf.file,
);

export const selectUrl = createSelector(
  selectPdf,
  (pdf) => pdf.url,
);

export const selectLoading = createSelector(
  selectPdf,
  (pdf) => pdf.loading,
);
