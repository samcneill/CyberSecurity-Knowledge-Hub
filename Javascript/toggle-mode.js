document.querySelector('[aria-label="Toggle Light Mode"]').addEventListener('click', () => {
    document.body.classList.add('light-mode');
    document.body.classList.remove('dark-mode');
});

document.querySelector('[aria-label="Toggle Dark Mode"]').addEventListener('click', () => {
    document.body.classList.add('dark-mode');
    document.body.classList.remove('light-mode');
});

document.querySelector('[data-accessibility="contrast"]').addEventListener('click', () => {
    document.body.classList.toggle('high-contrast');
});
