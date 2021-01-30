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

export const selectArchivedArticles = createSelector(
  selectTopic,
  (topic) => topic.archivedarticle,
);

export const selectArchivedBooks = createSelector(
  selectTopic,
  (topic) => topic.archivedbook,
);
export const selectArchivedYoutubeLinks = createSelector(
  selectTopic,
  (topic) => topic.archivedyoutube,
);
export const selectArchivedUdemys = createSelector(
  selectTopic,
  (topic) => topic.archivedudemy,
);
