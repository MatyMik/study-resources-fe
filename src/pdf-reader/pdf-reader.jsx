import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { pdfjs } from 'react-pdf';
import { useParams } from 'react-router';
import WebViewer from '@pdftron/webviewer';
import { useLocation } from 'react-router-dom';
import { selectFile } from './store/selectors';
import { downloadPdf } from './store/actions';
import { updateResource } from '../topics/store/actions';
import { selectUserId } from '../auth/store/selectors';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Pdf = () => {
  const viewer = useRef(null);
  const params = useParams();
  const { pdfId } = params;
  const pdf = useSelector((state) => selectFile(state));
  const userId = useSelector((state) => selectUserId(state));
  const dispatch = useDispatch();
  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }
  const query = useQuery();
  const lastPage = parseInt(query.get('page'), 10) || 1;
  console.log(lastPage);
  useEffect(() => {
    dispatch(downloadPdf(pdfId, userId));
  }, []);

  useEffect(() => {
    if (pdf) {
      WebViewer(
        {
          path: '/public',
          initialDoc: pdf,
        },
        viewer.current,
      ).then((instance) => {
        const { docViewer, Annotations } = instance;
        const annotManager = docViewer.getAnnotationManager();
        docViewer.SetPreRenderLevel = 0;
        docViewer.on('documentLoaded', () => {
          const rectangleAnnot = new Annotations.RectangleAnnotation();
          rectangleAnnot.PageNumber = lastPage;
          rectangleAnnot.X = 100;
          rectangleAnnot.Y = 150;
          rectangleAnnot.Width = 200;
          rectangleAnnot.Height = 50;
          rectangleAnnot.Author = annotManager.getCurrentUser();

          annotManager.addAnnotation(rectangleAnnot);
          annotManager.redrawAnnotation(rectangleAnnot);
          docViewer.displayPageLocation(lastPage);
        });
        docViewer.on('pageNumberUpdated', (pageNumber) => {
          const resource = {
            id: pdfId,
            lastPageRead: pageNumber,
            lastActive: Date.now(),
          };
          dispatch(updateResource('book', resource));
        });
      }).catch((err) => console.log(err));
    }
  }, [pdf]);
  return (
    <div>
      <div className="webviewer" ref={viewer} style={{ height: '100vh' }} />
    </div>
  );
};

export default Pdf;
