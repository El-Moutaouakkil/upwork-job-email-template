import {
    Body,
    Container,
    Head,
    Html,
    Preview,
    Tailwind,
} from "@react-email/components";
import MetricCard from "../.react-email/src/components/EmailComponents/BlueCatsReports/MetricCard";

export const EmailTemplate = () => (
    <Html>
        <Head />
        <Preview>Log in with this magic link</Preview>
        <Tailwind>
            <Body className='bg-white h-[100vh] '>
                <Container className='w-full h-2/3 font-sans'>
                    <MetricCard
                        title='MRR'
                        value={23498}
                        diff={247}
                        diffCol='green'
                    />
                    <MetricCard
                        title='MRR'
                        value={3459898}
                        diff={119}
                        diffCol='red'
                    />
                </Container>
            </Body>
        </Tailwind>
    </Html>
);

export default EmailTemplate;
