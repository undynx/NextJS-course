import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { classnames } from '@utils/helpers';

import styles from './CategoryButton.module.scss';

type CategoryButtonProps = {
  title: string;
  image: string;
}

const CategoryButton = ({ title, image }: CategoryButtonProps) => {
  return (
    <Link href={`productos/${title}`} className={classnames(styles.link, 'w-1/6 h-56 m-5 box-shadow flex justify-center items-center bg-element')}>
      <div className='flex flex-col items-center'>
        <Image src={image} width={70} alt={''} />
        <h2 className='relative -bottom-10'>{title}</h2>
      </div>
    </Link>
  )
}

export default CategoryButton
