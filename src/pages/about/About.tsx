import { Card, Grid, Title, Text, Flex, Space, Timeline } from "@mantine/core";
import Shell from "../../components/Shell";

const About: React.FC = () => {
    const people = [
        {
            name: "Helen Wu",
            role: "President",
        },
        {
            name: "Leo Zhang",
            role: "President",
        },
        {
            name: "Michelle Xu",
            role: "VP of Operations",
        },
        {
            name: "Divija Katakam",
            role: "VP of Operations",
        },
        {
            name: "Jayden Park",
            role: "VP of Design",
        },
        {
            name: "Janice Chung",
            role: "VP of Marketing",
        },
        {
            name: "Yifei Fang",
            role: "VP of Events",
        },
        {
            name: "Jimmy Baek",
            role: "VP of Product",
        },
        {
            name: "Joseph Quinn",
            role: "VP of Tech",
        },
        {
            name: "Jason Lee",
            role: "VP of Finance",
        },
    ];

    return (
        <Shell>
            <Flex bg="sky" p="xl" align="center">
                <Timeline active={0} reverseActive bulletSize={22}>
                    <Timeline.Item title="2019">
                        Change++ was founded as a project by a small group of
                        Vanderbilt University students seeking to code for good.
                    </Timeline.Item>
                    <Timeline.Item title="2023">
                        Change++ achieved 501(c)(3) status as an organization
                        (registered as "Change Plus Plus").
                    </Timeline.Item>
                    <Timeline.Item title="Now">Test</Timeline.Item>
                </Timeline>
            </Flex>
            <Flex bg="orange" direction="column" p="xl">
                <Title order={2}>Executive Board Team</Title>
                <Space h="md" />
                <Grid>
                    {people.map((person) => (
                        <Grid.Col span={3}>
                            <Card
                                bd="2.5px solid navy"
                                withBorder
                                bg="tan"
                                c="black"
                            >
                                <Title size="xl" order={1}>
                                    {person.name}
                                </Title>
                                <Text>{person.role}</Text>
                            </Card>
                        </Grid.Col>
                    ))}
                </Grid>
            </Flex>
        </Shell>
    );
};

export default About;
