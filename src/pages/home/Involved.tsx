import { Flex, Title, Text, Grid, Card, List, Button } from "@mantine/core";

const Involved: React.FC = () => {
    return (
        <Flex c="white" bg="orange" direction="column" p="xl">
            <Title>Get Involved</Title>
            <Text>
                Whether you're a nonprofit needing help or a tech professional
                wanting to give back, there's a place for you in our community.
            </Text>
            <Grid style={{gridAutoRows: "1fr"}}>
                <Grid.Col h="100%" span={{ base: 12, sm: 6 }}>
                    <Card>
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
                        <Button>Whoopie</Button>
                    </Card>
                </Grid.Col>
                <Grid.Col h="100%" span={{ base: 12, sm: 6 }}>
                    <Card>
                        <Title order={3}>Want to Volunteer?</Title>
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
                        <Button>Whoopie</Button>
                    </Card>
                </Grid.Col>
            </Grid>
        </Flex>
    );
};

export default Involved;
