const navData = {
    logo: "UpConslt",
    links: [
        { name: "Services", href: "services.html" },
        { name: "Pricing", href: "pricing.html" },
        { name: "Blog", href: "blog.html" },
        { name: "Login", href: "Log-in.html" },
    ],
    cta: { name: "Get Started", href: "Log-in.html" }
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
/*----------------------------------------*/
const pricingData = {
    plans: [
        { name: 'Starter', button: 'Get Started' },
        { name: 'Professional', button: 'Get Started' },
        { name: 'Enterprise', button: 'Contact Us' }
    ],
    features: [
        {
            name: 'Plans',
            items: [
                { name: 'Plans', starter: true, professional: true, enterprise: true },
                { name: 'Adds-on', starter: true, professional: true, enterprise: true },
                { name: 'Item Catalog', starter: false, professional: false, enterprise: true }
            ]
        },
        {
            name: 'Pricing Models',
            items: [
                { name: 'Fixed Recurring Pricing', starter: false, professional: true, enterprise: true },
                { name: 'Volume Pricing', starter: true, professional: true, enterprise: true },
                { name: 'Tiered Pricing', starter: false, professional: false, enterprise: true },
                { name: 'Ramp Pricing', starter: true, professional: true, enterprise: true }
            ]
        },
        {
            name: 'Promotions',
            items: [
                { name: 'Fixed Recurring Pricing', starter: true, professional: true, enterprise: true },
                { name: 'Trial Management', starter: false, professional: true, enterprise: true },
                { name: 'Coupons & Discounts', starter: false, professional: false, enterprise: true },
                { name: 'Gift Subscriptions', starter: true, professional: true, enterprise: true }
            ]
        }
    ]
};

function renderHeader() {
    return `
        <div class="pricing-header">
            ${pricingData.plans.map(plan => `
                <div class="pricing-column">
                    <h3>${plan.name}</h3>
                    <a href="#" class="pricing-button">${plan.button}</a>
                </div>
            `).join('')}
        </div>
    `;
}

function renderFeatureSection(section) {
    return `
        <div class="section-title">${section.name}</div>
        <table class="pricing-table">
            ${section.items.map(item => `
                <tr>
                    <td>${item.name}</td>
                    ${pricingData.plans.map(plan => `
                        <td>
                            <i class="icon fas ${item[plan.name.toLowerCase()] ? 'fa-check icon-check' : 'fa-times icon-cross'}"></i>
                        </td>
                    `).join('')}
                </tr>
            `).join('')}
        </table>
    `;
}

function renderApp() {
    const app = document.getElementById('pricing');
    app.innerHTML = `
        ${renderHeader()}
        ${pricingData.features.map(renderFeatureSection).join('')}
    `;

    // Animate icons
    setTimeout(() => {
        const icons = document.querySelectorAll('.icon');
        icons.forEach((icon, index) => {
            setTimeout(() => {
                icon.classList.add('fade-in');
            }, index * 50);
        });
    }, 300);
}

renderApp();

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
const formData = {
    contactText: "Contact",
    title: "Let us know how we can help you",
    fields: [
        { type: "text", placeholder: "Your Name" },
        { type: "email", placeholder: "Email" },
        { type: "textarea", placeholder: "Message" }
    ],
    buttonText: "Leave us a Message"
};

function renderForm() {
    const app = document.getElementById('app');
    app.innerHTML = `
        <div class="contact-section">
        <div class="contact-text">${formData.contactText}</div>
        <h1 class="form-title">${formData.title}</h1>
        </div>
        
        <form id="contactForm">
            <div class="form-row">
                <div class="form-column">
                    <input type="${formData.fields[0].type}" placeholder="${formData.fields[0].placeholder}">
                </div>
                <div class="form-column">
                    <input type="${formData.fields[1].type}" placeholder="${formData.fields[1].placeholder}">
                </div>
            </div>
            
            <textarea placeholder="${formData.fields[2].placeholder}"></textarea>
            
            <button type="submit" class="submit-button">${formData.buttonText}</button>
        </form>
    `;

    document.getElementById('contactForm').addEventListener('submit', function(e) {
        e.preventDefault();
        console.log('Form submitted');
    });
}

renderForm();

/*--------------------------------*/

const contactInfo = {
    contactInfoTitle: "Contact Info",
    contactInfoHeadline: "We are always<br>happy to assist you",
    emailTitle: "Email Address",
    emailAddress: "help@info.com",
    assistanceHoursTitle: "Assistance hours:",
    assistanceHours: "Monday - Friday 6 am to<br>8 pm EST",
    numberTitle: "Number",
    phoneNumber: "(808) 998-34256"
};

document.getElementById('contactInfoTitle').innerHTML = contactInfo.contactInfoTitle;
document.getElementById('contactInfoHeadline').innerHTML = contactInfo.contactInfoHeadline;
document.getElementById('emailTitle').innerHTML = contactInfo.emailTitle;
document.getElementById('emailAddress').innerHTML = contactInfo.emailAddress;
document.getElementById('emailAssistanceHoursTitle').innerHTML = contactInfo.assistanceHoursTitle;
document.getElementById('emailAssistanceHours').innerHTML = contactInfo.assistanceHours;
document.getElementById('numberTitle').innerHTML = contactInfo.numberTitle;
document.getElementById('phoneNumber').innerHTML = contactInfo.phoneNumber;
document.getElementById('numberAssistanceHoursTitle').innerHTML = contactInfo.assistanceHoursTitle;
document.getElementById('numberAssistanceHours').innerHTML = contactInfo.assistanceHours;


document.getElementById('emailAddress').addEventListener('click', function() {
    window.location.href = 'mailto:' + contactInfo.emailAddress;
});


document.getElementById('phoneNumber').addEventListener('click', function() {
    window.location.href = 'tel:' + contactInfo.phoneNumber.replace(/[()-\s]/g, '');
});

/*--------------------------------*/

const newsletterData = {
    title: "Subscribe to our Newsletter",
    description: "Subscribe for updates! Stay informed about the latest investor updates, financial results, and announcements by subscribing to our newsletter.",
    inputPlaceholder: "Enter your email",
    buttonText: "Subscribe"
};

document.addEventListener('DOMContentLoaded', () => {
    const newsletterTitle = document.getElementById('newsletterTitle');
    const newsletterDescription = document.getElementById('newsletterDescription');
    const newsletterInput = document.getElementById('newsletterInput');
    const newsletterButton = document.getElementById('newsletterButton');

    newsletterTitle.textContent = newsletterData.title;
    newsletterDescription.textContent = newsletterData.description;
    newsletterInput.placeholder = newsletterData.inputPlaceholder;
    newsletterButton.textContent = newsletterData.buttonText;

    newsletterButton.addEventListener('click', (e) => {
        e.preventDefault();
        if (newsletterInput.value) {
            alert(`Thank you for subscribing with: ${newsletterInput.value}`);
            newsletterInput.value = '';
        } else {
            alert('Please enter a valid email address.');
        }
    });
});

/*--------------------------------*/
const cosmicData = {
    logo: "UpConslt",
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
