document.getElementById('theme-toggle').addEventListener('click', function() {
    document.body.classList.toggle('high-contrast');
    document.querySelectorAll('.funcbar, .info, footer').forEach(element => {
        element.classList.toggle('high-contrast');
    });
});

document.getElementById('font-size-toggle').addEventListener('click', function() {
    document.body.classList.toggle('increased-font-size');
});

document.getElementById('color-picker').addEventListener('change', function() {
    const selectedColor = document.getElementById('color-picker').value;
    if (selectedColor === 'light') {
        document.body.classList.remove('high-contrast', 'custom-color-scheme');
        document.body.style.backgroundColor = '#f4f4f4';
        document.querySelectorAll('.funcbar, .navbar a, .accessibility-options button, .accessibility-options select, .accessibility-options input[type="color"]').forEach(element => {
            element.style.color = '#000';
        });
        document.querySelectorAll('.funcbar').forEach(element => {
            element.style.backgroundColor = '#4A2F83';
        });
    } else if (selectedColor === 'dark') {
        document.body.classList.add('high-contrast');
        document.body.classList.remove('custom-color-scheme');
        document.body.style.backgroundColor = '#000';
        document.querySelectorAll('.funcbar, .navbar a, .accessibility-options button, .accessibility-options select, .accessibility-options input[type="color"]').forEach(element => {
            element.style.color = '#fff';
        });
        document.querySelectorAll('.funcbar').forEach(element => {
            element.style.backgroundColor = '#000';
        });
    } else if (selectedColor === 'custom') {
        document.body.classList.remove('high-contrast');
        document.body.classList.add('custom-color-scheme');
        const customColor = document.getElementById('custom-color').value;
        document.body.style.backgroundColor = customColor;
        document.querySelectorAll('.funcbar, .navbar a, .accessibility-options button, .accessibility-options select, .accessibility-options input[type="color"]').forEach(element => {
            element.style.color = '#000';
        });
        document.querySelectorAll('.funcbar').forEach(element => {
            element.style.backgroundColor = customColor;
        });
    }
});

document.getElementById('custom-color').addEventListener('input', function() {
    const customColor = document.getElementById('custom-color').value;
    document.body.style.backgroundColor = customColor;
    document.querySelectorAll('.funcbar').forEach(element => {
        element.style.backgroundColor = customColor;
    });
});
