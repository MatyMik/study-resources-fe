import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Progressbar from './progressbar';
import { ItemContainer, ItemTitle } from './topic-components';
import Actions from './actions';
import { updateResource, deleteResource } from '../store/actions';
import EditTitleItem from './edit-title';

const TopicItemProgress = ({
  title, hasProgressbar, resourceType, resourceId, url, lastPageRead, numPages, archived,
}) => {
  const [itemTitle, setItemTitle] = useState(title);
  const [editMode, setEditMode] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();
  const percent = resourceType === 'book' ? (lastPageRead / numPages) * 100 : null;
  const handleItemOpen = () => {
    switch (resourceType) {
      case ('youtube'):
        history.push(`/resource/${resourceType}/${resourceId}`, { youtubeProps: { url } });
        break;
      case ('book'): {
        history.push(`/resource/${resourceType}/${resourceId}?page=${lastPageRead}`);
        break;
      }
      case ('article'):
      case ('udemy'): {
        window.open(url, '_blank');
        break;
      }
      default:
        break;
    }
    const resource = { lastActive: Date.now(), id: resourceId };
    dispatch(updateResource(resourceType, resource));
  };

  const deleteResourceHandler = () => {
    dispatch(deleteResource(resourceType, resourceId));
  };

  const updateTitleInComponentHandler = (event) => {
    setItemTitle(event.target.value);
  };

  const editModeHandler = () => {
    setEditMode(!editMode);
  };

  const updateResourceTitleHandler = () => {
    const resource = { title: itemTitle, lastActive: Date.now(), id: resourceId };
    dispatch(updateResource(resourceType, resource));
  };

  const archiveHandler = () => {
    const resource = { archived: !archived, lastActive: Date.now(), id: resourceId };
    dispatch(updateResource(resourceType, resource));
  };
  const cancelEdittingHandler = () => {
    setItemTitle(title);
    setEditMode(false);
  };

  return (
    <ItemContainer hasProgressbar={hasProgressbar}>
      { editMode
        ? (
          <EditTitleItem
            cancelHandler={cancelEdittingHandler}
            updateTitleInComponentHandler={updateTitleInComponentHandler}
            title={itemTitle}
            editHandler={updateResourceTitleHandler}
          />
        )
        : (
          <ItemTitle onClick={handleItemOpen}>
            {itemTitle}
          </ItemTitle>
        ) }
      {hasProgressbar ? <Progressbar percent={percent} /> : null}
      <Actions
        deleteHandler={deleteResourceHandler}
        archiveHandler={archiveHandler}
        editModeHandler={editModeHandler}
      />
    </ItemContainer>
  );
};

export default TopicItemProgress;
