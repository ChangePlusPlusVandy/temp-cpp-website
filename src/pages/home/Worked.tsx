import { Flex, Title, Card, ThemeIcon, CheckIcon, Text } from "@mantine/core";

const Worked: React.FC = () => {
    return (
        <Flex
            c="black"
            bg="sky"
            gap="xl"
            p="xl"
            align="center"
            direction={{ base: "column", sm: "row" }}
        >
          Where our members have worked
        </Flex>
    );
};

export default Worked;
