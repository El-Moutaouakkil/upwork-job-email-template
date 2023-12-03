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
                    <PMCard
                        title={
                            "Save use personal settings on server as well - too many don't allow cookies/localStorage"
                        }
                        list={"Doing"}
                        dueDate={new Date("2021-10-10")}
                        isNew
                        members={[
                            {
                                avatarUrl:
                                    "https://avatars.githubusercontent.com/u/100000?v=4",
                            },
                            {
                                avatarUrl:
                                    "https://avatars.githubusercontent.com/u/100003?v=4",
                            },
                            {
                                avatarUrl:
                                    "https://avatars.githubusercontent.com/u/100003?v=4",
                            },
                            {
                                avatarUrl:
                                    "https://avatars.githubusercontent.com/u/100003?v=4",
                            },
                            {
                                avatarUrl:
                                    "https://avatars.githubusercontent.com/u/100003?v=4",
                            },
                        ]}
                    />
                </Container>
            </Body>
        </Tailwind>
    </Html>
);

export default EmailTemplate;
