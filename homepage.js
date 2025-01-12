const navData = {
    logo: "UpConslt",
    links: [
        { name: "Services", href: "#" },
        { name: "Pricing", href: "#" },
        { name: "Blog", href: "#" },
        { name: "Login", href: "#" },
    ],
    cta: { name: "Get Started", href: "#" }
};


const navbar = document.getElementById("navbar");


navbar.innerHTML = `
    <a class="logo" href="#">${navData.logo}</a>
    <div class="nav-links">
        ${navData.links.map(link => `<a href="${link.href}">${link.name}</a>`).join('')}
    </div>
    <div class="right-section">
        <div class="menu-toggle">☰</div>
        <a class="get-started" href="${navData.cta.href}">${navData.cta.name}</a>
    </div>
`;


const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuToggle.classList.toggle('active');
});

/*----------------------------------------*/
const pageData = {
    badge: {
        text: "📢 Started for free!"
    },
    title: "Consult your business with us and get benefits and 12 hour service!",
    description: "We can have professional experts provide consulting services for a company on topics and subjects that are required for you to meet your business objectives.",
    emailPlaceholder: "Your email",
    buttonText: "Start Now",
    image: {
        src: "assets/[UP-1]/image (1).svg",
        alt: "Business meeting scene with three professionals in a modern office setting. They are seated at a table with a laptop, documents, and a coffee cup. The space features modern furniture and a small decorative plant. The professionals are engaged in discussion, with one person taking notes while others review materials."
    }
};


function renderContent() {
    const appContainer = document.getElementById('app');
    appContainer.innerHTML = `
        <div class="started-badge">${pageData.badge.text}</div>
        <h1>${pageData.title}</h1>
        <p>${pageData.description}</p>
        <div class="email-form">
            <input type="email" placeholder="${pageData.emailPlaceholder}">
            <button class="start-button">${pageData.buttonText}</button>
        </div>
        <div class="image-container">
            <img src="${pageData.image.src}" alt="${pageData.image.alt}" width="800" height="400">
        </div>
    `;
}


window.onload = renderContent;

/*--------------------------------*/
const services = [
    {
        icon: "fas fa-clock",
        title: "Fast workmanship, precise consultation",
        description: "If you are a business owner looking to improve the quality and efficiency of the production process, operations consultants can be the right choice to help you find new."
    },
    {
        icon: "fas fa-dollar-sign",
        title: "Lower prices with lots of variety",
        description: "If you are a business owner looking to improve the quality and efficiency of the production process, operations consultants can be the right choice to help you find new."
    },
    {
        icon: "fas fa-chart-bar",
        title: "Detailed analysis of sales graph data",
        description: "If you are a business owner looking to improve the quality and efficiency of the production process, operations consultants can be the right choice to help you find new."
    },
    {
        icon: "fas fa-sitemap",
        title: "Management and strategy consultant",
        description: "If you are a business owner looking to improve the quality and efficiency of the production process, operations consultants can be the right choice to help you find new."
    },
    {
        icon: "fas fa-comment-alt",
        title: "Communicative with ease of discussion",
        description: "If you are a business owner looking to improve the quality and efficiency of the production process, operations consultants can be the right choice to help you find new."
    },
    {
        icon: "fas fa-check-circle",
        title: "Open for feedback and review",
        description: "If you are a business owner looking to improve the quality and efficiency of the production process, operations consultants can be the right choice to help you find new."
    }
];

const cardGrid = document.getElementById('card-grid');

services.forEach(service => {
    const card = document.createElement('div');
    card.classList.add('card');

    card.innerHTML = `
        <div class="card-icon"><i class="${service.icon}"></i></div>
        <h3 class="card-title">${service.title}</h3>
        <p class="card-description">${service.description}</p>
    `;

    cardGrid.appendChild(card);
});

 /*--------------------------------*/
 const experienceData = {
    tagline: "Why Us?",
    title: "We Have a Lot of <span class='highlight'>Experience</span> in Work",
    summary: "UpConslt as a leading business consulting place, we have helped many small to medium and large companies to help their business",
    achievements: [
        { value: 1200, metric: "Projects Completed" },
        { value: 20, metric: "Year of Experience" },
        { value: 55, metric: "New Brand" },
        { value: 14, metric: "Awwards Won" }
    ]
};


