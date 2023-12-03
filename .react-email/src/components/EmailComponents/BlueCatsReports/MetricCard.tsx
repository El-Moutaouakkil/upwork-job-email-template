import { Heading, Text } from '@react-email/components';
import classNames from 'classnames';
import { IoTrendingDown, IoTrendingUp } from 'react-icons/io5';
import { formatValue } from './helpers';

export type MetricCardProps = {
  title: string;
  value: number;
  diff: number;
  diffCol: 'red' | 'green';
  currency?: '$' | '£' | '€';
};

const MetricCard = ({ title, value, diff, diffCol, currency = '£' }) => {
  const isPositive = diffCol === 'green';

  return (
    <div
      className={classNames(
        'bg-white shadow-md  rounded-md  w-[100px] h-[100px] flex flex-col justify-between items-start p-3 ',
      )}
    >
      <Heading className=" text-sm text-blue-600 m-0 p-0">{title}</Heading>
      <Text className="text-xl font-semibold m-0 p-0">
        {currency || '£'}
        {formatValue(value)}
      </Text>
      <Text
        className={classNames(
          isPositive ? 'text-green-600' : 'text-red-600',
          'text-xs flex items-center gap-1 m-0 p-0 font-bold',
        )}
      >
        <span>
          {isPositive ? '+' : '-'}
          {currency || '£'}
          {formatValue(diff)}
        </span>
        {isPositive ? <IoTrendingUp size={20} /> : <IoTrendingDown size={20} />}
      </Text>
    </div>
  );
};

export default MetricCard;
