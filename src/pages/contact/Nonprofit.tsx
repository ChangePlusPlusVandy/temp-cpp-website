import { useForm } from "@mantine/form";
import {
    Button,
    Group,
    Textarea,
    TextInput,
    Text,
    List,
    Flex,
    Title,
    Space,
} from "@mantine/core";

const Nonprofit: React.FC = () => {
    const form = useForm({
        mode: "uncontrolled",
        initialValues: {
            email: "",
            firstName: "",
            lastName: "",
            orgName: "",
            orgWebsite: "",
            message: "",
        },

        validate: {
            email: (value) =>
                /^\S+@\S+$/.test(value) ? null : "Invalid email",
        },
    });
    return (
        <form action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSdWdPH5ADXFcpRIWNLlU667rvsFatce8CEViFzAXMk4F1nB4A/formResponse">
            <Flex align="center" direction={{ base: "column-reverse", sm: "row" }} gap="xl">
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

                    <Group justify="space-between">
                        <TextInput
                            withAsterisk
                            flex="1"
                            name="entry.1349808105"
                            label="Organization Name"
                            key={form.key("orgName")}
                            {...form.getInputProps("orgName")}
                        />

                        <TextInput
                            flex="1"
                            name="entry.1830686474"
                            label="Organization Website"
                            placeholder="your-organization.org"
                            key={form.key("orgWebsite")}
                            {...form.getInputProps("orgWebsite")}
                        />
                    </Group>

                    <Textarea
                        name="entry.530808823"
                        key={form.key("message")}
                        {...form.getInputProps("message")}
                        withAsterisk
                        label="Message"
                        placeholder="Please summarize your project idea in 2-3 sentences. We will follow up with an initial meeting to ask for more details."
                        rows={5}
                    />

                    <Group justify="flex-end" mt="md">
                        <Button type="submit" color="orange">
                            Submit
                        </Button>
                    </Group>
                </Flex>
                <Flex direction="column" flex="1">
                    <Title>
                        Need a free tech solution for your{"  "}
                        <Text span c="orange" inherit>
                            Nonprofit
                        </Text>
                        ?
                    </Title>
                    <Space h="md" />
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
            </Flex>
        </form>
    );
};

export default Nonprofit;
