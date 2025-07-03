import { Flex, Title, Text, Grid, Transition } from "@mantine/core";
import { useWindowScroll } from "@mantine/hooks";

const Impact: React.FC = () => {
    const [scroll] = useWindowScroll();
    return (
        <Flex c="white" h="20vh" bg="navy" direction="column" p="xl">
            <Transition transition="slide-up" mounted={scroll.y > 100}>
                {(transitionStyles) => (
                    <Grid style={transitionStyles}>
                        <Grid.Col span={4}>
                            <Flex direction="column" align="center">
                                <Title c="orange">40+</Title>
                                <Text c="gray.4">Nonprofits Served</Text>
                            </Flex>
                        </Grid.Col>
                        <Grid.Col span={4}>
                            <Flex direction="column" align="center">
                                <Title c="orange">$100K+</Title>
                                <Text c="gray.4">Value Delivered</Text>
                            </Flex>
                        </Grid.Col>
                        <Grid.Col span={4}>
                            <Flex direction="column" align="center">
                                <Title c="orange">90+</Title>
                                <Text c="gray.4">Active Volunteers</Text>
                            </Flex>
                        </Grid.Col>
                    </Grid>
                )}
            </Transition>
        </Flex>
    );
};

export default Impact;
