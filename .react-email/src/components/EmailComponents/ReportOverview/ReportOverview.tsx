import { Container, Text } from '@react-email/components';
import React from 'react';

type Props = {
  greeting: string;
  newOppenIssuesCount: number;
  inProgressCardsCount: number;
  metricCardGrowth: number;
};

function ReportOverview({
  greeting,
  newOppenIssuesCount,
  inProgressCardsCount,
  metricCardGrowth,
}: Props) {
  return (
    <Container>
      <Text>{greeting}</Text>

      <Text className="text-sm">
        {newOppenIssuesCount > 0 && (
          <>
            There is {newOppenIssuesCount} new card in <b>Customer Issues </b>
          </>
        )}
        {newOppenIssuesCount > 0 && (
          <>
            and {inProgressCardsCount} in
            <b> In Progress Cards. </b>
          </>
        )}

        {!!metricCardGrowth && (
          <>
            <b>Blue Cat Reports MRR </b>
            growth has
            <b className="text-green-600"> turned positive</b> but most other
            metrics remain unchanged.
          </>
        )}
      </Text>
    </Container>
  );
}

export default ReportOverview;

//Todo: Be aware that how this component display information may change based on the data structure and the client requirements