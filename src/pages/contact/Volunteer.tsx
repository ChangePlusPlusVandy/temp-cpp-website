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
} from "@mantine/core";
import { useForm } from "@mantine/form";

const Volunteer: React.FC = () => {
    const form = useForm({
        mode: "uncontrolled",
        initialValues: {
            email: "",
            firstName: "",
            lastName: "",
        },

        validate: {
            email: (value) =>
                /^\S+@\S+$/.test(value) ? null : "Invalid email",
        },
    });
    return (
        <form action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSdgMI5CXolBgScr6848brhm_jyTGLmvwUtEuFY0oe3FP0tRyg/formResponse">
            <Flex align="center" direction={{ base: "column", sm: "row" }} gap="xl">
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
                <Flex flex="1" direction="column" gap="xs">
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
                        key={form.key("orgName")}
                        {...form.getInputProps("orgName")}
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
                        <Button type="submit" color="orange">Submit</Button>
                    </Group>
                </Flex>
            </Flex>
        </form>
    );
};

export default Volunteer;
