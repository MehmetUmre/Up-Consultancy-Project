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