import { Flex, Grid, Title, Text, ActionIcon } from "@mantine/core";

import {
    IconBrandInstagram,
    IconBrandLinkedin,
    IconBrandFacebook,
    IconBrandX,
    IconMail,
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
                    <Flex gap="md" align="center" justify="end" h="100%">
                        <ActionIcon
                            component="a"
                            href="mailto:info@changeplusplus.org"
                            target="_blank"
                            variant="subtle"
                            size="lg"
                            color="white"
                        >
                            <IconMail size={100} stroke={1.5} />
                        </ActionIcon>
                        <ActionIcon
                            component="a"
                            href="https://www.instagram.com/changeplusplus/"
                            target="_blank"
                            variant="subtle"
                            size="lg"
                            color="white"
                        >
                            <IconBrandInstagram stroke={1.5} size={100} />
                        </ActionIcon>
                        <ActionIcon
                            component="a"
                            href="https://www.facebook.com/changeplusplus/"
                            target="_blank"
                            variant="subtle"
                            size="lg"
                            color="white"
                        >
                            <IconBrandFacebook stroke={1.5} size={100} />
                        </ActionIcon>
                        <ActionIcon
                            component="a"
                            href="https://www.linkedin.com/company/changeplusplus/"
                            variant="subtle"
                            size="lg"
                            color="white"
                        >
                            <IconBrandLinkedin stroke={1.5} size={100} />
                        </ActionIcon>
                        <ActionIcon
                            component="a"
                            href="https://x.com/changeplusplus"
                            variant="subtle"
                            size="lg"
                            color="white"
                        >
                            <IconBrandX size={100} stroke={1.5} />
                        </ActionIcon>
                    </Flex>
                </Grid.Col>
            </Grid>
        </Flex>
    );
};

export default Footer;
