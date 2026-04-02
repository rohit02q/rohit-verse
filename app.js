// ! Content Data
const MYSELF = {
    name: 'Rohit',
    about: `I am a Class 12 student from Bihar and a passionate self-taught developer with strong problem-solving skills. I specialize in full-stack web development using modern technologies like JavaScript, Node.js, and Express. I enjoy building real-world SaaS products, and constantly pushing my limits by solving challenging problems.`,
    
    aboutTags: [
        'Class 12 Student',
        'Full Stack Web Developer',
        'RMO Qualified',
        'Problem Solver',
    ],

    projects: [
        {
            title: 'Nexora Test App',
            body: "A full SaaS-based platform where users can create, share, and attempt quizzes/tests.",
            techStack: ['React', 'Node.js', 'Express', 'MongoDB'],
            sourceCode: 'https://github.com/your-username/nexora',
            previewLink: 'https://nexaq.vercel.app'
        },
        {
            title: 'AI ML Model',
            body: "A machine learning project focused on predictive analysis using Python. Implemented data preprocessing, model training, and evaluation.",
            techStack: ['Python', 'NumPy', 'Pandas', 'Scikit-learn'],
            sourceCode: '/',
            previewLink: '/'
        },
        {
            title: 'Portfolio Website',
            body: "A modern personal portfolio website showcasing projects, skills, and achievements with responsive UI and smooth animations.",
            techStack: ['HTML', 'CSS', 'JavaScript'],
            sourceCode: '/',
            previewLink: '/'
        },
        {
            title: 'PW XP Hack',
            body: "A creative hack/project built to optimize or explore PW XP system with custom logic and automation ideas.",
            techStack: ['JavaScript'],
            sourceCode: '/',
            previewLink: '/'
        },
        {
            title: 'Demo Project 1',
            body: "A practice project to strengthen frontend and backend integration concepts.",
            techStack: ['HTML', 'CSS', 'JS'],
            sourceCode: '/',
            previewLink: '/'
        },
        {
            title: 'Demo Project 2',
            body: "Experimental project focused on UI design and responsiveness.",
            techStack: ['CSS', 'JavaScript'],
            sourceCode: '/',
            previewLink: '/'
        }
    ],

    skills: [
        {
            name: "English Communication",
            completed: 40
        },
        {
            name: "Full Stack Web Development",
            completed: 80
        },
        {
            name: "Video Editing",
            completed: 30
        },
        {
            name: "Mathematics & Problem Solving",
            completed: 95
        },
        {
            name: "AI & Machine Learning",
            completed: 30
        }
    ],

    achievements: [
        "Qualified RMO (Bihar North)",
        "Built a SaaS-based quiz platform (Nexora)",
        "Strong foundation in Data Structures & Problem Solving",
        "Self-taught developer with multiple real-world projects"
    ],

    contact: {
        email: 'your-email@example.com',
        github: 'https://github.com/your-username',
        linkedin: 'https://linkedin.com/in/your-profile'
    }
};
// ! Routing System
function router() {
    const routes = {
        '/': Home,
        '/projects': Projects,
        '/skills': Skills,
        '/contact': Contact
    }
    const path = location.pathname || '/'
    updateNavTab(path)
    document.getElementById('root').innerHTML = routes[path]?.() || NotFound() 
}
function updateNavTab(path) {
    const links = document.querySelectorAll('nav a')
    links.forEach(link => {
        link.classList.remove('active')
        if (link.getAttribute('href') == path) {
            link.classList.add('active')
        }
    })
}
// ! Pages
function Home() {
    return `<div class="about-section">
            <div class="left-side">
                <h1>Hi, I am <span>${MYSELF.name}</span></h1>
                <p>${MYSELF.about}</p>
                <div class="btns">
                    <a>Visit Site</a>
                    <a>Download CV</a>
                </div>
            </div>
            <div class="right-side">
            ${MYSELF.aboutTags.map(tag => `<div class="about-tag"><div></div><span>${tag}</span></div>`).join('')}
            </div>
        </div>`
}
function Projects() {
    return `
        <div class="projects-section">
        <!-- Card -->
        ${MYSELF.projects.map(project => {
        return `
        <div class="card">
            <div>
                <h3>${project.title}</h3>
               <p>${project.body}</p>
            </div>
            <div class="links">
                <a href="${project.sourceCode}">Source Code</a>
                <a href="${project.previewLink}">Preview</a>
            </div>
        </div>
        `
    }).join('')}
        </div>
    `
}
function Skills() {
    return `
            <div class="skills-section">
            <h1>Skills</h1>
            <div class="skill-cards">
            ${MYSELF.skills.map(skill => {
        return `
        <div style="--complete:${skill.completed}%">
            <p>${skill.name}</p>
            <span>${skill.completed}%</span>
        </div>
        `
    }).join('')}
            </div>
        </div>
    `
}
function Contact() {
    return `
            <div class="contact-section">
            <h1>Contact Me</h1>
            <form class="form">
                <input type="email" placeholder="Enter Your Email" required />
                <textarea rows="8" placeholder="Write Your Message..." required></textarea>
                <button type="submit">Submit</button>
            </form>
        </div>
    `
}
function NotFound() {
    return `
           <div class="not-found">
            <h1>404</h1>
            <p>Opp'sThis page does not exists please check your url and try again!</p>
        </div>
    `
}
//! Init
document.body.addEventListener('click', (e) => {
    const link = e.target.closest('a[href]')
    if (link && link.origin === location.origin) {
        e.preventDefault()
        const newPath = link.getAttribute('href')
        history.pushState({}, "", newPath)
        router()
    }
})
window.addEventListener('popstate', router)
router()
