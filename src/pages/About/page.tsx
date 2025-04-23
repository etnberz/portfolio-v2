import HeroImg from "../../assets/hero.jpg";
import { useTheme } from "../../provider/page";

export default function About() {
  const { theme } = useTheme();

  return (
    <>
      <section
        id="about"
        className={`py-16 md:py-32 ${
          theme === "dark"
            ? "bg-[#090f1c] text-white"
            : "bg-white text-gray-900"
        }`}
      >
        <div id="about_me" className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
          <h2
            className={`relative z-10 max-w-xl text-4xl font-medium lg:text-5xl ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}
          >
            Let's build AI Together!
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
            <div className="relative mb-6 sm:mb-0">
              <div
                className={`bg-linear-to-b aspect-76/59 relative rounded-2xl p-px ${
                  theme === "dark" ? "from-zinc-700" : "from-zinc-300"
                } to-transparent`}
              >
                <img
                  src={HeroImg}
                  className={`rounded-[15px] ${
                    theme === "dark" ? "block" : "hidden"
                  }`}
                  alt="payments illustration dark"
                  width={1207}
                  height={929}
                />
                <img
                  src={HeroImg}
                  className={`rounded-[15px] shadow ${
                    theme === "dark" ? "hidden" : "block"
                  }`}
                  alt="payments illustration light"
                  width={1207}
                  height={929}
                />
              </div>
            </div>

            <div className="relative space-y-4 justify-evenly">
              <p
                className={`${
                  theme === "dark" ? "text-gray-300" : "text-gray-600"
                }`}
              >
                <span
                  className={`font-bold ${
                    theme === "dark" ? "text-white" : "text-gray-900"
                  }`}
                >
                ML Engineer since 2019
                </span>
                , I will support you in your Data/AI projects: from data extraction to the deployment
                of predictive models (ML/LLM) in production, let's build AI processes that fits your organization's needs!
                I have a strong expertise of Python and its associated ML libraries, as well as a deep understanding of the challenges
                related to the model lifecycle.{" "}
              </p>
              <p
                className={`${
                  theme === "dark" ? "text-gray-300" : "text-gray-600"
                }`}
              >
                With a focus on code quality, I manage my projects using an MLOps approach: Unit Testing,
                Dependency Management (Poetry), CI/CD, Git Versioning, Docker Containers, Experiment Tracking,
                Feature Store, Model Registry (MLflow, Snowflake), Monitoring, and Cloud Deployment (AWS, GCP...).
              </p>
              <p
                className={`${
                  theme === "dark" ? "text-gray-300" : "text-gray-600"
                }`}
              >
                Naturally curious, I am passionate about 
                knowledge sharing, the exchange of ideas, and teaching MLOps concepts. Transferring expertise 
                and training teams are an integral part of my approach: I enjoy creating an environment 
                where everyone can learn, grow, and thrive.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
