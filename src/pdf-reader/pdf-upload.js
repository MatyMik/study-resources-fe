import React, { useState, memo, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import * as pdfJs from 'pdfjs-dist';

import { uploadPdf } from './store/actions';

pdfJs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfJs.version}/pdf.worker.js`;

const PdfUploader = memo(() => {
  useEffect(() => (navigator.storage.estimate().then((estimate) => console.log(estimate))));

  const [fileName, setFileName] = useState('');
  const [numPages, setNumpages] = useState(0);
  const [fileToUpload, setFileToUpload] = useState(null);

  const dispatch = useDispatch();
  const handleFileSelection = (event) => {
    const [file] = event.target.files;
    setFileToUpload(file);
    const fr = new FileReader();

    fr.onload = () => {
      pdfJs.getDocument(fr.result).promise.then((doc) => setNumpages(doc.numPages));
    };
    fr.readAsDataURL(file);

    setFileName(file.name);
  };
  const uploadPdfHandler = () => {
    const pdfDetails = {
      numPages,
      fileName,
    };
    dispatch(uploadPdf(pdfDetails, fileToUpload));
  };
  return (
    <>
      <input type="file" onChange={handleFileSelection} />
      <button type="button" onClick={uploadPdfHandler}>Upload Pdf</button>
    </>
  );
});

export default PdfUploader;
