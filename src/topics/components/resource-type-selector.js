import React from 'react';
import { TypeSelectorContainer, ResourceTypeLink } from './resource-type-selector-components';

const ResourceTypeSelector = ({ setResourceType, resourceType }) => {
  console.log();
  return (
    <TypeSelectorContainer>
      <ResourceTypeLink active={resourceType === 'youtube'} onClick={() => setResourceType('youtube')}>Youtube</ResourceTypeLink>
      <ResourceTypeLink active={resourceType === 'article'} onClick={() => setResourceType('article')}>Article</ResourceTypeLink>
      <ResourceTypeLink active={resourceType === 'book'} onClick={() => setResourceType('book')}>Book</ResourceTypeLink>
      <ResourceTypeLink active={resourceType === 'udemy'} onClick={() => setResourceType('udemy')}>Udemy</ResourceTypeLink>
    </TypeSelectorContainer>
  );
};

export default ResourceTypeSelector;
