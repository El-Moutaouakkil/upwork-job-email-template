import { IoTrendingUp, IoTrendingDown } from 'react-icons/io5'; // MetricCard.tsx
import { Heading, Tailwind, Text } from '@react-email/components';
import classNames from 'classnames';
import { formatValue } from './helpers';
// import styles from "./MetricCard.module.css";
import './test.css';
import React from 'react';

type MetricCardProps = {
  title: string;
  value: number;
  diff: number;
  diffCol: 'red' | 'green';
  currency?: '$' | '£' | '€';
};

const MetricCard = ({
  title,
  value,
  diff,
  diffCol,
  currency = '£',
}: MetricCardProps) => {
  return (
    <div className=" shadow-md  rounded-md  w-[100px] h-[100px] flex flex-col justify-between items-start p-3 ">
      <Heading className=" text-sm text-blue-600 m-0 p-0">{title}</Heading>
      <Text className="text-xl font-semibold m-0 p-0">
        {currency || '£'}
        {formatValue(value)}
      </Text>
      <Text
        className={classNames(
          {
            'text-red-600': diffCol === 'red',
            'text-green-600': diffCol === 'green',
          },
          ' flex items-center gap-1 m-0 p-0 font-semibold ',
        )}
      >
        {diffCol === 'green' ? (
          <>
            <IoTrendingUp size={20} />
            <span>{diff}+ </span>
          </>
        ) : (
          <>
            <IoTrendingDown />
            <span>{diff}- </span>
          </>
        )}
      </Text>
    </div>
    // <Tailwind>
    // </Tailwind>
  );
};

export default MetricCard;
