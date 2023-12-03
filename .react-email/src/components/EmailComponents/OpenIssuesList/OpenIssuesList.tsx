import { Container, Heading, Text } from '@react-email/components';
import React, { Component } from 'react';
import { AiOutlineIssuesClose } from 'react-icons/ai';
import PMCard, { PMCardProps } from '../PMCard/PMCard';
import CardGroupTitle from '../CardGroupTitle/CardGroupTitle';

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
      <CardGroupTitle title="Open Customer Issues" />

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
    </Container>
  );
};

export default OpenIssuesList;
