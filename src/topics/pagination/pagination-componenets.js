import styled from 'styled-components';
import colors from '../../common/style/colors';

import { ReactComponent as FirstPageArrow } from '../../assets/first-page.svg';
import { ReactComponent as NextPageArrow } from '../../assets/next-page.svg';
import { ReactComponent as LastPageArrow } from '../../assets/last-page.svg';
import { ReactComponent as PreviousPageArrow } from '../../assets/previous-page.svg';

export const PaginationContainer = styled.div`
border-color: black;
display: grid;
grid-template-columns: 2fr 1fr;
align-content: center;
height: 3rem;
background-color: ${colors.primary.opaque};

@media (max-width: 640px) {
    grid-template-rows: 3rem 3rem;
    grid-template-columns: 1fr;
    height: 7rem;
}
`;

export const ArrowsContainer = styled.div`
display: grid;
width: 60%;
grid-template-columns: repeat(2, 1fr) 2fr repeat(2, 1fr);
margin: auto;
`;

export const FirstPage = styled(FirstPageArrow)`
fill: ${colors.primary.main};
width: 1rem;
height: 1rem;
justify-self: center;
`;

export const PreviousPage = styled(PreviousPageArrow)`
fill: ${colors.primary.main};
width: 1rem;
height: 1rem;
justify-self: center;
`;

export const NextPage = styled(NextPageArrow)`
fill: ${colors.primary.main};
width: 1rem;
height: 1rem;
justify-self: center;
`;

export const LastPage = styled(LastPageArrow)`
fill: ${colors.primary.main};
width: 1rem;
height: 1rem;
justify-self: center;
`;

export const TextContainer = styled.div`
text-align: center;
color: ${colors.primary.main};
`;
