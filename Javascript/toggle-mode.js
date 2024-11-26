document.querySelector('[aria-label="Toggle Light Mode"]').addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
});

document.querySelector('[aria-label="Toggle Dark Mode"]').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

document.querySelector('[data-accessibility="contrast"]').addEventListener('click', () => {
    document.body.classList.toggle('high-contrast');
});
