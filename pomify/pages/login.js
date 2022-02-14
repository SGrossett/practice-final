import {getProviders, signIn } from 'next-auth/react';

function Login() {
  return (
    <div>This is the login page</div>
  )
}

export default Login;

export async function GetServerSideProps() {
  const providers = await getProviders();

  return {
    props: {
      providers
    }
  }
}