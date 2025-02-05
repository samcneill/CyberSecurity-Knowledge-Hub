// Create the HTML elements
const body = document.body;
const header = document.createElement('header');
header.className = 'funcbar';
header.role = 'banner'; // Add role attribute for accessibility
body.appendChild(header);

const accessibilityOptions = document.createElement('div');
accessibilityOptions.className = 'accessibility-options';
accessibilityOptions.style.float = 'right'; // Move to the right side
accessibilityOptions.role = 'group'; // Add role attribute for accessibility
header.appendChild(accessibilityOptions);

const lightModeButton = document.createElement('button');
lightModeButton.id = 'LightModeButton';
lightModeButton.textContent = 'Toggle Light Mode'; // Use text instead of image
lightModeButton.ariaLabel = 'Toggle Light Mode'; // Add aria-label attribute for accessibility
accessibilityOptions.appendChild(lightModeButton);

const darkModeButton = document.createElement('button');
darkModeButton.id = 'DarkModeButton';
darkModeButton.textContent = 'Toggle Dark Mode'; // Use text instead of image
darkModeButton.ariaLabel = 'Toggle Dark Mode'; // Add aria-label attribute for accessibility
accessibilityOptions.appendChild(darkModeButton);

const textSizeContainer = document.createElement('div');
textSizeContainer.style.display = 'flex';
textSizeContainer.style.alignItems = 'center';
textSizeContainer.style.gap = '10px';
accessibilityOptions.appendChild(textSizeContainer);

const decreaseTextSizeButton = document.createElement('button');
decreaseTextSizeButton.id = 'DecreaseTextSizeButton';
decreaseTextSizeButton.textContent = 'Decrease Text Size'; // Use text instead of image
decreaseTextSizeButton.ariaLabel = 'Decrease Text Size'; // Add aria-label attribute for accessibility
textSizeContainer.appendChild(decreaseTextSizeButton);

const increaseTextSizeButton = document.createElement('button');
increaseTextSizeButton.id = 'IncreaseTextSizeButton';
increaseTextSizeButton.textContent = 'Increase Text Size'; // Use text instead of image
increaseTextSizeButton.ariaLabel = 'Increase Text Size'; // Add aria-label attribute for accessibility
textSizeContainer.appendChild(increaseTextSizeButton);

const highContrastButton = document.createElement('button');
highContrastButton.id = 'HighContrastButton';
highContrastButton.textContent = 'Toggle High Contrast'; // Use text instead of image
highContrastButton.ariaLabel = 'Toggle High Contrast'; // Add aria-label attribute for accessibility
accessibilityOptions.appendChild(highContrastButton);

const searchBar = document.createElement('form');
searchBar.className = 'search-bar';
searchBar.role = 'search'; // Add role attribute for accessibility
accessibilityOptions.appendChild(searchBar);

const searchInput = document.createElement('input');
searchInput.type = 'text';
searchInput.id = 'searchInput';
searchInput.name = 'q';
searchInput.placeholder = 'Search this website';
searchInput.ariaLabel = 'Search input'; // Add aria-label attribute for accessibility
searchBar.appendChild(searchInput);

const searchIcon = document.createElement('button');
searchIcon.type = 'submit';
searchIcon.id = 'searchIcon';
searchIcon.textContent = 'Search'; // Use text instead of image
searchIcon.ariaLabel = 'Search'; // Add aria-label attribute for accessibility
searchBar.appendChild(searchIcon);

const main = document.createElement('main');
main.role = 'main'; // Add role attribute for accessibility
body.appendChild(main);

const h1 = document.createElement('h1');
h1.textContent = 'Accessible Cybersecurity';
main.appendChild(h1);

const p = document.createElement('p');
p.textContent = 'Explore accessibility features to enhance user experience.';
main.appendChild(p);

const nav = document.createElement('nav');
nav.className = 'navbar';
nav.role = 'navigation'; // Add role attribute for accessibility
main.appendChild(nav);

const homeLink = document.createElement('a');
homeLink.className = 'active';
homeLink.href = '#';
homeLink.textContent = 'Home'; // Use text instead of image
homeLink.ariaLabel = 'Home link'; // Add aria-label attribute for accessibility
nav.appendChild(homeLink);

const aboutUsLink = document.createElement('a');
aboutUsLink.href = 'main_files/about-us.html';
aboutUsLink.textContent = 'About Us';
aboutUsLink.ariaLabel = 'About Us link'; // Add aria-label attribute for accessibility
nav.appendChild(aboutUsLink);

const cybersecurityHubLink = document.createElement('a');
cybersecurityHubLink.href = 'main_files/cybersecurity-knowledge-hub.html';
cybersecurityHubLink.textContent = 'Cybersecurity Hub';
cybersecurityHubLink.ariaLabel = 'Cybersecurity Hub link'; // Add aria-label attribute for accessibility
nav.appendChild(cybersecurityHubLink);

const auNzLawsLink = document.createElement('a');
auNzLawsLink.href = 'main_files/australian-newzealand-laws.html';
auNzLawsLink.textContent = 'AU/NZ Laws';
auNzLawsLink.ariaLabel = 'AU/NZ Laws link'; // Add aria-label attribute for accessibility
nav.appendChild(auNzLawsLink);

