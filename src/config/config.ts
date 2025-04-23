const config = {
  information: {
    name: "Maxime Caïtucoli",
    helloText: "Hello",
    welcomeText: "✨ Welcome to my universe",
    title: "ML Engineer 🚀 | AI System Builder 🔧 | Crafting frameworks 🐍",
    title3: "And coding the future 💻 ✨",
  },
  flipWords: ["MLOps for AI Systems", "AWS Certified MLA", "Crafting LLM Apps", "Data Enthusiast"],
  codeContent: {
    code: `class Profile:
    def __init__(self):
        self.name = "Maxime Caïtucoli"
        self.title = "Full-Stack ML/LLM Engineer | Cloud Enthusiast | Problem Solver"
        self.skills = [
            "Python", "MLOps", "Data Science", "Machine Learning", "LLM",
            "Pandas", "LangChain", "Scikit-learn", "Keras", "TensorFlow",
            "Snowflake", "Spark", "SQL", "Streamlit", "MLflow", "Poetry",
            "AWS", "Git" , "CI/CD", "Unit Testing", "Monitoring",
            "Linux", "Docker", "Kubernetes", "Terraform"
        ]
        self.hard_worker = True
        self.quick_learner = True
        self.problem_solver = True
        self.years_of_experience = 5

    def is_hireable(self):
        return (
            self.hard_worker and
            self.problem_solver and
            len(self.skills) > 5 and
            self.years_of_experience >= 3
        )`,
  },
};

export default config;
