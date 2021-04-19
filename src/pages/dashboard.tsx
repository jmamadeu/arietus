import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

import { FiPlus, FiEdit3, FiTrash } from 'react-icons/fi';
import { ConsultationList } from '../components';

type SummaryBadgeProps = {
  numberTotal: number;
  title: string;
};

const SummaryBadge = ({ numberTotal, title }: SummaryBadgeProps) => {
  return (
    <>
      <span className='mr-4 text-texts-complement font-body text-base'>
        <strong className='text-shapes-box font-bold font-body text-2xl'>
          {numberTotal}
        </strong>
        <br />
        {title}
      </span>
    </>
  );
};

export default function Home() {
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

            <div className='flex justify-between mt-4 items-center'>
              <div className='flex'>
                <SummaryBadge numberTotal={12} title='Consultas no total' />
                <SummaryBadge numberTotal={7} title='Em Andamento' />
                <SummaryBadge numberTotal={5} title='Encerrados' />
                <SummaryBadge numberTotal={1} title='Cancelados' />
              </div>
              <div>
                <button className='bg-primary-main rounded-md hover:bg-primary-mainLight p-2 font-bold text-sm focus:outline-none uppercase font-title text-shapes-box flex items-center'>
                  <FiPlus
                    className='bg-primary-mainLight mr-2 rounded-md hover:bg-primary-mainLight p-2 text-white  '
                    size={34}
                  />
                  Marcar Consulta
                </button>
              </div>
            </div>
          </div>
        </header>

        <section className='flex justify-center'>
          <div className='w-full max-w-5xl'>
            <table
              className='flex flex-col w-full'
              style={{ marginTop: '-40px' }}
            >
              <ConsultationList
                consultations={[
                  {
                    date: 'Hoje',
                    id: '1',
                    title: 'Ortopédia',
                    status: 'Em Andamento',
                    scheduler: {
                      name: 'João Amadeu',
                      phone: '9336784215',
                    },
                  },

                  {
                    date: 'Hoje',
                    id: '1',
                    title: 'Dentista',
                    status: 'Cancelado',
                    scheduler: {
                      name: 'João Amadeu',
                      phone: '9336784215',
                    },
                  },

                  {
                    date: 'Hoje',
                    id: '1',
                    title: 'Ginecologia',
                    status: 'Em Espera',
                    scheduler: {
                      name: 'João Amadeu',
                      phone: '9336784215',
                    },
                  },

                  {
                    date: 'Hoje',
                    id: '1',
                    title: 'Pediatria',
                    status: 'Encerrado',
                    scheduler: {
                      name: 'João Amadeu',
                      phone: '9336784215',
                    },
                  },
                ]}
              />
            </table>
          </div>
        </section>
      </main>
    </div>
  );
}
