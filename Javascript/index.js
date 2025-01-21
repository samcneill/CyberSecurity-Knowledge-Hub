<!DOCTYPE html>
<html lang="en-US">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="CSS/style.css">
    <link rel="stylesheet" href="CSS/responsive.css">
    <title>Accessible Cybersecurity Knowledge</title>
</head>
<body>
    <nav class="funcbar">
        <button id="LightModeButton" aria-label="Toggle Light Mode">Light Mode</button>
        <button id="DarkModeButton" aria-label="Toggle Dark Mode">Dark Mode</button>
        <button id="LargeTextButton" aria-label="Toggle Large Text">Large Text</button>
        <button id="HighContrastButton" aria-label="Toggle High Contrast">High Contrast</button>
    </nav>

    <main>
        <h1>Accessible Cybersecurity</h1>
        <p>This is a demonstration of accessibility features.</p>
    </main>

    <script>
        // Add event listeners for mode toggle buttons
        document.getElementById('LightModeButton').addEventListener('click', () => {
            clearModes(); // Reset all modes
            document.body.classList.add('light-mode');
        });

        document.getElementById('DarkModeButton').addEventListener('click', () => {
            clearModes(); // Reset all modes
            document.body.classList.add('dark-mode');
        });

        let largeTextEnabled = false;
        document.getElementById('LargeTextButton').addEventListener('click', () => {
            clearModes(); // Ensure mode consistency
            document.body.classList.toggle('large-text');
            largeTextEnabled = !largeTextEnabled;
            console.log(`Large Text Enabled: ${largeTextEnabled}`);
        });

        let highContrastEnabled = false;
        document.getElementById('HighContrastButton').addEventListener('click', () => {
            clearModes(); // Reset all modes
            document.body.classList.add('high-contrast');
            highContrastEnabled = !highContrastEnabled;
            console.log(`High Contrast Enabled: ${highContrastEnabled}`);
        });

        // Helper function to clear all modes
        function clearModes() {
            document.body.classList.remove('light-mode', 'dark-mode', 'high-contrast', 'large-text');
        }
    </script>
</body>
</html>
