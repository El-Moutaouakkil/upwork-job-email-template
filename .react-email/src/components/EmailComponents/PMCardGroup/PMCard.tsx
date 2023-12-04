import { Container, Heading, Text } from '@react-email/components';
import classNames from 'classnames';
import React from 'react';

export type PMCardProps = {
  title: string;
  list: 'Doing' | 'To Deploy' | 'In Progress' | 'To Do' | 'Done';
  dueDate: Date;
  isNew: boolean;
  members: { avatarUrl: string }[];
};

const PMCard = ({ title, list, dueDate, isNew, members }: PMCardProps) => {
  const isDueDatePassed = dueDate < new Date();
  const membersCount = members.length;

  return (
    <Container className="w-full bg-white rounded-md shadow-md   my-2 pl-3 pr-5 relative ">
      {isNew && (
        <Text className="absolute top-0 right-0 m-0 py-0.5 px-1 bg-green-500 rounded-sm text-[0.6rem] leading-3 font-semibold text-white ">
          New
        </Text>
      )}
      <Text className="block p-1 text-sm font-semibold mb-0 ">{title}</Text>
      <div className="grid grid-cols-4 items-center pt-0 mt-0">
        <Text className="w-fit  text-xs whitespace-nowrap text-overflow-ellipsis font-semibold bg-yellow-300 px-1  text-yellow-700 border border-solid border-yellow-400 rounded-sm ">
          {list}
        </Text>
        <Text
          className={classNames(
            'col-span-2 justify-self-end text-xs font-semibold',
            isDueDatePassed &&
              'px-1 bg-red-200 text-red-600 rounded-sm border border-solid border-red-400 ',
          )}
        >
          {dueDate.toLocaleDateString()}
        </Text>
        <Container className="relative">
          {membersCount > 1 && (
            <>
              <div className="w-6 h-6 rounded-full bg-gray-200 absolute -bottom-2 -right-1">
                <div className="w-2 h-2 text-[0.6rem] leading-3 font-bold text-gray-600 absolute -top-1 right-0 ">
                  +{membersCount - 1}
                </div>
              </div>
            </>
          )}
          <div className="w-6 h-6 rounded-full  absolute right-0 -bottom-3 block ">
            <img
              className="block w-full h-full rounded-full shadow-md shadow-gray-600"
              src={members[0].avatarUrl}
              alt="avatar"
            />
          </div>
        </Container>
      </div>
    </Container>
  );
};

export default PMCard;
