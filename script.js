// Tab Navigation
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const tabContents = document.querySelectorAll('.tab-content');

    // Handle navigation clicks
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all links and tabs
            navLinks.forEach(l => l.classList.remove('active'));
            tabContents.forEach(tab => tab.classList.remove('active'));

            // Add active class to clicked link
            this.classList.add('active');

            // Show corresponding tab
            const targetTab = this.getAttribute('data-tab');
            const tabToShow = document.getElementById(targetTab);
            if (tabToShow) {
                tabToShow.classList.add('active');
            }
        });
    });

    // Publications dropdown functionality
    const yearSelect = document.getElementById('year-select');
    const publicationsList = document.getElementById('publications-list');
    
    // Sample publications data - replace with actual PDF links
    const publications = {
        '2025': [
            { title: 'Publication Title 2025-1', pdf: 'pdfs/2025/publication1.pdf' },
            { title: 'Publication Title 2025-2', pdf: 'pdfs/2025/publication2.pdf' }
        ],
        '2024': [
            { title: 'Publication Title 2024-1', pdf: 'pdfs/2024/publication1.pdf' },
            { title: 'Publication Title 2024-2', pdf: 'pdfs/2024/publication2.pdf' },
            { title: 'Publication Title 2024-3', pdf: 'pdfs/2024/publication3.pdf' }
        ],
        '2023': [
            { title: 'Publication Title 2023-1', pdf: 'pdfs/2023/publication1.pdf' },
            { title: 'Publication Title 2023-2', pdf: 'pdfs/2023/publication2.pdf' }
        ],
        '2022': [
            { title: 'Publication Title 2022-1', pdf: 'pdfs/2022/publication1.pdf' },
            { title: 'Publication Title 2022-2', pdf: 'pdfs/2022/publication2.pdf' },
            { title: 'Publication Title 2022-3', pdf: 'pdfs/2022/publication3.pdf' }
        ]
    };

    // Function to display publications for selected year
    function displayPublications(year) {
        const yearPubs = publications[year] || [];
        
        if (yearPubs.length === 0) {
            publicationsList.innerHTML = '<p class="placeholder-text">No publications available for this year.</p>';
            return;
        }

        let html = '';
        yearPubs.forEach((pub, index) => {
            html += `
                <div class="publication-item">
                    <p><strong>${index + 1}.</strong> ${pub.title}</p>
                    <p><a href="${pub.pdf}" target="_blank">Download PDF</a></p>
                </div>
            `;
        });
        
        publicationsList.innerHTML = html;
    }

    // Initialize with default year (2025)
    displayPublications('2025');

    // Handle year selection change
    if (yearSelect) {
        yearSelect.addEventListener('change', function() {
            displayPublications(this.value);
        });
    }

    // Handle image loading errors - show placeholder message
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('error', function() {
            this.style.display = 'none';
            const placeholder = this.nextElementSibling;
            if (placeholder && placeholder.classList.contains('image-placeholder')) {
                placeholder.style.display = 'block';
            }
        });
    });
});

