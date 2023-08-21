export const techs = [
  {
    title: "Frontend",
    icons: [
      {
        id: 1,
        source: "/assets/html.png",
        title: "HTML",
      },
      {
        id: 2,
        source: "/assets/css.png",
        title: "CSS",
      },
      {
        id: 3,
        source: "/assets/javascript.png",
        title: "JavaScript",
      },
      {
        id: 4,
        source: "/assets/react.png",
        title: "React",
      },
      {
        id: 5,
        source: "/assets/tailwind.png",
        title: "Tailwind CSS",
      },
      {
        id: 6,
        source: "/assets/mui.png",
        title: "MaterialUI",
      },
    ],
  },
  {
    title: "Backend",
    icons: [
      {
        id: 1,
        source: "/assets/nodejs.png",
        title: "Node.js",
      },
      {
        id: 2,
        source: "/assets/mongodb.png",
        title: "MongoDB",
      },
      {
        id: 3,
        source: "/assets/mysql.png",
        title: "MySQL",
      },
    ],
  },
  {
    title: "Cybersecurity",
    icons: [
      {
        id: 1,
        source: "/assets/metasploit.svg",
        title: "Metasploit",
      },
      {
        id: 2,
        source: "/assets/linux.png",
        title: "Linux",
      },
      {
        id: 3,
        source: "/assets/burpsuite.jpg",
        title: "Burpsuite",
      },
    ],
  },
  {
    title: "Dev Tools",
    icons: [
      {
        id: 1,
        source: "/assets/git.png",
        title: "Git",
      },
      {
        id: 2,
        source: "/assets/vscode.png",
        title: "VSCode",
      },
      {
        id: 3,
        source: "/assets/postman.png",
        title: "Postman",
      },
    ],
  },
];

export const projects = [
  {
    id: 1,
    img: "/assets/HackerSpace.png",
    title: "HackerSpace",
    desc: "This a React App that uses the NewsAPI to fetch content related to Cyber-Security. Material UI has been used for styling and displaying the news articles.It also has search functionality to look up specific articles.",
    code: "https://github.com/mirai-cmd/hacker-space",
    tags: [
      {
        name: "React.js",
        color: { background: "bg-blue-500", textColor: "text-white" },
      },
      {
        name: "MaterialUI",
        color: { background: "bg-white", textColor: "text-blue-600" },
      },
      {
        name: "BingNewsAPI",
        color: { background: "bg-yellow-400", textColor: "text-black" },
      },
      {
        name: "ContextAPI",
        color: { background: "bg-black", textColor: "text-white" },
      },
    ],
    live: "https://hacker-space.netlify.app",
  },
  {
    id: 2,
    img: "/assets/PyScan.png",
    title: "PyScan",
    desc: "This is a command line port scanner written in python using argparser and python sockets. It includes options to scan custom port ranges and individual ports. Multithreading speeds up the scanning process.",
    code: "https://github.com/mirai-cmd/python-port-scanner",
    tags: [
      {
        name: "Pyfiglet",
        color: { background: "bg-green-400", textColor: "text-black" },
      },
      {
        name: "Sockets",
        color: { background: "bg-white", textColor: "text-black" },
      },
      {
        name: "Networking",
        color: { background: "bg-blue-600", textColor: "text-white" },
      },
    ],
  },
];