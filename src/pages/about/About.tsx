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
            role: "VP of Ops",
        },
        {
            name: "idk",
            role: "lol",
        },
    ];

    return (
        <Shell>
            <Flex bg="sky" p="xl" align="center">
                <Timeline active={0} reverseActive bulletSize={22}>
                    <Timeline.Item title="2019">Test</Timeline.Item>
                    <Timeline.Item title="2023">Test</Timeline.Item>
                    <Timeline.Item title="Now">Test</Timeline.Item>
                </Timeline>
            </Flex>
            <Flex direction="column" p="xl">
                <Title order={2}>Executive Board Team</Title>
                <Space h="md" />
                <Grid>
                    {people.map((person) => (
                        <Grid.Col span={3}>
                            <Card withBorder bg="sky" c="black">
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
