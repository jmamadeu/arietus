import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

import { Input } from '../components';

export default function Home() {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>Health Consultation | Marca sua consulta sem sair de casa</title>
        <link rel='icon' href='/favlogo.png' />
      </Head>

      <main className=' bg-shapes-background w-screen h-screen '>
        <header className='bg-primary-default h-72 flex justify-center'>
          <div className='w-full max-w-5xl mt-7 flex flex-col'>
            <div className='flex justify-between'>
              <h1 className='font-body font-bold text-2xl text-primary-main'>
                Health Consultation
              </h1>

              <div className='flex'>
                <div className='flex flex-col'>
                  <p className='font-title font-semibold text-shapes-box text-xl'>
                    Emília Manuel
                  </p>
                  <span className='text-right font-normal text-texts-secondary text-sm font-title hover:text-primary-main hover:underline cursor-pointer'>
                    Ver Perfil
                  </span>
                </div>

                <div className='ml-4'>
                  <Image src='/avatar.png' width={64} height={64} />
                </div>
              </div>
            </div>

            <div style={{ height: 1 }} className='w-full bg-shapes-line '></div>
          </div>
        </header>
      </main>
    </div>
  );
}
