import {getProviders, signIn } from 'next-auth/react';

function Login( { providers }) {
  return (
    <div className='flex flex-col items-center bg-black min-h-screen w-full justify-center'>
      <div className='flex ml-8 items-center justify-center'>
        <img className='w-52 mb-5' src='https://d29fhpw069ctt2.cloudfront.net/icon/image/85329/preview.svg' alt='' />
        <h1 className='text-white text-9xl'> Pomify </h1>
      </div>
     

      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button className='bg-[#18D860] text-white p-4 rounded-lg'
            onClick={() => signIn(provider.id, { callbackUrl: '/' })}
          >
            Login with {provider.name}
          </button>
        </div>
      ))}
    </div>
  )
}

export default Login;

export async function getServerSideProps() {
  const providers = await getProviders();

  return {
    props: {
      providers
    }
  }
}