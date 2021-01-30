import { useEffect, useState } from 'react';
import { arrayDeepComparison } from '../../common/utils/helpers';

const useSelectLoadedResource = (data) => {
  const {
    loading,
    resourceType,
    articles,
    books,
    youtubeLinks,
    udemys,
    archived,
    archivedArticles,
    archivedBooks,
    archvedYoutubeLinks,
    archivedUdemys,
  } = data;
  const prevResources = data.resources;
  const [resources, setResources] = useState(prevResources);
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
          default:
            if (!arrayDeepComparison(resources, books))setResources(books);
        }
      } else {
        switch (resourceType) {
          case ('article'):
            if (!arrayDeepComparison(resources, articles)) { setResources(archivedArticles); }
            break;
          case ('book'):
            if (!arrayDeepComparison(resources, books))setResources(archivedBooks);
            break;
          case ('youtube'):
            if (!arrayDeepComparison(resources, youtubeLinks))setResources(archvedYoutubeLinks);
            break;
          case ('udemy'):
            if (!arrayDeepComparison(resources, udemys))setResources(archivedUdemys);
            break;
          default:
            if (!arrayDeepComparison(resources, books))setResources(archivedBooks);
        }
      }
    }
  }, [resourceType, loading]);
  return resources;
};

export default useSelectLoadedResource;
