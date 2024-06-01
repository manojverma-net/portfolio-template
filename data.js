export const bio = [
    "Hello there, This is Manoj Verma.",
    // `Experienced Frontend Software Engineer with a strong track record of successfully upgrading applications, optimizing performance, and delivering innovative solutions.`,
    // `Eager to apply my technical expertise and in-depth
    // product understanding to drive impactful contributions and exceed expectations in challenging projects.`,
  
    `As a seasoned Software Consultant, I specialize in creating robust distributed architectures, with a keen focus on microservices and event-driven systems. My expertise extends to implementing DevOps methodologies using advanced tools such as Kubernetes, Docker, and AWS, ensuring seamless, scalable, and efficient operations.`,
    `Additionally, my facility with big data technologies like Hadoop and Spark allows for the integration of expansive data handling capabilities into every solution.`,
    `My approach prioritizes architectural integrity and comprehensive product optimization, with a strong emphasis on leading projects from concept through to delivery. `,
    "Thanks for taking the time to learn a little about me!",
];

export const skills = [
    {
        title: "Architecture",
        skillName: "System Design, Microservices, EDA",
        color: "1",
        percentage: "80",
    },
    {
        title: "Infrastructure",
        skillName: "Kubernetes, Docker, AWS",
        color: "6",
        percentage: "70",
    },
    {
        title: "Programming Languages",
        skillName: "C#, Python, Scala, Kotlin",
        color: "4",
        percentage: "70",
    },
    {
        title: "Big Data",
        skillName: "Apache Spark, Hadoop ETL",
        color: "7",
        percentage: "70",
    },
    {
        title: "Monitoring/Alerting Tools",
        skillName: "EFK Stack, Grafana, Prometheus",
        color: "3",
        percentage: "80",
    },
    
];

export const experience = [
    {
        title: "Agoda, Bangkok",
        duration: "Feb 2023 - Present",
        subtitle: "Senior Software Developer",
        details: [
            `Developing and maintaining Agoda’s CMS system, which powers the website, mobile, and SaaS services with 500,000 items in 51 languages from 10 different origins, ensuring each API response is under 350 milliseconds.`,
            `Redesigned Agoda’s booking review system from a monolithic architecture to microservices, introducing multiple channel support to facilitate better decision-making for bug fixes and improvements. Currently, it supports 25,000 reviews per day.`, 
            `Assisting the team in designing multiple solutions, and heavily involved in the planning and execution phase.`
        ],
        tags: ["System Design", "Event Driven Architecture", "MicroService", "Apache Spark", "Hadoop ETL", "API Design", "Kolin", "Scala"],
        icon: "hotel",
    },
    {
        title: "ThoughtWorks, Gurugram",
        duration: "Jun 2021 - Jan 2023",
        subtitle: "Senior Consultant",
        details: [
            `Worked with one of the US largest on-call insurance provider, where I took the responsibility of understanding the client's requirements and providing the most effective solutions.`,
            `Primarily focused on integrating the legacy system with the new Polaris platform, determining the contracts and managing the data flow between the systems.`,
            `Developed a new feature for the client's platform, which is now used by over 1000 users daily.`,
            `Stabilized the platform and streamlined the deployment process by implementing a CI/CD pipeline using Azure DevOps tooling.`, 
        ],
        tags: ["Event Driven Architecture", "MicroService", "Azure DevOps", "React", "SQL Server", "Mongo DB"],
        icon: "heartbeat ",
    },
    {
        title: "S&P Global, Gurugram",
        duration: "Sep 2018 - Jun 2021",
        subtitle: "Senior Software Engineer",
        details: [ 
            `Worked on the S&P Global Market Plats platform API gateway team, where I served as a DevOps engineer to configure the Kong API gateway for multiple data centers.`,
            `Managed an elastic cluster to store logs and metrics data. Authored backup and restore scripts for the elastic cluster.`,
            `Collaborated with a team to set up the monitoring and alerting system for the API gateway using Prometheus, Grafana, and the EFK stack.`,
            `Assisted in onboarding new internal teams to use the API gateway and provided support to these teams.`,
            `Worked extensively with AWS resources such as load balancers, EC2, DB, S3, and EKS.`,
            `Developed and maintained the S&P Global Market Intelligence platform, a financial data platform that provides real-time data to over 100,000 users worldwide.`,
            `Redesigned the Market Intelligence platform home page and contributed to the development of a new feature that allows users to customize their home page.`,
        ],
        tags: ["Kubernetes(EKS)", "Docker", "Elastic Search", "Monitoring", "AWS", "CI/CD", "C#", "React", "SQL Server"],
        icon: "credit-card ",
    },
    {
        title: "Iris Software Pvt. Ltd., Noida",
        duration: "Dec 2016 - Aug 2018",
        subtitle: "Software Engineer",
        details: [
           `During my tenure, I significantly contributed to two pivotal projects for BMO that enhanced banking operations and decision-making processes. As part of the LTS (Lending Transaction System) project, I implemented critical features for amortization and payment plans, alongside developing robust back-office systems. This involved orchestrating the migration of older portfolio features to the new LTS using technologies such as AngularJS, Web API, Oracle, and C#.`,
           `Additionally, I played a key role in developing BCRG, a sophisticated reporting tool designed to generate precise and actionable reports for investment managers. This tool, built with Angular 6, Web API, Oracle, and C#, facilitates informed decision-making by providing fixed-format, clear, and concise reports.`,    
           `These experiences have sharpened my technical skills and my ability to deliver solutions that streamline processes and support strategic business decisions.` 
        ],
        tags: ["JavaScript", "Angular", "C#", "ASP.Net Web API", "Oracle"],
        icon: "qrcode",
    },
    {
        title: "Daffodil Software Limited, Gurugram",
        duration: "Jan 2014 - Dec 2016",
        subtitle: "Associate IT",
        details: [
            `Specialized in developing robust applications with ASP.Net MVC, leveraging SQL Server to implement and optimize complex database queries for enhanced performance.`,
            `Skilled in crafting custom JavaScript plugins that improve user interaction and increase functionality.`, 
            `Contributed technical expertise and critical problem-solving skills to prestigious projects with Intel SRC (Scientificial Review Committee) and Intel ISEF (International Science and Engineering Fair).` 
        ],
        tags: ["JavaScript", "jQuery", "C#", "ASP.Net MVC", "SQL Server"],
        icon: "group",
    },
];

