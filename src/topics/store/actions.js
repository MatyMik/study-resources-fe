import * as actionTypes from './action-types';

export const loadResourceStart = () => ({ type: actionTypes.LOAD_RESOURCE_START });

export const loadResourceFail = (error) => ({ type: actionTypes.LOAD_RESOURCE_FAIL, error });

export const loadResourceSuccess = (resourceType, resources) => ({
  type: actionTypes.LOAD_RESOURCE_SUCCESS,
  resourceType,
  resources,
});

export const loadResource = (resourceType, topicId, history, page, itemsPerPage, archived) => ({
  type: actionTypes.LOAD_RESOURCE,
  resourceType,
  history,
  topicId,
  page,
  itemsPerPage,
  archived,
});

export const addTopicStart = () => ({ type: actionTypes.ADD_TOPIC_START });

export const addTopicSuccess = (topics) => ({ type: actionTypes.ADD_TOPIC_SUCCESS, topics });

export const addTopicFail = (error) => ({ type: actionTypes.ADD_TOPIC_FAIL, error });

export const addTopic = (topic, userId) => ({ type: actionTypes.ADD_TOPIC, topic, userId });

export const loadAllTopicsStart = () => ({ type: actionTypes.LOAD_ALL_TOPICS_START });

export const loadAllTopicsSuccess = (topics) => ({
  type: actionTypes.LOAD_ALL_TOPICS_SUCCESS,
  topics,
});

export const loadAllTopicsFail = (error) => ({ type: actionTypes.LOAD_ALL_TOPICS_FAIL, error });

export const loadAllTopics = (userId) => ({ type: actionTypes.LOAD_ALL_TOPICS, userId });

export const deleteTopicStart = () => ({ type: actionTypes.DELETE_TOPIC_START });

export const deleteTopicSuccess = (topics) => ({ type: actionTypes.DELETE_TOPIC_SUCCESS, topics });

export const deleteTopicFail = (error) => ({ type: actionTypes.DELETE_TOPIC_FAIL, error });

export const deleteTopic = (topicId, userId) => ({
  type: actionTypes.DELETE_TOPIC,
  topicId,
  userId,
});

export const addResourceStart = () => ({ type: actionTypes.ADD_RESOURCE_START });

export const addResourceFail = (error) => ({ type: actionTypes.ADD_RESOURCE_FAIL, error });

export const addResourceSuccess = () => ({ type: actionTypes.ADD_RESOURCE_SUCCESS });

export const addResource = (resourceData) => ({ type: actionTypes.ADD_RESOURCE, resourceData });

export const editTopicStart = () => ({ type: actionTypes.EDIT_TOPIC_START });
export const editTopicSuccess = (topics) => ({ type: actionTypes.EDIT_TOPIC_SUCCESS, topics });
export const editTopicFail = (error) => ({ type: actionTypes.EDIT_TOPIC_FAIL, error });
export const editTopic = (topicData, userId) => ({
  type: actionTypes.EDIT_TOPIC,
  topicData,
  userId,
});

export const updateResourceStart = () => ({ type: actionTypes.UPDATE_RESOURCE_START });

export const updateResourceSuccess = () => ({ type: actionTypes.UPDATE_RESOURCE_SUCCESS });

export const updateResourceFail = (error) => ({ type: actionTypes.UPDATE_RESOURCE_FAIL, error });

export const updateResource = (resourceType, resource) => ({
  type: actionTypes.UPDATE_RESOURCE,
  resourceType,
  resource,
});

export const deleteResourceStart = () => ({ type: actionTypes.DELETE_RESOURCE_START });

export const deleteResourceSuccess = () => ({ type: actionTypes.DELETE_RESOURCE_SUCCESS });

export const deleteResourceFail = (error) => ({ type: actionTypes.DELETE_RESOURCE_FAIL, error });

export const deleteResource = (resourceType, resourceId) => ({
  type: actionTypes.DELETE_RESOURCE,
  resourceType,
  resourceId,
});
