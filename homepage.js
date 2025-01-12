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

// Generate the navigation bar dynamically
const navbar = document.getElementById("navbar");

// Add the inline structure
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

// Add event listener for menu toggle
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

// Function to render the content
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

// Call the render function when the page loads
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