const resourcesLink = document.createElement('a');
resourcesLink.href = 'main_files/resources.html';
resourcesLink.textContent = 'Resources';
resourcesLink.ariaLabel = 'Resources link'; // Add aria-label attribute for accessibility
nav.appendChild(resourcesLink);

const newsletterLink = document.createElement('a');
newsletterLink.href = 'main_files/newsletter.html';
newsletterLink.textContent = 'Newsletter';
newsletterLink.ariaLabel = 'Newsletter link'; // Add aria-label attribute for accessibility
nav.appendChild(newsletterLink);

const contactUsLink = document.createElement('a');
contactUsLink.href = 'main_files/contact-form.html';
contactUsLink.textContent = 'Contact Us';
contactUsLink.ariaLabel = 'Contact Us link'; // Add aria-label attribute for accessibility
nav.appendChild(contactUsLink);

const img = document.createElement('img');
img.src = 'https://i.imgur.com/rVlMF8D.png';
img.alt = 'Six individuals are in the midst of a discussion with the text \'Cyber Quantum\' above them with an electrified border';
img.style.width = '600px';
img.style.height = '498px';
main.appendChild(img);

const info = document.createElement('div');
info.className = 'info';
main.appendChild(info);

const h2 = document.createElement('h2');
h2.textContent = 'Click here for <u>Audio</u> or <u>Braille</u> or <u>Auslan</u>';
info.appendChild(h2);

const footer = document.createElement('footer');
footer.role = 'contentinfo'; // Add role attribute for accessibility
body.appendChild(footer);

const copyright = document.createElement('p');
copyright.textContent = '&copy; 2025 Accessible Cybersecurity. All rights reserved.';
footer.appendChild(copyright);

// Add event listeners
document.getElementById('LightModeButton').addEventListener('click', () => {
    clearModes();
    document.body.classList.add('light-mode');
    document.getElementById('LightModeButton').focus(); // Move focus to the button
});

document.getElementById('DarkModeButton').addEventListener('click', () => {
    clearModes();
    document.body.classList.add('dark-mode');
    document.getElementById('DarkModeButton').focus(); // Move focus to the button
});

document.getElementById('IncreaseTextSizeButton').addEventListener('click', () => {
    const currentFontSize = parseInt(document.body.style.fontSize) || 16;
    document.body.style.fontSize = `${currentFontSize + 2}px`;
    document.getElementById('IncreaseTextSizeButton').focus(); // Move focus to the button
});

document.getElementById('DecreaseTextSizeButton').addEventListener('click', () => {
    const currentFontSize = parseInt(document.body.style.fontSize) || 16;
    if (currentFontSize > 10) {
        document.body.style.fontSize = `${currentFontSize - 2}px`;
    }
    document.getElementById('DecreaseTextSizeButton').focus(); // Move focus to the button
});

document.getElementById('HighContrastButton').addEventListener('click', () => {
    clearModes();
    document.body.classList.add('high-contrast');
    document.getElementById('HighContrastButton').focus(); // Move focus to the button
});

// Function to clear all active modes
function clearModes() {
    document.body.classList.remove('light-mode', 'dark-mode', 'high-contrast');
}

// Add styles
const style = document.createElement('style');
style.textContent = `
    *, *::before, *::after {
        box-sizing: border-box;
    }
    body {
        margin: 0;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        background-color: #D6C9F1; /* Light purple */
        font-family: Arial, sans-serif;
        color: #333; /* Default text color */
        font-size: 16px; /* Base font size */
    }

    header.funcbar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 20px;
        background-color: #4A2F83; /* Dark purple */
        color: white;
        position: relative;
    }
    header.funcbar .accessibility-options {
        display: flex;
        align-items: center;
        gap: 10px;
        position: relative;
    }
    header.funcbar button,
    header.funcbar .search-bar {
        background: #4A2F83; /* Dark purple */
        border: none;
        padding: 10px 20px;
        cursor: pointer;
        font-size: 1rem;
        border-radius: 5px;
    }
    header.funcbar button:hover,
    header.funcbar .search-bar button:hover {
        background: #3B255F; /* Darker purple for hover */
    }
    header.funcbar .search-bar {
        display: flex;
        align-items: center;
        gap: 5px;
    }
    header.funcbar .search-bar input {
        padding: 5px;
        border: 1px solid #ccc;
        border-radius: 4px;
        font-size: 14px;
    }
    main {
        padding: 20px;
        text-align: center;
    }
    .light-mode {
        background-color: #FFFFFF;
        color: #333333;
    }
    .dark-mode {
        background-color: #333333;
        color: #FFFFFF;
    }
    .high-contrast {
        background-color: #000000;
        color: #FFD700; /* Gold text */
    }
    footer {
        background-color: #4A2F83;
        color: white;
        text-align: center;
        padding: 10px;
        position: relative;
        width: 100%;
        bottom: 0;
    }
`;
document.head.appendChild(style);
