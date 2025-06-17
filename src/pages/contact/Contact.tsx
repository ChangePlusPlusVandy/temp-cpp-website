import { Card, Grid, Title, Text, Flex, Space } from "@mantine/core";
import Shell from "../../components/Shell";

const Contact: React.FC = () => {
  

    return (
        <Shell>
            <Flex bg="sky" c="black" px="xl" h="65vh" align="center">
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
                    
                </Grid>
            </Flex>
        </Shell>
    );
};

export default Contact;
