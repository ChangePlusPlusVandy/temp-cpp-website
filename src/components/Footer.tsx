import {
    Flex,
    Grid,
    Title,
    Text,
    Badge,
    Button,
    Container,
    ActionIcon,
} from "@mantine/core";

import {
    IconBrandTwitter,
    IconBrandInstagram,
    IconBrandLinkedin,
    IconBrandFacebook,
    IconBrandX,
} from "@tabler/icons-react";

const Footer: React.FC = () => {
    return (
        <Flex p="xl" bg="navy" align="center" c="white" w="100%">
            <Grid w="100%">
                <Grid.Col span={{ base: 12, sm: 6 }}>
                    <Flex direction="column" justify="center" gap="xs">
                        <Title c="tan" order={1}>
                            Change
                            <Text inherit c="orange" span>
                                ++
                            </Text>
                        </Title>
                        <Text size="lg" c="gray.4">
                            Digitizing the World of Nonprofits.
                        </Text>
                    </Flex>
                </Grid.Col>
                <Grid.Col span={{ base: 12, sm: 6 }}>
                    <Flex direction="column" justify="space-between" h="100%">
                        <Flex align="center" gap="md" justify="space-between">
                            <Text>Email</Text>
                            <Button>info@changeplusplus.org</Button>
                        </Flex>
                        <Flex align="center" gap="md" justify="space-between">
                            <Text>Address</Text>
                            <Button>info@changeplusplus.org</Button>
                        </Flex>
                        <Flex gap="md">
                            <ActionIcon
                                component="a"
                                href="https://www.instagram.com/changeplusplus/"
                                target="_blank"
                                variant="subtle"
                                size="lg"
                            >
                                <IconBrandInstagram size={100} />
                            </ActionIcon>
                            <ActionIcon
                                component="a"
                                href="https://www.facebook.com/changeplusplus/"
                                target="_blank"
                                variant="subtle"
                                size="lg"
                            >
                                <IconBrandFacebook size={100} />
                            </ActionIcon>
                            <ActionIcon
                                component="a"
                                href="https://www.linkedin.com/company/changeplusplus/"
                                variant="subtle"
                                size="lg"
                            >
                                <IconBrandLinkedin size={100} />
                            </ActionIcon>
                            <ActionIcon
                                component="a"
                                href="https://x.com/changeplusplus"
                                variant="subtle"
                                size="lg"
                            >
                                <IconBrandX />
                            </ActionIcon>
                        </Flex>
                    </Flex>
                </Grid.Col>
            </Grid>
        </Flex>
    );
};

export default Footer;
