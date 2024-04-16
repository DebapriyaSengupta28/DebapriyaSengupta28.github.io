window.onload = function () {
    const logo = document.getElementById("logo");
    const video = document.getElementById("video-background");
    const mainContent = document.getElementById("mainContent");
    const infoBox = document.getElementById("infoBox");
    const projectPortfolio = document.getElementById("projectPortfolio");
    const skillContainer = document.querySelector(".skillContainer");
    const contactContent = document.getElementById("contactContent");

    const menuLinks = document.querySelectorAll(".menu a");

    // Logo fades in slowly
    fadeInElement(logo, 3000);

    // Wait for logo fade in animation to complete
    setTimeout(function () {
        // Logo fades out slowly
        fadeOutElement(logo, 3000);

        // Delay before showing the "Main Menu" content
        setTimeout(function () {
            // Video background fades in slowly
            fadeInElement(video, 3000);

            // "Main Menu" content fades in slowly
            fadeInElement(mainContent, 3000);
        }, 3000); // 3000 milliseconds = 3 seconds delay before showing the content

    }, 3000); // 3000 milliseconds = 3 seconds

    // Event listener for menu links
    menuLinks.forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            const target = event.target.getAttribute("href").slice(1);
            if (target === "about") {
                infoBox.classList.remove("hidden");
                infoBox.classList.add("show");
                projectPortfolio.classList.remove("show");
                projectPortfolio.classList.add("hidden");
                skillContainer.classList.remove("show"); // Hide skill content
                skillContainer.classList.add("hidden");
                contactContent.classList.remove("show"); // Hide contact content
                contactContent.classList.add("hidden");
            } else if (target === "projects") {
                showProjects();
                infoBox.classList.remove("show");
                infoBox.classList.add("hidden");
                skillContainer.classList.remove("show"); // Hide skill content
                skillContainer.classList.add("hidden");
                contactContent.classList.remove("show"); // Hide contact content
                contactContent.classList.add("hidden");
            } else if (target === "services") { // Changed "services" to "skills"
                showSkills();
                infoBox.classList.remove("show");
                infoBox.classList.add("hidden");
                projectPortfolio.classList.remove("show");
                projectPortfolio.classList.add("hidden");
                contactContent.classList.remove("show"); // Hide contact content
                contactContent.classList.add("hidden");
            } else if (target === "contact") { // Added contact section handling
                showContact();
                infoBox.classList.remove("show");
                infoBox.classList.add("hidden");
                projectPortfolio.classList.remove("show");
                projectPortfolio.classList.add("hidden");
                skillContainer.classList.remove("show");
                skillContainer.classList.add("hidden");
            } else {
                hideAllContent(); // Hide all content
            }
        });
    });
};

// Function to show the project portfolio
function showProjects() {
    const projectPortfolio = document.getElementById("projectPortfolio");
    projectPortfolio.classList.remove("hidden");
    projectPortfolio.classList.add("show");
}

// Function to show the skill content
function showSkills() {
    const skillContainer = document.querySelector(".skillContainer");
    skillContainer.classList.remove("hidden");
    skillContainer.classList.add("show");
}

// Function to show the contact content
function showContact() {
    const contactContent = document.getElementById("contactContent");
    contactContent.classList.remove("hidden");
    contactContent.classList.add("show");
}

// Function to hide all content
function hideAllContent() {
    const infoBox = document.getElementById("infoBox");
    const projectPortfolio = document.getElementById("projectPortfolio");
    const skillContainer = document.querySelector(".skillContainer");
    const contactContent = document.getElementById("contactContent");

    infoBox.classList.remove("show");
    infoBox.classList.add("hidden");

    projectPortfolio.classList.remove("show");
    projectPortfolio.classList.add("hidden");

    skillContainer.classList.remove("show");
    skillContainer.classList.add("hidden");

    contactContent.classList.remove("show");
    contactContent.classList.add("hidden");
}

// Function to fade in an element over a given duration
function fadeInElement(element, duration) {
    element.style.opacity = 0;
    element.classList.remove("hidden");
    let startTime = null;
    function animate(currentTime) {
        if (!startTime) startTime = currentTime;
        const elapsedTime = currentTime - startTime;
        const opacity = elapsedTime / duration;
        element.style.opacity = opacity > 1 ? 1 : opacity;
        if (elapsedTime < duration) {
            requestAnimationFrame(animate);
        }
    }
    requestAnimationFrame(animate);
}

// Function to fade out an element over a given duration
function fadeOutElement(element, duration) {
    let startTime = null;
    function animate(currentTime) {
        if (!startTime) startTime = currentTime;
        const elapsedTime = currentTime - startTime;
        const opacity = 1 - elapsedTime / duration;
        element.style.opacity = opacity < 0 ? 0 : opacity;
        if (elapsedTime < duration) {
            requestAnimationFrame(animate);
        } else {
            element.classList.add("hidden");
        }
    }
    requestAnimationFrame(animate);
}
