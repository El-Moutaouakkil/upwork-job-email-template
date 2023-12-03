import { Container, Heading } from '@react-email/components';

import MetricCard, { MetricCardProps } from './MetricCard';
import PMCard from '../PMCard/PMCard';
import classNames from 'classnames';

export type BlueCatsReportsData = MetricCardProps[];
type BlueCatsReportsProps = {
  data: BlueCatsReportsData;
};

const BlueCatsReports = ({ data }: BlueCatsReportsProps) => {
  if (!data) {
    return null;
  }
  const metricCardCount = data.length;

  if (metricCardCount > 2)
    throw new Error('BlueCatsReports should accept a maximum of 2 metrics');

  return (
    <Container>
      <Heading className="pt-0 mt-0 text-base font-semibold">
        Blue Cat Reports
      </Heading>
      <div className={classNames('flex flex-row gap-3', metricCardCount === 1 && "justify-center" )}>
        {data.map((metric) => (
          <MetricCard {...metric} />
        ))}
      </div>
    </Container>
  );
};

export default BlueCatsReports;
