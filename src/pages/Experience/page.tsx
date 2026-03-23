import { Briefcase, Calendar, Building2 } from "lucide-react";
import { useTheme } from "../../provider/page";
import { motion } from "framer-motion";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import edf from "@/assets/experience/logo-edf.png";
import believe from "@/assets/experience/believe-sa.png";
import metron from "@/assets/experience/metron.jpeg";
import rosa from "@/assets/experience/rosa.png";
import beebryte from "@/assets/experience/beebryte.png";

const images = [edf, believe, rosa, metron, beebryte];

export default function ProfessionalJourney() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const { t } = useTranslation();

  const skills = [
    ["Python", "Amazon Web Services", "Machine Learning Operations (MLOps)", "Terraform", "Sagemaker", "HuggingFace"],
    ["Python", "Amazon Web Services", "Machine Learning Operations (MLOps)", "Snowflake", "MLflow", "GitLab"],
    ["Heroku", "Plotly", "Xarray", "GitHub", "Docker"],
    ["Amazon Web Services", "Data Science", "Gitlab CI/CD", "Python", "Machine Learning"],
    ["Python", "Data Science", "Machine Learning", "GitHub"],
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

  const jobs = t("experience.jobs", { returnObjects: true }) as Array<{
    title: string;
    company: string;
    year: string;
    intro: string;
    description: string[];
  }>;

  return (
    <div
      className={`pt-20 md:pt-40 min-h-screen p-4 md:p-8 ${isDark
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
          {jobs.map((job, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className={`flex flex-col gap-6 md:gap-10 mb-4 md:flex-row items-center group rounded-lg relative border p-4 md:p-8 transition-all duration-300 ${isDark ? "bg-gray-900/50" : "bg-white/50"
                } backdrop-blur-lg ${hoveredIndex === index
                  ? "border-teal-500 md:scale-[1.05] shadow-lg"
                  : "border-blue-400/20"
                }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Image Section */}
              <div className="w-full md:w-1/3 overflow-hidden rounded-lg">
                <img
                  src={images[index]}
                  alt={job.title}
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
                      {job.title}
                    </h3>
                  </div>
                  <p
                    className={`text-lg flex items-center gap-2 ${isDark ? "text-gray-300" : "text-gray-700"
                      }`}
                  >
                    <Building2 className="w-5 h-5 text-purple-400" />
                    {job.company}
                  </p>
                  <p
                    className={`flex items-center gap-2 ${isDark ? "text-gray-400" : "text-gray-600"
                      }`}
                  >
                    <Calendar className="w-4 h-4" />
                    {job.year}
                  </p>
                </div>

                <p
                  className={`text-md bold border-l-2 border-teal-500 pl-3 ${isDark ? "text-gray-100" : "text-gray-700"
                    }`}
                >
                  {job.intro}
                </p>

                <ul className="list-disc pl-5 space-y-1">
                  {job.description.map((desc, i) => (
                    <li
                      key={i}
                      className={`${isDark ? "text-gray-200" : "text-gray-600"}`}
                    >
                      {desc}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {skills[index].map((skill, i) => (
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
