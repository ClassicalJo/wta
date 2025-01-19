import React from 'react';
import { Link } from 'react-router';

type Props = {
  link: string;
  text: string;
};
export default function EntityLink({ link, text }: Props) {
  return (
    <Link to={link}>
      <div className='aspect-square rounded-lg border-slate-500 border-2 flex justify-center items-center'>
        <p className='font-bold text-purple-800 text-l text-center'>{text}</p>
      </div>
    </Link>
  );
}
