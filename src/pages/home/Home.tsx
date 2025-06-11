import {
    Badge,
    Button,
    Container,
    Divider,
    Flex,
    Text,
    Title,
} from "@mantine/core";
import Shell from "../../components/Shell";
import Hero from "./Hero";
import Mission from "./Mission";
import Impact from "./Impact";
import Worked from "./Worked";
import Involved from "./Involved";

const Home: React.FC = () => {
    return (
        <Shell>
            <Hero />
            <Flex justify="center" flex="1" w="100%">
                <Divider w="90vw" color="white" size="sm" />
            </Flex>
            <Impact />
            <Mission />
            <Flex bg="sky" justify="center" flex="1" w="100%">
                <Divider w="90vw" color="black" size="sm" />
            </Flex>
            <Worked />
            <Involved />
        </Shell>
    );
};

export default Home;
