import { Flex, Space, Tabs } from "@mantine/core";
import Shell from "../../components/Shell";
import Volunteer from "./Volunteer";
import Nonprofit from "./Nonprofit";
import { useNavigate, useParams } from "react-router-dom";

const Contact: React.FC = () => {
    const { type } = useParams();
    const navigate = useNavigate();

    return (
        <Shell>
            <Flex bg="sky" c="navy" direction="column" p="xl">
                <Tabs
                    value={
                        type && ["nonprofit", "volunteer"].includes(type)
                            ? type
                            : "nonprofit"
                    }
                    onChange={(value) => navigate(`/contact/${value}`)}
                    variant="pills"
                    color="navy"
                >
                    <Tabs.List grow justify="center">
                        <Tabs.Tab value="nonprofit">For Nonprofits</Tabs.Tab>
                        <Tabs.Tab value="volunteer">
                            For Interested Volunteers
                        </Tabs.Tab>
                    </Tabs.List>
                    <Space h="sm" />
                    <Tabs.Panel value="nonprofit">
                        <Nonprofit />
                    </Tabs.Panel>

                    <Tabs.Panel value="volunteer">
                        <Volunteer />
                    </Tabs.Panel>
                </Tabs>
            </Flex>
        </Shell>
    );
};

export default Contact;
