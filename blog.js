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
const blogPosts = [
    {
        id: "largePost",
        image: "assets/[UP-39]/Image (11).svg",
        alt: "Modern office workspace with white desk and ergonomic chairs",
        author: "Olivia Rhye",
        date: "1 Jan 2023",
        title: "Fastest Delivery Ever",
        excerpt: "Lorem ipsum dolor sit amet consectetur. Tristique suspendisse masuada netus pharetra. Augue commodo orci nisi enim. Viverra aliquam ultrices mauris hac neque gravida amet eu sed. Eu cras massa netus vitae duis pretium dolor."
    },
    {
        id: "rightAlignedPost1",
        image: "assets/[UP-39]/Image (12).svg",
        alt: "Team members collaborating at a desk with laptops",
        author: "Phoenix Baker",
        date: "1 Jan 2023",
        title: "Migrating to Linear 101",
        excerpt: "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here's how to get..."
    },
    {
        id: "rightAlignedPost2",
        image: "assets/[UP-39]/Image (13).svg",
        alt: "Modern workspace with desktop computer and minimalist decor",
        author: "Lana Steiner",
        date: "1 Jan 2023",
        title: "Building your API Stack",
        excerpt: "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and manag..."
    },
    {
        id: "bottomPost",
        image: "assets/[UP-39]/Image (14).svg",
        alt: "Document with climate change data and graphs",
        author: "Olivia Rhye",
        date: "1 Jan 2023",
        title: "Climate Endgame: Exploring catastrophic climate change scenarios",
        excerpt: "Lorem ipsum dolor sit amet consectetur. Commodo cursus odio semetus sed eros urna a. Eu mattis posuere sec volutpat crocidunt nam eget volutpat ultrices. Sagittis vitae risque norem vel felis dictumst libero. Vitae leo sagittis viverra sem. Commodo dignissim nam massa ut. Sodales and ero libula vitae lec."
    }
];

function createBlogPost(post) {
    const blogPost = document.getElementById(post.id);
    blogPost.innerHTML = `
        <img alt="${post.alt}" src="${post.image}" width="300" height="200">
        <div class="post-content">
            <div class="post-meta">
                <span>${post.author}</span>
                <span>• ${post.date}</span>
            </div>
            <h3 class="post-title">${post.title}</h3>
            <p class="post-excerpt">${post.excerpt}</p>
        </div>
    `;
    return blogPost;
}

function loadBlogPosts() {
    blogPosts.forEach((post, index) => {
        const blogPost = createBlogPost(post);
        setTimeout(() => {
            blogPost.classList.add('visible');
        }, index * 200);
    });
}

document.addEventListener('DOMContentLoaded', loadBlogPosts);
/*----------------------------------------*/
let currentPage = 1;
const postsPerPage = 6;

