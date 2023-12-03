import {
    Body,
    Container,
    Head,
    Html,
    Preview,
    Tailwind,
} from "@react-email/components";
import MetricCard from "../.react-email/src/components/EmailComponents/BlueCatsReports/MetricCard";
import BlueCatsReports, {
    BlueCatsReportsData,
} from "../.react-email/src/components/EmailComponents/BlueCatsReports/BlueCatsReports";
import PMCard from "../.react-email/src/components/EmailComponents/PMCard/PMCard";
import OpenIssuesList, { OpenIssuesListData } from "../.react-email/src/components/EmailComponents/OpenIssuesList/OpenIssuesList";

// give me some fake data to work with
const data: BlueCatsReportsData = [
    {
        title: "MRR",
        value: 1234,
        diff: 123,
        diffCol: "green",
    },
    {
        title: "Revs MTD",
        value: 1234,
        diff: 123,
        diffCol: "red",
    },
];

const OpenIssuesData: OpenIssuesListData = [
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



export const EmailTemplate = () => (
    <Html>
        <Head />
        <Preview>Log in with this magic link</Preview>
        <Tailwind>
            <Body className='bg-white h-[100vh] '>
                <Container
                    className='font-sans
                bg-slate-50 w-[212px] p-4 border border-solid border-slate-200 rounded-md
                '>
                    <BlueCatsReports data={data} />
                    <OpenIssuesList data={[]} />
                </Container>
            </Body>
        </Tailwind>
    </Html>
);

export default EmailTemplate;
