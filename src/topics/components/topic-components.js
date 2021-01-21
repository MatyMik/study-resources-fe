import styled from 'styled-components';
import colors from '../../common/style/colors';

export const Container = styled.div`
  width:85%;
  margin: 10%;
  border-left:  1px solid ${colors.primary.main};
  border-right:  1px solid ${colors.primary.main};
  border-bottom:  1px solid ${colors.primary.main};
  border-radius: 5px;
  overflow: hidden;

  @media (max-width:767px) {
      width: 75%;
      margin: 10% 5% 10% auto;
  }


`;

export const ListContainer = styled.div`
  display: grid;
  background-color: ${colors.primary.opaque};
  `;

export const ItemContainer = styled.div`
    width: 90%;
    margin: 0.5rem auto;
    border: 2px solid ${colors.secondary.main};
    border-radius: 5px;
    display: grid;
    grid-template-columns: 3fr 3fr 1fr;
    height: 2rem;
    align-items: center;

    @media (min-width: 1200px) {
      grid-template-columns: 7fr 7fr 2fr;
    }
`;

export const ItemTitle = styled.div`
  color: ${colors.primary.main};
  margin-left: 1rem;
  font-weight: bold;
`;
