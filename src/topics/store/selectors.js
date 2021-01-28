import { createSelector } from 'reselect';

export const selectTopic = (state) => state.topic;

export const selectLoading = createSelector(
  selectTopic,
  (topic) => topic.loading,
);

export const selectResources = createSelector(
  selectTopic,
  (topic) => topic.resources,
);

export const selectTopics = createSelector(
  selectTopic,
  (topic) => topic.topics,
);

export const selectArticles = createSelector(
  selectTopic,
  (topic) => topic.article,
);

export const selectBooks = createSelector(
  selectTopic,
  (topic) => topic.book,
);
export const selectYoutubeLinks = createSelector(
  selectTopic,
  (topic) => topic.youtube,
);
export const selectUdemys = createSelector(
  selectTopic,
  (topic) => topic.udemy,
);