document.getElementById('tagline').textContent = experienceData.tagline;
document.querySelector('.why-us h1').innerHTML = experienceData.title;
document.getElementById('description').textContent = experienceData.summary;


const statsContainer = document.getElementById('stats-container');
experienceData.achievements.forEach((achievement, index) => {
    const statItem = document.createElement('div');
    statItem.className = 'stat-item';
    statItem.style.transitionDelay = `${0.6 + index * 0.2}s`;
    statItem.innerHTML = `
        <div class="number">${achievement.value}</div>
        <div class="label">${achievement.metric}</div>
    `;
    statsContainer.appendChild(statItem);
});


window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    setTimeout(() => {
        document.querySelector('.why-us').classList.add('animate');
        document.getElementById('description').classList.add('animate');
        document.querySelectorAll('.stat-item').forEach(item => {
            item.classList.add('animate');
        });
    }, 100);
});


function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        obj.innerHTML = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

const numberElements = document.querySelectorAll('.number');
numberElements.forEach((numberElement, index) => {
    const finalValue = experienceData.achievements[index].value;
    setTimeout(() => {
        animateValue(numberElement, 0, finalValue, 2000);
    }, 1000 + index * 200);
});

/*--------------------------------*/
const data = {
    featuresLabel: "Features",
    title: "What are The Best Features You Get?",
    subtitle: "With our integrated CRM, project management, collaboration and invoicing capabilities, you can manage every aspect of your business in one place.",
    features: [
        {
            icon: '<svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none"><path d="M12.5 2C6.986 2 2.5 6.486 2.5 12V16.143C2.5 17.167 3.397 18 4.5 18H5.5C5.76522 18 6.01957 17.8946 6.20711 17.7071C6.39464 17.5196 6.5 17.2652 6.5 17V11.857C6.5 11.5918 6.39464 11.3374 6.20711 11.1499C6.01957 10.9624 5.76522 10.857 5.5 10.857H4.592C5.148 6.987 8.478 4 12.5 4C16.522 4 19.852 6.987 20.408 10.857H19.5C19.2348 10.857 18.9804 10.9624 18.7929 11.1499C18.6054 11.3374 18.5 11.5918 18.5 11.857V18C18.5 19.103 17.603 20 16.5 20H14.5V19H10.5V22H16.5C18.706 22 20.5 20.206 20.5 18C21.603 18 22.5 17.167 22.5 16.143V12C22.5 6.486 18.014 2 12.5 2Z" fill="white"/></svg>',
            title: "Directly guided by professionals",
            description: "Get expert advice on professional practice in conference interpreting, tailored to your needs."
        },
        {
            icon: '<svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none"><path d="M21.416 9.56402C21.4688 9.44394 21.4975 9.31462 21.5003 9.18347C21.5031 9.05231 21.48 8.92189 21.4323 8.79966C21.3847 8.67743 21.3134 8.5658 21.2226 8.47114C21.1318 8.37648 21.0232 8.30066 20.903 8.24802L7.828 2.49202C6.833 2.05402 5.608 2.54302 5.183 3.53402L2.973 8.68802C2.76509 9.17554 2.75909 9.72564 2.95632 10.2176C3.15354 10.7095 3.53789 11.1031 4.025 11.312L10.063 13.9L8.823 17H4.5V14H2.5V22H4.5V19H8.823C9.646 19 10.375 18.506 10.679 17.742L11.901 14.688L17.106 16.918C17.3484 17.022 17.6221 17.0261 17.8674 16.9292C18.1128 16.8324 18.31 16.6425 18.416 16.401L18.728 15.691L20.429 16.371L22.429 11.371L20.893 10.758L21.416 9.56402ZM16.982 14.69L4.813 9.47502L7.021 4.32302L19.183 9.67702L16.982 14.69Z" fill="white"/></svg>',
            title: "Monitor business changes",
            description: "Easily track and assess your change management success with our intuitive tools."
        },
        {
            icon: '<svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none"><path d="M21.42 2.38C20.2973 2.12857 19.1505 2.00114 18 2C16.9135 1.93101 15.8241 2.0775 14.7944 2.43103C13.7647 2.78456 12.815 3.33816 12 4.06C10.9267 5.13333 9.86333 6.20333 8.81 7.27C7.6 7.14 4.73 7.07 2.81 9.01C2.62375 9.19736 2.51921 9.45081 2.51921 9.715C2.51921 9.97918 2.62375 10.2326 2.81 10.42L14.11 21.74C14.2974 21.9262 14.5508 22.0308 14.815 22.0308C15.0792 22.0308 15.3326 21.9262 15.52 21.74C17.47 19.74 17.41 16.92 17.29 15.74L20.5 12.54C23.69 9.35 22.24 3.36 22.18 3.11C22.1338 2.92963 22.0382 2.76574 21.904 2.63677C21.7697 2.50779 21.6021 2.41887 21.42 2.38ZM19.06 11.13L15.5 14.67C15.3847 14.7864 15.2998 14.9294 15.2527 15.0863C15.2056 15.2432 15.1978 15.4093 15.23 15.57C15.446 16.9078 15.258 18.2796 14.69 19.51L5.02 9.82C6.26985 9.24477 7.66701 9.07012 9.02 9.32C9.18008 9.34084 9.34282 9.32262 9.49432 9.2669C9.64582 9.21117 9.78158 9.1196 9.89 9C9.89 9 11.29 7.55 13.4 5.44C14.6974 4.39811 16.3401 3.88389 18 4C18.7808 4.00387 19.56 4.07075 20.33 4.2C20.57 5.63 20.95 9.24 19.06 11.13Z" fill="white"/><path d="M16.23 10.3C17.3346 10.3 18.23 9.40456 18.23 8.29999C18.23 7.19542 17.3346 6.29999 16.23 6.29999C15.1254 6.29999 14.23 7.19542 14.23 8.29999C14.23 9.40456 15.1254 10.3 16.23 10.3Z" fill="white"/><path d="M5.5 16C3.5 17 3.5 21 3.5 21C5.35107 20.9472 7.12315 20.2384 8.5 19L5.5 16Z" fill="white"/></svg>',
            title: "Full consultation",
            description: "Take advantage of our comprehensive consultation period to prepare thoroughly."
        }
    ],
    image: {
        src: "assets/[UP-14]/image (3).svg",
        alt: "Team of diverse professionals collaborating in a modern office setting. They are gathered around a large touchscreen display, discussing project details. The office has an open layout with natural light and plants, creating a vibrant work environment."
    }
};

