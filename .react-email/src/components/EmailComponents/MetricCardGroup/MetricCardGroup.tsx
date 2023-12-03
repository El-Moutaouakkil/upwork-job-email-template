import { Container, Heading } from '@react-email/components';

import MetricCard, { MetricCardProps } from './MetricCard';
import PMCard from '../PMCard/PMCard';
import classNames from 'classnames';
import CardGroupTitle from '../CardGroupTitle/CardGroupTitle';

export type BlueCatsReportsData = MetricCardProps[];
type BlueCatsReportsProps = {
  title: string
  data: BlueCatsReportsData;
  alignVertical?: boolean;
};

const MetricCardGroup = ({
  title,
  data,
  alignVertical = false,
}: BlueCatsReportsProps) => {
  if (!data) {
    return null;
  }
  const metricCardCount = data.length;

  if (!alignVertical && metricCardCount > 2)
    throw new Error('MetricCardGroup should accept a maximum of 2 metrics when alignVertical is false');

  return (
    <Container>
      <CardGroupTitle title={title} />
      <div
        className={classNames(
          'flex flex-row gap-3',
          metricCardCount === 1 && 'justify-center',
          alignVertical && 'flex-col gap-2',
        )}
      >
        {data.map(({ alignRow, ...metric }, idx) => (
          <MetricCard {...metric} key={idx} alignRow={alignVertical} />
        ))}
      </div>
    </Container>
  );
};

export default MetricCardGroup;
