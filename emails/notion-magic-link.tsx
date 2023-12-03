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
                <Container className='w-full h-2/3 font-sans'>
                    <BlueCatsReports data={data} />
                </Container>
            </Body>
        </Tailwind>
    </Html>
);

export default EmailTemplate;
