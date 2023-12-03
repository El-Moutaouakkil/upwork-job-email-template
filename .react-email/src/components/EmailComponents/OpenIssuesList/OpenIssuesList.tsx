import { Container, Heading, Text } from '@react-email/components';
import React, { Component } from 'react';
import { AiOutlineIssuesClose } from 'react-icons/ai';
import PMCard, { PMCardProps } from '../PMCard/PMCard';

export type OpenIssuesListData = PMCardProps[];
type OpenIssuesListProps = {
  data: OpenIssuesListData;
};

const OpenIssuesList = ({ data }: OpenIssuesListProps) => {
  if (!data) {
    return null;
  }

  const openIssuesCount = data.length;

  return (
    <Container className="my-5">
      <Heading className="pt-0 mt-0 text-base font-semibold">
        Open Customer Issues
        {openIssuesCount === 0 ? (
          <div className="flex items-center gap-x-2  ">
            <Text className="text-xs font-semibold text-gray-600">
              No open issues
            </Text>
            <AiOutlineIssuesClose className="text-red-500" />
          </div>
        ) : (
          <div className=" flex flex-col gap-0">
            {data.map((openIssue) => (
              <PMCard {...openIssue} />
            ))}
          </div>
        )}
      </Heading>
    </Container>
  );
};

export default OpenIssuesList;
