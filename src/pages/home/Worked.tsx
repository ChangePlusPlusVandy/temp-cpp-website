import { Flex, Title, Image, Grid, Container } from "@mantine/core";

const Worked: React.FC = () => {
    const companies = [
        "/companies/Amazon-Logo-2000.png",
        "/companies/Apple-Logosu.png",
        "/companies/Capital_One_logo.svg.png",
        "/companies/DoorDash-logo.png",
        "/companies/Fidelity-Logo.png",
        "/companies/Google_2015_logo.svg.png",
        "/companies/Jane_Street.png",
        "/companies/Meta-Logo.png",
        "/companies/MongoDB_Logo.svg.png",
        "/companies/Pinterest_Logo.svg.png",
        "/companies/purepng.com-microsoft-logologobrand-logoiconslogos-251519939132du80p.png",
        "/companies/Salesforce.com_logo.svg.png",
    ];
    return (
        <Flex c="black" bg="sky" gap="xl" p="xl" direction="column">
            <Title order={2} ta="center">
                Where our members have worked
            </Title>
            <Container>
                <Grid gutter={20}>
                    {companies.map((company) => (
                        <Grid.Col span={{ base: 6, sm: 3 }}>
                            <Flex
                                align="center"
                                h="100%"
                                px={{ base: 0, sm: "xl" }}
                            >
                                <Image src={`${company}`} />
                            </Flex>
                        </Grid.Col>
                    ))}
                </Grid>
            </Container>
        </Flex>
    );
};

export default Worked;
