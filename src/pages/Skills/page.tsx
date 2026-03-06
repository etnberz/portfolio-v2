import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useTheme } from "@/provider/page";
import { Marquee } from "@/components/magicui/marquee";
import {
  BrainCircuit,
  Paintbrush,
  Database,
  Cpu,
  Cloud,
  Sparkles,
  GitBranch,
  Server,
  Bot,
  SquareTerminal,
  FileStack,
  Lightbulb,
  Heart,
  GraduationCap,
  Smile,
  Binoculars
} from "lucide-react";
import { FaDocker, FaLinux } from "react-icons/fa";
import { RiTeamFill } from "react-icons/ri";
import {
  SiPython,
  SiAmazonwebservices,
  SiGit,
  SiKubernetes,
  SiGooglecloud,
  SiTerraform,
  SiScikitlearn,
  SiMlflow,
  SiKeras,
  SiTensorflow,
  SiSnowpack,
  SiSnowflake,
  SiApachespark,
  SiPandas,
  SiPolars,
  SiStreamlit,
  SiLangchain,
  SiOllama,
  SiPycharm,
  SiPoetry,
  SiPytest,
  SiJupyter,
  SiPydantic,
  SiGnubash,
  SiGrafana,
  SiPrometheus,
  SiHuggingface
} from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";

interface Skill {
  name: string;
  icon: React.ReactNode;
}

interface SkillCategory {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  color: string;
  skills: Skill[];
}

interface SkillCardProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  skills: Skill[];
  color: string;
  isDark: boolean;
}

const SkillCard = ({
  icon: Icon,
  title,
  skills,
  color,
  isDark,
}: SkillCardProps) => (
  <Card
    className={`group relative overflow-hidden ${isDark ? "bg-gray-900/80 border-gray-700" : "bg-white/90 border-gray-200"
      } hover:scale-[1.02] transition-all duration-300 hover:shadow-xl ${isDark ? "hover:shadow-blue-500/20" : "hover:shadow-blue-500/10"
      }`}
  >
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[rgba(100,100,255,0.1)] to-transparent group-hover:via-[rgba(100,100,255,0.2)] animate-shimmer"></div>
    <CardContent className="p-6 relative z-10">
      <div className="flex items-center gap-4 mb-6">
        <div
          className={`p-3 rounded-xl ${isDark ? "bg-gray-800/50" : "bg-gray-100"
            } ${color} group-hover:scale-110 transition-transform duration-300`}
        >
          <Icon className="w-8 h-8" />
        </div>
        <h3
          className={`text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${isDark ? "from-white to-gray-400" : "from-gray-900 to-gray-600"
            }`}
        >
          {title}
        </h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <Badge
            key={index}
            variant="outline"
            className={`group/badge relative ${isDark
              ? "bg-gray-800/50 hover:bg-gray-700/80 text-gray-100 border-gray-600"
              : "bg-gray-100 hover:bg-gray-200 text-gray-800 border-gray-300"
              } flex items-center gap-2 py-2 px-3 transition-all duration-300 hover:scale-105 hover:shadow-lg ${isDark ? "hover:shadow-blue-500/20" : "hover:shadow-blue-500/10"
              }`}
          >
            <span className="transform group-hover/badge:scale-110 transition-transform duration-300">
              {skill.icon}
            </span>
            <span className="font-medium">{skill.name}</span>
          </Badge>
        ))}
      </div>
    </CardContent>
  </Card>
);

