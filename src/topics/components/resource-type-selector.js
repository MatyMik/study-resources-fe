import React from 'react';
import { TypeSelectorContainer, ResourceTypeLink } from './resource-type-selector-components';

const ResourceTypeSelector = ({ setResourceType, resourceType }) => (
  <TypeSelectorContainer>
    <ResourceTypeLink active={resourceType === 'youtube'} onClick={() => setResourceType('youtube')}>Youtube</ResourceTypeLink>
    <ResourceTypeLink active={resourceType === 'article'} onClick={() => setResourceType('article')}>Article</ResourceTypeLink>
    <ResourceTypeLink active={resourceType === 'book'} onClick={() => setResourceType('book')}>Book</ResourceTypeLink>
    <ResourceTypeLink active={resourceType === 'udemy'} onClick={() => setResourceType('udemy')}>Udemy</ResourceTypeLink>
    <ResourceTypeLink active={resourceType === 'course'} onClick={() => setResourceType('course')}>Course</ResourceTypeLink>
  </TypeSelectorContainer>
);

export default ResourceTypeSelector;
