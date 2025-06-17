import {
    Flex,
    Badge,
    Title,
    Button,
    Text,
    Grid,
    ThemeIcon,
    CheckIcon,
    Card,
} from "@mantine/core";
import { IconFreeRights } from "@tabler/icons-react";

const Mission: React.FC = () => {
    return (
        <Flex
            c="black"
            bg="sky"
            gap="xl"
            p="xl"
            align="center"
            direction={{ base: "column", sm: "row" }}
        >
            <Flex direction="column" flex="1">
                <Title order={2}>Our Mission</Title>
                <Text>
                    We believe every nonprofit deserves access to professional
                    technology solutions. Our volunteer developers, designers,
                    and project managers donate their time to build custom
                    digital tools that help nonprofits amplify their impact.
                </Text>
            </Flex>

            <Flex direction="column" gap="xs" flex="1">
                <Card bg="white">
                    <Flex align="center" gap="md">
                        <ThemeIcon size="xl">
                            <IconFreeRights
                                style={{ width: "70%", height: "70%" }}
                            />
                        </ThemeIcon>
                        <Flex direction="column">
                            <Title order={3}>100% Free</Title>
                            <Text c="dimmed">
                                All our services are completely free for
                                qualifying nonprofits. No hidden costs, ever.
                            </Text>
                        </Flex>
                    </Flex>
                </Card>
                <Card bg="white">
                    <Flex align="center" gap="md">
                        <ThemeIcon>
                            <CheckIcon />
                        </ThemeIcon>
                        <Title order={3}>Experienced Volunteers</Title>
                    </Flex>

                    <Text c="dimmed">
                        Our team includes experienced developers, designers, and
                        project managers from top tech companies.
                    </Text>
                </Card>
            </Flex>
        </Flex>
    );
};

export default Mission;
