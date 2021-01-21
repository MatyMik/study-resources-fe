import React from 'react';
import { TypeSelectorContainer, ResourceTypeLink } from './resource-type-selector-components';

const ResourceTypeSelector = ({ topic }) => (
  <TypeSelectorContainer>
    <ResourceTypeLink to={`/${topic}/youtube`}>Youtube</ResourceTypeLink>
    <ResourceTypeLink to={`/${topic}/article`}>Article</ResourceTypeLink>
    <ResourceTypeLink to={`/${topic}/book`}>Book</ResourceTypeLink>
    <ResourceTypeLink to={`/${topic}/udemy`}>Udemy</ResourceTypeLink>
  </TypeSelectorContainer>
);

export default ResourceTypeSelector;
