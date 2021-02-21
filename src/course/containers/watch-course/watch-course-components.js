import styled from 'styled-components';
// import colors from '../../../common/style/colors';
import ReactJWPlayer from 'react-jw-player';

export const WatchCourseContainer = styled.div`
    display: grid;
    grid-template-columns: 3fr 1fr;
`;

export const WatchCourseMain = styled.main`
    margin-left:0%;
    height: 100%;
`;

export const JWPlayerContainer = styled(ReactJWPlayer);
