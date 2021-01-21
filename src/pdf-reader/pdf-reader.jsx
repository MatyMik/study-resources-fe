import React, { useState } from 'react';
import { pdfjs } from 'react-pdf';
// import styled from 'styled-components';
import PdfWrapper from './pdf-reader-wrapper';
import pdf from '../pdfs/1.pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Pdf = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  // const file = 'https://drive.google.com/file/d/1cUTDL1_DQVB6xgypjC42uEMCcI2NJdsX/view?usp=sharing';

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div>
      <PdfWrapper
        data={pdf}
        onDocumentLoadSuccess={onDocumentLoadSuccess}
        pageNumber={pageNumber}
      />
      <p>
        Page
        {' '}
        {pageNumber}
        {' '}
        of
        {' '}
        {numPages}
        {' '}
        {Math.floor(pageNumber / (numPages / 100)) }
        {' '}
        %
      </p>
      <button type="submit" onClick={() => setPageNumber(pageNumber + 1)}>next page</button>
      <button type="submit" onClick={() => setPageNumber(pageNumber - 1)}>previous page</button>
      <iframe title="clean code" src="https://www.youtube.com/embed/playlist?list=PLvoRnBMs-P-XOPEGb4gUGYEnoKPOK19Ge" />
    </div>
  );
};

export default Pdf;
