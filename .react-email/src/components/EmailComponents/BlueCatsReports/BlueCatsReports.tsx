import { Container, Heading } from '@react-email/components';

import MetricCard, { MetricCardProps } from './MetricCard';
import PMCard from '../PMCard/PMCard';
import classNames from 'classnames';
import CardGroupTitle from '../CardGroupTitle/CardGroupTitle';

export type BlueCatsReportsData = MetricCardProps[];
type BlueCatsReportsProps = {
  data: BlueCatsReportsData;
};

const BlueCatReports = ({ data }: BlueCatsReportsProps) => {
  if (!data) {
    return null;
  }
  const metricCardCount = data.length;

  if (metricCardCount > 2)
    throw new Error('BlueCatsReports should accept a maximum of 2 metrics');

  return (
    <Container>
      <CardGroupTitle title=" Blue Cat Reports" />
      <div
        className={classNames(
          'flex flex-row gap-3',
          metricCardCount === 1 && 'justify-center',
        )}
      >
        {data.map((metric, idx) => (
          <MetricCard {...metric} key={idx} />
        ))}
      </div>
    </Container>
  );
};

export default BlueCatReports;
