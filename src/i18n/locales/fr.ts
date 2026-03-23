const fr = {
    // Header
    nav: {
        home: "Accueil",
        skills: "Compétences",
        experience: "Expérience",
        education: "Formation",
        contact: "Contact",
    },

    // Hero
    hero: {
        hello: "Bonjour! Je suis",
        im: "",
        welcome: "✨ Bienvenue dans mon univers",
        title: "Ingénieur MLOps 🚀 | Certifié AWS MLA 🧑‍🎓 | AI System Builder 🔧",
        flipWords: ["MLOps pour produits IA", "Certifié AWS MLA", "Création d'apps LLM", "Passionné de Data", "Certifié Terraform Associate",],
        learnMore: "En savoir plus",
        getResume: "Mon CV",
    },

    // About
    about: {
        heading: "Construisons Ensemble !",
        p1_bold: "Ingénieur ML depuis 2019",
        p1: ", je vous accompagne dans vos projets Data/IA. Depuis l'extraction de la donnée jusqu'au déploiement en production de modéles prédictifs (ML/LLM), construisons ensemble les processus IA correspondant à votre organisation. Je maîtrise parfaitement Python et les librairies de ML associées ainsi que les problématiques liées au cycle de vie des modèles.",
        p2: "Soucieux de la qualité de mon code je gère mes projets avec une approche MLOps. Spécialisé dans les domaines des énergies renouvelables et de l'environement j'ai longtemps travaillé auprès de grands groupes en France et à l'international.",
        p3: "D’un naturel curieux, je porte un grand intérêt au partage de connaissances et à la confrontation des idées autour des concepts MLOps. La transmission de l'expertise et la formation des équipes font partie intégrante de ma façon de travailler : j'aime créer un environnement où chacun peut apprendre, grandir et s’épanouir.",
    },

    // Skills
    skills: {
        categories: {
            machineLearning: "Machine Learning",
            dataScience: "Science des données",
            generativeAI: "IA Générative",
            cloudDevOps: "Cloud & DevOps",
            tools: "Outils & Technologies",
            softSkills: "Compétences Humaines",
        },
        softSkills: {
            curious: "Curieux",
            passionate: "Passionné",
            teamWork: "Esprit d'équipe",
            pedagogical: "Pédagogue",
            creative: "Créatif",
            smiling: "Souriant",
        },
    },

    // Experience
    experience: {
        jobs: [
            {
                title: "Ingénieur ML Ops",
                company: "EDF",
                year: "Sept 2025 - Aujourd'hui",
                intro: "Intervention en tant que MLOps pour industrialiser les modèles IA d'une application liée à la sûreté nucléaire au sein d'une équipe produit.",
                description: [
                    "Transformation des pipelines de traitement de documents.",
                    "Migration de la base de documents de Kendra vers Opensearch.",
                    "Industrialisation des modèles IA Sagemaker, Textract et Comprehend.",
                    "Développement backend sur divers services Python pour une architecture microservices : Terraform pour Lambda, Step Function, EventBridge, DynamoDB, S3, SNS, SQS.",
                ],
            },
            {
                title: "Ingénieur ML Ops",
                company: "Believe",
                year: "Sept 2023 - Sept 2025",
                intro: "Initialement recruté comme Data Scientist, j'ai rapidement proposé de repenser les processus et outils de l'équipe. J'ai mis en place une stratégie ML/LLMOps permettant de construire, entraîner, déployer, surveiller et industrialiser nos modèles ML de manière scalable et sécurisée.",
                description: [
                    "Mise en place de processus MLOps et LLMOps documentés, sécurisés et scalables au sein de l'équipe DS",
                    "Création d'un serveur MLflow déployé sur AWS pour le suivi d'expériences et le registre de modèles",
                    "Développement d'une bibliothèque et d'un cookiecutter pour industrialiser la création et le déploiement de modèles ML/LLM",
                    "Refactoring et migration de modèles legacy vers le nouveau paradigme MLOps",
                    "Rédaction et diffusion des bonnes pratiques de code, formation des équipes",
                    "Développement d'une application Data en Streamlit dans Snowflake",
                    "Développement du module de prédiction associé, déployé sur AWS Lambda",
                ],
            },
            {
                title: "Data Scientist Freelance",
                company: "Rosa",
                year: "Sept 2022 - Jan 2023",
                intro: "Un ami m'a demandé de créer un PoC technique pour présenter son projet à des investisseurs. Il crée une entreprise pour mesurer l'impact environnemental de sites miniers à l'aide d'images satellites de la mission Sentinel (Agence Spatiale Européenne).",
                description: [
                    "Analyse et interprétation de données satellitaires (mission ESA Sentinel)",
                    "Création de features et visualisations d'images satellites avec Xarray",
                    "Développement d'une bibliothèque interne pour l'extraction et le traitement d'images satellites",
                    "Développement d'une application web avec Plotly Dash déployée sur Heroku",
                ],
            },
            {
                title: "Data Scientist",
                company: "Metron",
                year: "Jan 2020 - Mai 2022",
                intro: "Au sein d'une équipe Data Science de sept personnes pour optimiser la consommation énergétique de clients industriels en France et à l'étranger. En parallèle, développement de nos propres outils Data pour l'analyse, la construction et le déploiement de modèles ML ainsi que leur monitoring.",
                description: [
                    "Construction et déploiement de modèles Machine Learning avec Docker sur AWS.",
                    "Analyse et interprétation de données énergétiques de divers secteurs industriels mondiaux",
                    "Développement d'algorithmes d'optimisation de la consommation énergétique",
                    "Développement de bibliothèques Python documentées et testées",
                    "Gestion de projet en mode DevOps",
                    "Création d'un service CLI Python pour les tests de calcul automatiques",
                    "Développement d'un moteur de calcul d'agrégation basé sur Pandas",
                    "Rédaction de tests unitaires et fonctionnels, mise en place de la CI/CD",
                    "Monitoring des modèles avec Prometheus et Grafana",
                    "Création d'un outil de génération automatique de données",
                    "Création d'un outil de détection d'anomalies dans les données",
                    "Création et animation d'une communauté de pratique Python",
                ],
            },
            {
                title: "Data Scientist",
                company: "Beebryte",
                year: "Mars 2019 - Sept 2019",
                intro: "Pour compléter mes études en data et énergie, j'ai effectué ce stage à Singapour dans une startup proposant de réduire la consommation énergétique des systèmes HVAC de ses clients grâce à des solutions IA.",
                description: [
                    "Étude des systèmes de climatisation dans les bâtiments professionnels",
                    "Analyse et interprétation des données énergétiques",
                    "Construction de modèles d'intelligence artificielle",
                    "Exploitation des opportunités d'économies d'énergie via le contrôle intelligent des systèmes",
                    "Structuration et documentation des projets au niveau informatique",
                    "Création de supports d'information techniques pour nos clients",
                ],
            },
        ],
    },

    // Education
    education: {
        heading: "Mon",
        headingHighlight: "Parcours d'apprentissage",
        academicTitle: "Parcours Académique",
        certsTitle: "Certifications Professionnelles",
        degrees: [
            {
                degree: "Diplôme d'ingénieur (Master)",
                school: "IMT Mines Albi",
                year: "2016 - 2019",
                subtitle: "Spécialisation en Science des données et Systèmes énergétiques",
                description:
                    "Une formation d'ingénierie rigoureux alliant théorie scientifique avancée et applications pratiques. Je me suis spécialisé en Science des données tout en développant de solides compétences en Génie énergétique. Cette approche interdisciplinaire m'a préparé à relever des défis complexes et systémiques dans des secteurs en pleine évolution.",
                skills: ["Science des données", "Machine Learning", "Python", "IoT", "Génie énergétique", "Gestion de projet"],
            },
        ],
    },

    // Projects
    projects: {
        featuredLabel: "Projet phare",
        items: [
            {
                title: "RobotHood",
                description:
                    "RobotHood est un généreux bot de trading de cryptomonnaies qui reverse ses bénéfices à des organisations non gouvernementales.",
            },
        ],
    },

    // Contact
    contact: {
        heading: "Contactez-moi",
        subheading: "Une question ou envie de collaborer ? Envoyez-moi un message !",
        emailLabel: "E-mail",
        locationLabel: "Localisation",
        location: "Bordeaux, France",
        namePlaceholder: "Votre nom",
        emailPlaceholder: "Votre e-mail",
        subjectPlaceholder: "Sujet",
        messagePlaceholder: "Votre message",
        sendButton: "Envoyer",
        successMessage: "Message envoyé avec succès !",
        errorMessage: "Une erreur s'est produite. Veuillez réessayer.",
        validationError: "Veuillez remplir tous les champs obligatoires correctement.",
        fieldRequired: {
            name: "Le nom est requis",
            email: "L'e-mail est requis",
            emailInvalid: "L'e-mail est invalide",
            subject: "Le sujet est requis",
            message: "Le message est requis",
        },
    },
};

export default fr;
