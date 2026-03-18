import { FaReact, FaNodeJs, FaPhp, FaDatabase, FaAws, FaFire, FaDocker, FaHtml5, FaCss3, FaJs } from "react-icons/fa";
import { TbApi } from "react-icons/tb";
import { SiRedux } from "react-icons/si";

export const fadeUp = {
  hidden: { opacity: 0, y: 80 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7 } }
};

export const headingData = {
    name: "Diksha Sahu",
    title: "Full Stack Developer",
    h1: 'I build scalable',
    h1HighlightedText: 'mobile ecosystems',
    description: `Senior Full Stack Developer with 9+ years of experience building
                high-performance apps using React Native, Node.js, and API-driven architecture.`
};

export const aboutData = `
        Full Stack Developer with expertise in React Native, Node.js, and PHP. 
        I build high-performance applications with scalable backend systems and
        real-time integrations. Experienced in eCommerce, marketplace, and logistics platforms.
`;

export const keyPointsData = [
    {
        num: "9+", 
        label: "Years Experience"
    },
    {
        num: "30%+",
        label: "Performance Boost"
    },
    {
        num: "10+",
        label: "Apps Delivered"
    },
    {
        num: "6+",
        label: "Team Led"
    }
];

export const skillsData = [
    {
        name: "React Native",
        icon: <FaReact />
    },
    {
        name: "Node.js",
        icon: <FaNodeJs />
    },
    {
        name: "PHP",
        icon: <FaPhp />
    },
    {
        name: "MySQL",
        icon: <FaDatabase />
    },
    {
        name: "AWS",
        icon: <FaAws />
    },
    {
        name: "Firebase",
        icon: <FaFire />
    },
    {
        name: "REST APIs",
        icon: <TbApi />
    },
    {
        name: "Redux",
        icon: <SiRedux />
    },
    {
        name: "HTML",
        icon: <FaHtml5 />
    },
    {
        name: "CSS",
        icon: <FaCss3 />
    },
    {
        name: "JavaScript",
        icon: <FaJs /> 
    }
];

export const experienceData = [
    {
        company: "SingleInterface Pvt Ltd",
        companyUrl: "https://www.singleinterface.com/",
        role: "Full Stack Developer",
        duration: "04/05/2022 - 29/10/2025",
        location: "Gurugram",
        responsibilities: [
            <>Developed and maintained cross-platform mobile applications using <span className="font-bold">React Native</span>.</>,
            <>Integrated <span className="font-bold">Firebase</span> Realtime Database, <span className="font-bold">Push Notifications</span>, and <span className="font-bold">JWT Authentication</span>.</>,
            <>Built <span className="font-bold">RESTful APIs</span> in <span className="font-bold">PHP</span> (<span className="font-bold">Laravel</span>, <span className="font-bold">CakePHP</span>) and <span className="font-bold">Node.js</span> with <span className="font-bold">SQS Queue Management</span>.</>,
            <>Published production-ready apps to <a href="https://play.google.com/store/apps/details?id=com.mvpet " target="_blank" rel="noreferrer" className="hover:text-blue-500">Google Play Store</a> and <a href="https://apps.apple.com/in/app/singleinterface-connect/id6446160951" target="_blank" rel="noreferrer" className="hover:text-blue-500">Apple App Store</a>.</>
        ]
    },
    {
        company: "Virtual Employee Pvt Ltd",
        companyUrl: "https://www.virtualemployee.com/",
        role: "Senior Software Engineer",
        duration: "01/12/2021 - 14/03/2022",
        location: "Noida",
        responsibilities: [
            <>Developed hotel search modules using <span className="font-bold">WordPress</span>, <span className="font-bold">jQuery</span>, <span className="font-bold">MySQL</span>.</>,
            "Engineered real-time synchronisation between hotel lists and maps with marker interactivity."
        ]
    },
    {
        company: "Cedcoss Technologies Pvt Ltd",
        companyUrl: "https://cedcoss.com/",
        role: "Senior Software Developer",
        duration: "22/05/2018 - 22/11/2021",
        location: "Lucknow",
        responsibilities: [
            <><span className="font-bold">Led 6-member team</span> delivering eCommerce and logistics applications.</>,
            <>Designed <span className="font-bold">REST APIs</span> and managed integrations for global marketplaces (<span className="font-bold">Etsy</span>, <span className="font-bold">Lazada</span>, <span className="font-bold">eBay</span>, <span className="font-bold">Walmart</span>, <span className="font-bold">Fruugo</span>, <span className="font-bold">Mirakl</span>).</>,
            <>Built <span className="font-bold">shipment</span> module (<span className="font-bold">PostNord</span>) and <span className="font-bold">payment gateway</span> (<span className="font-bold">Razorpay</span>) modules.</>
        ]
    },
    {
        company: "Ace Softronics Pvt Ltd",
        companyUrl: "https://acesoftronics.com/",
        role: "PHP & Web Developer",
        duration: "10/04/2017 - 15/05/2018",
        location: "Lucknow",
        responsibilities: [
            <>Developed <span className="font-bold">responsive web applications</span> and admin panels using <span className="font-bold">HTML</span>, <span className="font-bold">CSS</span>, <span className="font-bold">JS</span>, and <span className="font-bold">PHP</span>.</>
        ]
    },
    {
        company: "Wizvista Technologies Pvt Ltd",
        companyUrl: "#",
        role: "Web Developer",
        duration: "01/08/2016 - 31/03/2017",
        location: "Lucknow",
        responsibilities: [
            <>Created responsive <span className="font-bold">ASP .NET</span> and <span className="font-bold">PHP</span>-based websites and APIs.</>
        ]
    },
];

