import { Flip } from "@gfazioli/mantine-flip";
import {
    ActionIcon,
    Card,
    Flex,
    Image,
    ScrollArea,
    Space,
    Text,
    Title,
} from "@mantine/core";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import type React from "react";

interface ProjectProps {
    title: string;
    description: string;
    imageSrc: string;
}

const Project: React.FC<ProjectProps> = ({
    title,
    description,
    imageSrc,
}: ProjectProps) => {
    return (
        <Flip h={350} w="100%">
            <Card h={350} shadow="sm" padding="lg" radius="md">
                <Card.Section>
                    <Image src={imageSrc} height={275} alt="Norway" />
                </Card.Section>
                <Flex h="100%" flex="1" justify="space-between" align="end">
                    <Title fw={500} order={2} size="xl">
                        {title}
                    </Title>
                    <Flip.Target>
                        <Flex justify="end">
                            <ActionIcon color="dimmed" variant="subtle">
                                <IconArrowRight />
                            </ActionIcon>
                        </Flex>
                    </Flip.Target>
                </Flex>
            </Card>

            <Card h={350} shadow="sm" padding="lg" radius="md">
                <ScrollArea h={350}>
                    <Text>{description}</Text>
                </ScrollArea>
                <Space h="md" />
                <Flip.Target>
                    <Flex>
                        <ActionIcon color="dimmed" variant="subtle">
                            <IconArrowLeft />
                        </ActionIcon>
                    </Flex>
                </Flip.Target>
            </Card>
        </Flip>
    );
};

export default Project;
