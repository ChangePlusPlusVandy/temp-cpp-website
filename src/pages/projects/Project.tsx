import { Flip } from "@gfazioli/mantine-flip";
import { Card, Image, ScrollArea, Text, Title } from "@mantine/core";
import { useHover } from "@mantine/hooks";
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
    const { hovered, ref } = useHover();

    return (
        <Flip h={350} w="100%" ref={ref}>
            <Flip.Target>
                <Card
                    bd={hovered ? "2px solid black" : "1px solid black"}
                    style={
                        hovered ? { cursor: "pointer" } : { cursor: "default" }
                    }
                    h={350}
                    shadow="sm"
                    padding="lg"
                    radius="md"
                    withBorder
                >
                    <Card.Section>
                        <Image
                            src={imageSrc}
                            height={275}
                            alt="Norway"
                        />
                    </Card.Section>

                    <Title ta="center" fw={500} order={2}>
                        {title}
                    </Title>
                </Card>
            </Flip.Target>
            <Flip.Target>
                <Card
                    bd={hovered ? "2px solid black" : "1px solid black"}
                    style={
                        hovered ? { cursor: "pointer" } : { cursor: "default" }
                    }
                    h={350}
                    shadow="sm"
                    padding="lg"
                    radius="md"
                    withBorder
                >
                    <ScrollArea h={350}>
                        <Text>{description}</Text>
                    </ScrollArea>
                </Card>
            </Flip.Target>
        </Flip>
    );
};

export default Project;
