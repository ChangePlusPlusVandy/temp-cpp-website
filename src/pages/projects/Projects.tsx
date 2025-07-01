import { Flex, Container, Title, Grid } from "@mantine/core";
import Shell from "../../components/Shell";
import Project from "./Project";

const Projects: React.FC = () => {
    const data = [
        {
            year: "2024-2025",
            projects: [
                {
                    organization: "Pennsylvania Women Work",
                    description: "ello",
                    imageSrc: "/nonprofits/2024-2025/maxresdefault.jpg",
                },
                {
                    organization: "School the World",
                    description: "ello",
                    imageSrc: "/nonprofits/2024-2025/School-The-World-SEO.webp",
                },
                {
                    organization: "Foster Source",
                    description: "ello",
                    imageSrc: "/nonprofits/2024-2025/images (1).png",
                },
                {
                    organization: "2nd Chance 4 Pets",
                    description: "ello",
                    imageSrc: "/nonprofits/2024-2025/images.jpg",
                },
                {
                    organization: "NAMI Davidson Co.",
                    description: "test",
                    imageSrc: "/nonprofits/2024-2025/images (1).jpg",
                },
            ],
        },
        {
            year: "2023-2024",
            projects: [
                {
                    organization: "Volunteer Action Network",
                    description: "ello",
                    imageSrc: "/nonprofits/2023-2024/VacNetLogo.png",
                },
                {
                    organization: "Miracle Flights",
                    description: "ello",
                    imageSrc: "/nonprofits/2023-2024/hqdefault.jpg",
                },
                {
                    organization: "Mother to Mother",
                    description: "ello",
                    imageSrc:
                        "/nonprofits/2023-2024/121f8c_dd66b00223cb496d8e16ec7458d2b5d9~mv2.png",
                },
                {
                    organization: "Nashville Diaper Connection",
                    description: "ello",
                    imageSrc:
                        "/nonprofits/2023-2024/336259716_885478806090772_2587060966980191859_n.jpg",
                },

                {
                    organization: "Friends Life Community",
                    description: "ello",
                    imageSrc:
                        "/nonprofits/2023-2024/FRIENDS_LIFE_COMMUNITY.webp",
                },
            ],
        },
        {
            year: "2022-2023",
            projects: [
                {
                    organization: "Family-to-Family Network",
                    description:
                        "F2F helps children with disabilities by giving their families the necessary resources to ensure their children's success. The organization offers specialized training, support, educational opportunities, and dedicated case management, leading to significant impacts. F2F has empowered 25,000 families to see possibilities in their children, provided training to 235 families and 195 communities, increased the self-advocacy and leadership skills of 172 individuals, aided 22 families in their transition from ECI to ECSE, and helped families navigate complex government policies.\nTo further enhance their services, the organization partnered with Change++ to build new software. This system features an integrated messaging platform that's much less manual than their previous one. It allows F2F to have direct and consistent communication with participants and consolidates communication mediums for increased engagement and resource distribution. This new software streamlines F2F's communication process, making it more efficient and effective at providing vital support and resources to families and children with disabilities.",
                    imageSrc:
                        "/nonprofits/2022-2023/317087803_10160048678914333_4870390223704920799_n.jpg",
                },
                {
                    organization: "Backpacks for the Street",
                    description:
                        "Backpacks For the Street (BFTST) assembles crucial provisions—such as first aid kits, water, socks, toothpaste, and snacks—into vibrant backpacks, which they then distribute to homeless individuals across New York City. Since 2018, this organization has aided over 70,000 people, supplied more than 63,000 backpacks since the COVID pandemic began, and furnished 26,487 meals. Despite maintaining a website, BFTST lacked a structured system for its volunteers.\nTo rectify this, the organization collaborated with us to construct a software database. This system empowered volunteers to access vital resources and facilitated their ability to identify homeless individuals requiring assistance. The new platform enhanced communication regarding homeless activity and specific needs, thereby establishing a more effective method for supporting the homeless community.",
                    imageSrc:
                        "/nonprofits/2022-2023/Screenshot+2023-03-26+at+5.21.11+PM.png",
                },
                {
                    organization: "Her Future Coalition",
                    description:
                        "Since 2005, HFC has committed itself to breaking cycles of poverty and gender-based violence by delivering education and extensive services to young girls in India and Nepal. A significant hurdle for the program is its current paper-based data tracking system, which presents challenges for efficient record-keeping.\n To address this, HFC partnered with us to create a software solution. This system was designed to easily maintain data and effectively measure program outcomes, providing a more streamlined approach to their crucial work.",
                    imageSrc:
                        "/nonprofits/2022-2023/Her-Future-Coalition-Final.png",
                },
                {
                    organization: "Book'em",
                    description:
                        "Book'em works to cultivate a more literate Nashville and spark a passion for reading in children through book ownership and dedicated volunteers. The organization has successfully distributed over 1 million books since 1989, including 193,841 in 2021 and 134,130 in 2022. Despite these achievements, Book'em faces several operational hurdles: a lack of a central dashboard and a \"single source of truth,\" insufficient volunteer and donor records, and redundant form submissions on their website.\nTo tackle these challenges, we partnered with Book'em to create a user portal. This system saves historical data and allows for account creation, giving stakeholders a unified platform to manage and view information. The new software provides Book'em with a centralized dashboard that acts as their single source of truth, cutting out redundant data entry. It also improves the organization's record-keeping and reporting, enabling better management of volunteers and donors, and streamlining their overall operations.",

                    imageSrc:
                        "/nonprofits/2022-2023/book-em_processed_72e0872b624697c158ed0773328064e97434be93e5e689358d538f96b4610628_logo.jpg",
                },
                {
                    organization: "MissionSAFE",
                    description:
                        "MissionSAFE empowers Boston's highly at-risk youth, helping them develop the skills and confidence needed to thrive and improve their community. They achieve this through a range of programs, including the Youth Leadership Service Corps, Summer of Leadership & Services, and Futures, among others. A key challenge they faced was lacking a centralized system to track participant progress. To address this, we partnered with them as part of Change++'s non-profit initiatives to create a software system. This system processed user actions into progress reports and automatically stored and retrieved data from a central database.",
                    imageSrc: "/nonprofits/2022-2023/missionsafe.png",
                },
                {
                    organization: "For Pete's Sake Cancer Respite Project",
                    description:
                        "For Pete's Sake Cancer Respite (FPSCR) offers opportunities for cancer patients, their families, and caregivers to share meaningful, unifying experiences. They do this by organizing both travel and in-home respite experiences (for those unable to leave), helping participants create unforgettable memories. FPSCR also hosts smaller events throughout the year for these same communities. A significant challenge they face is that oncologists can't securely communicate with respite patients, which leads to a lengthy and burdensome paperwork process. To address this, we partnered with the organization to build an app. This app included an integrated direct and group messaging platform, a dedicated FPSCR newsletter, an automated application form for benefits, and a survey feature, allowing the nonprofit to gather and analyze patient feedback.",
                    imageSrc: "/nonprofits/2022-2023/fps-registered.png",
                },
            ],
        },
        {
            year: "2021-2022",
            projects: [
                {
                    organization: "United Front Against River Blindness",
                    description:
                        "The background for this project is that UFAR works to prevent river blindness and other neglected tropical diseases in the Congo. Addressing this, Change++ developed a mobile app that doctors used to record patient data during mass drug administrations. The goal was to enable UFAR to more effectively collect, synthesize, and track vital data, giving them the insights required to save more lives.",
                    imageSrc:
                        "/nonprofits/2021-2022/0006_partner-ufar-logo.jpg",
                },

                {
                    organization: "Super Money Kids",
                    description: "ello",
                    imageSrc: "/nonprofits/2021-2022/images.png",
                },
                {
                    organization: "PENCIL Tech",
                    description:
                        "PENCIL equips Nashville classrooms with school supplies, which teachers then distribute to their students. It stands as the primary, no-cost provider of classroom essentials to public schools throughout Nashville. For this initiative, Change++ developed an online database to assist PENCIL in collecting and analyzing data related to the supplies delivered to educators. This system became a central access point, enabling teachers to schedule visits to PENCIL facilities, allowing PENCIL to monitor its stock, and providing teachers with a comprehensive history of their past requisitions.",
                    imageSrc:
                        "/nonprofits/2021-2022/LOGO_PENCIL_stacked_2016 (1).jpg",
                },
                {
                    organization: "Credit Do",
                    description:
                        "Credit Do's mission is to promote financial literacy among youth and their families. They achieve this by offering asset-building learning opportunities through their community-based program, Smarter Barter. To boost its effectiveness, the organization seeks to digitize Smarter Barter, paving the way for national expansion. As their partner, we developed a software system. This system enabled tracking of lessons and assignments for the Smarter Barter curriculum, facilitated event management, and streamlined the distribution of digital gift cards for partner grocery stores.",
                    imageSrc:
                        "/nonprofits/2021-2022/463029475_8954853257871796_6724120155233660705_n.jpg",
                },
                {
                    organization: "Code Your Chances",
                    description:
                        "CYC works to inspire a new generation of female leaders in computer science and to address the gender imbalance in STEM fields, with a particular focus on communities that have limited access to computer education. For this project, Change++ created a mobile app for use in CYC classrooms that introduced students to core CS concepts like loops and variables through interactive educational Virtual Reality and Augmented Reality games.",
                    imageSrc:
                        "/nonprofits/2021-2022/400dpiLogo_edited_edited.avif",
                },
            ],
        },
        {
            year: "2020-2021",
            projects: [
                {
                    organization: "Tennessee Local Food Summit",
                    description: "ello",
                    imageSrc: "/nonprofits/2020-2021/TLF_Logo.png",
                },
                {
                    organization: "Tikkun Olam Makers",
                    description: "ello",
                    imageSrc: "/nonprofits/2020-2021/TOM.jpg",
                },
                {
                    organization: "Moraga Orinda Fire District (MOFD)",
                    description:
                        "Our project began with a simple question: How can we leverage existing sprinkler systems to combat wildfires in the Moraga-Orinda district? The answer was to create a web interface that allows the fire department to activate all registered lawn sprinklers in the event of a wildfire. We built this app for the Moraga-Orinda Fire District, CA. Homeowners can easily sign up their sprinklers, enabling them to prioritize evacuation while the fire department uses the system to protect homes.",
                    imageSrc: "/nonprofits/2020-2021/rodeo-2.png",
                },
                {
                    organization: "Farmlink",
                    description: "ello",
                    imageSrc:
                        "/nonprofits/2020-2021/changepp_logos_2021 (1).png",
                },
                {
                    organization: "Survivor Fitness",
                    description: "ello",
                    imageSrc: "/nonprofits/2020-2021/changepp_logos_2021.png",
                },
                {
                    organization: "Nashville Mayor's Office",
                    description: "ello",
                    imageSrc: "/nonprofits/2020-2021/changepp_logos_2021-2.png",
                },
            ],
        },
        {
            year: "2019-2020",
            projects: [
                {
                    organization: "OASIS Center",
                    description:
                        "The Oasis Center had over 40,000 unique data points that it wanted to analyze. From ECG scans to treatment routines to broad psychological studies, this project had the potential to allow the Oasis Center to evaluate its over 20 programs.",
                    imageSrc:
                        "/nonprofits/2019-2020/Screenshot+2023-03-26+at+4.19.57+PM.png",
                },
                {
                    organization: "Urban Housing Solutions",
                    description:
                        "Urban Housing Solutions developed a board game called “The Game of Rent” which introduces players to the challenges of finding affordable housing for people of different socio-economic classes. The goal of this project was to create an online/mobile version of this game.",
                    imageSrc:
                        "/nonprofits/2019-2020/urban+housing+solutions.jpeg",
                },
                {
                    organization: "Unheard Voices Outreach",
                    description:
                        "Unheard Voices Outreach advocates for re-entry and equitable opportunity for persons formerly convicted as felons. The organization developed re-entry plans for incarcerated individuals and wanted to build an application that would provide formerly incarcerated persons with a toolkit for adjusting and succeeding in life after prison.",
                    imageSrc:
                        "/nonprofits/2019-2020/unheard-voices-outeach.jpg",
                },
            ],
        },
    ];

    return (
        <Shell>
            <Flex bg="tan" align="center" c="orange" p="xl">
                <Container w="100%">
                    <Grid w="100%">
                        {data.map((year) => (
                            <>
                                <Grid.Col>
                                    <Title order={2}>{year.year}</Title>
                                </Grid.Col>
                                {year.projects.map((project) => (
                                    <Grid.Col span={{ base: 12, sm: 6 }}>
                                        <Project
                                            title={project.organization}
                                            description={project.description}
                                            imageSrc={
                                                `/temp-cpp-website${project.imageSrc}` ||
                                                ""
                                            }
                                        />
                                    </Grid.Col>
                                ))}
                            </>
                        ))}
                    </Grid>
                </Container>
            </Flex>
        </Shell>
    );
};

export default Projects;
