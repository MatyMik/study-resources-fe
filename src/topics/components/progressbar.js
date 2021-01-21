import React from 'react';
import styled from 'styled-components';
import colors from '../../common/style/colors';

const ProgressbarContainer = styled.div`
    border: 1px solid ${colors.primary.opaqueScale(0.6)};
    display:grid;
    overflow: hidden;
    border-radius: 5px;
    grid-template-columns: ${(props) => props.percent}fr ${(props) => 100 - props.percent}fr;
    background-color: white;
    box-shadow:0px 1px 2px 2px rgba(0,0,0,0.25);
`;

const Percentage = styled.div`
    background-color: ${colors.terciary.opaque(0.8)};
    color: ${colors.primary.main};
    border-right: 1px solid ${colors.primary.opaqueScale(0.6)};
    overflow: hidden;
    text-align: center;
`;

const Progressbar = ({ percent }) => (
  <ProgressbarContainer percent={percent}>
    <Percentage>
      {percent}
      %
    </Percentage>
  </ProgressbarContainer>
);

export default Progressbar;
