import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  Container, Title, TrashIcon, ActionButtonsContainer, EditTopic,
} from './components/topic-components';
import EditTopicSection from './components/edit-title';
import { deleteTopic, loadResource, editTopic } from './store/actions';
import { selectUserId } from '../auth/store/selectors';
import {
  selectArticles, selectBooks, selectYoutubeLinks, selectUdemys, selectLoading,
} from './store/selectors';
import Pagination from './pagination/pagination';
import ResourceTypeSelector from './components/resource-type-selector';
import ListOfResources from './list-of-resources';
import { arrayDeepComparison } from '../common/utils/helpers';

const Topic = (props) => {
  const topicId = props
  && props.location
  && props.location.topicProps
  && props.location.topicProps.topicId;
  const title = props
  && props.location
  && props.location.topicProps
  && props.location.topicProps.title;
  const [resourceType, setResourceType] = useState('book');
  const [page, setPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [editTitleMode, setEditTitleMode] = useState(false);
  const [newTitle, setNewTitle] = useState(title);

  const dispatch = useDispatch();
  const history = useHistory();
  const userId = useSelector((state) => selectUserId(state));
  const articles = useSelector((state) => selectArticles(state));
  const books = useSelector((state) => selectBooks(state));
  const youtubeLinks = useSelector((state) => selectYoutubeLinks(state));
  const udemys = useSelector((state) => selectUdemys(state));
  const loading = useSelector((state) => selectLoading(state));
  const [resources, setResources] = useState(books);

  const newTitleHandler = (event) => {
    setNewTitle(event.target.value);
  };

  const editTitleButtonHandler = () => {
    const topicData = { title: newTitle, topicId, lastActive: Date.now() };
    dispatch(editTopic(topicData, userId));
  };
  useEffect(() => {
    if (topicId) {
      dispatch(loadResource(resourceType, topicId, history, page, itemsPerPage));
    }
  }, [page, itemsPerPage, resourceType, topicId]);

  useEffect(() => {
    if (!loading) {
      switch (resourceType) {
        case ('article'):
          if (!arrayDeepComparison(resources, articles)) { setResources(articles); }
          break;
        case ('book'):
          if (!arrayDeepComparison(resources, books))setResources(books);
          break;
        case ('youtube'):
          if (!arrayDeepComparison(resources, youtubeLinks))setResources(youtubeLinks);
          break;
        case ('udemy'):
          if (!arrayDeepComparison(resources, udemys))setResources(udemys);
          break;
        default:
          if (!arrayDeepComparison(resources, books))setResources(books);
      }
    }
  }, [resourceType, loading]);

  const handleDelete = () => {
    dispatch(deleteTopic(topicId, userId));
  };
  const params = useParams();

  const { topic } = params;

  const firstPageHandler = () => {
    console.log(topic);
  };

  const editOpenHandler = () => {
    setEditTitleMode(true);
  };
  const editCancelHandler = () => {
    setEditTitleMode(false);
  };

  return (
    <>
      <Title>
        {editTitleMode
          ? (
            <EditTopicSection
              editHandler={editTitleButtonHandler}
              cancelHandler={editCancelHandler}
              title={newTitle}
              setTitle={newTitleHandler}
            />
          ) : title}
        <ActionButtonsContainer>
          <EditTopic onClick={editOpenHandler} />
          <TrashIcon onClick={handleDelete} />
        </ActionButtonsContainer>
      </Title>

      <Container>

        <ResourceTypeSelector
          setResourceType={setResourceType}
          resourceType={resourceType}
        />
        <ListOfResources
          topicId={topicId}
          resourceType={resourceType}
          page={page}
          itemsPerPage={itemsPerPage}
          topic={title}
          resources={resources}
        />
        <Pagination
          totalItems={201}
          page={page}
          itemsPerPage={itemsPerPage}
          firstPageHandler={firstPageHandler}
          setPage={setPage}
          setItemsPerPage={setItemsPerPage}
        />
      </Container>
    </>
  );
};

export default Topic;
