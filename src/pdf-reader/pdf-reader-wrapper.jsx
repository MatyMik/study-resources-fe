import React, { useState, useRef, useEffect } from 'react';
import throttle from 'lodash/throttle';
import { Document, Page } from 'react-pdf';
import styled from 'styled-components';

const Div = styled.div`
height: 100vh;
display: flex;
`;

const Wrapper = styled.div`
height: 100vh;
`;

const Container = styled.div`
width: 60%;
`;

export default function PDFWrapper({ data, onDocumentLoadSuccess, pageNumber }) {
  const [initialWidth, setInitialWidth] = useState(null);
  const pdfWrapper = useRef();

  const setPdfSize = () => {
    setInitialWidth(pdfWrapper.current.getBoundingClientRect().width);
  };

  useEffect(() => {
    window.addEventListener('resize', throttle(setPdfSize, 3000));
    setPdfSize();
    return () => {
      window.removeEventListener('resize', throttle(setPdfSize, 3000));
    };
  });

  return (
    <Div
      id="row"
    >
      <Wrapper id="placeholderWrapper" />
      <Container id="pdfWrapper" ref={pdfWrapper}>
        <Document
          file={data}
          onLoadSuccess={onDocumentLoadSuccess}
          noData=""
          loading=""
        >
          <Page pageNumber={pageNumber} loading="" width={initialWidth} />
        </Document>
      </Container>
    </Div>
  );
}
