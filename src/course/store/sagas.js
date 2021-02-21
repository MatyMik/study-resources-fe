import { put } from 'redux-saga/effects';
import axios from '../../axios';
import {
  start, fail, addCourseSuccess, getCoursesSuccess,
  getOneCourseSuccess, updateVideoSuccess, updateCourseSuccess,
  addSectionToCourseSuccess, updateVideoByUrlSuccess,
  // uploadCourseToStorageSuccess,
} from './actions';

export function* addCourseSaga(action) {
  try {
    yield put(start());
    yield axios.post('/course/add/course', action.courseData);
    yield put(addCourseSuccess());
  } catch (err) {
    yield put(fail(err));
  }
}

export function* getCoursesSaga(action) {
  try {
    yield put(start());
    const response = yield axios.get(`/course/all/${action.topicId}`);
    const { courses } = response.data;
    yield put(getCoursesSuccess(courses));
  } catch (err) {
    yield put(fail(err));
  }
}

export function* getOneCourseSaga(action) {
  try {
    yield put(start());
    const response = yield axios.get(`/course/course/${action.courseId}`);
    const { course } = response.data;
    yield put(getOneCourseSuccess(course));
  } catch (err) {
    yield put(fail(err));
  }
}

export function* updateVideoSaga(action) {
  try {
    yield put(start());
    yield axios.put(`/course/update/video/${action.video.id}`, action.video);
    yield put(updateVideoSuccess());
  } catch (err) {
    yield put(fail(err));
  }
}

export function* updateVideoByUrlSaga(action) {
  try {
    yield put(start());
    yield axios.put('/course/update/videobyurl', action.video);
    yield put(updateVideoByUrlSuccess());
  } catch (err) {
    yield put(fail(err));
  }
}

export function* updateCourseSaga(action) {
  try {
    yield put(start());
    yield axios.put(`/course/${action.course.id}`, action.course);
    const response = yield axios.get(`/course/course/${action.course.id}`);
    const { course } = response.data;
    yield put(updateCourseSuccess(course));
  } catch (err) {
    yield put(fail(err));
  }
}

export function* updateCourseLastWatchedSaga(action) {
  try {
    yield put(start());
    yield axios.get(`/course/update/lastwatched/${action.courseId}`);
    const response = yield axios.get(`/course/course/${action.courseId}`);
    const { course } = response.data;
    yield put(updateCourseSuccess(course));
  } catch (err) {
    yield put(fail(err));
  }
}

export function* addSectionToCourseSaga(action) {
  try {
    yield put(start());
    const response = yield axios.put(`/course/update/sections/${action.course.id}`, action.course);
    const { course } = response.data;
    yield put(addSectionToCourseSuccess(course));
  } catch (err) {
    yield put(fail(err));
  }
}

// const createRequestsForUploads = (files, urls) => files.map((file) => {
//   const body = new FormData();
//   body.set('file', file);

//   const headers = new Headers();
//   headers.append('Content-Type', file.type);
//   headers.append('x-amz-acl', 'public-read');

//   return new Request(urls[file.name], {
//     body,
//     method: 'PUT',
//     headers,
//   });
// });

// export function* uploadCourseToStorageSaga(action) {
//   try {
//     yield put(start());
//     const titles = action.files.map((file) => file.name);
//     const uploadUrlResponse = yield axios.post('course/uploadurl',
// { userId: action.userId, titles });
//     const { urls } = uploadUrlResponse.data;
//     // const xhr = new XMLHttpRequest();
//     // // xhr.withCredentials = true;
//     // xhr.open('PUT', urls[action.files[0].name]);
//     // xhr.setRequestHeader('x-amz-acl', 'public-read');
//     // xhr.setRequestHeader('Content-Type', action.files[0].type);
//     // yield xhr.send(action.files[0]);
//     // yield fetch(urls[action.files[0].name], {
//     //   body: action.files[0],
//     //   method: 'PUT',
//     //   headers: {
//     //     'Content-Type': action.files[0].type,
//     //     Host: 'study-resources-test.fra1.digitaloceanspaces.com',
//     //     'x-amz-acl': 'public-read',
//     //     'Content-Length': action.files[0].size,
//     //   },

//     // });
//     // const requests = createRequestsForUploads(action.files, urls);
//     // console.log(requests);
//     // const reg = yield navigator.serviceWorker.ready;
//     // console.log(reg);
//     // const bgFetch = yield reg.backgroundFetch
//     //   .fetch(`Course-upload ${action.course.title}`, requests, {
//     //     uploadTotal: action.uploadTotal,
//     //   });
//     // bgFetch.addEventListener('progress', (data) => {
//     //   console.log((data.currentTarget.uploaded / action.uploadTotal) * 100);
//     // });
//     yield put(uploadCourseToStorageSuccess());
//   } catch (err) {
//     console.log(err);
//     yield put(fail(err));
//   }
// }
