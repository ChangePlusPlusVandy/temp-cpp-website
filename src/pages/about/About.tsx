import { Card, Grid, Title, Text, Flex, Space } from "@mantine/core";
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
            <Flex bg="sky" px="xl" h="65vh" align="center">
                <Flex
                    direction={{ base: "column", sm: "row" }}
                    flex="1"
                    justify="space-between"
                    align="center"
                    gap={{ base: 0, sm: "md" }}
                >
                    <Flex direction="column" justify="center">
                        <Title fz={75} order={1}>
                            CHANGE++
                        </Title>
                        <Text size="lg">
                            Digitizing the World of Nonprofits.
                        </Text>
                    </Flex>
                    <Text>Lol placeholder for image</Text>
                </Flex>
            </Flex>
            <Flex direction="column" p="xl">
                <Title order={2}>Executive Board Team</Title>
                <Space h="md" />
                <Grid>
                    {people.map((person) => (
                        <Grid.Col span={3}>
                            <Card withBorder bg="sky">
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
