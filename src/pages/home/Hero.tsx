import { Badge, Button, Flex, Title, Text, Container, Image } from "@mantine/core";

const Hero: React.FC = () => {
    return (
        <Flex bg="navy" h="80vh" align="center" c="white">
            <Container>
                <Flex
                    direction={{ base: "column", sm: "row" }}
                    flex="1"
                    justify="space-between"
                    align="center"
                    gap={{ base: 0, sm: "xl" }}
                >
                    <Flex direction="column" justify="center" gap="xs" flex="1">
                        <Badge color="orange">100% Free for Nonprofits</Badge>
                        <Title c="tan" fz={{base: "10vw", sm: 75}} order={1}>
                            Change
                            <Text inherit c="orange" span>
                                ++
                            </Text>
                        </Title>
                        <Text size="lg" c="gray.4">
                            We build custom websites, apps, and digital tools
                            for nonprofits at no cost. Empowering organizations
                            to focus on their mission while we handle the tech.
                        </Text>
                        <Flex gap="sm">
                            <Button color="orange">Request Help</Button>
                            <Button color="tan" c="black">
                                Idk
                            </Button>
                        </Flex>
                    </Flex>
                    <Image w={250} src="/temp-cpp-website/cppgraphic.svg" />
                </Flex>
            </Container>
        </Flex>
    );
};

export default Hero;
