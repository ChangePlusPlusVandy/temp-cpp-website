import { Flip } from "@gfazioli/mantine-flip";
import { Card, Image, Text, Title } from "@mantine/core";
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
                            src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
                            height={300}
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
                    <Text>{description}</Text>
                </Card>
            </Flip.Target>
        </Flip>
    );
};

export default Project;
