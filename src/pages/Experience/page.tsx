import { Briefcase, Calendar, Building2 } from "lucide-react";
import { useTheme } from "../../provider/page";
import { motion } from "framer-motion";
import { useState } from "react";
import edf from "@/assets/experience/logo-edf.png";
import believe from "@/assets/experience/believe-sa.png";
import metron from "@/assets/experience/metron.jpeg";
import rosa from "@/assets/experience/rosa.png";
import beebryte from "@/assets/experience/beebryte.png";

export default function ProfessionalJourney() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const experienceData = [
    {
      title: "ML Ops Engineer",
      company: "EDF",
      year: "Sept 2025 - Today",
      skills: ["Python", "Amazon Web Services", "Machine Learning Operations (MLOps)", "Terraform", "Sagemaker", "HuggingFace"],
      image: edf,
      intro: "Intervention as MLOps to industrialise AI models for an application related to nuclear safety within a product team.",
      description:
        ["Transformation of document processing pipelines.",
          "Migration of document database from Kendra to Opensearch.",
          "Industrialisation of Sagemaker, Textract and Comprehend AI models.",
          "Backend development on various services in Python for a microservices architecture: Terraform for Lambda, Step Function, EventBridge, DynamoDB, S3, SNS, SQS."
        ]
    },
    {
      title: "ML Ops Engineer",
      company: "Believe",
      year: "Sept 2023 - Sept 2025",
      skills: ["Python", "Amazon Web Services", "Machine Learning Operations (MLOps)", "Snowflake", "MLflow", "GitLab"],
      image: believe,
      intro: "Initially hired as a Data Scientist, I soon offered to rethink the team's processes and tools. I set up a ML/LLMOps strategy for the team, enabling us to build, train, deploy, monitor and industrialize our ML models in a scalable and secure way.",
      description:
        ["Implementation of documented, secure and scalable MLOps and LLMOps processes within the DS team",
          "Creation of an MLflow server deployed on AWS for Experiment Tracking and Model Registry",
          "Developed a library and cookiecutter to industrialize the creation and deployment of ML/LLM models",
          "Refactoring and migration of Legacy models to the new MLOps paradigm",
          "Drafting and disseminating good code practices, training teams",
          "Development of a Data application in Streamlit in Snowflake",
          "Development of the associated prediction module deployed on AWS Lambda",
        ]
    },
    {
      title: "Data Scientist Freelance",
      company: "Rosa",
      year: "Sept 2022 - Jan 2023",
      skills: ["Heroku", "Plotly", "Xarray", "GitHub", "Docker"],
      image: rosa,
      intro: "A friend asked me to create a technical PoC to sell his project to investors. He's setting up a company to measure the environmental impact of mining sites using satellite images from the Sentinel mission (European Space Agency).",
      description:
        ["Analysis and interpretation of satellite data (ESA Sentinel mission)",
          "Creation of satellite image features and visuals with Xarray",
          "Development of an internal library for extracting and processing satellite images",
          "Development of a web app with Plotly Dash deployed on Heroku"],
    },
    {
      title: "Data Scientist",
      company: "Metron",
      year: "Jan 2020 - May 2022",
      skills: ["Amazon Web Services", "Data Science", " Gitlab CI/CD", "Python", "Machine Learning"],
      image: metron,
      intro: "In a Data Science team of seven people to optimize the energy consumption of industrial customers in France and abroad. In parallel, development of our own Data tools for data analysis, construction and deployment of ML models and their monitoring.",
      description:
        ["Building and deploying Machine Learning models with Docker on AWS.",
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
          "Created and led a Python community of practice"],
    },
    {
      title: "Data Scientist",
      company: "Beebryte",
      year: "Mar 2019 - Sept 2019",
      skills: ["Python", "Data Science", "Machine Learning", "GitHub"],
      image: beebryte,
      intro: "To complete my data and energy studies, I did this internship in Singapore with a startup offering to reduce the energy consumption of its customers' HVAC systems using data and AI solutions.",
      description:
        ["Study of air-conditioning systems in professional buildings",
          "Analysis and interpretation of energy data",
          "Building artificial intelligence models",
          "Exploiting energy-saving opportunities through intelligent system control",
          "Structuring and documenting projects at IT level",
          "Creation of information materials for our customers"],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };


  return (
    <div
      className={`pt-40 min-h-screen p-8 ${isDark
        ? "bg-gradient-to-b from-[#020617] via-[#0a0f1f] to-[#000D1A]/90 text-slate-100"
        : "bg-gradient-to-b from-[#f0f4f8] via-[#e2e8f0] to-[#cbd5e1] text-gray-900"
        }`}
    >

      <div className="max-w-7xl mx-auto space-y-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="block gap-20"
        >
          {experienceData.map((edu, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className={`flex flex-col gap-10 mb-4 md:flex-row items-center group rounded-lg relative border p-8 transition-all duration-300 ${isDark ? "bg-gray-900/50" : "bg-white/50"
                } backdrop-blur-lg ${hoveredIndex === index
                  ? "border-teal-500 scale-[1.05] shadow-lg"
                  : "border-blue-400/20"
                }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Image Section */}
              <div className="md:w-1/3 overflow-hidden rounded-lg">
                <img
                  src={edu.image}
                  alt={edu.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Text Section */}
              <div className="md:w-2/3 space-y-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <span><Briefcase className="w-7 h-7 text-teal-500" /></span>
                    <h3
                      className={`text-2xl font-bold ${isDark ? "text-white" : "text-gray-900"
                        }`}
                    >
                      {edu.title}
                    </h3>
                  </div>
                  <p
                    className={`text-lg flex items-center gap-2 ${isDark ? "text-gray-300" : "text-gray-700"
                      }`}
                  >
                    <Building2 className="w-5 h-5 text-purple-400" />
                    {edu.company}
                  </p>
                  <p
                    className={`flex items-center gap-2 ${isDark ? "text-gray-400" : "text-gray-600"
                      }`}
                  >
                    <Calendar className="w-4 h-4" />
                    {edu.year}
                  </p>
                </div>

                <p
                  className={`text-md bold border-l-2 border-teal-500 pl-3 ${isDark ? "text-gray-100" : "text-gray-700"
                    }`}
                >
                  {edu.intro}
                </p>

                <div className="block block-col gap-2">
                  {edu.description.map((desc) => (
                    <li
                      className={`${isDark ? "text-gray-200" : "text-gray-600"
                        }`}
                    >
                      {desc}
                    </li>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {edu.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-md rounded bg-blue-500/10 text-blue-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
