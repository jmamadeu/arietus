import Head from 'next/head';
import Link from 'next/link';

import { Input } from '../components';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Health Consultation | Marca sua consulta sem sair de casa</title>
        <link rel='icon' href='/favlogo.png' />
      </Head>

      <main className='bg-primary-default w-screen h-screen flex justify-center items-center'>
        <div className=' max-w-sm w-full p-9 bg-shapes-background rounded-md '>
          <h1 className='font-body font-bold text-2xl text-primary-main'>
            Health Consultation
          </h1>
          <small className='text-texts-secondary'>Faça seu login aqui!</small>
          <br />
          <br />

          <div className='flex flex-col items-center '>
            <form action=''>
              <Input
                name='email'
                label='Insira seu endereço de e-mail'
                placeholder='your@example.com'
                // className='mt-4'
              />
              <br />
              <br />
              <Input
                name='password'
                type='password'
                label='Insira uma palavra passe'
                placeholder='142rwrq'
              />

              <br />
              <small>
                <Link href='/signup'>
                  <a className='text-primary-main underline'>
                    Não tenho uma conta.
                  </a>
                </Link>
              </small>
              <br />
              <br />

              <button
                type='button'
                className='w-44 font-title h-14 bg-shapes-lines font-bold text-sm uppercase text-texts-secondary
              hover:bg-shapes-complement rounded-md transition duration-150
              outline-none focus:outline-none'
              >
                Entrar
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
