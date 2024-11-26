// Function to toggle light mode
document.getElementById('lightMode').addEventListener('click', function () {
    document.body.style.backgroundColor = '#FFFFFF';
    document.body.style.color = '#333';
});

// Function to toggle dark mode
document.getElementById('darkMode').addEventListener('click', function () {
    document.body.style.backgroundColor = '#333';
    document.body.style.color = '#FFFFFF';
});

// Function to toggle large text
let largeTextEnabled = false;
document.getElementById('largeTextButton').addEventListener('click', function () {
    if (largeTextEnabled) {
        document.body.classList.remove('large-text'); // Reset to default font size
    } else {
        document.body.classList.add('large-text'); // Increase font size
    }
    largeTextEnabled = !largeTextEnabled;
});

// Function to toggle high contrast mode
let highContrastEnabled = false;
document.getElementById('highContrast').addEventListener('click', function () {
    if (highContrastEnabled) {
        document.body.style.backgroundColor = '#D6C9F1'; // Reset to light purple background
        document.body.style.color = '#333';
    } else {
        document.body.style.backgroundColor = '#000';
        document.body.style.color = '#FFD700';
    }
    highContrastEnabled = !highContrastEnabled;
});
