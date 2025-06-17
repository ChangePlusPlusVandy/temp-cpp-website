import {
    Flex,
    Container,
    Badge,
    Title,
    Button,
    Text,
    Grid,
    Card,
    Center,
    Image,
    Group,
    Paper,
    Stack,
    Switch,
} from "@mantine/core";
import Shell from "../../components/Shell";
import { Flip } from "@gfazioli/mantine-flip";
import Project from "./Project";

const Projects: React.FC = () => {
    const data = [
        {
            year: "2020-2021",
            projects: [
                { organization: "Test", description: "ello" },
                { organization: "Test", description: "ello" },
                { organization: "Test", description: "ello" },
            ],
        },
    ];

    return (
        <Shell>
            <Flex bg="tan" align="center" c="orange" p="xl">
                <Container w="100%">
                    <Grid w="100%">
                        {data.map((year) => (
                            <>
                                <Grid.Col>
                                    <Title order={2}>{year.year}</Title>
                                </Grid.Col>
                                {year.projects.map((project) => (
                                    <Grid.Col span={{ base: 12, sm: 6 }}>
                                        <Project
                                            title={project.organization}
                                            description={project.description}
                                            imageSrc=""
                                        />
                                    </Grid.Col>
                                ))}
                            </>
                        ))}
                    </Grid>
                </Container>
            </Flex>
        </Shell>
    );
};

export default Projects;