const SkillsSection = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const skillCategories: SkillCategory[] = [
    {
      icon: BrainCircuit,
      title: "Machine Learning",
      color: "text-blue-400",
      skills: [
        {
          name: "Mlflow",
          icon: <SiMlflow className="w-4 h-4 text-blue-400" />,
        },
        {
          name: "Scikit-learn",
          icon: <SiScikitlearn className="w-4 h-4 text-orange-400" />,
        },
        {
          name: "XGBoost",
          icon: <BrainCircuit className="w-4 h-4 text-blue-400" />,
        },
        {
          name: "Keras",
          icon: <SiKeras className="w-4 h-4 text-red-800" />,
        },
        {
          name: "TensorFlow",
          icon: <SiTensorflow className="w-4 h-4 text-orange-400" />,
        },
        {
          name: "SnowparkML",
          icon: <SiSnowpack className="w-4 h-4 text-blue-400" />,
        },
        {
          name: "AWS SageMaker",
          icon: <BrainCircuit className="w-4 h-4 text-violet-400" />,
        },
      ],
    },
    {
      icon: Server,
      title: "Data Science",
      color: "text-green-400",
      skills: [
        {
          name: "SQL",
          icon: <Database className="w-4 h-4 text-grey-400" />,
        },
        {
          name: "Snowflake",
          icon: <SiSnowflake className="w-4 h-4 text-blue-400" />,
        },
        {
          name: "Spark",
          icon: <SiApachespark className="w-4 h-4 text-orange-400" />,
        },
        {
          name: "Pandas",
          icon: <SiPandas className="w-4 h-4 text-violet-400" />,
        },
        {
          name: "Polars",
          icon: <SiPolars className="w-4 h-4 text-white-400" />,
        },
        {
          name: "Pydantic",
          icon: <SiPydantic className="w-4 h-4 text-pink-400" />,
        },
        {
          name: "Streamlit",
          icon: <SiStreamlit className="w-4 h-4 text-red-400" />,
        },
        {
          name: "Jupyter",
          icon: <SiJupyter className="w-4 h-4 text-orange-400" />,
        },
      ],
    },
    {
      icon: Bot,
      title: "Generative AI",
      color: "text-purple-400",
      skills: [
        { name: "Langchain", icon: <SiLangchain className="w-4 h-4 text-blakc-400" /> },
        {
          name: "HuggingFace",
          icon: <SiHuggingface className="w-4 h-4 text-yellow-400" />,
        },
        {
          name: "AWS Bedrock",
          icon: <BrainCircuit className="w-4 h-4 text-green-400" />,
        },
        {
          name: "Prompt Engineering",
          icon: <SquareTerminal className="w-4 h-4 text-blue-400" />,
        },
        {
          name: "RAG",
          icon: <FileStack className="w-4 h-4 text-violet-400" />,
        },
        {
          name: "Tracing",
          icon: <Binoculars className="w-4 h-4 text-white-400" />,
        },
      ],
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      color: "text-orange-400",
      skills: [
        { name: "AWS", icon: <SiAmazonwebservices className="w-4 h-4 text-white-400" /> },
        {
          name: "Docker",
          icon: <FaDocker className="w-4 h-4 text-[#2496ED]" />,
        },
        {
          name: "CI/CD",
          icon: <GitBranch className="w-4 h-4 text-orange-400" />,
        },
        {
          name: "Kubernetes",
          icon: <SiKubernetes className="w-4 h-4 text-blue-400" />,
        },
        { name: "Git", icon: <SiGit className="w-4 h-4 text-orange-600" /> },
        { name: "Linux", icon: <FaLinux className="w-4 h-4 text-yellow-400" /> },
        { name: "GCP", icon: <SiGooglecloud className="w-4 h-4 text-red-400" /> },
        { name: "Terraform", icon: <SiTerraform className="w-4 h-4 text-violet-400" /> },
      ],
    },
    {
      icon: Cpu,
      title: "Tools & Technologies",
      color: "text-pink-400",
      skills: [
        {
          name: "Python",
          icon: <SiPython className="w-4 h-4 text-yellow-400" />,
        },
        {
          name: "Pycharm",
          icon: <SiPycharm className="w-4 h-4 text-grey-400" />,
        },
        {
          name: "VS Code",
          icon: <TbBrandVscode className="w-4 h-4 text-[#007ACC]" />,
        },
        { name: "Poetry", icon: <SiPoetry className="w-4 h-4 text-blue-400" /> },
        {
          name: "Pytest",
          icon: <SiPytest className="w-4 h-4 text-red-400" />,
        },
        { name: "Bash", icon: <SiGnubash className="w-4 h-4 text-white-400" /> },

        { name: "Grafana", icon: <SiGrafana className="w-4 h-4 text-orange-400" /> },
        { name: "Prometheus", icon: <SiPrometheus className="w-4 h-4 text-black-400" /> },
      ],
    },
    {
      icon: Sparkles,
      title: "Soft Skills",
      color: "text-yellow-400",
      skills: [
        {
          name: "Curious",
          icon: <Lightbulb className="w-4 h-4 text-yellow-400" />,
        },
        {
          name: "Passionate",
          icon: <Heart className="w-4 h-4 text-red-400" />,
        },
        {
          name: "Team Work",
          icon: <RiTeamFill className="w-4 h-4 text-purple-400" />,
        },
        {
          name: "Pedagogical",
          icon: <GraduationCap className="w-4 h-4 text-green-400" />,
        },
        {
          name: "Creative",
          icon: <Paintbrush className="w-4 h-4 text-orange-400" />,
        },
        {
          name: "Smiling",
          icon: <Smile className="w-4 h-4 text-yellow-400" />,
        },
      ],
    },
  ];

  return (
    <main
      className={`lg:pt-0 flex flex-col items-center justify-center ${isDark ? "bg-[#090F1C] text-white" : "bg-gray-50 text-gray-900"
        } min-h-screen flex items-center justify-center`}
    >
      <div className="text-center mb-8">
        <h1
          className={`text-4xl font-bold ${isDark ? "text-white" : "text-gray-900"
            } bg-clip-text text-transparent bg-gradient-to-r ${isDark
              ? "from-blue-400 via-purple-400 to-pink-400"
              : "from-blue-600 via-purple-600 to-pink-600"
            }`}
        >
          My Tech Stack
        </h1>
      </div>

      <div className="text-center">
        <div
          className={`inline-flex items-center gap-2 px-4 py-1 rounded-full ${isDark ? "bg-white/5" : "bg-black/5"
            } backdrop-blur-sm border ${isDark ? "border-white/10" : "border-black/10"
            }`}
        >
          <span
            className={`text-sm font-medium tracking-wider uppercase ${isDark ? "text-blue-300" : "text-blue-600"
              }`}
          >
            Technologies I work with
          </span>
          <span
            className={`inline-block w-1.5 h-1.5 rounded-full ${isDark ? "bg-blue-400" : "bg-blue-500"
              } animate-pulse`}
          ></span>
        </div>
      </div>

      <section className="relative w-full overflow-hidden py-8">
        <div
          className={`w-full ${isDark ? "bg-white/5" : "bg-black/5"
            } backdrop-blur-lg border-y ${isDark ? "border-white/10" : "border-black/10"
            } shadow-lg`}
        >
          <div className="relative">
            <div
              className={`absolute inset-0 ${isDark
                ? "bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10"
                : "bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5"
                } opacity-50 animate-pulse`}
            ></div>
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-transparent to-background opacity-20"></div>
            <Marquee
              pauseOnHover
              className="[--duration:25s] py-6 hover:opacity-80 transition-opacity"
              repeat={3}
            >
              <div
                className={`p-4 rounded-lg ${isDark ? "bg-gray-800/50" : "bg-white/80"
                  } backdrop-blur-sm transform hover:scale-110 transition-transform duration-300 shadow-lg hover:shadow-blue-500/20`}
              >
                <SiTensorflow className="w-8 h-8 text-orange-400" />
              </div>
              <div className="flex items-center gap-8 px-4">
                <div
                  className={`p-4 rounded-lg ${isDark ? "bg-gray-800/50" : "bg-white/80"
                    } backdrop-blur-sm transform hover:scale-110 transition-transform duration-300 shadow-lg hover:shadow-blue-500/20`}
                >
                  <SiMlflow className="w-8 h-8 text-blue-400" />
                </div>
                <div
                  className={`p-4 rounded-lg ${isDark ? "bg-gray-800/50" : "bg-white/80"
                    } backdrop-blur-sm transform hover:scale-110 transition-transform duration-300 shadow-lg hover:shadow-blue-500/20`}
                >
                  <SiGnubash className="w-8 h-8 text-white-400" />
                </div>
                <div
                  className={`p-4 rounded-lg ${isDark ? "bg-gray-800/50" : "bg-white/80"
                    } backdrop-blur-sm transform hover:scale-110 transition-transform duration-300 shadow-lg hover:shadow-blue-500/20`}
                >
                  <SiHuggingface className="w-8 h-8 text-yellow-400" />
                </div>
                <div
                  className={`p-4 rounded-lg ${isDark ? "bg-gray-800/50" : "bg-white/80"
                    } backdrop-blur-sm transform hover:scale-110 transition-transform duration-300 shadow-lg hover:shadow-blue-500/20`}
                >
                  <BrainCircuit className="w-8 h-8 text-violet-400" />
                </div>
                <div
                  className={`p-4 rounded-lg ${isDark ? "bg-gray-800/50" : "bg-white/80"
                    } backdrop-blur-sm transform hover:scale-110 transition-transform duration-300 shadow-lg hover:shadow-blue-500/20`}
                >
                  <SiScikitlearn className="w-8 h-8 text-orange-400" />
                </div>
                <div
                  className={`p-4 rounded-lg ${isDark ? "bg-gray-800/50" : "bg-white/80"
                    } backdrop-blur-sm transform hover:scale-110 transition-transform duration-300 shadow-lg hover:shadow-blue-500/20`}
                >
                  <SiOllama className="w-8 h-8 text-white-400" />
                </div>
                <div
                  className={`p-4 rounded-lg ${isDark ? "bg-gray-800/50" : "bg-white/80"
                    } backdrop-blur-sm transform hover:scale-110 transition-transform duration-300 shadow-lg hover:shadow-blue-500/20`}
                >
                  <SiSnowflake className="w-8 h-8 text-blue-400" />
                </div>
                <div
                  className={`p-4 rounded-lg ${isDark ? "bg-gray-800/50" : "bg-white/80"
                    } backdrop-blur-sm transform hover:scale-110 transition-transform duration-300 shadow-lg hover:shadow-blue-500/20`}
                >
                  <SiPandas className="w-8 h-8 text-violet-400" />
                </div>
                <div
                  className={`p-4 rounded-lg ${isDark ? "bg-gray-800/50" : "bg-white/80"
                    } backdrop-blur-sm transform hover:scale-110 transition-transform duration-300 shadow-lg hover:shadow-blue-500/20`}
                >
                  <SiApachespark className="w-8 h-8 text-orange-400" />
                </div>
                <div
                  className={`p-4 rounded-lg ${isDark ? "bg-gray-800/50" : "bg-white/80"
                    } backdrop-blur-sm transform hover:scale-110 transition-transform duration-300 shadow-lg hover:shadow-blue-500/20`}
                >
                  <SiLangchain className="w-8 h-8 text-blakc-400" />
                </div>
                <div
                  className={`p-4 rounded-lg ${isDark ? "bg-gray-800/50" : "bg-white/80"
                    } backdrop-blur-sm transform hover:scale-110 transition-transform duration-300 shadow-lg hover:shadow-blue-500/20`}
                >
                  <FaDocker className="w-8 h-8 text-[#2496ED]" />
                </div>
                <div
                  className={`p-4 rounded-lg ${isDark ? "bg-gray-800/50" : "bg-white/80"
                    } backdrop-blur-sm transform hover:scale-110 transition-transform duration-300 shadow-lg hover:shadow-blue-500/20`}
                >
                  <SiGit className="w-8 h-8 text-orange-600" />
                </div>
                <div
                  className={`p-4 rounded-lg ${isDark ? "bg-gray-800/50" : "bg-white/80"
                    } backdrop-blur-sm transform hover:scale-110 transition-transform duration-300 shadow-lg hover:shadow-blue-500/20`}
                >
                  <FaLinux className="w-8 h-8 text-yellow-400" />
                </div>
                <div
                  className={`p-4 rounded-lg ${isDark ? "bg-gray-800/50" : "bg-white/80"
                    } backdrop-blur-sm transform hover:scale-110 transition-transform duration-300 shadow-lg hover:shadow-blue-500/20`}
                >
                  <SiAmazonwebservices className="w-8 h-8 text-white-400" />
                </div>
                <div
                  className={`p-4 rounded-lg ${isDark ? "bg-gray-800/50" : "bg-white/80"
                    } backdrop-blur-sm transform hover:scale-110 transition-transform duration-300 shadow-lg hover:shadow-blue-500/20`}
                >
                  <SiPytest className="w-8 h-8 text-red-400" />
                </div>
                <div
                  className={`p-4 rounded-lg ${isDark ? "bg-gray-800/50" : "bg-white/80"
                    } backdrop-blur-sm transform hover:scale-110 transition-transform duration-300 shadow-lg hover:shadow-blue-500/20`}
                >
                  <SiPython className="w-8 h-8 text-yellow-400" />
                </div>
              </div>
            </Marquee>
          </div>
        </div>

        <div
          className={`pointer-events-none absolute inset-y-0 left-0 w-1/3 ${isDark
            ? "bg-gradient-to-r from-[#090F1C] via-[#090F1C]/90 to-transparent"
            : "bg-gradient-to-r from-gray-50 via-gray-50/90 to-transparent"
            } z-10`}
        ></div>
        <div
          className={`pointer-events-none absolute inset-y-0 right-0 w-1/3 ${isDark
            ? "bg-gradient-to-l from-[#090F1C] via-[#090F1C]/90 to-transparent"
            : "bg-gradient-to-l from-gray-50 via-gray-50/90 to-transparent"
            } z-10`}
        ></div>
      </section>
      <section className="container mx-auto px-4 py-11">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCard
              key={index}
              icon={category.icon}
              title={category.title}
              skills={category.skills}
              color={category.color}
              isDark={isDark}
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default SkillsSection;