export const projectData = [
    {
        projectName: "Connect App",
        companyName: "Singleinterface",
        duration: "06/2022 - 03/2024",
        description: `Built a mobile solution for local businesses to manage digital presence, operations,
                        and customer engagement, featuring dashboards, order tracking, user management,
                        notifications, and optimised in-app performance.`
    },
    {
        projectName: "Bharat Shop App",
        companyName: "Singleinterface",
        duration: "04/2023 - 09/2023",
        description: `Developed a customisable eCommerce solution for local retailers, building core
                        backend modules, scaling functions, and integrating catalog, checkout, pricing logic,
                        and business workflows.`
    },
    {
        projectName: "AIRBNB-STYLE HOTEL PLATFORM (Suedtirol)",
        companyName: "Virtual Employee",
        duration: "12/2021 - 03/2022",
        description: `Built a map-based hotel search with real-time listing-marker sync, dynamic data
                        loading, interactive markers, and optimised geo-search performance.`
    },
    {
        projectName: "POSTNORD SHIPMENT INTEGRATION",
        companyName: "Cedcoss",
        duration: "05/2020 - 03/2021",
        description: `Developed modules for booking, tracking, label generation (PDF/ZPL), and returns,
                        integrating CN22/CN23 customs forms and multi-location service APIs.`
    },
    {
        projectName: "RAZORPAY PAYMENT INTEGRATION",
        companyName: "Cedcoss",
        duration: "08/2018 - 06/2019",
        description: `Implemented secure mobile payments with full transaction handling, including
                        callbacks, status updates, and order reconciliation workflows.`
    },
    {
        projectName: "Active Click Funnel",
        companyName: "Ace Softronics",
        duration: "06/2017 - 05/2018",
        description: `A web-based platform that tracks and analyses user clicks across websites, offering
                        user dashboards, real-time reports, and admin management with a fully responsive
                        design.`
    },
    {
        projectName: "Website & API Designing",
        companyName: "Wizvista",
        duration: "10/2016 - 03/2017",
        description: `Developed and customised multiple responsive websites and APIs with dynamic
                        content integration, interactive layouts, and admin panels for content management,
                        including projects like WizVista, NN Ayurvedic, and St. Monica School.`
    },
];

export const contactData = {
    email: "sahu1807deeksha@gmail.com",
    mobile: "+91 9044219290",
    linkedin: "https://www.linkedin.com/in/diksha-sahu-271601151/",
    github: "https://github.com/deekshasahu1807"
};