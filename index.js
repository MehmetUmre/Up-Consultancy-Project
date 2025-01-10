const app = document.getElementById("app");

      const data = {
        logo: "UpConslt",
        title: "Sign up",
        formFields: [
          { placeholder: "Name", type: "text" },
          { placeholder: "Phone number", type: "text" },
          { placeholder: "Email", type: "email" },
        ],
        forgotPasswordText: "Forgot password?",
        rememberMeText: "Remember me",
        signInButtonText: "Sign in",
        googleButtonText: "Or sign in with Google",
        footerText: "Already have a membership?",
        footerLinkText: "Log in now",
        footerLinkHref: "#",
        imageAlt:
          "Two business professionals in a meeting, one wearing a navy suit and the other in casual attire, reviewing documents and data on a laptop with coffee cups on the table",
        imageUrl: "assets/image.svg",
      };

      const container = document.createElement("div");
      container.className = "container";

      const imageSection = document.createElement("div");
      imageSection.className = "image-section";
      imageSection.style.backgroundImage = `url(${data.imageUrl})`;
      imageSection.setAttribute("alt", data.imageAlt);

      const formSection = document.createElement("div");
      formSection.className = "form-section";

      const logo = document.createElement("div");
      logo.className = "logo";
      logo.textContent = data.logo;

      const title = document.createElement("h1");
      title.textContent = data.title;

      const form = document.createElement("form");

      data.formFields.forEach((field) => {
        const formGroup = document.createElement("div");
        formGroup.className = "form-group";

        const input = document.createElement("input");
        input.type = field.type;
        input.placeholder = field.placeholder;
        input.required = true;

        formGroup.appendChild(input);
        form.appendChild(formGroup);
      });

      const passwordField = document.createElement("div");
      passwordField.className = "password-field";

      const passwordInput = document.createElement("input");
      passwordInput.type = "password";
      passwordInput.placeholder = "Enter password";
      passwordInput.required = true;

      const togglePassword = document.createElement("span");
      togglePassword.className = "toggle-password";
      togglePassword.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
        </svg>
      `;

      togglePassword.addEventListener("click", () => {
        if (passwordInput.type === "password") {
          passwordInput.type = "text";
          togglePassword.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"/>
            </svg>
          `;
        } else {
          passwordInput.type = "password";
          togglePassword.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
            </svg>
          `;
        }
      });

      passwordField.appendChild(passwordInput);
      passwordField.appendChild(togglePassword);

      const forgotPassword = document.createElement("a");
      forgotPassword.className = "forgot-password";
      forgotPassword.href = "#";
      forgotPassword.textContent = data.forgotPasswordText;

      passwordField.appendChild(forgotPassword);
      form.appendChild(passwordField);

      const rememberMe = document.createElement("div");
      rememberMe.className = "remember-me";

      const switchLabel = document.createElement("label");
      switchLabel.className = "switch";

      const rememberMeCheckbox = document.createElement("input");
      rememberMeCheckbox.type = "checkbox";
      rememberMeCheckbox.id = "remember-me";

      const slider = document.createElement("span");
      slider.className = "slider";

      switchLabel.appendChild(rememberMeCheckbox);
      switchLabel.appendChild(slider);

      const rememberMeLabel = document.createElement("label");
      rememberMeLabel.htmlFor = "remember-me";
      rememberMeLabel.textContent = data.rememberMeText;

      rememberMe.appendChild(switchLabel);
      rememberMe.appendChild(rememberMeLabel);
      form.appendChild(rememberMe);

      const signInButton = document.createElement("button");
      signInButton.className = "sign-in-btn";
      signInButton.type = "submit";
      signInButton.textContent = data.signInButtonText;

      const googleButton = document.createElement("button");
      googleButton.className = "google-btn";
      googleButton.type = "button";

      const googleIcon = document.createElement("img");
      googleIcon.src =
        "assets/Other-Pay-Method.svg";
      googleIcon.alt = "Google logo";
      googleIcon.width = 18;
      googleIcon.height = 18;

      googleButton.appendChild(googleIcon);
      googleButton.appendChild(document.createTextNode(data.googleButtonText));

      const footer = document.createElement("div");
      footer.className = "footer";
      footer.innerHTML = `${data.footerText} <a href="${data.footerLinkHref}">${data.footerLinkText}</a>`;

      form.appendChild(signInButton);
      form.appendChild(googleButton);
      form.appendChild(footer);

      formSection.appendChild(logo);
      formSection.appendChild(title);
      formSection.appendChild(form);

      container.appendChild(imageSection);
      container.appendChild(formSection);

      app.appendChild(container);