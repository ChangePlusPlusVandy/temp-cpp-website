import { Group, Flex, List, TextInput, Textarea, Button } from "@mantine/core";
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
            <Group gap="xl">
                <Flex direction="column">
                    <List>
                        <List.Item>
                            Must be a registered 501(c)(3) nonprofit
                        </List.Item>
                        <List.Item>Clear project scope and timeline</List.Item>
                        <List.Item>Dedicated point of contact</List.Item>
                        <List.Item>
                            Commitment to project collaboration
                        </List.Item>
                    </List>
                </Flex>
                <Flex flex="1" direction="column">
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
                        <Button type="submit">Submit</Button>
                    </Group>
                </Flex>
            </Group>
        </form>
    );
};

export default Volunteer;
