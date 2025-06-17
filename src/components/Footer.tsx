import { Flex, Grid, Title, Text } from "@mantine/core";

const Footer: React.FC = () => {
    return (
        <Flex bg="navy" w="100%" c="white" px="xl">
            <Grid w="100%">
                <Grid.Col span={4}>
                    <Title>Change++</Title>
                    <Text>Digitizing the World of Nonprofits</Text>
                </Grid.Col>
                <Grid.Col span={4}>
                    <Title>About</Title>
                </Grid.Col>
                <Grid.Col span={4}>
                    <Title></Title>
                </Grid.Col>
            </Grid>
        </Flex>
    );
};

export default Footer;
