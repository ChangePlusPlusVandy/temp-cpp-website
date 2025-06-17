import { Flex, Title, Card, ThemeIcon, CheckIcon, Text } from "@mantine/core";

const Worked: React.FC = () => {
    return (
        <Flex
            c="black"
            bg="sky"
            gap="xl"
            p="xl"
            direction={{ base: "column", sm: "row" }}
        >
            <Title order={2} ta="center">
                Where our members have worked
            </Title>
        </Flex>
    );
};

export default Worked;
