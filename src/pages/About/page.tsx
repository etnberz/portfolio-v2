import HeroImg from "../../assets/hero.jpg";
import { useTheme } from "../../provider/page";
import { useTranslation } from "react-i18next";

export default function About() {
  const { theme } = useTheme();
  const { t } = useTranslation();

  return (
    <>
      <section
        id="about"
        className={`py-16 md:py-32 ${theme === "dark"
          ? "bg-[#090f1c] text-white"
          : "bg-white text-gray-900"
          }`}
      >
        <div id="about_me" className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
          <h2
            className={`relative z-10 max-w-xl text-4xl font-medium lg:text-5xl ${theme === "dark" ? "text-white" : "text-gray-900"
              }`}
          >
            {t("about.heading")}
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
            <div className="relative mb-6 sm:mb-0">
              <div
                className={`bg-linear-to-b aspect-76/59 relative rounded-2xl p-px ${theme === "dark" ? "from-zinc-700" : "from-zinc-300"
                  } to-transparent`}
              >
                <img
                  src={HeroImg}
                  className={`rounded-[15px] ${theme === "dark" ? "block" : "hidden"
                    }`}
                  alt="payments illustration dark"
                  width={1207}
                  height={929}
                />
                <img
                  src={HeroImg}
                  className={`rounded-[15px] shadow ${theme === "dark" ? "hidden" : "block"
                    }`}
                  alt="payments illustration light"
                  width={1207}
                  height={929}
                />
              </div>
            </div>

            <div className="relative space-y-4 justify-evenly">
              <p
                className={`${theme === "dark" ? "text-gray-300" : "text-gray-600"
                  }`}
              >
                <span
                  className={`font-bold ${theme === "dark" ? "text-white" : "text-gray-900"
                    }`}
                >
                  {t("about.p1_bold")}
                </span>
                {t("about.p1")}
              </p>
              <p
                className={`${theme === "dark" ? "text-gray-300" : "text-gray-600"
                  }`}
              >
                {t("about.p2")}
              </p>
              <p
                className={`${theme === "dark" ? "text-gray-300" : "text-gray-600"
                  }`}
              >
                {t("about.p3")}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
