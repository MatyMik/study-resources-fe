import styled from 'styled-components';
import colors from '../../../common/style/colors';
import { ReactComponent as Down } from '../../../assets/move-down.svg';
import { ReactComponent as Up } from '../../../assets/move-up.svg';
import { ReactComponent as HandClosed } from '../../../assets/hand-closed.svg';
import { ReactComponent as HandOpen } from '../../../assets/open-hand.svg';

export const Container = styled.div`
width: 80%;
margin: auto;
background-color: ${colors.primary.opaque};
`;

export const Section = styled.div`
width: 50%;
background-color: ${colors.secondary.opaque(0.5)};
`;

export const Input = styled.input``;

export const Title = styled.div``;

export const DownArrow = styled(Down)`
  width: 1rem;
  height: 1rem;
  fill: blue;
`;

export const UpArrow = styled(Up)`
  width: 1rem;
  height: 1rem;
  fill: ${colors.primary.main};
`;

export const Button = styled.button`
  
`;

export const EditContainer = styled.div`

`;

export const VideoContainer = styled.div`
width: 80%;
margin-left: 20%;
display: grid;
grid-template-columns: 1fr 1fr 10fr;
`;

export const VideosContainer = styled.div``;

export const Row = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 10fr;
`;

export const ClosedHand = styled(HandClosed)`
  width: 1rem;
  height: 1rem;
  fill: ${colors.primary.main};
`;

export const OpenHand = styled(HandOpen)`
  width: 1rem;
  height: 1rem;
  fill: ${colors.primary.main};
`;

export const DragContainer = styled.div``;

export const Progressbar = styled.div`
  width: ${(props) => props.progress}%;
  background-color: ${colors.secondary.main};
  height: 1rem;
`;

export const ProgressbarContainer = styled.div`
  width:80%;
  margin: auto;
  height: 1rem;
  border: 1px solid ${colors.primary.main};
`;

export const TitleContainer = styled.div`
  width: 80%;
  margin: auto;
  display: grid;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
`;
