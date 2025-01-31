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
    label: "Features",
    title: "What are The Best Features You Get?",
    description:
      "With our integrated CRM, project management, collaboration and invoicing capabilities, you can manage every aspect of your business.",
    features: [
      {
        icon: "fas fa-headphones",
        title: "Directly guided by professionals",
        description:
          "General advice on professional practice in conference interpreting, with the aim of.",
      },
      {
        icon: "fa fa-video-camera",
        title: "Monitor business changes",
        description:
          "For assessing your change management success. It ease recording and assessing data.",
      },
      {
        icon: "fa fa-rocket",
        title: "Full consultation",
        description:
          "Consultees can take advantage of the full consultation period to prepare considered.",
      },
    ],
  };

  document.querySelector(".section-tag").textContent = data.label;
  document.querySelector(".main-heading").textContent = data.title;
  document.querySelector(".intro-text").textContent = data.description;

  const featureList = document.querySelector(".feature-list");

  data.features.forEach((feature, index) => {
    const featureBox = document.createElement("div");
    featureBox.classList.add("feature-box");

    const featureIcon = document.createElement("div");
    featureIcon.classList.add("feature-icon");
    featureIcon.innerHTML = `<i class="${feature.icon}"></i>`;

    const featureDetails = document.createElement("div");
    featureDetails.classList.add("feature-details");

    const featureTitle = document.createElement("h3");
    featureTitle.textContent = feature.title;

    const featureDescription = document.createElement("p");
    featureDescription.textContent = feature.description;

    featureDetails.appendChild(featureTitle);
    featureDetails.appendChild(featureDescription);
    featureBox.appendChild(featureIcon);
    featureBox.appendChild(featureDetails);

    featureList.appendChild(featureBox);

    setTimeout(() => {
      featureBox.style.opacity = "1";
      featureBox.style.transform = "translateY(0)";
    }, 800 + index * 200);
  });

  setTimeout(() => {
    document.querySelector(".image-section").classList.add("visible");
  }, 1200);

  /*--------------------------------*/
  const featureData = {
    tag: "More Features",
    title: "Take Advantage of The Features You Get From Us!",
    description:
      "Analysis describes the features, advantages and benefits of a product, and how they work together to help differentiate a product within the market.",
    buttonText: "Get Started",
    imageSrc:
      "assets/[UP-16]/image (4).svg",
    imageAlt:
      "Two people in an office setting looking at a laptop screen showing a video conference call. One person is standing and one is sitting at a wooden desk with a glass of water nearby. The laptop appears to be showing multiple participants in a virtual meeting.",
  };

  
  document.getElementById("feature-tag").textContent = featureData.tag;
  document.getElementById("feature-title").textContent = featureData.title;
  document.getElementById("feature-description").textContent =
    featureData.description;
  document.getElementById("feature-button").textContent =
    featureData.buttonText;
  document.getElementById("feature-image").src = featureData.imageSrc;
  document.getElementById("feature-image").alt = featureData.imageAlt;

  
  window.addEventListener("load", () => {
    const showcase = document.getElementById("feature-showcase");
    showcase.classList.add("visible");
  });
  /*--------------------------------*/
  const pricingPlans = [
    {
        name: "Team",
        price: "$50",
        duration: "/mth",
        description: "Consultation guidance from certified professionals.",
        features: [
            "Professional expert guidance",
            "12 hours discussion",
            "Live view of business"
        ]
    },
    {
        name: "Agency",
        price: "$150",
        duration: "/mth",
        description: "The best consulting guidance, discussion anytime.",
        features: [
            "Professional expert guidance",
            "18 hours discussion",
            "Live view of business"
        ]
    },
    {
        name: "Enterprise",
        price: "$500",
        duration: "/mth",
        description: "Full guidance consultation, get access to all features.",
        features: [
            "Professional expert guidance",
            "24 hours discussion",
            "Live view of business"
        ]
    }
];

const pricingContainer = document.getElementById('pricing-container');

pricingPlans.forEach(plan => {
    const card = document.createElement('div');
    card.className = 'pricing-card';

    card.innerHTML = `
        <div class="plan-name">${plan.name}</div>
        <div class="price">${plan.price}<span>${plan.duration}</span></div>
        <div class="plan-description">${plan.description}</div>
        <ul class="features">
            ${plan.features.map(feature => `<li>${feature}</li>`).join('')}
        </ul>
        <button class="get-started-pricing">Get Started</button>
    `;

    pricingContainer.appendChild(card);
});

/*--------------------------------*/
const faqData = [
    {
        question: "What is subscription pricing or a subscription-based pricing model?",
        answer: "Subscription pricing is a business model where customers pay a recurring fee at regular intervals (e.g., monthly or annually) to access a product or service. This model provides ongoing value to customers and a steady revenue stream for businesses."
    },
    {
        question: "Why adopt a subscription business model?",
        answer: "One, it attracts more customers with its lower entry point (e.g. paying $15 monthly vs. $150 in advance). Two, it offers predictable revenue for businesses. Three, it allows businesses to build stronger, more valuable relationships with its customers."
    },
    {
        question: "How does a subscription management model work?",
        answer: "A subscription management model involves setting up recurring billing cycles, managing customer accounts, handling upgrades/downgrades, and providing ongoing value to retain subscribers. It often includes features like automated payments, usage tracking, and customer support systems."
    }
];

const faqContainer = document.getElementById('faq-container');

faqData.forEach((item, index) => {
    const faqItem = document.createElement('div');
    faqItem.classList.add('faq-item');
    if (index === 1) faqItem.classList.add('active');

    faqItem.innerHTML = `
        <div class="faq-question">
            ${item.question}
            <span class="arrow">›</span>
        </div>
        <div class="faq-answer">${item.answer}</div>
    `;

    faqItem.addEventListener('click', () => {
        faqItem.classList.toggle('active');
    });

    faqContainer.appendChild(faqItem);
});
/*--------------------------------*/
const cosmicData = {
    logo: "UpConslt",
    description: "We are the best business consulting services that have been operating for more than 20 years, handling many well-known brands",
    menus: [
        {
            title: "Services",
            items: ["Business Start-up", "Small Business", "Digital Business"]
        },
        {
            title: "Info",
            items: ["Client", "Event", "Careers"]
        },
        {
            title: "Contact",
            items: ["South Jakarta - Indonesia", "+0828-2267-9981", "contact@upconslt.com"]
        }
    ],
    footer: "© 2022 UpConslt. All rights reserved."
};

document.getElementById('logo').textContent = cosmicData.logo;
document.getElementById('description').textContent = cosmicData.description;
document.getElementById('menuContainer').innerHTML = cosmicData.menus.map(menu => `
    <div class="constellation-column">
        <div class="starcluster-title">${menu.title}</div>
        <ul class="star-system-list">
            ${menu.items.map(item => `<li><a href="#">${item}</a></li>`).join('')}
        </ul>
    </div>
`).join('');
document.getElementById('footer').innerHTML = cosmicData.footer.replace(
    "UpConslt",
    '<span class="quasar-highlight">UpConslt</span>'
);