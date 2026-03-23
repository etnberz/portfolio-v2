import { Calendar, BookOpen, GraduationCap, ExternalLink, Award } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/provider/page";
import { useTranslation } from "react-i18next";
import { SiAmazonwebservices, SiKubernetes, SiMlflow, SiTerraform } from "react-icons/si";
import kubernetes from "@/assets/certifs/kubernetes.pdf";
import mlflow from "@/assets/certifs/mlflow.pdf";

interface Certif {
  name: string;
  icon: React.ReactNode;
  link: string;
  issuer: string;
  date: string;
}

// 💡 Amélioration : Sortir les données statiques en dehors du composant 
// évite de les recréer à chaque rendu (meilleures performances).
const certifs: Certif[] = [
  {
    name: "AWS Machine Learning - Associate",
    issuer: "Amazon Web Services",
    date: "2025",
    icon: <SiAmazonwebservices className="w-8 h-8 text-[#FF9900]" />,
    link: "https://www.credly.com/badges/d9d4a8aa-ac57-43df-a9eb-c0a3f4beea5e/linked_in_profile"
  },
  {
    name: "Terraform Associate",
    issuer: "Hashicorp",
    date: "2025",
    icon: <SiTerraform className="w-8 h-8 text-purple-600" />,
    link: "https://www.credly.com/badges/71cd2896-0965-467b-9172-f1a956bcf950/linked_in?t=t66g25"
  },
  {
    name: "Kubernetes Mastery - Hands On",
    issuer: "Udemy - Bret Fisher",
    date: "2025",
    icon: <SiKubernetes className="w-8 h-8 text-blue-500" />,
    link: kubernetes
  },
  {
    name: "Mlflow - Master the art of MLOps",
    issuer: "Databricks",
    date: "2024",
    icon: <SiMlflow className="w-8 h-8 text-blue-400" />,
    link: mlflow
  },
];

// Removed static educationData array

const EducationSection = () => {
  // 💡 Amélioration : isDarkMode est gardé pour des cas spécifiques, mais il est recommandé
  // d'utiliser les classes Tailwind "dark:..." pour la gestion des thèmes lorsque possible.
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";
  const { t } = useTranslation();

  const educationData = t("education.degrees", { returnObjects: true }) as Array<{
    degree: string;
    school: string;
    year: string;
    subtitle: string;
    description: string;
    skills: string[];
  }>;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section
      className={`min-h-screen relative overflow-hidden pt-20 pb-16 md:py-32 transition-colors duration-500 ${isDarkMode
        ? "bg-[#020617] text-white"
        : "bg-[#f8fafc] text-slate-900"
        }`}
    >
      {/* Éléments de fond décoratifs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
        <div className={`absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full blur-[120px] ${isDarkMode ? "bg-teal-500/20" : "bg-teal-200/40"}`} />
        <div className={`absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] rounded-full blur-[120px] ${isDarkMode ? "bg-blue-500/20" : "bg-blue-200/40"}`} />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 lg:max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
            {t("education.heading")} <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">{t("education.headingHighlight")}</span>
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-teal-400 to-blue-500 mx-auto rounded-full" />
        </motion.div>

        {/* 💡 Amélioration : Utilisation d'une grille CSS (grid) au lieu de flexbox flex-col/row
            pour une meilleure gestion de l'espace entre la partie académique et les certifications. */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

          {/* Colonne de gauche : Académique */}
          <div className="lg:col-span-5 space-y-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 rounded-2xl bg-teal-500/10 text-teal-500">
                <GraduationCap className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold italic tracking-wide">{t("education.academicTitle")}</h3>
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-8"
            >
              {educationData.map((edu, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`group relative p-8 rounded-3xl border transition-all duration-300 ${isDarkMode
                    ? "bg-slate-900/40 border-slate-800 hover:border-teal-500/50 shadow-2xl h-full"
                    : "bg-white border-slate-200 hover:border-teal-400/50 shadow-xl h-full"
                    } backdrop-blur-sm`}
                >
                  <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                    <GraduationCap className="w-24 h-24" />
                  </div>

                  <div className="relative z-10 space-y-6">
                    <div className="space-y-4">
                      <div>
                        <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-teal-500/10 text-teal-500 mb-3 uppercase tracking-wider">
                          {edu.year}
                        </span>
                        <h4 className="text-2xl font-bold leading-tight group-hover:text-teal-400 transition-colors">
                          {edu.degree}
                        </h4>
                      </div>

                      <div className="flex items-center gap-2 text-slate-400 group-hover:text-slate-300 transition-colors">
                        <BookOpen className="w-4 h-4 text-purple-400" />
                        <span className="font-semibold">{edu.school}</span>
                      </div>
                    </div>

                    <p className={`text-sm leading-relaxed ${isDarkMode ? "text-slate-400" : "text-slate-600"}`}>
                      {edu.description}
                    </p>

                    <div className="flex flex-wrap gap-2 pt-4">
                      {edu.skills.map((skill, i) => (
                        <span
                          key={i}
                          className={`text-xs font-bold px-3 py-1 rounded-full uppercase tracking-tighter ${isDarkMode
                            ? "bg-slate-800 text-slate-300 border-slate-700"
                            : "bg-slate-100 text-slate-600 border-slate-200"
                            } border`}
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

          {/* Colonne de droite : Certifications */}
          <div className="lg:col-span-7 space-y-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 rounded-2xl bg-blue-500/10 text-blue-500">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold italic tracking-wide">{t("education.certsTitle")}</h3>
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              <AnimatePresence>
                {certifs.map((cert, index) => (
                  <motion.a
                    key={index}
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={itemVariants}
                    whileHover={{ scale: 1.02, y: -5 }}
                    // 💡 Amélioration : L'utilisation de balises <a> directes pour des liens externes
                    // est meilleure que d'encapsuler un composant Badge ou Button à l'intérieur.
                    className={`flex flex-col p-6 rounded-2xl border transition-all duration-300 ${isDarkMode
                      ? "bg-slate-900/60 border-slate-800 hover:border-blue-500/50 hover:bg-slate-800/80 shadow-lg"
                      : "bg-white border-slate-200 hover:border-blue-400/50 hover:shadow-xl"
                      } group`}
                  >
                    <div className="flex justify-between items-start mb-6">
                      <div className="p-3 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 shadow-inner group-hover:scale-110 transition-transform duration-500">
                        {cert.icon}
                      </div>
                      <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-blue-400 transition-colors" />
                    </div>

                    <div className="mt-auto space-y-3">
                      <h4 className={`font-bold leading-snug group-hover:text-blue-400 transition-colors ${isDarkMode ? "text-slate-100" : "text-slate-800"}`}>
                        {cert.name}
                      </h4>
                      <div className="flex items-center gap-4 text-xs font-medium uppercase tracking-widest text-slate-500">
                        <span className="truncate" title={cert.issuer}>{cert.issuer}</span>
                        <div className="flex items-center gap-1.5 shrink-0 flex-1 justify-end">
                          <Calendar className="w-3 h-3" />
                          <span>{cert.date}</span>
                        </div>
                      </div>
                    </div>
                  </motion.a>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default EducationSection;
