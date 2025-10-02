// Function to clear all active modes
function clearModes() {
    document.body.classList.remove('light-mode', 'dark-mode', 'high-contrast');
}

// Light Mode Button
document.getElementById('LightModeButton').addEventListener('click', () => {
    clearModes();
    document.body.classList.add('light-mode');
});

// Dark Mode Button
document.getElementById('DarkModeButton').addEventListener('click', () => {
    clearModes();
    document.body.classList.add('dark-mode');
});

// High Contrast Button
document.getElementById('HighContrastButton').addEventListener('click', () => {
    clearModes();
    document.body.classList.add('high-contrast');
});

// Font Size Adjustment
let fontSize = 16;

document.getElementById('IncreaseTextButton').addEventListener('click', () => {
    fontSize += 2;
    document.body.style.fontSize = fontSize + 'px';
});

document.getElementById('DecreaseTextButton').addEventListener('click', () => {
    fontSize = Math.max(12, fontSize - 2);
    document.body.style.fontSize = fontSize + 'px';
});

// Search Functionality - Searches within the website
document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let query = document.getElementById('searchInput').value.toLowerCase();
    let pages = {
        "home": "index.html",
        "newsletter": "main_files/newsletter.html",
        "contact": "main_files/contact-form.html",
        "about": "main_files/about-us.html",
        "resources": "main_files/resources.html"
    };

    for (let key in pages) {
        if (query.includes(key)) {
            window.location.href = pages[key];
            return;
        }
    }

    alert("Page not found. Try searching 'home', 'newsletter', or 'contact'.");
});
