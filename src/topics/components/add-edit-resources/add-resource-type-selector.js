import React from 'react';
import {
  ResourceTypeSelector, ResourceTypeSelectorContainer, InputLabel,
} from './add-resources-components';

const ResourceTypeSelectorItem = ({ resourceType, setResourceType }) => (
  <>
    <InputLabel>Choose type: </InputLabel>
    <ResourceTypeSelectorContainer>
      <ResourceTypeSelector active={resourceType === 'youtube'} onClick={() => setResourceType('youtube')}>Youtube</ResourceTypeSelector>
      <ResourceTypeSelector active={resourceType === 'article'} onClick={() => setResourceType('article')}>Article</ResourceTypeSelector>
      <ResourceTypeSelector active={resourceType === 'book'} onClick={() => setResourceType('book')}>Book</ResourceTypeSelector>
      <ResourceTypeSelector active={resourceType === 'udemy'} onClick={() => setResourceType('udemy')}>Udmey</ResourceTypeSelector>
    </ResourceTypeSelectorContainer>
  </>
);

export default ResourceTypeSelectorItem;
