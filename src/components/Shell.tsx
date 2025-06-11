import {
    AppShell,
    Group,
    Burger,
    UnstyledButton,
    NavLink,
    Button,
    Image,
    Flex,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import type { PropsWithChildren } from "react";
import logo from "../assets/2023 Word Logo (Classic) (1).png";

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
                    <Flex h="100%" component="a" href="/">
                        <Image src={logo} />
                    </Flex>
                    <Burger
                        opened={opened}
                        onClick={toggle}
                        hiddenFrom="sm"
                        size="sm"
                    />

                    <Group ml="xl" flex="1" justify="end" visibleFrom="sm">
                        <UnstyledButton component="a" href="/about">
                            About
                        </UnstyledButton>
                        <UnstyledButton component="a" href="/projects">
                            Projects
                        </UnstyledButton>
                        <UnstyledButton component="a" href="/about">
                            The Team
                        </UnstyledButton>
                        <UnstyledButton component="a" href="/contact">
                            Contact Us
                        </UnstyledButton>
                    </Group>
                </Group>
            </AppShell.Header>

            <AppShell.Navbar py="md" px="lg" bg="navy" c="white">
                <UnstyledButton>Home</UnstyledButton>
                <UnstyledButton>Blog</UnstyledButton>
                <UnstyledButton>Contacts</UnstyledButton>
                <UnstyledButton>Support</UnstyledButton>
            </AppShell.Navbar>

            <AppShell.Main>{children}</AppShell.Main>
        </AppShell>
    );
};

export default Shell;