export const education = [
    {
        title: "Master's in Computer Applications (MCA)",
        duration: "2011 - 2014",
        subtitle: "Uttar Pradesh Technical University, Lucknow, India",
        details: [],
        tags: [
            "Data Structures & Algorithms",
            "Operating Systems",
            "Database Management System",
            "Computer Networks", 
            "Cloud Computing",
        ],
        icon: "graduation-cap",
    },
    {
        title: "Bachelor's in Computer Applications (BCA)",
        duration: "2009 - 2011",
        subtitle: "Dr. Bhim Rao Ambedkar University, Agra, India",
        details: [],
        tags: [
            "Data Structures & Algorithms",
            "Operating Systems",
            "Database Management System",
            "Computer Networks", 
            "Cloud Computing",
        ],
        icon: "graduation-cap",
    },
    {
        title: "Class 12th in Science and Mathematics",
        duration: "",
        subtitle: "State Board of Intermediate Education, Uttar Pradesh, India",
        details: [],
        tags: ["Physics", "Chemistry", "Mathematics"],
        icon: "book",
    },
];

export const footer = [
    {
        label: "Dev Profiles",
        data: [
            {
                text: "Stackoverflow",
                link: "https://stackoverflow.com/users/4295332/manoj-verma",
            },
            {
                text: "GitHub",
                link: "https://github.com/manojverma-net/",
            }
        ],
    },
    {
        label: "Resources",
        data: [
            {
                text: "Enable Dark/Light Mode",
                func: "enableDarkMode()",
            },
            {
                text: "Print this page",
                func: "window.print()",
            } 
        ],
    },
    {
        label: "Social Profiles",
        data: [
            {
                text: "Linkedin",
                link: "https://www.linkedin.com/in/manojverma-net/",
            },
            // {
            //     text: "Twitter",
            //     link: "https://twitter.com/thesigmakid",
            // },
            // {
            //     text: "Buy me a coffee",
            //     link: "https://www.buymeacoffee.com/r194dME8y",
            // },
        ],
    },
    {
        label: "copyright-text",
        data: [
            "Made with &hearts; by Manoj Verma.",
            "&copy; No Copyrights. Credits to - <a href='https://github.com/vinaysomawat/vinaysomawat.github.io'>Vinay Somawat</a>.",
      
        ],
    },
]; 
    