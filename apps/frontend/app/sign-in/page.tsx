'use client';
import { View } from 'react-native';
import { styled } from '../../components';
/* eslint-disable-next-line */
export interface SignInProps {}

const CenteredWrapper = styled(View, {
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  alignContent: 'center',
  width: '100%',
  height: '100vh',
});

export function SignIn(props: SignInProps) {
  return (
    <CenteredWrapper>
      <h1>Welcome to SignIn!</h1>
    </CenteredWrapper>
  );
}

export default SignIn;
