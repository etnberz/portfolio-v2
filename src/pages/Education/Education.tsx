import { useState } from "react";
import {  Calendar, BookOpen, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "@/provider/page";
import { Badge } from "@/components/ui/badge";
import { SiAmazonwebservices, SiLangchain, SiKubernetes, SiMlflow } from "react-icons/si";
import kubernetes from "@/assets/certifs/kubernetes.pdf";
import langchain from "@/assets/certifs/langchain.pdf";
import mlflow from "@/assets/certifs/mlflow.pdf";

interface Certif {
  name: string;
  icon: React.ReactNode;
  link: string;
}

const certifs: Certif[] = [
  { name: "AWS Machine Learning - Associate",
    icon: <SiAmazonwebservices className="w-7 h-7 text-orange-400" />,
    link: "https://www.credly.com/badges/d9d4a8aa-ac57-43df-a9eb-c0a3f4beea5e/linked_in_profile" },
  { name: "Kubernetes Mastery - Hands On",
    icon: <SiKubernetes className="w-7 h-7 text-blue-600" />,
    link: kubernetes },{ name: "Langchain - Develop LLM Powered Apps",
      icon: <SiLangchain className="w-7 h-7 text-white-400" />,
      link: langchain },
  { name: "Mlflow - Master the art of MLOps",
    icon: <SiMlflow className="w-7 h-7 text-blue-400" />,
    link: mlflow },
]

const EducationSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";

  const educationData = [
    {
      degree: "Engineering Master Degree",
      school: "IMT Mines Albi",
      year: "2016-2019",
      skills: ["Data Science", "Machine Learning", "Python", "IoT", "Energy Engineering", "Project Management"],
      subtitle: "Master's degree in Data Science and Energy Engineering",
      description:
        "This master degree taught me Data Science, Machine Learning, IoT, and gave me a solid scientific foundation in the field of energy: Thermodynamics, Electrotechnics, Smart Grids, Energy Market, etc... IMT Mines d'Albi offers a general engineering course reflected in the acquisition of both scientific and transversal skills that prepare us to evolve in a constantly changing world.",
    }
  ];

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
    <section
      className={`min-h-screen relative overflow-hidden py-40 ${
        isDarkMode
          ? "bg-gradient-to-b from-[#020617] via-[#0a0f1f] to-[#000D1A]/90"
          : "bg-gradient-to-b from-[#f0f4f8] via-[#e2e8f0] to-[#cbd5e1]"
      }`}
    >
        <div className="container mx-auto px-2 py-12 relative">
          <div className="flex flex-col md:flex-row justify-between">
            {/* Left Section */}
            <div className="md:w-1/2 w-full gap-2 px-5  py-8">
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent mb-6">
                  Academic Education
              </h2>
                {educationData.map((edu, index) => (
                  <motion.div
                    key={index}
                    variants={cardVariants}
                    className={`relative border rounded-xl p-8 transition-all duration-300 ${
                      isDarkMode ? "bg-gray-900/50" : "bg-white/50"
                    } backdrop-blur-lg ${
                      hoveredIndex === index
                        ? "border-teal-500 scale-[1.05] shadow-lg"
                        : "border-blue-400/20"
                    }`}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <div className="flex items-center gap-3">
                          <span><GraduationCap className="w-7 h-7 text-teal-500" /></span>
                          <h3
                            className={`text-2xl font-bold ${
                              isDarkMode ? "text-white" : "text-gray-900"
                            }`}
                          >
                            {edu.degree}
                          </h3>
                        </div>
                        <p
                          className={`text-lg flex items-center gap-2 ${
                            isDarkMode ? "text-gray-300" : "text-gray-700"
                          }`}
                        >
                          <BookOpen className="w-5 h-5 text-purple-400" />
                          {edu.school}
                        </p>
                        <p
                          className={`flex items-center gap-2 ${
                            isDarkMode ? "text-gray-400" : "text-gray-600"
                          }`}
                        >
                          <Calendar className="w-4 h-4" />
                          {edu.year}
                        </p>
                      </div>

                      <p
                        className={`text-m italic border-l-2 border-teal-500 pl-3 ${
                          isDarkMode ? "text-gray-300" : "text-gray-700"
                        }`}
                      >
                        {edu.subtitle}
                      </p>

                      <p
                      className={`text-m ${
                        isDarkMode ? "text-gray-200" : "text-gray-600"
                      }`}
                      >
                        {edu.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {edu.skills.map((skill, i) => (
                          <span
                            key={i}
                            className="px-2 py-1 text-m rounded bg-blue-500/10 text-blue-300"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
                </div>
                {/* Right Section */}
            <div className="md:w-1/2 w-full gap-2 px-5 py-8">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent mb-6">
                  Self Education
                </h2>
            <div className="flex flex-wrap gap-2">

              {certifs.map((cert, index) => (
                <a className={'w-full'} href={cert.link}>
                <Badge
                  key={index}
                  variant={"destructive"}
                  className={`w-full group/badge relative ${
                    isDarkMode
                      ? "bg-gray-800/50 hover:bg-gray-700/80 text-gray-100 border-gray-600"
                      : "bg-gray-100 hover:bg-gray-200 text-gray-800 border-gray-300"
                  } flex items-center gap-2 py-3 px-3 transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                    isDarkMode ? "hover:shadow-blue-500/20" : "hover:shadow-blue-500/10"
                  }`}
                >
            <span className="transform group-hover/badge:scale-110 transition-transform duration-300">
              {cert.icon}
            </span>
            <span className={`text-2xl ${
                              isDarkMode ? "text-white" : "text-gray-900"
                            }`}>{cert.name}</span>
          </Badge></a>
        ))}
      </div>
            
            </div>
            </div>
      </div>
    </section>
  );
};

export default EducationSection;
