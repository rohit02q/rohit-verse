// ! Content Data
const MYSELF = {
    name: 'Rohit',
    about: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit nostrum praesentium sed, cupiditatequia aspernatur ratione placeat suscipit assumenda libero maiores ea et non nesciunt ipsam fugititaque ipsum dolore!`,
    aboutTags: ['Study in 12th standard', 'Web Developer', 'Olympiad cracker', 'AI Master'],
    projects: [
        {
            title: 'Nexora Test App',
            body: "This is a SaaS level project you can create tests, quizzes and share it with your friends challenge them and attempt other tests in explore page",
            sourceCode: '/',
            previewLink: 'https://nexaq.vercel.app'
        },
        {
            title: 'Demo project 1',
            body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit nostrum praesentium sed, cupiditatequia",
            sourceCode: '/',
            previewLink: '/'
        },
        {
            title: 'Al ML Model',
            body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit nostrum praesentium sed, cupiditatequia",
            sourceCode: '/',
            previewLink: '/'
        },
        {
            title: 'Portfolio',
            body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit nostrum praesentium sed, cupiditatequia",
            sourceCode: '/',
            previewLink: '/'
        },
        {
            title: 'PW XP hack',
            body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit nostrum praesentium sed, cupiditatequia",
            sourceCode: '/',
            previewLink: '/'
        },
        {
            title: 'Demo Project 2',
            body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit nostrum praesentium sed, cupiditatequia",
            sourceCode: '/',
            previewLink: '/'
        },
        {
            title: 'Demo Project 3',
            body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit nostrum praesentium sed, cupiditatequia",
            sourceCode: '/',
            previewLink: '/'
        },
    ],
    skills: [
        {
            name: "Ennlish Speaking",
            completed: '40%'
        },
        {
            name: "Web Developer",
            completed: '80%'
        },
        {
            name: "Editing",
            completed: '30%'
        },
        {
            name: "Math Solver",
            completed: '95%'
        },
        {
            name: "AI & ML",
            completed: '30%'
        },
    ]
}
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
        <div style="--complete:${skill.completed}">
            <p>${skill.name}</p>
            <span>${skill.completed}</span>
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