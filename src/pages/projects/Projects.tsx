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
                    imageSrc: "/nonprofits/2024-2025/pennsylvania_women_work_logo.jpg",
                },
                { organization: "School the World", description: "ello", imageSrc: "/nonprofits/2024-2025/images.png" },
                { organization: "Foster Source", description: "ello", imageSrc: "/nonprofits/2024-2025/images (1).png" },
                { organization: "2nd Chance 4 Pets", description: "ello", imageSrc: "/nonprofits/2024-2025/images.jpg" },
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
                    imageSrc: "/nonprofits/2023-2024/9bd98e_1f8f1ee66e0e4f7dbb58c34bcd17e45f~mv2.jpg"
                },
                { organization: "Miracle Flights", description: "ello", imageSrc: "/nonprofits/2023-2024/hqdefault.jpg" },
                { organization: "Mother to Mother", description: "ello", imageSrc: "/nonprofits/2023-2024/121f8c_dd66b00223cb496d8e16ec7458d2b5d9~mv2.png" },
                {
                    organization: "Nashville Diaper Connection",
                    description: "ello",
                    imageSrc: "/nonprofits/2023-2024/Copy+of+Copy+of+color-transparent-logo_120+(1).png"
                },

                { organization: "Friends Life Community", description: "ello", imageSrc: "/nonprofits/2023-2024/images.png" },
            ],
        },
        {
            year: "2022-2023",
            projects: [
                {
                    organization: "Family-to-Family Network",
                    description:
                        "F2F is an organization that helps children with disabilities by providing their families with the necessary resources to ensure their children's success. The organization offers specialized training, support, educational opportunities, and specialized case management, resulting in significant impacts. As of 2022, F2F has helped 25,000 families see possibilities in their children, provided training to 235 families and 195 communities, increased the self-advocacy and leadership skills of 172 individuals, aided 22 families in their transition from ECI to ECSE, and helped families navigate government policies.\nTo further enhance their services, in 2022, the organization partnered with Change++ to build a software that features an integrated messaging platform, which is less manual than their current system. This platform allows F2F to have direct and consistent communication with their participants, and consolidate communication mediums for increased participant engagement and resource distribution. This new software streamlines F2F's communication process, making it more efficient and effective in providing support and resources to families and children with disabilities.",
                },
                {
                    organization: "Backpacks for the Street",
                    description:
                        "Backpacks For the Street is an organization that packs essential items such as first aid kits, water, socks, toothpaste, and snacks into colorful backpacks and distributes them to homeless people in New York City. Since 2018, the organization has helped 70,011 people, delivered 63,145 backpacks since the COVID pandemic, and provided 26,487 meals to the homeless. Despite having a website, the organization lacked a system in place for volunteers.\nIn 2022, the organization partnered with Change++ to build a software database that enables volunteers to access resources and helps them identify homeless individuals who need assistance. This new system improves communication about homeless activity and needs, providing a more effective way to help the homeless community.",
                },
                {
                    organization: "Her Future Coalition",
                    description:
                        "Since 2005, HFC has worked to break cycles of poverty and gender-based violence by providing education and comprehensive services to young girls in India and Nepal. The program’s major problem is data tracking, which is currently done on paper.\nHFC partnered with Change++ in 2022 with the objective of creating software to easily maintain data and measure outcomes. ",
                },
                {
                    organization: "Book'em",
                    description:
                        "Book'em has a mission to create a more literate Nashville and inspire children's passion for reading through book ownership and enthusiastic volunteers. The organization has distributed 134,130 books in 2022, 193,841 books in 2021, and over 1 million books since 1989. Despite the organization's success, it still faces several challenges, including a lack of a central dashboard and a \"single source of truth,\" a shortage of volunteer and donor records, and redundancy in form submission on the organization's website.\nTo address these issues, the organization partnered with us in 2022 to create a user portal that saves history and allows for account creation, providing stakeholders with a consolidated platform to manage and view data. With this new software, Book'em has a centralized dashboard that provides them with a single source of truth, eliminating the need for redundant data entry. The user portal also provides the organization with better record-keeping and reporting capabilities, enabling them to better manage volunteers and donors, and streamline their operations.",
                },
                {
                    organization: "MissionSAFE",
                    description:
                        "MissionSAFE works with Boston’s highly at-risk youth to gain the skills and confidence to thrive and improve their community and their world. The programs offered range from Youth Leadership Service Corps, Summer of Leadership & Services, and Futures, to other programs. However, the organization lacks a way to track progress in one central place.\nThey partnered with us as part of Change++’s 2022 non-profit projects to create a software that processes user action into progress reports and automatically stores/retrieves that data from a central database.",
                },
                {
                    organization: "For Pete's Sake Cancer Respite Project",
                    description:
                        "The For Pet’s Sake Cancer Respite (FPSCR) organization provides opportunities for cancer patients, their families, and their caregivers to have meaningful and unifying experiences. They accomplish this by running both travel and in-home (for those unable to leave) experiences that enable participants to make unforgettable memories. They also have smaller events serving the same communities throughout the year. However, Oncologists are unable to securely communicate with cancer respite patients, creating a lengthy and painful paperwork process.\nThe organization partnered with us in 2022 to build an app with an integrated direct and group messaging platform, a FPSCR newsletter, an automated animation form for benefits, and a survey feature to allow the nonprofit to gauge and analyze feedback from patients.",
                },
            ],
        },
        {
            year: "2021-2022",
            projects: [
                {
                    organization: "United Front For River Blindness",
                    description: "ello",
                },
                {
                    organization: "Tennessee Local Food Summit",
                    description: "ello",
                },
                { organization: "Super Money Kids", description: "ello" },
                { organization: "PENCIL Tech", description: "ello" },
                { organization: "Credit Do", description: "ello" },
                { organization: "Code Your Chances", description: "ello" },
            ],
        },
        {
            year: "2020-2021",
            projects: [
                { organization: "Tikkun Olam Makers", description: "ello" },
                {
                    organization: "Smart Fire Fighting",
                    description:
                        "It all began with an idea. How can we use the existing sprinkler systems in Moraga-Orinda district to stop the nearby wildfires from spreading and burning down the houses? The solution: Make an interface for the fire department to turn on all the lawn sprinklers in the area in the case of a wildfire. And that’s precisely what we did. We built a web app for the Moraga-Orinda Fire District, CA so fire chiefs could control the lawn sprinkler systems. Homeowners are given the option to sign up their sprinklers in our web app using a simple form. When they sign up, they can focus on evacuation in the event of a wildfire. The fire department can use our app to trigger all the lawn sprinklers in the area to prevent the fire from burning down houses.",
                },
                { organization: "Farmlink", description: "ello" },
                { organization: "Survivor Fitness", description: "ello" },
                {
                    organization: "Climate Change (Carbon XP)",
                    description:
                        "The team has been working closely with Dr. Leah Dundon on creating an interactive app aimed at high school students to teach them about climate change. The app will pair with an e-book to be used in a classroom and allow the students to learn about climate change, the environmental effects of climate change, and investigate their impact personally. Some features of the app will be a personal carbon contribution counter and short video clips from the United Nations climate change conference.",
                },
                {
                    organization: "Kumi Clothing",
                    description:
                        "Kumi Clothing was brought to Change++ by Vandy Alumnus Michelle She when she noticed the disadvantages faced by the visually impaired community in both professional and educational settings. Having visual impairments can oftentimes be an obstacle to one's fashion sense, which is especially important when it comes to finding that first interview outfit, navigating the education scene with your peers, or even in everyday life situations.\nOur app is a modern solution to this issue that many people face. By using NFC technology, users of the Kumi Clothing App can easily scan a tag on an item of clothing and hear the physical attributes of the item such as the color, size, material, etc. After creating an account, users can store clothing items in their closet for easy access later, and continue scanning new items. Kumi allows its users to be more independent shoppers and removes the need to have someone with them while shopping to help them identify clothing.",
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
                {
                    organization: "Directory Project",
                    description:
                        "The Society of Black Peabody Alumni and LatinX wanted to better connect the various individuals from their respective organizations. That application involved building out features of the previous year's Change++ application and incorporating that project with Vanderbilt IT.",
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
                                            imageSrc={project.imageSrc || ""}
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
