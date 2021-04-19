import { FC } from 'react';
import { ConsultationsListProperties } from './consultations-list.types';

import { FiEdit3, FiTrash } from 'react-icons/fi';

const ConsultationsList: FC<ConsultationsListProperties> = ({
  consultations = [],
  deleteFunction = () => {},
  editFunction = () => {},
}) => {
  return (
    <>
      <tbody>
        {consultations?.map((consultation, index) => (
          <tr
            key={index}
            className='flex justify-between bg-shapes-box rounded-md p-3 items-center break-words mt-3'
          >
            <td
              className='font-semibold text-texts-primary text-xl font-title break-normal'
              style={{ maxWidth: 200 }}
            >
              <span className='text-texts-complement font-title text-base font-semibold mr-6'>
                {index + 1}
              </span>
              {consultation.title}
            </td>
            <td className='text-base text-texts-secondary font-body text-left'>
              <span className='font-semibold text-xs font-body uppercase text-texts-complement'>
                Agendado para ?
              </span>
              <br />
              {consultation?.date}
            </td>

            <td className='text-base text-texts-secondary font-body'>
              <span className='font-semibold text-xs font-body uppercase text-texts-complement'>
                {consultation?.scheduler?.name}
              </span>
              <br />
              {consultation?.scheduler?.phone}
            </td>

            <td
              className={` ${
                consultation.status === 'Em Andamento' ||
                consultation.status === 'Em Espera'
                  ? ' bg-shapes-greenLow text-shapes-green'
                  : 'bg-shapes-redLow text-secondary-default'
              } text-sm font-body font-medium rounded-3xl p-2`}
            >
              {consultation?.status}
            </td>

            <td>
              <button
                className='border border-shapes-corner p-1 rounded mr-3 focus:outline-none'
                onClick={editFunction}
              >
                <FiEdit3 size={18} className='text-texts-secondary' />
              </button>
              <button
                className='border border-shapes-corner p-1 rounded focus:outline-none'
                onClick={deleteFunction}
              >
                <FiTrash size={18} className='text-texts-secondary' />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </>
  );
};

export default ConsultationsList;
