// scripts.js
document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.tab-btn');
    const contents = document.querySelectorAll('.tab-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active class from all tabs
            tabs.forEach(t => t.classList.remove('active'));
            // Add active class to the clicked tab
            tab.classList.add('active');

            // Hide all tab contents
            contents.forEach(content => content.classList.remove('active'));
            // Show the content that corresponds to the clicked tab
            const activeContent = document.querySelector(`#${tab.dataset.tab}`);
            activeContent.classList.add('active');
        });
    });
});
