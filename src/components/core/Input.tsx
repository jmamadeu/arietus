import React from 'react';

interface Props {
  name: string;
  label?: string;
}

type InputProps = JSX.IntrinsicElements['input'] & Props;

const Input: React.FC<InputProps> = ({
  name,
  label,
  className = '',
  ...rest
}) => {
  return (
    <>
      <label className='text-base text-texts-secondary font-title font-medium'>
        {label || ''}
      </label>

      <input
        name={name}
        {...rest}
        className={`${className} mt-4 bg-shapes-box border border-shapes-corner
 outline-none rounded-md h-14 font-medium pl-6 w-80 font-title text-base text-texts-secondary placeholder-texts-complement`}
      />
    </>
  );
};

export default React.memo(Input);
