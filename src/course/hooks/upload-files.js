import { useReducer, useEffect } from 'react';
import axios from '../../axios';

const LOADED = 'LOADED';
const PENDING = 'PENDING';
const FILES_UPLOADED = 'FILES_UPLOADED';
const UPLOAD_ERROR = 'UPLOAD_ERROR';
const GETTING_SIGNED_URLS = 'GETTING_SIGNED_URLS';
const UPLOAD_DONE = 'UPLOAD_DONE';

const initialState = {
  files: [],
  pending: [],
  next: null,
  uploading: false,
  uploaded: [],
  status: 'idle',
  urls: {},
  userId: null,
  courseTitle: null,
  course: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'load':
      return {
        ...state,
        files: action.files,
        pending: action.files,
        userId: action.userId,
        status: LOADED,
        courseTitle: action.courseTitle,
        course: action.course,
      };
    case 'signed_urls-gotten': return {
      ...state, uploading: true, urls: action.urls, status: GETTING_SIGNED_URLS,
    };
    case 'next':
      return {
        ...state,
        next: action.next,
        status: PENDING,
      };
    case 'file-uploaded':
      return {
        ...state,
        next: null,
        pending: action.pending,
        uploaded: [
          ...state.uploaded, { title: action.prev.name, key: action.prev.webkitRelativePath },
        ],
      };
    case 'files-uploaded':
      return { ...state, uploading: false, status: FILES_UPLOADED };
    case 'saved_to_database':
      return { ...state, status: UPLOAD_DONE };
    case 'set-upload-error':
      return { ...state, uploadError: action.error, status: UPLOAD_ERROR };
    default:
      return state;
  }
};

const useFileHandlers = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const uploadFile = async (url, file) => fetch(url, {
    body: file,
    method: 'PUT',
    headers: {
      'Content-Type': file.type,
      'x-amz-acl': 'public-read',
    },
  });

  useEffect(async () => {
    if (state.status === FILES_UPLOADED) {
      await axios.post('/course/add/course', state.course);
      dispatch({ type: 'saved_to_database' });
    }
  }, [state.status]);
  useEffect(() => {
    if (state.pending.length
      && state.next == null
      && state.urls[state.pending[0].webkitRelativePath]) {
      const next = state.pending[0];
      dispatch({ type: 'next', next });
    }
  }, [state.next, state.pending, state.urls]);

  useEffect(() => {
    if (state.pending.length && state.next) {
      const { next } = state;
      uploadFile(state.urls[next.webkitRelativePath], next)
        .then(() => {
          const prev = next;
          const pending = state.pending.slice(1);
          dispatch({ type: 'file-uploaded', prev, pending });
        })
        .catch((error) => {
          console.error(error);
          dispatch({ type: 'set-upload-error', error });
        });
    }
  }, [state]);

  useEffect(() => {
    if (!state.pending.length && state.uploading) {
      dispatch({ type: 'files-uploaded' });
    }
  }, [state.pending.length, state.uploading]);

  useEffect(() => {
    if (state.files.length && !state.uploading && state.uploaded.length === 0) getUploadUrls();
  });
  const getUploadUrls = async () => {
    const urlsToUse = state.files.map((file) => file.webkitRelativePath);
    const uploadUrlResponse = await axios.post('course/uploadurl', { userId: state.userId, urls: urlsToUse });
    const { urls } = uploadUrlResponse.data;
    dispatch({ type: 'signed_urls-gotten', urls });
  };

  const upload = async (uploadData) => {
    const {
      files, userId, course, sections,
    } = uploadData;
    course.sections = sections;
    dispatch({
      type: 'load', files, userId, courseTitle: course.title, course,
    });
  };

  return {
    ...state,
    upload,
  };
};

export default useFileHandlers;
