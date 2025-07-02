import {
    Group,
    Flex,
    List,
    TextInput,
    Textarea,
    Button,
    Title,
    Text,
    Space,
    LoadingOverlay,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import type { SubmitProps } from "./Nonprofit";

const Volunteer: React.FC<SubmitProps> = ({
    onSubmit,
    target,
    status,
}: SubmitProps) => {
    const form = useForm({
        mode: "uncontrolled",
        initialValues: {
            email: "",
            firstName: "",
            lastName: "",
            uni: "",
            message: "",
        },

        validate: {
            email: (value) =>
                /^\S+@\S+$/.test(value) ? null : "Invalid email",
            firstName: (value) =>
                value.length < 1 ? "You must input a first name." : null,
            lastName: (value) =>
                value.length < 1 ? "You must input a first name." : null,
            uni: (value) =>
                value.length < 1
                    ? "You must input the name of your home university"
                    : null,
            message: (value) =>
                value.length < 1 ? "You must input a message." : null,
        },
    });
    return (
        <form
            onSubmit={form.onSubmit((__, event) => {
                // If we reach this line, it means all validations from useForm have passed.

                // This explicitly triggers the native form submission to the 'action' URL.
                // It will only execute if validation passed.
                if (event) {
                    event.currentTarget.submit();
                }

                // This calls the parent's onSubmit to signal a successful attempt,
                // which will eventually lead to the redirect via the iframe's onload.
                onSubmit();
            })}
            method="post"
            target={target}
            action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSdgMI5CXolBgScr6848brhm_jyTGLmvwUtEuFY0oe3FP0tRyg/formResponse"
        >
            <Flex
                align="center"
                direction={{ base: "column", sm: "row" }}
                gap="xl"
            >
                <Flex direction="column" flex="1">
                    <Title>
                        Interested in{" "}
                        <Text span inherit c="orange">
                            Volunteering
                        </Text>{" "}
                        with Change++?
                    </Title>
                    <Space h="md" />
                    <Text fw={700}>
                        Note: You must be a{" "}
                        <Text span inherit c="orange">
                            university student
                        </Text>{" "}
                        interested in starting a Change++ chapter at your home
                        university.
                    </Text>
                    <Space h="md" />
                    <List>
                        <List.Item>
                            Designers, developers, project managers
                        </List.Item>
                        <List.Item>Flexible time commitment</List.Item>
                        <List.Item>Remote-friendly opportunities</List.Item>
                        <List.Item>Skill-building and networking</List.Item>
                    </List>
                </Flex>
                <Flex flex="1" direction="column" gap="xs" pos="relative">
                    <LoadingOverlay
                        visible={status}
                        zIndex={1000}
                        overlayProps={{
                            radius: "sm",
                            blur: 2,
                            color: "var(--mantine-color-sky-filled)",
                        }}
                    />
                    <Group justify="space-between">
                        <TextInput
                            flex="1"
                            withAsterisk
                            label="First Name"
                            placeholder="John"
                            name="entry.912462159"
                            key={form.key("firstName")}
                            {...form.getInputProps("firstName")}
                        />
                        <TextInput
                            flex="1"
                            withAsterisk
                            label="Last Name"
                            name="entry.2087534922"
                            placeholder="Doe"
                            key={form.key("lastName")}
                            {...form.getInputProps("lastName")}
                        />
                    </Group>

                    <TextInput
                        withAsterisk
                        label="Email"
                        placeholder="your@email.com"
                        name="entry.558494390"
                        key={form.key("email")}
                        {...form.getInputProps("email")}
                    />

                    <TextInput
                        withAsterisk
                        flex="1"
                        name="entry.1349808105"
                        label="University/College Affiliation"
                        key={form.key("uni")}
                        {...form.getInputProps("uni")}
                    />

                    <Textarea
                        name="entry.530808823"
                        key={form.key("message")}
                        {...form.getInputProps("message")}
                        withAsterisk
                        label="Message"
                        rows={5}
                    />

                    <Group justify="flex-end" mt="md">
                        <Button type="submit" color="orange">
                            Submit
                        </Button>
                    </Group>
                </Flex>
            </Flex>
        </form>
    );
};

export default Volunteer;