const blogData = [
    // Page 1
    {
        image: "assets/[UP-42]/Image (15).svg",
        author: "Alec Whitten",
        date: "1 Jan 2023",
        title: "Bill Walsh leadership lessons",
        description: "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?"
    },
    {
        image: "assets/[UP-42]/Image (16).svg",
        author: "Demi Wilkinson",
        date: "1 Jan 2023",
        title: "PM mental models",
        description: "Mental models are simple expressions of complex processes or relationships."
    },
    {
        image: "assets/[UP-42]/Image (17).svg",
        author: "Candice Wu",
        date: "1 Jan 2023",
        title: "What is Wireframing?",
        description: "Introduction to Wireframing and its Principles. Learn from the best in the industry."
    },
    {
        image: "assets/[UP-42]/Image (18).svg",
        author: "Natali Craig",
        date: "1 Jan 2023",
        title: "How collaboration makes us better designers",
        description: "Collaboration can make our teams stronger, and our individual designs better."
    },
    {
        image: "assets/[UP-42]/Image (19).svg",
        author: "Drew Cano",
        date: "1 Jan 2023",
        title: "Importance of getting customer feedback",
        description: "Understanding your customers' needs is crucial for product success and growth."
    },
    {
        image: "assets/[UP-42]/Image (20).svg",
        author: "Orlando Diggs",
        date: "1 Jan 2023",
        title: "Podcast: Creating a better CX Community",
        description: "Starting a community doesn't need to be complicated, but how do you get started?"
    },
    // Page 2
    {
        image: "assets/[UP-42]/0_bWXr7iPfBH9prEMv.png",
        author: "Lana Rodriguez",
        date: "2 Jan 2023",
        title: "10 UX Research Methods",
        description: "Discover the most effective UX research methods to improve your product design."
    },
    {
        image: "assets/[UP-42]/color-theory-15-20240709-3078160.webp",
        author: "Max Sterling",
        date: "2 Jan 2023",
        title: "Color Theory in Design",
        description: "Learn how to use color effectively in your designs to evoke emotions and improve usability."
    },
    {
        image: "assets/[UP-42]/agile-methodology-chicago.webp",
        author: "Sara Johnson",
        date: "2 Jan 2023",
        title: "Agile Development Explained",
        description: "A comprehensive guide to Agile methodologies and how they can improve your development process."
    },
    {
        image: "assets/[UP-42]/images.png",
        author: "Tom Harris",
        date: "2 Jan 2023",
        title: "Typography 101",
        description: "Master the basics of typography to enhance readability and visual appeal in your designs."
    },
    {
        image: "assets/[UP-42]/download.jpg",
        author: "Emily Chang",
        date: "2 Jan 2023",
        title: "Creating Effective User Personas",
        description: "Learn how to develop user personas that truly represent your target audience."
    },
    {
        image: "assets/[UP-42]/Mobile-First-Design-copy.webp",
        author: "Chris Lee",
        date: "2 Jan 2023",
        title: "Mobile-First Design Approach",
        description: "Explore the benefits and best practices of adopting a mobile-first design strategy."
    },
    // Page 3
    {
        image: "assets/[UP-42]/the-impact-of-AI-on-UX-design.webp",
        author: "Zoe Martinez",
        date: "3 Jan 2023",
        title: "AI's Impact on UX Design",
        description: "Discover how artificial intelligence is shaping the future of user experience design."
    },
    {
        image: "assets/[UP-42]/download.png",
        author: "Alex Booker",
        date: "3 Jan 2023",
        title: "Building Effective Design Systems",
        description: "Learn how to create and maintain a design system that scales with your organization."
    },
    {
        image: "assets/[UP-42]/images.jpg",
        author: "Rachel Green",
        date: "3 Jan 2023",
        title: "Web Accessibility Guidelines",
        description: "Ensure your websites are accessible to all users with these essential guidelines."
    },
    {
        image: "assets/[UP-42]/97f666d2-b567-48b2-a89c-e5a9114c31bb.webp",
        author: "Daniel Brown",
        date: "3 Jan 2023",
        title: "Data Visualization Techniques",
        description: "Explore effective ways to present complex data in visually appealing and understandable formats."
    },
    {
        image: "assets/[UP-42]/8d920b6f-061a-4809-8e45-3512085edc09.webp",
        author: "Sophie Taylor",
        date: "3 Jan 2023",
        title: "The Art of UX Writing",
        description: "Master the craft of writing clear, concise, and user-friendly copy for digital products."
    },
    {
        image: "assets/[UP-42]/f9c3f18a-5387-45aa-ad07-da5d4a3bc90f.webp",
        author: "Mike Wilson",
        date: "3 Jan 2023",
        title: "Introduction to Design Thinking",
        description: "Learn the fundamentals of design thinking and how to apply it to solve complex problems."
    },
    // Page 4
    {
        image: "assets/[UP-42]/Mastering Responsive Web Design.png",
        author: "Laura Chen",
        date: "4 Jan 2023",
        title: "Mastering Responsive Web Design",
        description: "Techniques and best practices for creating websites that look great on any device."
    },
    {
        image: "assets/[UP-42]/Effective User Testing Strategies.png",
        author: "Ryan Parker",
        date: "4 Jan 2023",
        title: "Effective User Testing Strategies",
        description: "Learn how to conduct user tests that provide valuable insights for your product development."
    },
    {
        image: "assets/[UP-42]/Ethics in Design.png",
        author: "Emma Watson",
        date: "4 Jan 2023",
        title: "Ethics in Design",
        description: "Explore the ethical considerations in UX/UI design and how to make responsible choices."
    },
    {
        image: "assets/[UP-42]/Top Prototyping Tools for Designers.png",
        author: "Jason Lee",
        date: "4 Jan 2023",
        title: "Top Prototyping Tools for Designers",
        description: "A comparison of the most popular prototyping tools and how to choose the right one for your projects."
    },
    {
        image: "assets/[UP-42]/Running Successful Design Sprints.jpg",
        author: "Olivia Martinez",
        date: "4 Jan 2023",
        title: "Running Successful Design Sprints",
        description: "A step-by-step guide to planning and executing effective design sprints."
    },
    {
        image: "assets/[UP-42]/Basics of Information Architecture.png",
        author: "David Clark",
        date: "4 Jan 2023",
        title: "Basics of Information Architecture",
        description: "Learn how to structure and organize information to create intuitive user experiences."
    },
    // Page 5
    {
        image: "assets/[UP-42]/UX Design for Virtual Reality.jpg",
        author: "Sophia Lee",
        date: "5 Jan 2023",
        title: "UX Design for Virtual Reality",
        description: "Explore the unique challenges and opportunities in designing for virtual reality experiences."
    },
    {
        image: "assets/[UP-42]/The Art of Design Critique.png",
        author: "Nathan Brooks",
        date: "5 Jan 2023",
        title: "The Art of Design Critique",
        description: "Learn how to give and receive constructive feedback to improve your design process."
    },
    {
        image: "assets/[UP-42]/Designing Delightful Micro-interactions.png",
        author: "Ava Johnson",
        date: "5 Jan 2023",
        title: "Designing Delightful Micro-interactions",
        description: "Discover how small, thoughtful animations can greatly enhance user experience."
    },
    {
        image: "assets/[UP-42]/UX Design for Startups.jpg",
        author: "Ethan Hunt",
        date: "5 Jan 2023",
        title: "UX Design for Startups",
        description: "Tips and strategies for creating impactful designs with limited resources."
    },
    {
        image: "assets/[UP-42]/Avoiding Dark Patterns in UX.jpg",
        author: "Isabella Garcia",
        date: "5 Jan 2023",
        title: "Avoiding Dark Patterns in UX",
        description: "Understand what dark patterns are and how to create ethical, user-centric designs."
    },
    {
        image: "assets/[UP-42]/Becoming a Design Leader.jpg",
        author: "William Turner",
        date: "5 Jan 2023",
        title: "Becoming a Design Leader",
        description: "Develop the skills and mindset needed to lead design teams effectively."
    },
    // Page 6
    {
        image: "assets/[UP-42]/Designing for Voice User Interfaces.png",
        author: "Mia Robinson",
        date: "6 Jan 2023",
        title: "Designing for Voice User Interfaces",
        description: "Learn the principles of creating intuitive and effective voice-controlled interfaces."
    },
    {
        image: "assets/[UP-42]/Crafting a Standout Design Portfolio.jpg",
        author: "Lucas Kim",
        date: "6 Jan 2023",
        title: "Crafting a Standout Design Portfolio",
        description: "Tips for showcasing your best work and landing your dream design job."
    },
    {
        image: "assets/[UP-42]/Principles of Inclusive Design.jpg",
        author: "Grace Taylor",
        date: "6 Jan 2023",
        title: "Principles of Inclusive Design",
        description: "Explore how to create designs that cater to a diverse range of users and abilities."
    },
    {
        image: "assets/[UP-42]/Scaling Design Systems.png",
        author: "Oscar Martinez",
        date: "6 Jan 2023",
        title: "Scaling Design Systems",
        description: "Strategies for maintaining and evolving design systems in large organizations."
    },
    {
        image: "assets/[UP-42]/Gamification in User Experience.jpg",
        author: "Lily Chen",
        date: "6 Jan 2023",
        title: "Gamification in User Experience",
        description: "Learn how to incorporate game design elements to increase user engagement."
    },
    {
        image: "assets/[UP-42]/Designing for Accessibility.png",
        author: "Noah Williams",
        date: "6 Jan 2023",
        title: "Designing for Accessibility",
        description: "Best practices for creating designs that are usable by people with various disabilities."
    },
    // Page 7
    {
        image: "assets/[UP-42]/Essential UX Research Tools.png",
        author: "Emma Davis",
        date: "7 Jan 2023",
        title: "Essential UX Research Tools",
        description: "A comprehensive guide to the most useful tools for conducting UX research."
    },
    {
        image: "assets/[UP-42]/Facilitating Design Thinking Workshops.jpg",
        author: "Liam Johnson",
        date: "7 Jan 2023",
        title: "Facilitating Design Thinking Workshops",
        description: "Learn how to plan and run effective design thinking sessions with your team."
    },
    {
        image: "assets/[UP-42]/Motion Design in UX.jpg",
        author: "Zoe Brown",
        date: "7 Jan 2023",
        title: "Motion Design in UX",
        description: "Explore how animation and motion can enhance user experience in digital products."
    },
    {
        image: "assets/[UP-42]/Designing for Trust.jpg",
        author: "Oliver Smith",
        date: "7 Jan 2023",
        title: "Designing for Trust",
        description: "Strategies for building user trust through thoughtful design decisions."
    },
    {
        image: "assets/[UP-42]/UX Writing Workshop.png",
        author: "Ava Wilson",
        date: "7 Jan 2023",
        title: "UX Writing Workshop",
        description: "Hands-on exercises to improve your UX writing skills and create better user experiences."
    },
    {
        image: "assets/[UP-42]/Creating Reusable Design System Components.jpg",
        author: "Ethan Lee",
        date: "7 Jan 2023",
        title: "Creating Reusable Design System Components",
        description: "Learn how to design and develop flexible, scalable components for your design system."
    },
    // Page 8
    {
        image: "assets/[UP-42]/UX Design for AI-Powered Products.jpg",
        author: "Sophie Martin",
        date: "8 Jan 2023",
        title: "UX Design for AI-Powered Products",
        description: "Explore the unique challenges of designing user experiences for AI-driven applications."
    },
    {
        image: "assets/[UP-42]/Introduction to DesignOps.png",
        author: "Jack Thompson",
        date: "8 Jan 2023",
        title: "Introduction to DesignOps",
        description: "Learn how DesignOps can streamline your design processes and improve team efficiency."
    },
    {
        image: "assets/[UP-42]/The Power of Storytelling in UX.png",
        author: "Isabella Moore",
        date: "8 Jan 2023",
        title: "The Power of Storytelling in UX",
        description: "Discover how to use storytelling techniques to create more engaging user experiences."
    },
    {
        image: "assets/[UP-42]/Designing for Behavior Change.jpg",
        author: "Noah Clark",
        date: "8 Jan 2023",
        title: "Designing for Behavior Change",
        description: "Learn how to create designs that positively influence user behavior and habits."
    },
    {
        image: "assets/[UP-42]/Measuring UX Success.jpg",
        author: "Chloe Rodriguez",
        date: "8 Jan 2023",
        title: "Measuring UX Success",
        description: "Explore key metrics and methods for evaluating the effectiveness of your UX designs."
    },
    {
        image: "assets/[UP-42]/Applying Design Thinking in Business.png",
        author: "Daniel White",
        date: "8 Jan 2023",
        title: "Applying Design Thinking in Business",
        description: "Learn how to use design thinking principles to solve complex business problems."
    },
    // Page 9
    {
        image: "assets/[UP-42]/Designing for Wearable Devices.jpg",
        author: "Olivia Taylor",
        date: "9 Jan 2023",
        title: "Designing for Wearable Devices",
        description: "Explore the unique considerations and best practices for designing wearable technology interfaces."
    },
    {
        image: "assets/[UP-42]/Running Remote Design Sprints.png",
        author: "Lucas Garcia",
        date: "9 Jan 2023",
        title: "Running Remote Design Sprints",
        description: "Learn how to effectively conduct design sprints with distributed teams."
    },
    {
        image: "assets/[UP-42]/UX Design Trends for 2023.jpg",
        author: "Emma Johnson",
        date: "9 Jan 2023",
        title: "UX Design Trends for 2023",
        description: "Stay ahead of the curve with these emerging trends in user experience design."
    },
    {
        image: "assets/[UP-42]/Design Thinking in Education.jpg",
        author: "William Brown",
        date: "9 Jan 2023",
        title: "Design Thinking in Education",
        description: "Discover how design thinking can be applied to improve learning experiences and outcomes."
    },
    {
        image: "assets/[UP-42]/UX Design for Blockchain Applications.jpg",
        author: "Sophia Lee",
        date: "9 Jan 2023",
        title: "UX Design for Blockchain Applications",
        description: "Learn the unique challenges and opportunities in designing for blockchain-based products."
    },
    {
        image: "assets/[UP-42]/Ethical Considerations in AI Design.jpg",
        author: "Ethan Davis",
        date: "9 Jan 2023",
        title: "Ethical Considerations in AI Design",
        description: "Explore the ethical implications of designing AI-powered systems and how to address them."
    },
    // Page 10
    {
        image: "assets/[UP-42]/UX Writing for Conversational Interfaces.png",
        author: "Ava Wilson",
        date: "10 Jan 2023",
        title: "UX Writing for Conversational Interfaces",
        description: "Master the art of creating natural, engaging dialogue for chatbots and voice assistants."
    },
    {
        image: "assets/[UP-42]/Building Design Systems for Startups.jpg",
        author: "Noah Martinez",
        date: "10 Jan 2023",
        title: "Building Design Systems for Startups",
        description: "Learn how to create scalable design systems that grow with your startup."
    },
    {
        image: "assets/[UP-42]/Conducting Remote UX Research.jpg",
        author: "Mia Thompson",
        date: "10 Jan 2023",
        title: "Conducting Remote UX Research",
        description: "Strategies and tools for effective user research when in-person sessions aren't possible."
    },
    {
        image: "assets/[UP-42]/Designing for Generation Z.png",
        author: "Liam Parker",
        date: "10 Jan 2023",
        title: "Designing for Generation Z",
        description: "Understand the unique preferences and behaviors of Gen Z to create appealing designs."
    },
    {
        image: "assets/[UP-42]/UX Design in Healthcare.jpg",
        author: "Olivia Clark",
        date: "10 Jan 2023",
        title: "UX Design in Healthcare",
        description: "Explore the challenges and opportunities of designing digital health products and services."
    },
    {
        image: "assets/[UP-42]/The Future of UX Design.jpg",
        author: "Jack Robinson",
        date: "10 Jan 2023",
        title: "The Future of UX Design",
        description: "Predictions and insights into how UX design will evolve in the coming years."
    }
];

