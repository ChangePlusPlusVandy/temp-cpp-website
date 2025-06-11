import {
    Flex,
    Badge,
    Title,
    Button,
    Text,
    Grid,
    ThemeIcon,
    CheckIcon,
} from "@mantine/core";

const Impact: React.FC = () => {
    return (
        <Flex c="white" bg="navy" direction="column" p="xl">

            <Grid>
                <Grid.Col span={4}>
                    <Flex direction="column" align="center">
                        <Title c="orange">50+</Title>
                        <Text c="gray.4">Nonprofits Served</Text>
                    </Flex>
                </Grid.Col>
                <Grid.Col span={4}>
                    <Flex direction="column" align="center">
                 
                        <Title c="orange">$100K+</Title>
                        <Text c="gray.4">
                            Value Delivered
                        </Text>
                    </Flex>
                </Grid.Col>
                <Grid.Col span={4}>
                    <Flex direction="column" align="center">
                 
                        <Title c="orange">90+</Title>
                        <Text c="gray.4">
                            Active Volunteers
                        </Text>
                    </Flex>
                </Grid.Col>
            </Grid>
        </Flex>
    );
};

export default Impact;
