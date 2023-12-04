import {
    Body,
    Container,
    Head,
    Html,
    Preview,
    Tailwind,
    Text,
} from "@react-email/components";
import MetricCard from "../.react-email/src/components/EmailComponents/MetricCardGroup/MetricCard";
import MetricCardGroup, {
    BlueCatsReportsData,
} from "../.react-email/src/components/EmailComponents/MetricCardGroup/MetricCardGroup";
import PMCard from "../.react-email/src/components/EmailComponents/PMCardGroup/PMCard";
import PMCardGroup, {
    OpenIssuesListData,
} from "../.react-email/src/components/EmailComponents/PMCardGroup/PMCardGroup";
import ReportOverview from "../.react-email/src/components/EmailComponents/ReportOverview/ReportOverview";

// give me some fake data to work with
const blueCatsReportsData: BlueCatsReportsData = [
    {
        title: "MRR",
        value: 1234,
        diff: 123,
        diffCol: "green",
    },
    {
        title: "Revs MTD",
        value: 459343456,
        diff: 123,
        diffCol: "red",
    },
    {
        title: "MRR",
        value: 1234,
        diff: 123,
        diffCol: "green",
    },
    {
        title: "Revs MTD",
        value: 459343456,
        diff: 123,
        diffCol: "red",
    },
];

const groupCardData: OpenIssuesListData = [
    {
        title: "Save user personal settings on server as well - too many don't allow cookies/localStorage",
        list: "Doing",
        dueDate: new Date("2024-10-10"),
        isNew: true,
        members: [
            {
                avatarUrl: "https://avatars.githubusercontent.com/u/100001?v=4",
            },
            {
                avatarUrl: "https://avatars.githubusercontent.com/u/100002?v=4",
            },
            {
                avatarUrl: "https://avatars.githubusercontent.com/u/100003?v=4",
            },
            {
                avatarUrl: "https://avatars.githubusercontent.com/u/100004?v=4",
            },
            {
                avatarUrl: "https://avatars.githubusercontent.com/u/100005?v=4",
            },
        ],
    },
    {
        title: "Fix issue with data syncing in the mobile app",
        list: "To Do",
        dueDate: new Date("2021-11-15"),
        isNew: false,
        members: [
            {
                avatarUrl: "https://avatars.githubusercontent.com/u/100006?v=4",
            },
            {
                avatarUrl: "https://avatars.githubusercontent.com/u/100007?v=4",
            },
            {
                avatarUrl: "https://avatars.githubusercontent.com/u/100008?v=4",
            },
        ],
    },
    {
        title: "Implement new feature: Real-time collaboration",
        list: "In Progress",
        dueDate: new Date("2021-12-01"),
        isNew: true,
        members: [
            {
                avatarUrl: "https://avatars.githubusercontent.com/u/100009?v=4",
            },
            {
                avatarUrl: "https://avatars.githubusercontent.com/u/100010?v=4",
            },
        ],
    },
];

export const EmailTemplate = () => {
    const newOppenIssuesCount = groupCardData
        .slice(0, 2)
        .filter((card) => card.isNew).length;

    const inProgressCardsCount = groupCardData.slice(2).length;

    const metricCardGrowth = blueCatsReportsData
        .slice(0, 2)
        .filter((card) => card.diffCol === "green");

    return (
        <Html>
            <Head />
            <Preview>Log in with this magic link</Preview>
            <Tailwind>
                <Body className='bg-white h-[100vh] '>
                    <Container
                        className='font-sans
                bg-slate-50 w-[288px] p-4 border border-solid border-slate-200 rounded-md
                '>
                        <ReportOverview
                            greeting='Welcome to your daily email dashboard.'
                            newOppenIssuesCount={newOppenIssuesCount}
                            inProgressCardsCount={inProgressCardsCount}
                            metricCardGrowth={metricCardGrowth.length}
                        />

                        <MetricCardGroup
                            title='Blue Cat reports'
                            data={blueCatsReportsData.slice(0, 2)}
                        />
                        <PMCardGroup
                            title='Open Customer Issues'
                            data={groupCardData.slice(0, 2)}
                        />
                        <PMCardGroup
                            title='In Progress Cards'
                            data={groupCardData.slice(2)}
                        />
                        <MetricCardGroup
                            title='Time in list'
                            data={blueCatsReportsData}
                            alignVertical
                        />
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    );
};

export default EmailTemplate;
