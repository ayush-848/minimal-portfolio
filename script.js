
  const projects = [
    {
      title: "DocVault",
      status: "Live",
      year: 2025,
      description: "DocVault is a secure and modern platform for uploading, previewing, and managing PDF documents with real-time storage insights and user-friendly controls.",
      techStack: ["React","ShadCN UI","PostgreSQL","Supabase","JWT", "Node.js","Express.js"],
      links: { live: "https://docuflow-three.vercel.app/", github: "https://github.com/ayush-848/DocVault" }
    },
    {
      title: "Imaginate",
      status: "Live",
      year: 2024,
      description: "Imaginate is an intuitive AI-powered text-to-image tool that lets users generate images from prompts, download results, and view their prompt history",
      techStack: ["React", "Tailwind CSS", "MongoDB", "Node.js", "Express.js", "Clipdrop API"],
      links: { live: "https://imaginate-beta.vercel.app/", github: "https://github.com/ayush-848/Imaginate" }
    },
    {
      title: "TaskTracker",
      status: "In Progress",
      year: 2024,
      description: "TaskTracker is a sleek and intuitive task management app for creating, organizing, and tracking tasks with due dates, priorities, categories, and subtasks—all in one place.",
      techStack: ["React", "Tailwind CSS","MongoDB","JWT", "Node.js", "Express.js"],
      links: { live: "https://task-tracker-ivory-psi.vercel.app/", github: "https://github.com/ayush-848/TaskTracker" }
    },
        {
  title: "MyDay",
  status: "In Progress",
  year: 2024,
  description: "MyDay is a personal blogging and journaling platform that lets users write, edit, and manage their own posts with full authentication, changelog history, newsletter updates, and a beautiful Vue-powered UI.",
  techStack: ["Vue", "Node.js", "Express.js", "MongoDB", "JWT", "Tailwind CSS", "Nodemailer"],
  links: {
    live: "https://my-day-zeta.vercel.app/",
    github: "https://github.com/ayush-848/My-Day"
  }
},

    {
      title: "SnipBucket",
      status: "In Progress",
      year: 2024,
      description: "SnipBucket is a sleek code-sharing platform for creating, editing, and sharing syntax-highlighted snippets with AI-generated titles and secure user access.",
      techStack: ["React", "Tailwind CSS", "MongoDB","Firebase", "Node.js", "Express.js", "Gemini API"],
      links: { live: "https://snip-bucket.vercel.app/", github: "https://github.com/ayush-848/SnipBucket" }
    },

  ];

  const container = document.getElementById('project-list');

  projects.forEach(project => {
    const el = document.createElement('div');
    el.className = "group border border-gray-800 rounded-lg p-6 hover:border-gray-700 transition-all duration-300 hover:shadow-lg hover:shadow-black/20 mb-8";

    const yearBadge = `<span class="text-xs bg-purple-500/20 text-gray-300 px-2 py-1 rounded border border-gray-600/30">${project.year}</span>`;

    let statusColor = "bg-gray-700/50 text-gray-300 border-gray-600/30";
    if (project.status === "Live") statusColor = "bg-green-500/10 text-green-300 border-green-500/20";
    else if (project.status === "In Progress") statusColor = "bg-yellow-500/10 text-yellow-300 border-yellow-500/20";

    const statusBadge = `<span class="text-xs ${statusColor} px-2 py-1 rounded">${project.status}</span>`;

    el.innerHTML = `
      <div class="flex items-start justify-between mb-3">
        <h3 class="text-white font-semibold text-lg">${project.title}</h3>
        <div class="flex space-x-2">
          ${statusBadge}
          ${yearBadge}
        </div>
      </div>
      <p class="text-gray-400 text-sm mb-4 leading-relaxed">${project.description}</p>
      <div class="flex flex-wrap gap-2 mb-4">
        ${project.techStack.map(tech => `<span class="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded">${tech}</span>`).join('')}
      </div>
      <div class="flex space-x-4 text-sm">
        <a href="${project.links.live}" target="_blank"
              rel="noopener noreferrer" class="text-blue-500 hover:text-blue-400 transition-colors">View Project →</a>
        <a href="${project.links.github}" target="_blank"
              rel="noopener noreferrer" class="text-gray-500 hover:text-gray-400 transition-colors">GitHub</a>
      </div>
    `;
    container.appendChild(el);
  });

  const skills = {
    Frontend: [
      { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
      { name: "Tailwind CSS", icon: "https://tailwindcss.com/favicons/apple-touch-icon.png" },
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Vue", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" },
      { name: "ShadCN UI", icon: "https://avatars.githubusercontent.com/u/139895814?s=200&v=4" }
    ],
    Backend: [
      { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", whiteBg: true },
      { name: "JWT", icon: "https://jwt.io/img/pic_logo.svg" }
    ],
    "Database & Tools": [
      { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
      { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
      { name: "Supabase", icon: "https://seeklogo.com/images/S/supabase-logo-DCC676FFE2-seeklogo.com.png" },
      { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "REST API", icon: "https://uxwing.com/wp-content/themes/uxwing/download/web-app-development/rest-api-icon.png" }
    ]
  };

  const skillsContainer = document.getElementById('skills-container');

  for (const category in skills) {
    const section = document.createElement('div');
    section.innerHTML = `<h3 class="text-sm font-semibold text-gray-400 mb-3">${category}</h3>`;
    const badgeGroup = document.createElement('div');
    badgeGroup.className = "flex flex-wrap gap-3";

    skills[category].forEach(skill => {
      const badge = document.createElement('div');
      badge.className = "cursor-pointer flex items-center gap-2 bg-white/5 text-gray-200 border border-white/10 px-3 py-1 rounded text-xs transition-colors duration-200 hover:bg-white/10 hover:border-white/20 hover:text-white";


      badge.innerHTML = `
        <img src="${skill.icon}" alt="${skill.name}" class="w-3 h-3 ${skill.whiteBg ? 'bg-white rounded-sm p-0.5' : ''}" />
        <span>${skill.name}</span>
      `;
      badgeGroup.appendChild(badge);
    });

    section.appendChild(badgeGroup);
    skillsContainer.appendChild(section);
  }