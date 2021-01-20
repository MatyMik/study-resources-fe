import styled from 'styled-components';
import colors from '../common/style/colors';

export const Container = styled.div`
    width: 60%;
    margin: 5% auto;
    background-color: ${colors.primary.opaque(0.1)};
    border-radius: 10px;
    border: 1px solid #3e09f6;
    position: relative;

    &:after {
    content: "";
    width: 99.5%;
    height: 99.6%;
    top: 4px;
    background-color: rgba(0,0,0,0.15);
    box-shadow: 3px 2px 4px 4px rgba(0,0,0,0.15);
    border-radius: 10px;
    position: absolute;
    z-index: -1;
    }
`;

export const Title = styled.div`
    color: ${colors.primary.opaque(0.1)};
    text-shadow: 0px 4px 1px rgba(0,0,0,0.2);
    text-transform: uppercase;
    overflow: hidden;
    font-family: Nunito;
    font-size: ${(props) => (props.page === 'resetpassword' ? '2' : '3.125')}rem;
    font-weight: 900;
    display: grid;
    justify-content: center;
    align-self:center;
    align-items: center;
    -webkit-text-stroke: 1px ${colors.primary.main};
    filter: drop-shadow(0px 4px 4px rgba(0,0,0,0.25));
    text-align: center;
    margin: 3rem auto;

    @media (max-width: 940px) {
        font-size: ${(props) => (props.page === 'resetpassword' ? '1.25' : '1.875')}rem;
    }
`;

export const InputContainer = styled.div`
    display: grid;
    grid-template-rows: 1fr 2fr 2fr;
`;

export const Input = styled.input`
    width: 80%;
    margin: auto;
    border: 1px solid ${(props) => (props.error && props.isTouched ? 'red' : colors.terciary.main)};

    ${(props) => (props.error && props.isTouched && 'color: red;')}
    height: 3rem;
    border-radius: 10px;
    &:focus {
        outline:none;
    }
`;

export const Label = styled.label`
    display: grid;
    align-items: flex-end;
    font-weight: 900;
    margin-left: 10%;
    font-size: 1.25rem;
    color: ${colors.terciary.main}
`;

export const Button = styled.button`
    background-color: ${colors.terciary.opaque(0.8)};
    color: ${colors.primary.opaque(0.6)};
    border: 2px solid ${colors.primary.main};
    align-self: flex-end;
    justify-self: center;
    padding: 0.5rem 2.5rem;
    border-radius: 0.625rem;
    font-size: 1.25rem;
    font-weight: bold;
    font-family: Nunito;
    position: relative;
    margin: auto;

    &:after {
        content: "";
        width: 98%;
        height: 99.6%;
        top: 2px;
        right:1px;
        background-color: rgba(0,0,0,0.15);
        box-shadow: 1px 2px 4px 2px rgba(0,0,0,0.25);
        border-radius: 10px;
        position: absolute;
        z-index: -1;
    }
`;

export const TextContainer = styled.div`
    margin-left: 10%;
    color: ${colors.terciary.main};
    font-size: 1.25rem;
    font-weight: bold;
    ${(props) => (props.rows > 1 ? 'padding-bottom:1.25em;' : '')}
    align-self: center;

    @media (max-width: 600px) {
        font-size: 0.875rem;
        padding-bottom: 0.875em;
    }
`;

export const RedirectText = styled.span`
    cursor: pointer;
    color: ${colors.primary.main}
`;

export const LinkContainer = styled.div`
    display: grid;
    grid-template-rows: repeat(${(props) => props.rows}, 1fr);
    ${(props) => (props.rows > 1 ? 'margin-top:5%;' : '')}
`;

export const Center = styled.div`
    display: grid;
    justify-content: center;
    align-items: center;
    margin: 2rem auto;
`;

export const Error = styled.div`
    margin-left: 10%;
    color: red;
    font-size: 1.25rem;
`;
