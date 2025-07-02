import { Flex, Space, Tabs } from "@mantine/core";
import Shell from "../../components/Shell";
import Volunteer from "./Volunteer";
import Nonprofit from "./Nonprofit";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ThankYou from "./ThankYou";

const Contact: React.FC = () => {
    const [submitted, setSubmitted] = useState(false);
    const { type } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (!submitted) {
            const lastSubmitted = localStorage.getItem("lastSubmitted");
            if (lastSubmitted) {
                setSubmitted(
                    new Date().valueOf() - new Date(lastSubmitted).valueOf() <=
                        60 * 60 * 24 * 1000
                );
            } else {
                setSubmitted(false);
            }
        }
    }, [submitted]);

    return (
        <Shell>
            <iframe
                name="hidden_iframe"
                id="hidden_iframe"
                style={{ display: "none" }}
                onLoad={() => {
                    if (submitted) {
                        localStorage.setItem(
                            "lastSubmitted",
                            new Date().toUTCString()
                        );

                        window.location.href = "/temp-cpp-website/contact/thank-you";
                    }
                }}
            ></iframe>
            <Flex bg="sky" c="navy" direction="column" p="xl">
                {submitted || type == "thank-you" ? (
                    <ThankYou />
                ) : (
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
                            <Tabs.Tab value="nonprofit">
                                For Nonprofits
                            </Tabs.Tab>
                            <Tabs.Tab value="volunteer">
                                For Volunteers
                            </Tabs.Tab>
                        </Tabs.List>
                        <Space h="sm" />
                        <Tabs.Panel value="nonprofit">
                            <Nonprofit target="hidden_iframe" onSubmit={() => setSubmitted(true)} />
                        </Tabs.Panel>

                        <Tabs.Panel value="volunteer">
                            <Volunteer />
                        </Tabs.Panel>
                    </Tabs>
                )}
            </Flex>
        </Shell>
    );
};

export default Contact;
