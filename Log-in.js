  // Data object
  const pageData = {
    logo: "UpConslt",
    title: "Log in",
    emailPlaceholder: "Email or phone number",
    passwordPlaceholder: "Enter password",
    rememberMeText: "Remember me",
    forgotPasswordText: "Forgot password?",
    loginBtnText: "Login",
    googleBtnText: "Sign in with Google",
    signupText: "First time on UpConslt?",
    signupLinkText: "Sign up",
    backgroundImage: "assets/[UP-28]/image.svg",
    backgroundAltText: "Two business professionals having a meeting with laptop and documents on table"
};

// Function to populate the page with data
function populatePage(data) {
    document.getElementById('logo').textContent = data.logo;
    document.getElementById('title').textContent = data.title;
    document.getElementById('emailInput').placeholder = data.emailPlaceholder;
    document.getElementById('passwordInput').placeholder = data.passwordPlaceholder;
    document.getElementById('rememberMeText').textContent = data.rememberMeText;
    document.getElementById('forgotPassword').textContent = data.forgotPasswordText;
    document.getElementById('loginBtn').textContent = data.loginBtnText;
    document.getElementById('googleBtnText').textContent = data.googleBtnText;
    document.getElementById('signupText').textContent = data.signupText;
    document.getElementById('signupLink').textContent = data.signupLinkText;
    
    // Set background image
    document.getElementById('leftSection').style.backgroundImage = `url('${data.backgroundImage}')`;
    document.getElementById('leftSection').setAttribute('aria-label', data.backgroundAltText);
    
    // Set page title
    document.title = `${data.logo} Login`;
}

// Call the function to populate the page
populatePage(pageData);

// Toggle password visibility
const eyeIcon = document.querySelector('.eye-icon');
const passwordInput = document.getElementById('passwordInput');

eyeIcon.addEventListener('click', () => {
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        eyeIcon.classList.remove('fa-eye');
        eyeIcon.classList.add('fa-eye-slash');
    } else {
        passwordInput.type = 'password';
        eyeIcon.classList.remove('fa-eye-slash');
        eyeIcon.classList.add('fa-eye');
    }
});