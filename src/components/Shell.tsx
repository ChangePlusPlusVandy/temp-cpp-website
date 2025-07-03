import {
    AppShell,
    Group,
    Burger,
    UnstyledButton,
    Button,
    Image,
    Flex,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import type { PropsWithChildren } from "react";
import logo from "../assets/2023 classic Logo (2).png";
import Footer from "./Footer";

const Shell: React.FC<PropsWithChildren> = ({ children }) => {
    const [opened, { toggle }] = useDisclosure();

    return (
        <AppShell
            header={{ height: 75 }}
            navbar={{
                width: 300,
                breakpoint: "sm",
                collapsed: { desktop: true, mobile: !opened },
            }}
            styles={{
                main: {
                    paddingTop: 75,
                    paddingLeft: 0,
                    paddingRight: 0,
                    paddingBottom: 0,
                },
            }}
            padding="sm"
        >
            <AppShell.Header bg="navy" c="white" withBorder={false}>
                <Group
                    h="100%"
                    flex="1"
                    justify="space-between"
                    align="center"
                    px="md"
                >
                    <Flex
                        h="100%"
                        py="xs"
                        component="a"
                        href="/"
                    >
                        <Image src={logo} />
                    </Flex>
                    <Burger
                    color="tan"
                        opened={opened}
                        onClick={toggle}
                        hiddenFrom="sm"
                        size="sm"
                    />

                    <Group
                        ml="xl"
                        gap="xl"
                        flex="1"
                        justify="end"
                        visibleFrom="sm"
                    >
                        <UnstyledButton
                            component="a"
                            href="/about"
                        >
                            About
                        </UnstyledButton>
                        <UnstyledButton
                            component="a"
                            href="/projects"
                        >
                            Projects
                        </UnstyledButton>

                        <Button
                            color="orange"
                            component="a"
                            href="/contact"
                        >
                            Contact Us
                        </Button>
                    </Group>
                </Group>
            </AppShell.Header>

            <AppShell.Navbar py="xl" px="lg" bg="navy" c="white" bd="none">
                <Flex direction="column" gap="sm">
                    <Button
                        color="navy"
                        component="a"
                        href="/about"
                        size="xl"
                    >
                        About
                    </Button>
                    <Button
                        component="a"
                        href="/projects"
                        size="xl"
                        color="navy"
                    >
                        Projects
                    </Button>
                    <Button
                        mt="xl"
                        size="xl"
                        color="orange"
                        component="a"
                        href="/contact"
                    >
                        Contact Us
                    </Button>
                </Flex>
            </AppShell.Navbar>

            <AppShell.Main>
                {children}
                <Footer />
            </AppShell.Main>
        </AppShell>
    );
};

export default Shell;
