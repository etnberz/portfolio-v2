const en = {
    // Header
    nav: {
        home: "Home",
        skills: "Skills",
        experience: "Experience",
        education: "Education",
        contact: "Contact",
    },

    // Hero
    hero: {
        hello: "Hello",
        im: "I'm",
        welcome: "✨ Welcome to my universe",
        title: "ML Ops Engineer 🚀 | AWS Certified MLA 🧑‍🎓 | AI System Builder 🔧",
        flipWords: ["MLOps for AI Systems", "AWS Certified MLA", "Crafting LLM Apps", "Data Enthusiast", "Certified Terraform Associate"],
        learnMore: "Learn More",
        getResume: "Get Resume",
    },

    // About
    about: {
        heading: "Let's build AI Together!",
        p1_bold: "ML Engineer since 2019",
        p1: ", I will support you in your Data/AI projects: from data extraction to the deployment of predictive models (ML/LLM) in production, let's build AI processes that fits your organization's needs! I have a strong expertise of Python and its associated ML libraries, as well as a deep understanding of the challenges related to the model lifecycle.",
        p2: "With a focus on code quality, I manage my projects using an MLOps approach: Experiment Tracking, Feature Store, Model Registry, Monitoring, Cloud Deployment, Unit and Integration Testing, Dependency Management, CI/CD, Git Versioning...",
        p3: "Naturally curious, I am passionate about knowledge sharing, the exchange of ideas, and teaching MLOps concepts. Transferring expertise and training teams are an integral part of my approach: I enjoy creating an environment where everyone can learn, grow, and thrive.",
    },

    // Skills
    skills: {
        categories: {
            machineLearning: "Machine Learning",
            dataScience: "Data Science",
            generativeAI: "Generative AI",
            cloudDevOps: "Cloud & DevOps",
            tools: "Tools & Technologies",
            softSkills: "Soft Skills",
        },
        softSkills: {
            curious: "Curious",
            passionate: "Passionate",
            teamWork: "Team Work",
            pedagogical: "Pedagogical",
            creative: "Creative",
            smiling: "Smiling",
        },
    },

    // Experience
    experience: {
        jobs: [
            {
                title: "ML Ops Engineer",
                company: "EDF",
                year: "Sept 2025 - Today",
                intro: "Intervention as MLOps to industrialise AI models for an application related to nuclear safety within a product team.",
                description: [
                    "Transformation of document processing pipelines.",
                    "Migration of document database from Kendra to Opensearch.",
                    "Industrialisation of Sagemaker, Textract and Comprehend AI models.",
                    "Backend development on various services in Python for a microservices architecture: Terraform for Lambda, Step Function, EventBridge, DynamoDB, S3, SNS, SQS.",
                ],
            },
            {
                title: "ML Ops Engineer",
                company: "Believe",
                year: "Sept 2023 - Sept 2025",
                intro: "Initially hired as a Data Scientist, I soon offered to rethink the team's processes and tools. I set up a ML/LLMOps strategy for the team, enabling us to build, train, deploy, monitor and industrialize our ML models in a scalable and secure way.",
                description: [
                    "Implementation of documented, secure and scalable MLOps and LLMOps processes within the DS team",
                    "Creation of an MLflow server deployed on AWS for Experiment Tracking and Model Registry",
                    "Developed a library and cookiecutter to industrialize the creation and deployment of ML/LLM models",
                    "Refactoring and migration of Legacy models to the new MLOps paradigm",
                    "Drafting and disseminating good code practices, training teams",
                    "Development of a Data application in Streamlit in Snowflake",
                    "Development of the associated prediction module deployed on AWS Lambda",
                ],
            },
            {
                title: "Data Scientist Freelance",
                company: "Rosa",
                year: "Sept 2022 - Jan 2023",
                intro: "A friend asked me to create a technical PoC to sell his project to investors. He's setting up a company to measure the environmental impact of mining sites using satellite images from the Sentinel mission (European Space Agency).",
                description: [
                    "Analysis and interpretation of satellite data (ESA Sentinel mission)",
                    "Creation of satellite image features and visuals with Xarray",
                    "Development of an internal library for extracting and processing satellite images",
                    "Development of a web app with Plotly Dash deployed on Heroku",
                ],
            },
            {
                title: "Data Scientist",
                company: "Metron",
                year: "Jan 2020 - May 2022",
                intro: "In a Data Science team of seven people to optimize the energy consumption of industrial customers in France and abroad. In parallel, development of our own Data tools for data analysis, construction and deployment of ML models and their monitoring.",
                description: [
                    "Building and deploying Machine Learning models with Docker on AWS.",
                    "Analysis and interpretation of energy data from various industrial sectors worldwide",
                    "Development of energy consumption optimization algorithms",
                    "Development of documented and tested Python libraries",
                    "Project management in DevOps mode",
                    "Created a Python CLI service for automatic calculation testing",
                    "Developed an aggregation calculation engine based on Pandas",
                    "Wrote unit and functional tests, set up CI/CD",
                    "Model monitoring with Prometheus and Grafana",
                    "Created an automatic data generation tool",
                    "Created a data anomaly detection tool",
                    "Created and led a Python community of practice",
                ],
            },
            {
                title: "Data Scientist",
                company: "Beebryte",
                year: "Mar 2019 - Sept 2019",
                intro: "To complete my data and energy studies, I did this internship in Singapore with a startup offering to reduce the energy consumption of its customers' HVAC systems using data and AI solutions.",
                description: [
                    "Study of air-conditioning systems in professional buildings",
                    "Analysis and interpretation of energy data",
                    "Building artificial intelligence models",
                    "Exploiting energy-saving opportunities through intelligent system control",
                    "Structuring and documenting projects at IT level",
                    "Creation of information materials for our customers",
                ],
            },
        ],
    },

    // Education
    education: {
        heading: "My",
        headingHighlight: "Learning Journey",
        academicTitle: "Academic Foundations",
        certsTitle: "Professional Certifications",
        degrees: [
            {
                degree: "Engineering Master Degree",
                school: "IMT Mines Albi",
                year: "2016 - 2019",
                subtitle: "Focus on Data Science and Energy Systems",
                description:
                    "A rigorous engineering program combining advanced scientific theory with practical applications. I specialized in Data Science while maintaining a strong foundation in Energy Engineering, covering everything from Thermodynamics to Smart Grids. This interdisciplinary approach prepared me to tackle complex, systemic challenges in evolving industries.",
                skills: ["Data Science", "Machine Learning", "Python", "IoT", "Energy Engineering", "Project Management"],
            },
        ],
    },

    // Projects
    projects: {
        featuredLabel: "Featured Project",
        items: [
            {
                title: "RobotHood",
                description:
                    "RobotHood is a generous crypto currencies trading bot giving its profits to non-governmental organisations.",
            },
        ],
    },

    // Contact
    contact: {
        heading: "Get in Touch",
        subheading: "Have a question or want to work together? Drop me a message!",
        emailLabel: "Email",
        locationLabel: "Location",
        location: "Bordeaux, France",
        namePlaceholder: "Your Name",
        emailPlaceholder: "Your Email",
        subjectPlaceholder: "Subject",
        messagePlaceholder: "Your Message",
        sendButton: "Send Message",
        successMessage: "Message sent successfully!",
        errorMessage: "An error occurred. Please try again.",
        validationError: "Please fill in all required fields correctly.",
        fieldRequired: {
            name: "Name is required",
            email: "Email is required",
            emailInvalid: "Email is invalid",
            subject: "Subject is required",
            message: "Message is required",
        },
    },
};

export default en;
