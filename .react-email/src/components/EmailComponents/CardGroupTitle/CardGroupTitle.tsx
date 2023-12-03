import { Heading } from '@react-email/components';
import React from 'react';

type CardGroupTitleProps = {
  title: string;
};

const CardGroupTitle = ({ title }: CardGroupTitleProps) => {
  return (
    <Heading className="pt-0 mt-0 text-base font-semibold">{title}</Heading>
  );
};

export default CardGroupTitle;
