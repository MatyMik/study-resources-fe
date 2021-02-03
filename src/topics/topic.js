import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  Container, Title, TrashIcon, ActionButtonsContainer, EditTopic, ArchiveSelector, ArchiveIcon,
} from './components/topic-components';
import EditTopicSection from './components/edit-title';
import { deleteTopic, loadResource, editTopic } from './store/actions';
import { selectUserId } from '../auth/store/selectors';
import {
  selectArticles, selectBooks, selectYoutubeLinks, selectUdemys, selectTopicLoading,
  selectArchivedArticles, selectArchivedBooks, selectArchivedYoutubeLinks, selectArchivedUdemys,
  selectCourses, selectArchivedCourses, selectCount,
} from './store/selectors';
import Pagination from './pagination/pagination';
import ResourceTypeSelector from './components/resource-type-selector';
import ListOfResources from './list-of-resources';
// import useSelectResource from './hooks/load-resource-hook';
import { arrayDeepComparison } from '../common/utils/helpers';
import Spinner from '../common/spinner/spinner';

const Topic = (props) => {
  const topicId = props
  && props.location
  && props.location.topicProps
  && props.location.topicProps.topicId;
  const title = props
  && props.location
  && props.location.topicProps
  && props.location.topicProps.title;
  console.log(props);
  const [resourceType, setResourceType] = useState('book');
  const [page, setPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [editTitleMode, setEditTitleMode] = useState(false);
  const [newTitle, setNewTitle] = useState(title);
  const [resources, setResources] = useState([]);

  const dispatch = useDispatch();
  const history = useHistory();
  const userId = useSelector((state) => selectUserId(state));
  const articles = useSelector((state) => selectArticles(state));
  const books = useSelector((state) => selectBooks(state));
  const youtubeLinks = useSelector((state) => selectYoutubeLinks(state));
  const udemys = useSelector((state) => selectUdemys(state));
  const courses = useSelector((state) => selectCourses(state));
  const loading = useSelector((state) => selectTopicLoading(state));
  const count = useSelector((state) => selectCount(state));
  const [archived, setArchived] = useState(false);
  const archivedArticles = useSelector((state) => selectArchivedArticles(state));
  const archivedBooks = useSelector((state) => selectArchivedBooks(state));
  const archivedYoutubeLinks = useSelector((state) => selectArchivedYoutubeLinks(state));
  const archivedUdemys = useSelector((state) => selectArchivedUdemys(state));
  const archivedCourses = useSelector((state) => selectArchivedCourses(state));

  const archiveTitle = `Switch ${archived ? 'from' : 'to'} archived`;
  const newTitleHandler = (event) => {
    setNewTitle(event.target.value);
  };

  const editTitleButtonHandler = () => {
    const topicData = { title: newTitle, topicId, lastActive: Date.now() };
    dispatch(editTopic(topicData, userId));
  };
  useEffect(() => {
    if (topicId) {
      dispatch(loadResource(resourceType, topicId, history, page, itemsPerPage, archived));
    }
  }, [page, itemsPerPage, resourceType, topicId, archived]);

  useEffect(() => {
    if (!loading) {
      if (!archived) {
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
          case ('course'):
            if (!arrayDeepComparison(resources, courses))setResources(courses);
            break;
          default:
            if (!arrayDeepComparison(resources, books))setResources(books);
        }
      } else {
        switch (resourceType) {
          case ('article'):
            if (!arrayDeepComparison(resources, archivedArticles)) {
              setResources(archivedArticles);
            }
            break;
          case ('book'):
            if (!arrayDeepComparison(resources, archivedBooks)) { setResources(archivedBooks); }
            break;
          case ('youtube'):
            if (!arrayDeepComparison(resources, archivedYoutubeLinks)) {
              setResources(archivedYoutubeLinks);
            }
            break;
          case ('udemy'):
            if (!arrayDeepComparison(resources, archivedUdemys))setResources(archivedUdemys);
            break;
          case ('course'):
            if (!arrayDeepComparison(resources, archivedCourses))setResources(archivedCourses);
            break;
          default:
            if (!arrayDeepComparison(resources, archivedBooks))setResources(archivedBooks);
        }
      }
    }
  }, [resourceType, loading, archived, resources]);

  const handleDelete = () => {
    dispatch(deleteTopic(topicId, userId));
  };

  const { topic } = props.match.params;

  const firstPageHandler = () => {
    console.log(topic);
  };

  const editOpenHandler = () => {
    setEditTitleMode(true);
  };
  const editCancelHandler = () => {
    setEditTitleMode(false);
  };
  const archiveSwitcher = () => {
    setArchived(!archived);
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
          <ArchiveSelector onClick={archiveSwitcher}>{archiveTitle}</ArchiveSelector>

          <EditTopic onClick={editOpenHandler} />
          <TrashIcon onClick={handleDelete} />
          <ArchiveIcon onClick={archiveSwitcher} />
        </ActionButtonsContainer>
      </Title>

      <Container>

        <ResourceTypeSelector
          setResourceType={setResourceType}
          resourceType={resourceType}
        />
        {loading ? <Spinner>Loading</Spinner> : (
          <ListOfResources
            topicId={topicId}
            resourceType={resourceType}
            page={page}
            itemsPerPage={itemsPerPage}
            topic={title}
            resources={resources}
          />
        )}
        <Pagination
          totalItems={count}
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
