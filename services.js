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

const servicesData = [
    {
        icon: "assets/[UP-30]/bx-time.svg (1).svg",
        title: "Fast workmanship, precise consultation",
        description: "Define our commitment to delivering tailored, high-quality business solutions with speed and accuracy. Through streamlined processes, expert teams, and data-driven strategies, we ensure rapid execution without compromising precision. Our customized, actionable insights help organizations achieve their goals efficiently, setting them up for both short and long-term success in an ever-changing market.",
        image: "assets/[UP-30]/image (5).svg",
        alt: "White delivery van parked outside a commercial building"
    },
    {
        icon: "assets/[UP-30]/bx-dollar.svg.svg",
        title: "Lower prices with lots of variety",
        description: "Reflects our dedication to offering affordable solutions without compromising on quality. We provide a diverse range of options tailored to diverse needs, ensuring quality and value in every service. Whether you're looking for basic solutions or premium services, our extensive selection guarantees satisfaction while keeping costs low.",
        image: "assets/[UP-30]/image (6).svg",
        alt: "Close-up of dollar bills and plant leaves, representing cost savings and growth"
    },
    {
        icon: "assets/[UP-30]/bx-objects-vertical-bottom.svg (1).svg",
        title: "Detailed analysis of sales graph data",
        description: "Highlights our expertise in transforming complex sales data into actionable insights. Through comprehensive analysis of trends, patterns, and performance metrics, we help businesses identify opportunities, optimize strategies, and drive growth with data-backed decisions.",
        image: "assets/[UP-30]/image (7).svg",
        alt: "Business analytics charts and graphs on a desk"
    },
    {
        icon: "assets/[UP-30]/bx-shape-triangle.svg.svg",
        title: "Management and strategy consultant",
        description: "Offers expert guidance to achieve business objectives and drive sustainable growth. Through tailored strategies and effective management solutions, we help organizations overcome challenges, optimize operations, and make critical decisions with greater confidence and precision.",
        image: "assets/[UP-30]/image (8).svg",
        alt: "Overhead view of business team collaborating around a table with documents"
    },
    {
        icon: "assets/[UP-30]/bx-comment-detail.svg.svg",
        title: "Communicative with ease of discussion",
        description: "Reflects our commitment to open, clear, and effective communication throughout our service delivery. Our collaborative approach and proactive active listening and collaboration to ensure discussions are productive, seamless, and tailored to your needs.",
        image: "assets/[UP-30]/image (9).svg",
        alt: "Two people in business attire having a discussion in an office setting"
    },
    {
        icon: "assets/[UP-30]/bx-happy.svg.svg",
        title: "Open for feedback and review",
        description: "Emphasizes our commitment to continuous improvement and collaboration. We value client input, encourage open dialogue, and actively incorporate feedback to ensure our solutions align perfectly with your goals and expectations.",
        image: "assets/[UP-30]/image (10).svg",
        alt: "Two people reviewing and discussing information on a whiteboard"
    }
];

function createServiceItem(service) {
    return `
        <div class="service-item">
            <div class="service-content">
                <div class="service-text">
                    <div class="service-title-container">
                        <div class="service-icon">
                            <img src="${service.icon}" alt="Service icon">
                        </div>
                        <h3 class="service-title">${service.title}</h3>
                    </div>
                    <p class="service-description">${service.description}</p>
                </div>
                <img alt="${service.alt}" class="service-image" src="${service.image}"/>
            </div>
        </div>
    `;
}

function populateServices() {
    const serviceGrid = document.getElementById('service-grid');
    serviceGrid.innerHTML = servicesData.map(createServiceItem).join('');
}

function animateElements() {
    const elements = document.querySelectorAll('.services-header, .main-title, .service-item');
    elements.forEach((el, index) => {
        setTimeout(() => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, 100 * index);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    populateServices();
    setTimeout(animateElements, 100);
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