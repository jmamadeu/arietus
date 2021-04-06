import Head from 'next/head';
import Link from 'next/link';

import { Input } from '../components';

export default function SignUp() {
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
          <small className='text-texts-secondary'>
            Cria uma conta rapidamente!
          </small>
          <br />
          <br />

          <div className='flex flex-col items-center '>
            <form action=''>
              <Input
                name='email'
                label='Insira seu endereço de e-mail'
                placeholder='your@example.com'
              />
              <br />
              <br />
              <Input
                name='identityNumber'
                type='text'
                label='Insira seu nome ou da sua empresa'
                placeholder='Example Example'
              />

              <br />
              <br />
              <Input
                name='password'
                type='password'
                label='Sua melhor palavra passe'
                placeholder='32rshw23i'
              />

              <br />
              <small>
                <Link href='/'>
                  <a className='text-primary-main underline'>
                    Já possuo uma conta.
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
                Criar Conta
              </button>
              <br />
              <small className='text-texts-secondary'>
                Ao criar uma conta, você concorda com os termos de uso e
                políticas de privacidade.
              </small>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
