document.addEventListener('DOMContentLoaded', function () {
    fetch('portfolio.json')
        .then(response => response.json())
        .then(data => {
            displayPortfolioItems(data.categories, 'All');

            document.querySelectorAll('.filter-link').forEach(link => {
                link.addEventListener('click', (event) => {
                    event.preventDefault();
                    const category = link.getAttribute('data-category');
                    displayPortfolioItems(data.categories, category);
                });
            });
        })
        .catch(error => console.error('Error fetching JSON data:', error));
});

function displayPortfolioItems(categories, selectedCategory) {
    const container = document.getElementById('portfolio-items');
    container.innerHTML = '';

    const filteredCategories = selectedCategory === 'All' ? categories : categories.filter(category => category.category === selectedCategory);

    filteredCategories.forEach(category => {
        category.projects.forEach(project => {
            const projectElement = document.createElement('div');
            projectElement.style.display = 'inline-block';
            projectElement.style.margin = '10px';
            projectElement.innerHTML = `
                <iframe src="${project.iframe}" class="portfolio-iframe" style="width: 700px; height: 400px; border: 1px solid black; border-radius:30px;margin-top:30px;"></iframe>
            `;
            projectElement.addEventListener('click', () => {
                const allIframes = document.querySelectorAll('.portfolio-iframe');
                allIframes.forEach(iframe => iframe.classList.remove('active'));

                const activeIframe = projectElement.querySelector('.portfolio-iframe');
                activeIframe.classList.add('active');

                document.getElementById('project-name').textContent = project.name;
                document.getElementById('project-description').textContent = project.description;
            });
            container.appendChild(projectElement);
        });
    });
}
