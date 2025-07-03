import {
    Card,
    Grid,
    Title,
    Text,
    Flex,
    Space,
    Image,
    ActionIcon,
} from "@mantine/core";
import Shell from "../../components/Shell";
import { IconMail } from "@tabler/icons-react";

import logo from "../../assets/2023 Word Logo (Classic) (1).png";

const About: React.FC = () => {
    const people = [
        {
            name: "Helen Wu",
            role: "President",
            email: "helen.wu@changeplusplus.org",
        },
        {
            name: "Leo Zhang",
            role: "President",
            email: "leo.zhang@changeplusplus.org",
        },
        {
            name: "Michelle Xu",
            role: "VP of Operations",
            email: "michelle.xu@changeplusplus.org",
        },
        {
            name: "Divija Katakam",
            role: "VP of Operations",
            email: "divija.katakam@changeplusplus.org",
        },
        {
            name: "Jayden Park",
            role: "VP of Design",
            email: "jayden.park@changeplusplus.org",
        },
        {
            name: "Janice Chung",
            role: "VP of Marketing",
            email: "janice.chung@changeplusplus.org",
        },
        {
            name: "Yifei Fang",
            role: "VP of Events",
            email: "yifei.fang@changeplusplus.org",
        },
        {
            name: "Jimmy Baek",
            role: "VP of Product",
            email: "jimmy.baek@changeplusplus.org",
        },
        {
            name: "Joseph Quinn",
            role: "VP of Tech",
            email: "joseph.quinn@changeplusplus.org",
        },
        {
            name: "Jason Lee",
            role: "VP of Finance",
            email: "jason.lee@changeplusplus.org",
        },
    ];

    return (
        <Shell>
            <Flex
                bg="sky"
                c="dark"
                p="xl"
                align="center"
                gap="xl"
                direction={{ base: "column", sm: "row" }}
            >
                <Flex>
                    <Text>
                        Change++ was founded in 2019 as a project by a small
                        group of students from Vanderbilt University seeking to
                        code for good. Since then, Change++ has obtained
                        nonprofit status and has developed over 40 large scale
                        software projects at an impressive pace for partnering
                        charitable organizations worldwide. Thanks to our
                        vibrant and diverse community of 90 active members and
                        200+ alumni, we have successfully created tangible and
                        meaningful products that assist those who need it most
                        over the course of one year. Our teams mirror the
                        structure of industry professionals in that each is
                        composed of an engineering manager, a product manager, a
                        group of developers, and a designer. As a result,
                        Change++ has become the premier computer science
                        organization at its origin university, attracting some
                        of the most promising programmers and leaders on campus.
                    </Text>
                </Flex>

                <Image w={300} src={logo} />
            </Flex>
            <Flex bg="orange" direction="column" p="xl">
                <Title order={2}>Executive Board Team</Title>
                <Space h="md" />
                <Grid>
                    {people.map((person) => (
                        <Grid.Col span={{ base: 12, sm: 3 }}>
                            <Card bg="tan" c="black">
                                <Flex justify="space-between" gap="sm">
                                    <Title size="xl" order={1}>
                                        {person.name}
                                    </Title>
                                    {person.email && (
                                        <ActionIcon
                                            color="navy"
                                            component="a"
                                            href={`mailto:${person.email}`}
                                        >
                                            <IconMail stroke={1.5} size={20} />
                                        </ActionIcon>
                                    )}
                                </Flex>

                                <Text>{person.role}</Text>
                            </Card>
                        </Grid.Col>
                    ))}
                </Grid>
            </Flex>
        </Shell>
    );
};

export default About;
