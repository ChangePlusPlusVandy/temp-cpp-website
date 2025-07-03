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
                    description:
                        "Pennsylvania Women Work (PWW) is a nonprofit workforce development organization committed to helping women achieve financial stability. They empower women to advance their careers and reach self-sufficiency through impactful career development programs and mentorship. For this project, a password-protected student dashboard was created. This dashboard allows the community to securely access their personal information, class modules, and other important documents, centralizing essential resources for PWW's participants.",
                    imageSrc: "/nonprofits/2024-2025/maxresdefault.jpg",
                },
                {
                    organization: "School the World",
                    description:
                        "The Change++ team developed a mobile application for data tracking and visualization for School the World, an organization dedicated to ending the cycle of poverty through education in rural communities, primarily in Latin America. This application was designed to streamline their data collection processes and provide clear visualizations of their impact, helping them better understand and demonstrate the effectiveness of their educational programs.",
                    imageSrc: "/nonprofits/2024-2025/School-The-World-SEO.webp",
                },
                {
                    organization: "Foster Source",
                    description:
                        "Foster Source provides training, resources, and crucial support to foster and kinship families across Colorado. For this project, we completed a full redesign of their Learning Management System. This system is used to train foster parents, and the redesign aimed to enhance its effectiveness and usability for their vital educational programs.",
                    imageSrc: "/nonprofits/2024-2025/images (1).png",
                },
                {
                    organization: "2nd Chance 4 Pets",
                    description:
                        "2nd Chance 4 Pets, a virtual volunteer-based nonprofit established in 2004, works to reduce pet euthanasia stemming from an owner's death or incapacity. Serving communities nationwide, they focus on veterinarians, shelters, hospices, and pet owners, providing crucial resources to ensure pets continue to receive care. For this initiative, we developed a comprehensive pet-care dashboard. This platform centralizes important animal information and offers an online version of their pet care instructions guide, making vital resources easily accessible.",
                    imageSrc: "/nonprofits/2024-2025/images.jpg",
                },
                {
                    organization: "NAMI Davidson Co.",
                    description:
                        "The Change++ NAMI Team developed a specialized mobile application for NAMI, the National Alliance on Mental Illness, an organization dedicated to building better lives for the millions of Americans affected by mental illness. This project focused on two core functionalities: event registration and a real-time chat feature. ",
                    imageSrc: "/nonprofits/2024-2025/images (1).jpg",
                },
            ],
        },
        {
            year: "2023-2024",
            projects: [
                {
                    organization: "Volunteer Action Network",
                    description:
                        "Volunteer Action Network (VAN) works to build economic independence and increase household income and food security, particularly among women and girls, by equipping them with business skills, providing micro-loans, and facilitating economic opportunities. To streamline their operations, we developed comprehensive loan management software. This system centrally manages borrowers, loans, repayments, registrations, savings, expenses, charts, reports, accounting, branches, staff, roles, and permissions. Consolidating data from cumbersome Excel sheets or paper into one secure location, this platform enables VAN staff to easily identify delinquent payers or individuals needing assistance, significantly enhancing their ability to support program participants.",
                    imageSrc: "/nonprofits/2023-2024/VacNetLogo.png",
                },
                {
                    organization: "Miracle Flights",
                    description:
                        "This project delivered a full-stack web application for Miracle Flights, a nonprofit organization that coordinates free flights for individuals requiring critical medical treatment. The application enables users to create and manage accounts, access patient information, upload necessary documents, view scheduled trips, and submit new trip requests, significantly streamlining their process.",
                    imageSrc: "/nonprofits/2023-2024/hqdefault.jpg",
                },
                {
                    organization: "Mother to Mother",
                    description:
                        "Mother to Mother (MTM) is a Nashville-based nonprofit founded in 2004 that provides essential childcare materials like diapers, car seats, and cribs to under-resourced mothers and children. Their previous manual, paper-driven process for handling donations and distributions was time-consuming, prone to errors, and caused inventory delays. To solve these issues, we developed two websites: the MTM user app and the admin portal. These platforms establish an integrated inventory system that digitizes the process of tracking incoming and outgoing items. This enhancement allows MTM to maintain accurate inventory, efficiently manage information about community members and donors, and expedite the shopping process for their partner agencies.",
                    imageSrc:
                        "/nonprofits/2023-2024/121f8c_dd66b00223cb496d8e16ec7458d2b5d9~mv2.png",
                },
                {
                    organization: "Nashville Diaper Connection",
                    description:
                        "Nashville Diaper Connection (NDC) is a nonprofit dedicated to providing diapers and other essential baby supplies to families in need across 22 Middle Tennessee counties. To streamline their extensive operations, we developed a web application that centralizes order requests, inventory management, and dashboards for NDC staff and their partner organizations. This application provides reliable order, inventory, and user management capabilities, visualizes key data through filterable graphs, and expedites the ordering process for NDC's partners, ultimately enhancing their critical service delivery.",
                    imageSrc:
                        "/nonprofits/2023-2024/336259716_885478806090772_2587060966980191859_n.jpg",
                },

                {
                    organization: "Friends Life Community",
                    description:
                        'Friends Life Community is a day center for adults with disabilities where families can drop off their loved ones, called "friends," to participate in learning vocational skills and art. Our project aimed to improve their logistical operations and safety by replacing manual, error-prone attendance tracking and enhancing family communication. We developed an app that automatically notifies families upon check-in and includes an integrated feature, similar to a social media feed, for staff to post daily updates, consolidating their digital presence and streamlining communication.',
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
                    description:
                        "This nonprofit's core activity revolves around a large annual food summit, though they're expanding their focus to include year-round educational systems and additional initiatives. Despite working closely with farmers, policymakers, restaurants, and activists, they currently lack any technology, which makes it hard to keep these vital partnerships strong once the summit ends. To solve this, Change++ developed a conference management app for attendees to connect and access event details.",
                    imageSrc: "/nonprofits/2020-2021/TLF_Logo.png",
                },

                {
                    organization: "Moraga Orinda Fire District (MOFD)",
                    description:
                        "Our project began with a simple question: How can we leverage existing sprinkler systems to combat wildfires in the Moraga-Orinda district? The answer was to create a web interface that allows the fire department to activate all registered lawn sprinklers in the event of a wildfire. We built this app for the Moraga-Orinda Fire District, CA. Homeowners can easily sign up their sprinklers, enabling them to prioritize evacuation while the fire department uses the system to protect homes.",
                    imageSrc: "/nonprofits/2020-2021/rodeo-2.png",
                },
                {
                    organization: "Farmlink",
                    description:
                        "Farmlink consistently faces a complex challenge in pricing produce: they aim to offer fair compensation to farmers while also securing the lowest possible price to maximize their impact. Currently, historical pricing data is scattered across three main websites, making it incredibly complicated and time-consuming to determine optimal buying prices. To solve this, Change++ developed a dedicated portal where users can enter a state and produce type. The system then returns estimates for current market price, a specific PPO price (an internal metric), and, crucially, a recommended Farmlink price*—calculated using market data, the PPO* price, and their own historical payments—significantly streamlining their purchasing decisions.",
                    imageSrc:
                        "/nonprofits/2020-2021/changepp_logos_2021 (1).png",
                },
                {
                    organization: "Survivor Fitness",
                    description:
                        "Survivor Fitness works to empower cancer survivors by providing them with personalized health and fitness programs during and after treatment. The organization faced challenges in efficiently collecting information for analysis and clear presentation, often missing key checkpoints with participants. Additionally, trainers needed an easier way to input data and track progress within the program. To address these issues, Change++ developed a solution designed to streamline data entry, ensure comprehensive progress tracking, and facilitate better analysis and interpretation of participant outcomes.",
                    imageSrc: "/nonprofits/2020-2021/changepp_logos_2021.png",
                },
                {
                    organization: "Nashville Mayor's Office",
                    description:
                        "The Nashville Mayor's Office manages three vital initiatives to connect residents with crucial food, employment, and childcare resources. They've collected extensive geolocated data on service providers, but faced a significant challenge: translating this information into an easy-to-understand, user-friendly platform that Nashvillians could readily access. To overcome this, Change++ designed a custom technological tool, envisioned as a single platform with search options for each program area. This solution aims to help tens of thousands of Nashvillians easily find and access the resources they need, designed with thoughtful consideration for individuals with varying literacy backgrounds, and potentially adaptable for other cities facing similar challenges.",
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
                        "The Oasis Center, a nationally recognized organization in Nashville, is dedicated to helping young people in Middle Tennessee move into happy, healthy, and productive adulthood. They achieve this by building relationships that advance youth well-being, amplify youth voice, and inspire action toward a just community, offering over 20 diverse programs. To better understand the impact of these extensive efforts, the Oasis Center had accumulated over 40,000 unique data points. These ranged from ECG scans and specific treatment routines to findings from broad psychological studies. This project held the potential to allow the Oasis Center to comprehensively evaluate its wide array of programs, leveraging this rich dataset to refine and improve its vital services.",
                    imageSrc:
                        "/nonprofits/2019-2020/Screenshot+2023-03-26+at+4.19.57+PM.png",
                },
                {
                    organization: "Urban Housing Solutions",
                    description:
                        'Urban Housing Solutions (UHS) is a Nashville-based non-profit organization dedicated to creating and managing affordable housing options. They provide safe, quality, and affordable homes for individuals and families, aiming to foster stable communities. As an educational tool, Urban Housing Solutions developed a board game called "The Game of Rent," which introduces players to the complex challenges of finding affordable housing across different socio-economic backgrounds. The primary objective of this project was to create an accessible online and mobile version of this educational game.',
                    imageSrc:
                        "/nonprofits/2019-2020/urban+housing+solutions.jpeg",
                },
                {
                    organization: "Unheard Voices Outreach",
                    description:
                        "Unheard Voices Outreach advocates for re-entry and equitable opportunity for individuals formerly convicted as felons. The organization develops comprehensive re-entry plans for incarcerated individuals. Their goal for this project was to build an application that would provide formerly incarcerated persons with a vital toolkit for adjusting and succeeding in life after prison.",
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
                                                `${project.imageSrc}` ||
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
