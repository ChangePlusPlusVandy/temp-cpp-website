import { Flex, Title, Text, Grid, Card, List, Button } from "@mantine/core";

const Involved: React.FC = () => {
    return (
        <Flex c="white" bg="orange" direction="column" p="xl">
            <Title order={2}>Get Involved</Title>
            <Text>
                Whether you're a nonprofit needing help or a tech professional
                wanting to give back, there's a place for you in our community.
            </Text>
            <Grid align="stretch">
                <Grid.Col flex="1" span={{ base: 12, sm: 6 }}>
                    <Flex
                        justify="space-between"
                        flex="1"
                        h="100%"
                        direction="column"
                        gap="xs"
                    >
                        <Title order={3}>Are you a nonprofit?</Title>
                        <Text>
                            If you're a nonprofit organization looking for tech
                            solutions, we'd love to help.
                        </Text>
                        <List>
                            <List.Item>
                                Must be a registered 501(c)(3) nonprofit
                            </List.Item>
                            <List.Item>
                                Clear project scope and timeline
                            </List.Item>
                            <List.Item>Dedicated point of contact</List.Item>
                            <List.Item>
                                Commitment to project collaboration
                            </List.Item>
                        </List>
                        <Button color="tan" autoContrast>
                            Whoopie
                        </Button>
                    </Flex>
                </Grid.Col>
                <Grid.Col flex="1" span={{ base: 12, sm: 6 }}>
                    <Flex
                        justify="space-between"
                        flex="1"
                        h="100%"
                        direction="column"
                        gap="xs"
                    >
                        <Title order={3}>Want to Volunteer?</Title>
                        <Text>
                            Join our community of tech professionals making a
                            difference.
                        </Text>
                        <List>
                            <List.Item>
                                Developers, designers, project managers
                            </List.Item>
                            <List.Item>Flexible time commitment</List.Item>
                            <List.Item>Remote-friendly opportunities</List.Item>
                            <List.Item>Skill-building and networking</List.Item>
                        </List>
                        <Button color="tan" autoContrast>Whoopie</Button>
                    </Flex>
                </Grid.Col>
            </Grid>
        </Flex>
    );
};

export default Involved;
