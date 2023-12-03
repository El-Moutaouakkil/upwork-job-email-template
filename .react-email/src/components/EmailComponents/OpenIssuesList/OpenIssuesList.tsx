import { Container, Heading, Text } from '@react-email/components';
import React, { Component } from 'react';
import PMCard, { PMCardProps } from '../PMCard/PMCard';

export type OpenIssuesListData = PMCardProps[];
type OpenIssuesListProps = {
  data: OpenIssuesListData;
};

const OpenIssuesList = ({ data }: OpenIssuesListProps) => {
  if (!data) {
    return null;
  }
  if (data.length === 0) return <Text>No open issues</Text>;

  return (
    <Container className="my-5">
      <Heading className="pt-0 mt-0 text-lg font-semibold">
        Open Customer Issues
        <div className=" flex flex-col gap-0">
          {data.map((openIssue) => (
            <PMCard {...openIssue} />
          ))}
        </div>
      </Heading>
    </Container>
  );
};

export default OpenIssuesList;
