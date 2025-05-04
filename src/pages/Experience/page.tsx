import { Briefcase, Calendar} from "lucide-react";
import { useTheme } from "../../provider/page";
import { motion } from "framer-motion";
import { useState } from "react";
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
      company: "Believe",
      mascot: "📘",
      year: "Sept 2023 - Today",
      skills: ["Mathematics", "Physics", "Chemistry", "Biology"],
      image: believe,
      description:
      ["Implementation of documented, secure and scalable MLOps processes within the DS team",
        "Creation of an MLflow server deployed on AWS for Experiment Tracking and Model Registry",
      "Developed a library and cookiecutter to industrialize the creation and deployment of ML models."],
    },
    {
      title: "Data Scientist Freelance",
      company: "Rosa",
      mascot: "📗",
      year: "2021-2023",
      skills: ["Literature", "Social Studies", "Economics", "History"],
      image: rosa,
      description:
        ["Implementation of documented, secure and scalable MLOps processes within the DS team",
          "Creation of an MLflow server deployed on AWS for Experiment Tracking and Model Registry",
        "Developed a library and cookiecutter to industrialize the creation and deployment of ML models."],
    },
    {
      title: "Data Scientist",
      company: "Metron",
      mascot: "📗",
      year: "2021-2023",
      skills: ["Literature", "Social Studies", "Economics", "History"],
      image: metron,
      description:
        ["Implementation of documented, secure and scalable MLOps processes within the DS team",
          "Creation of an MLflow server deployed on AWS for Experiment Tracking and Model Registry",
        "Developed a library and cookiecutter to industrialize the creation and deployment of ML models."],
    },
    {
      title: "Data Scientist",
      company: "Beebryte",
      mascot: "📗",
      year: "2021-2023",
      skills: ["Literature", "Social Studies", "Economics", "History"],
      image: beebryte,
      description:
        ["Implementation of documented, secure and scalable MLOps processes within the DS team",
          "Creation of an MLflow server deployed on AWS for Experiment Tracking and Model Registry",
        "Developed a library and cookiecutter to industrialize the creation and deployment of ML models."],
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
      className={`pt-40 min-h-screen p-8 ${
        isDark
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
              className={`flex flex-col gap-10 mb-4 md:flex-row items-center group rounded-lg relative border p-8 transition-all duration-300 ${
                isDark ? "bg-gray-900/50" : "bg-white/50"
              } backdrop-blur-lg ${
                hoveredIndex === index
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
                    <span className="text-3xl">{edu.mascot}</span>
                    <h3
                      className={`text-2xl font-bold ${
                        isDark ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {edu.title}
                    </h3>
                  </div>
                  <p
                    className={`text-lg flex items-center gap-2 ${
                      isDark ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    <Briefcase className="w-5 h-5 text-teal-500" />
                    {edu.company}
                  </p>
                  <p
                    className={`flex items-center gap-2 ${
                      isDark ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    <Calendar className="w-4 h-4" />
                    {edu.year}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {edu.description.map((desc) => (
                    <li
                      className={`${
                        isDark ? "text-gray-400" : "text-gray-600"
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
                      className="px-2 py-1 text-xs rounded bg-blue-500/10 text-blue-300"
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
