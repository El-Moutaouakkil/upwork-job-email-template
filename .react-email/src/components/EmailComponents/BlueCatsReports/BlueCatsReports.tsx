import { Container, Heading } from '@react-email/components';

import MetricCard, { MetricCardProps } from './MetricCard';

export type BlueCatsReportsData = MetricCardProps[];
type BlueCatsReportsProps = {
  data: BlueCatsReportsData;
};

const BlueCatsReports = ({ data }: BlueCatsReportsProps) => {
  if (!data) {
    return null;
  }
  if (data.length > 2)
    throw new Error('BlueCatsReports should accept a maximum of 2 metrics');

  return (
    <Container className=" bg-slate-50 w-fit p-4 border border-solid border-slate-200 rounded-md">
      <Heading className="pt-0 mt-0 text-lg font-semibold">Blue Cat Reports</Heading>
      <div className=" flex flex-row gap-3">
        {data.map((metric) => (
          <MetricCard {...metric} />
        ))}
      </div>
    </Container>
  );
};

export default BlueCatsReports;
