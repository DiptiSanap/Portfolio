export const Bio = {
  name: "Dipti Sanap",
  roles: ["Python Developer", "AI/ML Engineer"],
  description:
    "Highly skilled Python and AI/ML Developer with over 2 years of experience in developing and deploying AI-driven solutions. Strong expertise in Python, Golang, SQL, and Artificial Intelligence, with a proven ability to design and implement advanced machine learning algorithms and data-driven strategies.",
  github: "https://github.com/DiptiSanap",
  linkedin: "https://www.linkedin.com/in/dipti-sanap-7765a3228/",
  email: "diptisanap1999@gmail.com",
  portfolio: "https://diptisanap.github.io/Portfolio/",
  resume: "https://drive.google.com/file/d/18eGTaLIIKUe7VzDD5y8IwSK4YpAoHA_w/view?usp=drivesdk"
};

export const skills = [
  {
    title: "Programming Languages and Frameworks",
    skills: [
      { name: "Python", image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" },
      { name: "Golang", image: "https://upload.wikimedia.org/wikipedia/commons/0/05/Go_Logo_Blue.svg" },
      { name: "Flask", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNqtHYopo_XXmaa60pJtj_7yNPnYsWU_KkZmtNyHxkPA&s" },
      { name: "Django", image: "https://upload.wikimedia.org/wikipedia/commons/7/75/Django_logo.svg" }
    ],
  },
  {
    title: "Data Science & Machine Learning",
    skills: [
      { name: "Machine Learning", image: "https://cdn-icons-png.flaticon.com/512/8637/8637099.png" },
      { name: "Deep Learning", image: "https://cdn-icons-png.flaticon.com/512/2939/2939413.png" },
      { name: "NLP", image: "https://cdn.iconscout.com/icon/premium/png-256-thumb/nlp-8926384-7279481.png" },
      { name: "Generative AI", image: "https://ih1.redbubble.net/image.4911784195.8379/st,small,507x507-pad,600x600,f8f8f8.jpg" }
    ],
  },
  {
    title: "Tools and Technologies",
    skills: [
      { name: "Docker", image: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Docker_%28container_engine%29_logo.svg" },
      { name: "Kubernetes", image: "https://upload.wikimedia.org/wikipedia/commons/3/39/Kubernetes_logo_without_workmark.svg" },
      { name: "AWS", image: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" },
      { name: "LangChain", image: "https://avatars.githubusercontent.com/u/105049481?s=200&v=4" }
    ],
  }
];

export const experiences = [
  {
    id: 0,
    role: "Python Developer",
    company: "Sagility India Ltd, Bengaluru, India",
    date: "June 2023 - Present",
    desc: "Developed a machine learning model to classify errors in medical claims with 96% accuracy, transitioning from Random Forest to Neural Networks. Automated audits, reducing manual intervention by 85% and boosting operational efficiency by 30%. Designed a generative AI-powered auditing tool reducing processing time by 95%.",
    skills: ["Python", "Neural Networks", "Flask", "SQLite", "Generative AI"]
  },
  {
    id: 1,
    role: "Machine Learning Engineer",
    company: "Hurrey Tech Ventures Private Limited, Bengaluru, India",
    date: "Aug 2022 - June 2023",
    desc: "Led AI-driven educational platform development, achieving a 95% user satisfaction rate. Designed a 'Physics Solver Application' leveraging NLP and DL frameworks, boosting student learning outcomes by 89%. Integrated transformers and generative AI models, enhancing system efficiency by 78%.",
    skills: ["Machine Learning", "NLP", "Deep Learning", "Transformers", "Generative AI"]
  },
  {
    id: 2,
    role: "Data Analyst Intern",
    company: "360iResearch, Pune, India",
    date: "Nov 2022 - May 2023",
    desc: "Developed a market research tool using Python, EDA, and statistical modeling, improving decision-making by 70%. Enhanced forecasting accuracy by 84% using time series analysis. Automated data acquisition via web scraping, reducing analysis time by 50%.",
    skills: ["Python", "EDA", "Time Series Analysis", "Web Scraping"]
  }
];

export const education = [
  {
    id: 0,
    school: "Center for Development of Advanced Computing, Noida, India",
    date: "2022",
    degree: "Post-Graduation Diploma in Artificial Intelligence"
  },
  {
    id: 1,
    school: "Savitribai Phule Pune University, Pune, India",
    date: "2019 - 2021",
    degree: "Master’s Degree in Science"
  },
  {
    id: 2,
    school: "Savitribai Phule Pune University, Pune, India",
    date: "2016 - 2019",
    degree: "Bachelor’s Degree in Science"
  }
];

export const projects = [
  {
    id: 0,
    title: "Farmer.ai",
    description: "An AI-powered precision agriculture solution that assists farmers in crop selection, fertilizer recommendation, and pest identification using an ensemble ML model and deep learning.",
    tags: ["Machine Learning", "Deep Learning", "SVM", "Random Forest", "Naive Bayes", "kNN", "Precision Agriculture"],
    github: "https://github.com/DiptiSanap"
  },
  {
    id: 1,
    title: "Wine Review NLP Classification",
    description: "Built NLP classification models using CountVectorizer and BERT on a Wine variety review dataset. Addressed data imbalance using undersampling and an ensemble Random Forest method, with separate notebooks for models and data visualization.",
    tags: ["NLP", "BERT", "CountVectorizer", "Random Forest", "Data Balancing"],
    github: "https://github.com/DiptiSanap"
  },
  {
    id: 2,
    title: "RESTful API for a Blog",
    description: "Designed and developed a RESTful API for a blogging system using Golang, with JWT-based authentication for secure access.",
    tags: ["Golang", "REST API", "JWT", "Backend Development"],
    github: "https://github.com/DiptiSanap"
  },
  {
    id: 3,
    title: "Credit Card Fraud Transaction Detection",
    description: "Developed a machine learning-based fraud detection system to identify fraudulent credit card transactions in real time. Implemented data preprocessing, feature engineering, and model training with Flask-based web application for user interaction.",
    tags: ["Machine Learning", "Fraud Detection", "Flask", "Feature Engineering", "Real-time Processing"],
    github: "https://github.com/DiptiSanap"
  }
];