document.querySelector('.features-label span').textContent = data.featuresLabel;
document.querySelector('.features-label h1').textContent = data.title;
document.querySelector('.subtitle').textContent = data.subtitle;

const featuresList = document.querySelector('.features-list');
data.features.forEach((feature, index) => {
    const featureItem = document.createElement('div');
    featureItem.className = 'feature-item';
    featureItem.style.transitionDelay = `${0.6 + index * 0.2}s`;
    featureItem.innerHTML = `
        <div class="feature-icon">
            ${feature.icon}
        </div>
        <div class="feature-content">
            <h3>${feature.title}</h3>
            <p>${feature.description}</p>
        </div>
    `;
    featuresList.appendChild(featureItem);
});

const img = document.querySelector('.features-image img');
img.src = data.image.src;
img.alt = data.image.alt;


window.addEventListener('load', () => {
    document.body.style.opacity = '1';
    document.querySelectorAll('.features-label, .subtitle, .feature-item, .features-image').forEach(el => {
        el.style.opacity = '1';
        el.style.transform = 'translate(0, 0)';
    });
});


document.querySelectorAll('.feature-item').forEach(item => {
    item.addEventListener('click', () => {
        item.style.transform = 'scale(1.05)';
        setTimeout(() => {
            item.style.transform = 'scale(1)';
        }, 200);
    });
});


document.querySelector('.features-image').addEventListener('click', () => {
    const img = document.querySelector('.features-image img');
    if (document.fullscreenElement) {
        document.exitFullscreen();
    } else {
        img.requestFullscreen();
    }
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translate(0, 0)';
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.feature-item, .features-image').forEach(el => {
    observer.observe(el);
});