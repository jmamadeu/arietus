import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Health Consultation | Marca sua consulta sem sair de casa</title>
        <link rel='icon' href='/favlogo.png' />
      </Head>

      <main className='bg-primary-default w-screen h-screen flex justify-center items-center'>
        <div className='max-w-2xl w-full '>
          {/* <Image
            src='/logo.png'
            width={250}
            height={80}
            className='self-center'
          /> */}
          <h1 className='font-body text-2xl text-primary-main'>
            Health Consultation
          </h1>
        </div>
      </main>
    </div>
  );
}
