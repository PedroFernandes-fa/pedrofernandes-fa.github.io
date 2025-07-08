let currentIndex = 0;
const items      = document.querySelectorAll('.carousel-item');
const totalItems = items.length;

function moveCarousel(direction) {
    currentIndex += direction;

    if      (currentIndex < 0)           { currentIndex = totalItems - 1; }
    else if (currentIndex >= totalItems) { currentIndex = 0;              }

    const offset = -currentIndex * 100;
    document.querySelector('.carousel-container').style.transform = `translateX(${offset}%)`;
}

const translations = {
       pt: {
        language:              "Idioma",
        nav_home:              "Apresentação",
        nav_languages:         "Linguagens",
        nav_projects:          "Projetos",
        nav_contact:           "Contato",
        home_title:            "Pedro Fernandes",
        home_description_1:    "Olá! Sou Pedro, um desenvolvedor indie apaixonado por mecânicas de jogos criativas, roguelikes e sistemas experimentais.",
        home_description_2:    "Atualmente, estudo Ciência da Computação na UFPB (Universidade Federal da Paraíba) e gosto de dar vida às minhas ideias através de jogos.",
        languages_title:       "Linguagens e Tecnologias",
        languages_description: "Tenho experiência com diversas tecnologias de desenvolvimento, incluindo Python, JS, CSS, HTML, Java, etc e estou constantemente aprendendo novas ferramentas para expandir meu arsenal de desenvolvimento.",
        projects_title:        "Meus Projetos",
        project1_title:        "Rogeo",
        project1_description:  "Um jogo de aventura e exploração de masmorras com elementos de roguelike.",
        project_button:        "Ver Projeto",
        contact_title:         "Entre em Contato"
    }, en: {
        language:              "Language",
        nav_home:              "Home",
        nav_languages:         "Languages",
        nav_projects:          "Projects",
        nav_contact:           "Contact",
        home_title:            "Pedro Fernandes",
        home_description_1:    "Hi! I'm Pedro, an indie developer passionate about creative game mechanics, roguelikes, and experimental systems.",
        home_description_2:    "I'm currently studying Computer Science at UFPB (Federal University of Paraíba) and I enjoy bringing my ideas to life through games.",
        languages_title:       "Languages and Technologies",
        languages_description: "I have experience with various development technologies, including Python, JS, CSS, HTML, Java, etc. and I am constantly learning new tools to expand my development arsenal.",
        projects_title:        "My Projects",
        project1_title:        "Rogeo",
        project1_description:  "An adventure and dungeon crawling game with roguelike elements.",
        project_button:        "View Project",
        contact_title:         "Get in Touch"
    }, es: {
        language:              "Idioma",
        nav_home:              "Presentación",
        nav_languages:         "Lenguajes",
        nav_projects:          "Proyectos",
        nav_contact:           "Contacto",
        home_title:            "Pedro Fernandes",
        home_description_1:    "¡Hola! Soy Pedro, un desarrollador independiente apasionado por las mecánicas de juego creativas, los roguelikes y los sistemas experimentales.",
        home_description_2:    "Actualmente estudio Ciencias de la Computación en la UFPB (Universidad Federal de Paraíba) y disfruto dando vida a mis ideas a través de los juegos.",
        languages_title:       "Lenguajes y Tecnologías",
        languages_description: "Tengo experiencia con diversas tecnologías de desarrollo, incluidas Python, JS, CSS, HTML, Java, etc. y constantemente estoy aprendiendo nuevas herramientas para expandir mi arsenal de desarrollo.",
        projects_title:        "Mis Proyectos",
        project1_title:        "Rogeo",
        project1_description:  "Un juego de aventura y exploración de mazmorras con elementos de roguelike.",
        project_button:        "Ver Proyecto",
        contact_title:         "Ponte en Contacto"
    }
};

function changeLanguage(lang) {
    document.querySelectorAll('[data-lang]').forEach(el => {
        const key = el.getAttribute('data-lang');
        if (translations[lang][key]) { el.textContent = translations[lang][key]; }
    });
    document.documentElement.lang = lang;
}

document.addEventListener('DOMContentLoaded', () => {
    const userLang    = navigator.language.split('-')[0];
    const initialLang = translations[userLang] ? userLang : 'pt';
    changeLanguage(initialLang);
});