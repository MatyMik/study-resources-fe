import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import {
  selectEmailError, selectLoading, selectPasswordError, selectConfirmPasswordError,
} from './store/selectors';
import {
  Container, Input, InputContainer, Label, Button, TextContainer, RedirectText, Title,
  LinkContainer, Center, Error,
} from './auth-componenets';
import {
  createAuthData, emailPages, passwordPages, confirmPasswordPages,
} from '../common/utils/helpers';

const AuthLayout = ({
  buttonHandler, page, redirectHandler, passwordRedirectHandler,
}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [emailTouched, setEmailTouched] = useState(false);
  const [passwordTouched, setPasswordTouched] = useState(false);
  const [confirmPasswordTouched, setConfirmPasswordTouched] = useState(false);
  const emailError = useSelector((state) => selectEmailError(state));
  const isLoading = useSelector((state) => selectLoading(state));
  const passwordError = useSelector((state) => selectPasswordError(state));
  const confirmPasswordError = useSelector((state) => selectConfirmPasswordError(state));

  const titleLabel = page === 'signup' ? 'Sign up' : page === 'login' ? 'Login' : page === 'resetpassword' ? 'Reset Password' : 'Forgot Password?';
  const buttonLabel = page === 'signup' ? 'Sign up' : page === 'login' ? 'Login' : page === 'resetpassword' ? 'Reset Password' : 'Reset Password';

  const height = page === 'signup' ? 3 : page === 'forgotpassword' ? 1 : 2;
  const redirectText = page === 'signup' ? 'Already signed up? Login ' : page === 'login' ? 'Not yet registered? Sign up ' : 'Back to login ';

  const sendHandler = () => {
    const authData = createAuthData(page, email, password, confirmPassword);
    buttonHandler(authData);
    setEmailTouched(true);
    setPasswordTouched(true);
    setConfirmPasswordTouched(true);
  };

  const emailInputHandler = (event) => {
    setEmailTouched(false);
    setEmail(event.target.value);
  };

  const passwordInputHandler = (event) => {
    setPasswordTouched(false);
    setPassword(event.target.value);
  };

  const confirmPasswordHandler = (event) => {
    setConfirmPasswordTouched(false);
    setConfirmPassword(event.target.value);
  };

  const resetData = () => {
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setEmailTouched(false);
    setPasswordTouched(false);
    setConfirmPasswordTouched(false);
  };
  const onRedirect = () => {
    redirectHandler();
    resetData();
  };

  const onForgotRedirect = () => {
    passwordRedirectHandler();
    resetData();
  };

  return (
    <>
      {isLoading ? 'Loading...' : (
        <Container height={height}>
          <Title page={page}><span>{titleLabel}</span></Title>
          {emailPages.includes(page) ? (
            <InputContainer touched={emailTouched}>
              <Label>E-mail address</Label>
              <Input type="email" value={email} isTouched={emailTouched} onChange={emailInputHandler} touched={emailTouched} error={emailError} />
              {(emailTouched && emailError && emailError.length > 0) && (
              <Error>
                {emailError}
                {' '}
              </Error>
              )}
            </InputContainer>
          ) : null}
          {passwordPages.includes(page) ? (
            <InputContainer touched={passwordTouched}>
              <Label>Password</Label>
              <Input type="password" value={password} isTouched={passwordTouched} onChange={passwordInputHandler} touched={passwordTouched} error={passwordError} />
              {(passwordTouched && passwordError && passwordError.length > 0) && (
              <Error>
                {passwordError}
                {' '}
              </Error>
              )}
            </InputContainer>
          ) : null}
          {confirmPasswordPages.includes(page) ? (
            <InputContainer touched={confirmPasswordTouched}>
              <Label>Confirm Password</Label>
              <Input type="password" value={confirmPassword} isTouched={confirmPasswordTouched} onChange={confirmPasswordHandler} touched={confirmPasswordTouched} error={confirmPasswordError} />
              {(confirmPasswordTouched && confirmPasswordError
              && confirmPasswordError.length > 0) && (
              <Error>
                {confirmPasswordError}
                {' '}
              </Error>
              )}
            </InputContainer>
          ) : null}
          <Center>
            <Button onClick={sendHandler}>{buttonLabel}</Button>

          </Center>
          <LinkContainer rows={page === 'login' ? 3 : 1}>
            <TextContainer rows={page === 'login' ? 3 : 1}>
              {redirectText}

              <RedirectText onClick={onRedirect} onKeyDown={onRedirect} role="button" tabIndex={0}>here!</RedirectText>
            </TextContainer>
            {page === 'login' && (
            <TextContainer>
              {'Forgot your password? Click '}

              <RedirectText onClick={onForgotRedirect} onKeyDown={onForgotRedirect} role="button" tabIndex={0}>reset!</RedirectText>
            </TextContainer>
            )}
          </LinkContainer>
        </Container>
      )}

    </>
  );
};

export default AuthLayout;