function renderPosts(page) {
    const startIndex = (page - 1) * postsPerPage;
    const endIndex = startIndex + postsPerPage;
    const postsToRender = blogData.slice(startIndex, endIndex);

    const blogGrid = document.getElementById('blogGrid');
    blogGrid.innerHTML = '';

    postsToRender.forEach(post => {
        const postHTML = `
            <div class="card">
                <img src="${post.image}" alt="${post.title}" width="400" height="300">
                <div class="meta">
                    <span>${post.author}</span>
                    <span>•</span>
                    <span>${post.date}</span>
                </div>
                <a class="title" href="#">${post.title}</a>
                <p class="description">${post.description}</p>
            </div>
        `;
        blogGrid.innerHTML += postHTML;
    });
}

function updatePagination() {
    const paginationLinks = document.querySelectorAll('.pagination a');
    paginationLinks.forEach(link => {
        link.classList.remove('active');
        if (link.textContent == currentPage) {
            link.classList.add('active');
        }
    });
}

function changePage(page) {
    if (page === 'prev' && currentPage > 1) {
        currentPage--;
    } else if (page === 'next' && currentPage < 10) {
        currentPage++;
    } else if (typeof page === 'number') {
        currentPage = page;
    }

    renderPosts(currentPage);
    updatePagination();
}

renderPosts(currentPage);
updatePagination();
/*----------------------------------------*/

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